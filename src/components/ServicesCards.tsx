import { Code2, Server, Database, Brain, ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'Frontend Engineering',
    desc: 'Building responsive, accessible digital experiences with polished interfaces, thoughtful interactions, and modern frontend architecture.',
    icon: Code2,
    iconStyle:
      'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
    accent: 'group-hover:border-rose-500/40',
    tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    number: '02',
    title: 'Backend & APIs',
    desc: 'Developing secure, reliable server-side systems, authentication flows, and REST APIs that power modern web applications.',
    icon: Server,
    iconStyle: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
    accent: 'group-hover:border-sky-500/40',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Python'],
  },
  {
    number: '03',
    title: 'Database Architecture',
    desc: 'Structuring dependable data systems with efficient schemas, relational models, and maintainable data access patterns.',
    icon: Database,
    iconStyle:
      'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    accent: 'group-hover:border-amber-500/40',
    tags: ['Firestore', 'PostgreSQL', 'Prisma', 'SQL'],
  },
  {
    number: '04',
    title: 'AI & Machine Learning',
    desc: 'Exploring data-driven solutions through statistical analysis, predictive modeling, and practical machine learning workflows.',
    icon: Brain,
    iconStyle:
      'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    accent: 'group-hover:border-emerald-500/40',
    tags: ['Python', 'NumPy', 'Pandas', 'Scikit-learn'],
  },
];

export function ServicesCards() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            Skills that turn ideas
            <span className="block mt-2 text-slate-500 dark:text-slate-400">
              into real products.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            From intuitive user interfaces to scalable backend systems, I bring
            the technical range to build useful, reliable digital experiences
            from end to end.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
          {services.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/40 dark:border-white/10 dark:bg-slate-900 dark:hover:shadow-black/20 sm:p-8 ${item.accent}`}
              >
                {/* Decorative corner glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-slate-100/80 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-white/10"
                />

                <div className="relative flex items-start justify-between gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconStyle} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </div>

                  <span className="font-mono text-sm text-slate-400 dark:text-slate-500">
                    / {item.number}
                  </span>
                </div>

                <div className="relative mt-7 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                    {item.desc}
                  </p>
                </div>

                <div className="relative mt-7 border-t border-slate-100 pt-5 dark:border-white/10">
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 transition-colors group-hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300 dark:group-hover:border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </article>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-5 dark:border-white/10 dark:bg-white/[0.025] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">
              Have a project in mind?
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              Let&apos;s build something useful together.
            </p>
          </div>

          <a
            href="/contact"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            Discuss a project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
