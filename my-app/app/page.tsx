const services = [
  {
    title: "Boiler Replacement",
    description:
      "Replace outdated systems with modern, efficient boilers that cut waste and lower monthly energy costs.",
  },
  {
    title: "Air Source Heat Pumps",
    description:
      "Access funded heat pump installations designed to keep your home warm while reducing your carbon footprint.",
  },
  {
    title: "Solar Panels",
    description:
      "Generate your own clean electricity and reduce reliance on rising energy tariffs with tailored solar solutions.",
  },
  {
    title: "Loft Insulation",
    description:
      "Keep more heat inside your home year-round with professional insulation upgrades that improve comfort.",
  },
];

const steps = [
  {
    title: "Check eligibility",
    description:
      "Complete a short assessment so our team can review available fully funded schemes for your household.",
  },
  {
    title: "Home energy survey",
    description:
      "We assess your current setup and identify the upgrades that will deliver the biggest savings.",
  },
  {
    title: "Professional installation",
    description:
      "Qualified installers complete the work quickly, safely, and with minimal disruption.",
  },
  {
    title: "Ongoing support",
    description:
      "Get practical guidance to maximise performance and long-term savings after installation.",
  },
];

const stats = [
  { label: "UK coverage", value: "Nationwide" },
  { label: "Customer support", value: "Mon–Fri 9am–5pm" },
  { label: "Primary contact", value: "0191 300 3022" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-400">
              Red1 Group
            </p>
            <p className="text-sm text-slate-300">Energy efficient homes, fully funded</p>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-rose-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
          >
            Check eligibility
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-rose-400/30 bg-rose-400/10 px-3 py-1 text-xs font-medium text-rose-300">
              Government-backed energy upgrades
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A smarter, warmer home without the upfront cost.
            </h1>
            <p className="max-w-xl text-lg text-slate-300">
              Red1 Group helps UK households access fully funded improvements including boiler
              replacement, air source heat pumps, loft insulation, and solar energy solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
              >
                Explore services
              </a>
              <a
                href="#process"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/45"
              >
                How it works
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-2xl shadow-black/30 md:p-8">
            <h2 className="text-xl font-semibold text-white">Why homeowners choose Red1 Group</h2>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>✔ Trusted support for funded home energy improvements</li>
              <li>✔ Qualified survey and installation teams</li>
              <li>✔ Practical advice to reduce bills long term</li>
            </ul>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                  <p className="mt-1 text-sm font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
            <h2 className="text-3xl font-semibold text-white">Energy-saving services</h2>
            <p className="mt-3 max-w-3xl text-slate-300">
              Our team helps you unlock the right funded upgrades to make your home more
              efficient, comfortable, and affordable.
            </p>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-2xl border border-white/10 bg-slate-950/80 p-6 transition hover:border-rose-400/40"
                >
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-slate-300">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8">
          <h2 className="text-3xl font-semibold text-white">Simple 4-step process</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {steps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold text-rose-300">Step {index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-slate-300">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-rose-500/10">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-semibold text-white">Ready to reduce your energy bills?</h2>
              <p className="mt-3 text-slate-200">
                Complete a quick assessment and our team will help confirm eligibility for fully
                funded upgrades.
              </p>
              <a
                href="mailto:info@red1group.com"
                className="mt-6 inline-block rounded-full bg-rose-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-400"
              >
                Email us now
              </a>
            </div>
            <div className="rounded-2xl border border-white/15 bg-slate-950/70 p-6">
              <p className="text-sm text-slate-300">Call</p>
              <a href="tel:+441913003022" className="text-2xl font-semibold text-white">
                0191 300 3022
              </a>
              <p className="mt-6 text-sm text-slate-300">Visit</p>
              <p className="mt-1 text-slate-100">
                Keel Row, The Watermark, Metro Riverside Park, Gateshead, NE11 9SZ
              </p>
              <p className="mt-6 text-sm text-slate-300">Hours</p>
              <p className="mt-1 text-slate-100">Monday–Friday, 9am–5pm</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
