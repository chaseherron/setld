import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ===== HERO ===== */}
      <section className="flex flex-col justify-center items-center px-6 pt-12 pb-4 sm:pt-16 sm:pb-6 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
          Your Landlord Owes You Money.
          <br />
          <span className="text-accent">Get It Back.</span>
        </h1>

        <p className="mt-5 text-lg sm:text-xl text-foreground max-w-xl leading-relaxed">
          Take a 30-second quiz to see exactly how much your landlord owes you
          under New York law.
        </p>

        <Link
          href="/start"
          className="mt-8 bg-accent text-background font-bold text-lg sm:text-xl px-10 py-5 rounded-xl hover:brightness-110 transition-all inline-block"
        >
          Take The 3 Question Quiz &rarr;
        </Link>
      </section>

      {/* ===== PROOF POINTS ===== */}
      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-center mb-6">
            Why It Works
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-accent">
                Your landlord had 14 days.
              </h3>
              <p className="mt-3 text-foreground leading-relaxed">
                Under HSTPA 2019, landlords must return your deposit with an
                itemized statement within 14 days. Miss it? They forfeit the
                right to keep any of it.
              </p>
            </div>

            <div className="bg-surface border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-accent">
                We don&apos;t stop at one letter.
              </h3>
              <p className="mt-3 text-foreground leading-relaxed">
                We send your landlord 10+ automated payment reminders over 6
                weeks, escalate to certified mail, and give you a free court
                filing kit.
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <Link
              href="/start"
              className="bg-accent text-background font-bold text-lg sm:text-xl px-10 py-5 rounded-xl hover:brightness-110 transition-all inline-block"
            >
              Check How Much You&apos;re Owed &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-8 px-6 border-t border-border">
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
