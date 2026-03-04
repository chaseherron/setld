"use client";

import { useState, useEffect } from "react";

const faqs = [
  {
    q: "Is this really free?",
    a: "Setld is free to use. If your landlord pays, a service fee is deducted from their payment. If they don\u2019t pay, you owe nothing.",
  },
  {
    q: "Is this legal?",
    a: "Yes. Setld is a document preparation service, not a law firm. You review and send every letter yourself. We prepare the documents \u2014 you make the decisions.",
  },
  {
    q: "What if my landlord ignores the letter?",
    a: "We send 10+ payment reminders over 6 weeks, escalate to certified mail ($9.99), and provide a free small claims court filing kit with all your evidence organized.",
  },
  {
    q: "How long does this take?",
    a: "Your demand letter is ready in under 2 minutes. Most landlords respond within 14\u201330 days.",
  },
];

const steps = [
  {
    num: "01",
    title: "Upload Your Lease",
    desc: "Drop your lease PDF. Our AI extracts everything \u2014 landlord name, deposit amount, lease dates. No forms to fill out.",
  },
  {
    num: "02",
    title: "We Build Your Case",
    desc: "AI identifies every violation of NY law, assembles a demand letter with evidence appendices, and gives you a complete case file.",
  },
  {
    num: "03",
    title: "Send & Get Paid",
    desc: "One click sends your demand letter. We chase your landlord with 10+ payment reminders over 6 weeks until they pay.",
  },
];

const reasons = [
  {
    title: "Your landlord had 14 days.",
    desc: "Under HSTPA 2019, landlords must return your deposit with an itemized statement within 14 days. Miss it? They forfeit the right to keep any of it \u2014 the full amount is yours.",
  },
  {
    title: "We don\u2019t stop at a letter",
    desc: "Competitors send one letter and quit. We send 10+ automated payment reminders, escalate to certified mail, and give you a free small claims court filing kit.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCta = () => {
    document
      .getElementById("get-started")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("Email captured:", email);
    localStorage.setItem("setld_email", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="flex flex-col justify-center items-center px-6 pt-20 pb-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
          Your Landlord Owes You Money.
          <br />
          <span className="text-accent">Get It Back.</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted max-w-2xl leading-relaxed">
          Upload your lease. Our AI builds your case and sends your landlord
          10+ payment reminders until they pay. Takes 2 minutes.
        </p>

        <button
          onClick={scrollToCta}
          className="mt-10 bg-accent text-background font-bold text-lg sm:text-xl px-10 py-5 rounded-xl hover:brightness-110 transition-all cursor-pointer"
        >
          Check If You&apos;re Owed Money &rarr;
        </button>

        <p className="mt-4 text-sm text-muted">
          $249 only when your landlord pays. Nothing if they don&apos;t.
        </p>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="pt-10 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="animate-on-scroll font-display text-3xl sm:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="animate-on-scroll bg-surface border border-border rounded-2xl p-8"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="text-accent font-display text-5xl font-bold">
                  {step.num}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY SETLD WORKS ===== */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="animate-on-scroll font-display text-3xl sm:text-4xl font-bold text-center mb-16">
            Why Setld Works
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {reasons.map((item, i) => (
              <div
                key={item.title}
                className="animate-on-scroll"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="text-xl font-bold text-accent">{item.title}</h3>
                <p className="mt-3 text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="animate-on-scroll font-display text-3xl sm:text-4xl font-bold text-center mb-16">
            Questions? We Got Answers.
          </h2>

          <div className="animate-on-scroll space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-accent text-2xl ml-4 shrink-0 leading-none">
                    {openFaq === i ? "\u2212" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    openFaq === i
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section id="get-started" className="py-24 px-6 bg-surface scroll-mt-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="animate-on-scroll font-display text-3xl sm:text-4xl font-bold">
            <span className="text-accent">Get Your Deposit Back</span>
          </h2>

          <p className="animate-on-scroll mt-4 text-muted text-lg">
            Enter your email to get started. It takes 2 minutes.
          </p>

          {submitted ? (
            <div className="mt-10 bg-accent/10 border border-accent/30 rounded-2xl p-8">
              <p className="text-accent font-bold text-xl">You&apos;re in.</p>
              <p className="text-muted mt-2">
                We&apos;ll send you a link to start your case. Check your inbox.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="animate-on-scroll mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-background border border-border rounded-xl px-5 py-4 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                className="bg-accent text-background font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all whitespace-nowrap cursor-pointer"
              >
                Get Started &rarr;
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm text-muted">
            Setld is a document preparation service. We are not a law firm and
            do not provide legal advice. &copy; 2026 Setld.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-muted">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
