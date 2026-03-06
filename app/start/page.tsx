"use client";

import { useState } from "react";
import Link from "next/link";

const landlordOptions = [
  "No \u2014 I got nothing back",
  "Partial refund, but no itemized statement",
  "They listed deductions but no formal statement",
  "Yes \u2014 I got everything back on time",
] as const;

type LandlordResponse = (typeof landlordOptions)[number];

export default function StartQuiz() {
  const [depositAmount, setDepositAmount] = useState("");
  const [landlordResponse, setLandlordResponse] =
    useState<LandlordResponse | null>(null);
  const [email, setEmail] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const gotEverythingBack =
    landlordResponse === "Yes \u2014 I got everything back on time";

  const canSubmitQuiz = depositAmount && landlordResponse;

  const handleQuizSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmitQuiz) return;
    setShowResult(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const quizData = {
      depositAmount,
      landlordResponse,
      email,
    };
    console.log("Quiz submission:", JSON.stringify(quizData, null, 2));
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-6 py-16 sm:py-20">
      <div className="max-w-xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="text-muted text-sm hover:text-foreground transition-colors"
        >
          &larr; Back
        </Link>

        {!showResult ? (
          <>
            {/* Header */}
            <h1 className="mt-8 font-display text-3xl sm:text-4xl font-bold">
              <span className="text-accent">Check If You&apos;re Owed Money</span>
            </h1>
            <p className="mt-3 text-foreground text-lg">
              2 questions. 20 seconds. No signup required.
            </p>

            <form onSubmit={handleQuizSubmit} className="mt-10 space-y-10">
              {/* Q1: Deposit amount */}
              <div>
                <label className="block text-lg font-semibold mb-3">
                  How much was your security deposit?
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-accent font-display text-3xl sm:text-4xl font-bold">
                    $
                  </span>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={depositAmount}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setDepositAmount(val);
                    }}
                    placeholder="2,500"
                    autoFocus
                    className="w-full bg-transparent border-b-2 border-border focus:border-accent text-foreground font-display text-3xl sm:text-4xl font-bold outline-none transition-colors py-2 placeholder:text-muted/30"
                  />
                </div>
              </div>

              {/* Q2: Landlord response */}
              <div>
                <label className="block text-lg font-semibold mb-3">
                  Did your landlord return your full deposit AND send an
                  itemized statement within 14 days?
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {landlordOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setLandlordResponse(option)}
                      className={`w-full text-left px-5 py-4 rounded-xl border font-medium transition-all cursor-pointer min-h-[48px] ${
                        landlordResponse === option
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border hover:border-accent/50 hover:bg-white/5 text-foreground"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={!canSubmitQuiz}
                className="w-full bg-accent text-background font-bold text-lg py-5 rounded-xl hover:brightness-110 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
              >
                See My Results &rarr;
              </button>
            </form>
          </>
        ) : (
          /* ===== RESULT SCREEN ===== */
          <div className="mt-8">
            {submitted ? (
              <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
                <p className="text-accent font-bold text-xl">
                  You&apos;re in.
                </p>
                <p className="text-muted mt-2">
                  We&apos;ll send your free demand letter shortly. Check your
                  inbox.
                </p>
              </div>
            ) : gotEverythingBack ? (
              <div className="text-center">
                <p className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  It looks like your landlord followed the rules.
                </p>
                <p className="mt-4 text-muted text-lg leading-relaxed">
                  If you think the deductions were unfair or the amount was
                  wrong, we can still help.
                </p>
                <form
                  onSubmit={handleEmailSubmit}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    autoFocus
                    className="flex-1 bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-background font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Get a Free Assessment &rarr;
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center">
                <p className="font-display text-3xl sm:text-5xl font-bold text-accent animate-pulse-once">
                  Your landlord owes you $
                  {Number(depositAmount).toLocaleString()}
                </p>
                <p className="mt-6 text-muted text-lg max-w-md mx-auto leading-relaxed">
                  Under HSTPA 2019, your landlord had 14 days to return your
                  deposit with an itemized statement. They didn&apos;t. The full
                  deposit is legally yours.
                </p>
                <form
                  onSubmit={handleEmailSubmit}
                  className="mt-8 flex flex-col sm:flex-row gap-3"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get your free demand letter"
                    required
                    autoFocus
                    className="flex-1 bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-accent text-background font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Get My Free Demand Letter &rarr;
                  </button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
