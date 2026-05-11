import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* ----- Top navigation (fixed) ----- */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-[#FFFFFF10]">
        <nav className="flex max-w-7xl mx-auto px-6 h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tighter text-[#14F195] font-headline-lg">
              Kuroscan
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-[#14F195] font-semibold border-b-2 border-[#14F195] pb-1 font-headline-md text-body-md transition-all"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-400 font-medium hover:text-white transition-colors font-headline-md text-body-md"
            >
              How it Works
            </a>
            <a
              href="#security"
              className="text-slate-400 font-medium hover:text-white transition-colors font-headline-md text-body-md"
            >
              Security
            </a>
            <a
              href="#faq"
              className="text-slate-400 font-medium hover:text-white transition-colors font-headline-md text-body-md"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="material-symbols-outlined text-slate-400 hover:text-[#14F195] transition-colors"
              data-icon="account_balance_wallet"
            >
              account_balance_wallet
            </button>
            <button className="bg-[#14F195] text-on-primary-container px-6 py-2 rounded font-bold hover:opacity-90 active:scale-95 transition-all">
              Launch App
            </button>
          </div>
        </nav>
      </header>

      {/* ----- Main content ----- */}
      <main className="pt-20 font-body-md bg-background text-on-background">
        {/* ---------- Hero Section ---------- */}
        <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,241,149,0.05),transparent_70%)]"></div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text column */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-surface-container-high px-3 py-1 rounded-full border border-[#FFFFFF10]">
                <span className="flex h-2 w-2 rounded-full bg-[#14F195]"></span>
                <span className="text-label-mono font-label-mono text-[#14F195]">
                  V2.0 LIVE ON MAINNET
                </span>
              </div>

              <h1 className="text-6xl md:text-8xl font-headline-lg text-white leading-tight">
                Recapture <br />
                <span className="text-[#14F195]">Your SOL</span>
              </h1>

              <p className="text-body-lg font-body-lg text-slate-400 max-w-xl leading-relaxed">
                Reclaim idle account rent and recover sponsored transaction
                costs with a high‑performance, self‑hosted Telegram bot built
                for the Solana ecosystem.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#14F195] text-on-primary-container px-8 py-4 rounded font-bold text-lg hover:shadow-[0_0_20px_rgba(20,241,149,0.3)] transition-all">
                  Get Started
                </button>
                <button className="border border-[#FFFFFF20] text-white px-8 py-4 rounded font-bold text-lg hover:bg-white/5 transition-all">
                  View Documentation
                </button>
              </div>
            </div>

            {/* Mock terminal column */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#14F195] to-[#9945FF] rounded-xl opacity-20 group-hover:opacity-40 blur transition duration-1000"></div>
              <div className="relative bg-slate-950 border border-[#FFFFFF10] rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-container-high border-b border-[#FFFFFF10]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                  </div>
                  <span className="text-xs font-label-mono text-slate-500 ml-4">
                    kuroscan --monitor
                  </span>
                </div>

                <div className="p-6 font-label-mono text-sm space-y-3">
                  <div className="flex gap-3">
                    <span className="text-slate-600">[08:45:12]</span>
                    <span className="text-[#14F195]">SCANNING:</span>
                    <span className="text-white">
                      Active session initiated…
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">[08:45:14]</span>
                    <span className="text-blue-400">FOUND:</span>
                    <span className="text-white">3 Unused ATA accounts</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">[08:45:15]</span>
                    <span className="text-yellow-400">VALUE:</span>
                    <span className="text-white">0.00612 SOL reclaimable</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-slate-600">[08:45:18]</span>
                    <span className="text-[#14F195]">SUCCESS:</span>
                    <span className="text-white">
                      Transaction finalized. TX: 4vC…9zP
                    </span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#FFFFFF05]">
                    <span className="text-[#14F195] animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Value‑Proposition (Bento Grid) ---------- */}
        <section
          className="py-24 px-6 bg-surface-container-lowest"
          id="features"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-headline-lg font-headline-lg text-white">
                Engineered for Efficiency
              </h2>
              <p className="text-body-lg font-body-lg text-slate-400">
                Maximize your wallet&apos;s capital efficiency with automated
                scanning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Rent Reclamation */}
              <div className="md:col-span-2 p-8 bg-surface-container rounded-xl border border-[#FFFFFF10] hover:border-[#14F195]/30 transition-colors">
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 bg-[#14F195]/10 rounded-lg text-[#14F195]">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="savings"
                    >
                      savings
                    </span>
                  </div>
                </div>
                <h3 className="text-headline-md font-headline-md text-white mb-4">
                  Rent Reclamation
                </h3>
                <p className="text-body-md font-body-md text-slate-400 max-w-md">
                  Solana accounts require a minimum balance to be rent‑exempt.
                  Kuroscan identifies empty token accounts (ATAs) and programs
                  you no longer use, allowing you to close them and instantly
                  reclaim the locked SOL.
                </p>
              </div>

              {/* Self‑Hosted */}
              <div className="p-8 bg-surface-container rounded-xl border border-[#FFFFFF10] hover:border-[#14F195]/30 transition-colors flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-secondary/10 rounded-lg text-secondary mb-8 inline-block">
                    <span
                      className="material-symbols-outlined text-3xl"
                      data-icon="terminal"
                    >
                      terminal
                    </span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-white mb-4">
                    Self‑Hosted
                  </h3>
                  <p className="text-body-md font-body-md text-slate-400">
                    Full control over your data. Deploy on any VPS or local
                    machine with a single Docker command. No middle‑man, no
                    fees.
                  </p>
                </div>
              </div>

              {/* Sponsorship Recovery */}
              <div className="p-8 bg-surface-container rounded-xl border border-[#FFFFFF10] hover:border-[#14F195]/30 transition-colors">
                <div className="p-3 bg-tertiary-container/10 rounded-lg text-tertiary-container mb-8 inline-block">
                  <span
                    className="material-symbols-outlined text-3xl"
                    data-icon="verified_user"
                  >
                    verified_user
                  </span>
                </div>
                <h3 className="text-headline-md font-headline-md text-white mb-4">
                  Sponsorship Recovery
                </h3>
                <p className="text-body-md font-body-md text-slate-400">
                  Developers: Recover rent from transaction buffer accounts and
                  temporary PDA storage used during complex smart‑contract
                  interactions.
                </p>
              </div>

              {/* Instant Telegram Alerts */}
              <div className="md:col-span-2 p-8 bg-surface-container rounded-xl border border-[#FFFFFF10] hover:border-[#14F195]/30 transition-colors flex items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-headline-md font-headline-md text-white mb-4">
                    Instant Telegram Alerts
                  </h3>
                  <p className="text-body-md font-body-md text-slate-400">
                    Receive real‑time push notifications whenever a reclaimable
                    account is detected. Close accounts with a single tap
                    directly from your Telegram chat.
                  </p>
                </div>
                <div className="hidden lg:block w-48 h-48 bg-slate-900 rounded-lg overflow-hidden border border-[#FFFFFF05]">
                  <img
                    alt="Telegram App UI Mockup"
                    className="w-full h-full object-cover grayscale"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHQWlS4kQ693sA-q58SEsbeii0txehxl_nsaEz9lzVvgsBkTn_m6Uy7c9nrjI4Er1HbSaozyNtZKXdQAJaW6F-q9WKRxjApLXzpNgreIkghl8RTGUxS2cED4uMyz95FGTJ3_t8q_JCllC0SNE3CX9HpsrS3xzsDa_2eGufDrRj7Y_c0wCu4hEEM8MEL483eweU0SXmVgCCWeiFBLRYbEfp_I5RYG1KOCrdc8v1zuSjCtxGbSfb0oFzWuJuqjw4yGJKGRPRVqDu7Q"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- How it Works ---------- */}
        <section className="py-24 px-6" id="how-it-works">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-headline-lg font-headline-lg text-white mb-4">
                Three Steps to Reclaim
              </h2>
              <div className="h-1 w-24 bg-[#14F195] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFFFFF10] to-transparent -translate-y-1/2 -z-10"></div>

              {/* Step 1 */}
              <div className="relative flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-[#14F195] flex items-center justify-center text-2xl font-bold text-[#14F195] shadow-[0_0_20px_rgba(20,241,149,0.2)] group-hover:bg-[#14F195] group-hover:text-slate-950 transition-all">
                  1
                </div>
                <h4 className="text-headline-md font-headline-md text-white">
                  Setup Bot
                </h4>
                <p className="text-body-md font-body-md text-slate-400">
                  Clone the repository and configure your <code>.env</code> file
                  with your Telegram Bot API key.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-[#14F195] flex items-center justify-center text-2xl font-bold text-[#14F195] shadow-[0_0_20px_rgba(20,241,149,0.2)] group-hover:bg-[#14F195] group-hover:text-slate-950 transition-all">
                  2
                </div>
                <h4 className="text-headline-md font-headline-md text-white">
                  Connect Wallet
                </h4>
                <p className="text-body-md font-body-md text-slate-400">
                  Provide your public key or securely link your burner wallet
                  for automated monitoring.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative flex flex-col items-center text-center space-y-6 group">
                <div className="w-20 h-20 rounded-full bg-slate-950 border-2 border-[#14F195] flex items-center justify-center text-2xl font-bold text-[#14F195] shadow-[0_0_20px_rgba(20,241,149,0.2)] group-hover:bg-[#14F195] group-hover:text-slate-950 transition-all">
                  3
                </div>
                <h4 className="text-headline-md font-headline-md text-white">
                  Scan &amp; Reclaim
                </h4>
                <p className="text-body-md font-body-md text-slate-400">
                  Run the scan command and watch your SOL balance increase as
                  empty accounts are purged.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- FAQ ---------- */}
        <section className="py-24 px-6 bg-surface-container-low" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headline-lg font-headline-lg text-white mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="p-6 bg-slate-950 rounded-lg border border-[#FFFFFF10]">
                <h5 className="font-headline-md text-white mb-3 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[#14F195]"
                    data-icon="security"
                  >
                    security
                  </span>
                  Is it safe to use my private key?
                </h5>
                <p className="text-body-md text-slate-400 leading-relaxed">
                  Kuroscan is entirely self‑hosted. Your keys never leave your
                  server. For maximum security, we recommend using a
                  “Watch‑Only” setup with a burner wallet for signing the final
                  reclamation transactions.
                </p>
              </div>

              {/* Q2 */}
              <div className="p-6 bg-slate-950 rounded-lg border border-[#FFFFFF10]">
                <h5 className="font-headline-md text-white mb-3 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[#14F195]"
                    data-icon="payments"
                  >
                    payments
                  </span>
                  Are there any usage fees?
                </h5>
                <p className="text-body-md text-slate-400 leading-relaxed">
                  No. Kuroscan is open‑source. Unlike web‑based tools that take
                  a percentage of your reclaimed SOL, Kuroscan lets you keep
                  100% of your rent recovery.
                </p>
              </div>

              {/* Q3 */}
              <div className="p-6 bg-slate-950 rounded-lg border border-[#FFFFFF10]">
                <h5 className="font-headline-md text-white mb-3 flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-[#14F195]"
                    data-icon="developer_board"
                  >
                    developer_board
                  </span>
                  Which accounts can be reclaimed?
                </h5>
                <p className="text-body-md text-slate-400 leading-relaxed">
                  Kuroscan identifies Associated Token Accounts (ATAs) with 0
                  balance, closed program buffers, and specific PDA‑based
                  storage that is no longer required by the host protocol.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Final CTA ---------- */}
        <section className="py-24 px-6 overflow-hidden">
          <div className="max-w-5xl mx-auto bg-[#14F195] rounded-2xl p-12 relative">
            <div className="absolute top-0 right-0 p-8 opacity-20">
              <span
                className="material-symbols-outlined text-[160px] text-on-primary-container"
                data-icon="bolt"
              >
                bolt
              </span>
            </div>

            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl md:text-5xl font-headline-lg text-on-primary-container">
                Stop bleeding SOL rent.
              </h2>
              <p className="text-xl text-on-primary-container/80 max-w-xl">
                Join hundreds of Solana developers optimizing their wallet
                infrastructure with Kuroscan.
              </p>
              <button className="bg-slate-950 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-900 transition-all flex items-center gap-3 w-fit">
                Deploy to Docker
                <span
                  className="material-symbols-outlined"
                  data-icon="arrow_forward"
                >
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* ----- Footer ----- */}
      <footer className="bg-slate-950 border-t border-[#FFFFFF10] w-full py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto items-center">
          <div className="space-y-4">
            <div className="text-lg font-bold text-white font-headline-lg">
              Kuroscan
            </div>
            <p className="text-slate-500 font-body-md max-w-sm">
              Open‑source utility for the Solana ecosystem. Automate your wallet
              management and maintain peak capital efficiency.
            </p>
            <p className="text-[#14F195] font-label-mono text-sm">
              © 2024 Kuroscan. Built on Solana.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end">
            <a
              className="text-slate-500 hover:text-[#14F195] transition-colors font-body-md"
              href="#"
            >
              Documentation
            </a>
            <a
              className="text-slate-500 hover:text-[#14F195] transition-colors font-body-md"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-slate-500 hover:text-[#14F195] transition-colors font-body-md"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-slate-500 hover:text-[#14F195] transition-colors font-body-md"
              href="#"
            >
              Support
            </a>
            <a
              className="text-slate-500 hover:text-[#14F195] transition-colors font-body-md"
              href="#"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
