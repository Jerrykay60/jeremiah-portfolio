import Link from 'next/link';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { ServicesCards } from '@/components/ServicesCards';
import { AboutStorySection } from '@/components/AboutStorySection';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const stats = [
  { value: '3+', label: 'Live Products Deployed', sub: 'Active user bases' },
  {
    value: '100%',
    label: 'Solo End-to-End',
    sub: 'Frontend to DB architecture',
  },
  { value: 'B.Sc.', label: 'Computer Science', sub: 'LASUED (2025/2026)' },
  {
    value: 'Experience',
    label: 'Software Developer',
    sub: 'Lisa Technologies Ltd',
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section matching new reference editorial design */}
      <HeroSection />

      {/* 2. Four Core Disciplines / Pastel Cards from reference */}
      <ServicesCards />

      {/* 3. About Story Card ("Hello! I'm Jeremiah Akindureni") */}
      <AboutStorySection />

      {/* 4. Featured Projects Showcase */}

      <section
        id="featured-work"
        className="relative overflow-hidden bg-[#F8FAFC] py-20 dark:bg-[#0B0F17] sm:py-28"
      >
        {/* Ambient background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-indigo-500/[0.04] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          {/* Section heading */}
          <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.07] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                <Rocket className="h-3.5 w-3.5" />
                <span>Featured engineering work</span>
              </div>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                Real products.
                <span className="block text-brand-blue">
                  Real-world impact.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
                From property management and real estate discovery to
                micro-crowdfunding and nutrition, each project starts with a
                real problem and is built with practical engineering in mind.
              </p>
            </div>

            <Link
              href="/projects"
              className="group inline-flex min-h-12 w-fit shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-blue/30 hover:text-brand-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-white"
            >
              Explore all projects
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Project cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-7 lg:gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Closing note */}
          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/80 pt-6 dark:border-white/[0.08] sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Designed with purpose. Built with care.
            </p>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue-hover"
            >
              View the complete portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Key Impact & Metrics Bar */}
      <section className="py-12 bg-white dark:bg-[#1E293B] border-y border-slate-200/80 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Human, Warm CTA Banner */}

      <section className="relative isolate overflow-hidden bg-[#EEF2F6] py-20 dark:bg-[#0B0F17] sm:py-28">
        {/* Background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute left-1/2 top-0 h-80 w-[min(90vw,700px)] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-blue/[0.08] blur-[100px] dark:bg-brand-blue/[0.12]" />
          <div className="absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-indigo-500/[0.06] blur-[90px]" />
        </div>

        <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/80 px-6 py-12 shadow-xl shadow-slate-900/[0.04] backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-black/20 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-brand-blue/15"
            />

            <div className="relative mx-auto max-w-3xl space-y-6 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.07] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-brand-blue">
                <Sparkles className="h-3.5 w-3.5" />
                Let&apos;s build together
              </span>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl">
                Have a project or opportunity?
                <span className="mt-2 block text-brand-blue">
                  Let&apos;s talk about it.
                </span>
              </h2>

              <p className="mx-auto max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
                Whether you need a full-stack developer to bring your next
                product to life or an engineer exploring the possibilities of
                software and AI, I&apos;d love to hear from you.
              </p>

              <div className="flex flex-col items-stretch justify-center gap-3 pt-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-xl hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B0F17]"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>

                <a
                  href="mailto:jeremiahakindureni@gmail.com"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-brand-blue/30 hover:bg-slate-50 hover:text-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.07] dark:focus-visible:ring-offset-[#0B0F17]"
                >
                  <p className="h-4 w-4 shrink-0 text-brand-blue" />
                  Send me an email
                </a>
              </div>

              <p className="pt-2 text-xs text-slate-500 dark:text-slate-400">
                New projects, engineering roles, and meaningful collaborations
                are welcome.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
