'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpRight,
  Github,
  Filter,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { projects } from '@/data/projects';

type CategoryFilter =
  | 'All'
  | 'Full-Stack SaaS'
  | 'Web Applications'
  | 'AI & APIs';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const categories: { label: CategoryFilter; count: number }[] = [
    { label: 'All', count: projects.length },
    {
      label: 'Full-Stack SaaS',
      count: projects.filter(
        (project) => project.category === 'Full-Stack SaaS',
      ).length,
    },
    {
      label: 'Web Applications',
      count: projects.filter(
        (project) => project.category === 'Web Applications',
      ).length,
    },
    {
      label: 'AI & APIs',
      count: projects.filter((project) => project.category === 'AI & APIs')
        .length,
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#0B0D12] dark:text-white sm:py-32">
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 -z-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[500px] -z-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page heading */}
        <section className="mb-12 max-w-4xl sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
            <Sparkles className="h-4 w-4" />
            Selected Work &amp; Engineering
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Projects built with
            <span className="mt-1 block bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-500 bg-clip-text pb-1 text-transparent">
              Purpose. Precision. Impact.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            A selection of software products and applications built from concept
            to deployment. Explore the engineering, features, and technologies
            behind each project.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Practical solutions
            </span>
            <span className="inline-flex items-center gap-2">
              <Layers className="h-4 w-4 text-brand-blue" />
              Full-stack development
            </span>
          </div>
        </section>

        {/* Category filters */}
        <section aria-label="Filter projects" className="mb-10">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            <Filter className="h-4 w-4 text-brand-blue" />
            Explore projects
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((category) => {
              const isActive = activeCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
                  aria-pressed={isActive}
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue ${
                    isActive
                      ? 'border-brand-blue bg-brand-blue text-white shadow-lg shadow-brand-blue/20'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-brand-blue/50 hover:text-brand-blue dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300 dark:hover:bg-white/[0.07]'
                  }`}
                >
                  {category.label}
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-slate-100 text-slate-500 dark:bg-white/10 dark:text-slate-300'
                    }`}
                  >
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Results heading */}
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4 dark:border-white/10">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Showing{' '}
            <span className="font-bold text-slate-900 dark:text-white">
              {filteredProjects.length}
            </span>{' '}
            {filteredProjects.length === 1 ? 'project' : 'projects'}
          </p>

          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Portfolio / 2026
          </span>
        </div>

        {/* Project cards */}
        <section
          aria-label="Portfolio projects"
          className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-slate-900/[0.06] dark:border-white/[0.09] dark:bg-[#12151D] dark:hover:border-brand-blue/40 dark:hover:shadow-black/20"
            >
              {/* Card accent */}
              <div className="h-1 w-full bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-500 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                {/* Category and status */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                    {project.category}
                  </span>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold ${
                      project.status === 'Active SaaS'
                        ? 'border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400'
                        : 'border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === 'Active SaaS'
                          ? 'bg-amber-500'
                          : 'bg-emerald-500'
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                {/* Project title — deliberately bold and prominent */}
                <div className="mb-4">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>

                  <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 transition-colors duration-200 group-hover:text-brand-blue dark:text-white dark:group-hover:text-brand-blue sm:text-3xl">
                    {project.title}
                  </h2>

                  {project.subtitle && (
                    <p className="mt-2 text-sm font-bold leading-relaxed text-brand-blue">
                      {project.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[15px]">
                  {project.description}
                </p>

                {project.fullDetails && (
                  <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-400">
                    {project.fullDetails}
                  </p>
                )}

                {/* Features */}
                {project.features.length > 0 && (
                  <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 dark:border-white/[0.07] dark:bg-[#0D1016]">
                    <h3 className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      Key capabilities
                    </h3>

                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={`${project.id}-feature-${featureIndex}`}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2
                            aria-hidden="true"
                            className="mt-1 h-4 w-4 shrink-0 text-brand-blue"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Push technologies and actions toward the bottom */}
                <div className="mt-auto pt-7">
                  {/* Technology stack */}
                  {project.techStack.length > 0 && (
                    <div className="border-t border-slate-200/80 pt-5 dark:border-white/[0.08]">
                      <h3 className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                        Built with
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project links */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-4 py-3 text-xs font-bold text-white shadow-md shadow-brand-blue/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-lg"
                      >
                        Visit live platform
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-xs font-bold text-slate-700 transition-all duration-200 hover:border-brand-blue/50 hover:text-brand-blue dark:border-white/10 dark:bg-white/[0.035] dark:text-slate-200 dark:hover:bg-white/[0.07]"
                      >
                        <Github className="h-4 w-4" />
                        Source code
                      </a>
                    )}

                    {!project.liveUrl && (
                      <span className="rounded-xl border border-amber-500/20 bg-amber-500/[0.07] px-3 py-2.5 text-xs font-semibold text-amber-700 dark:text-amber-400">
                        In development · Beta coming soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-white/15">
            <Layers className="mx-auto h-8 w-8 text-slate-400" />
            <h2 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              No projects in this category yet
            </h2>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Select another category to explore more projects.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-5 rounded-xl bg-brand-blue px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-blue-hover"
            >
              View all projects
            </button>
          </div>
        )}

        {/* Contact banner */}
        <section className="relative mt-16 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#12151D] sm:mt-20 sm:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/[0.07] via-transparent to-indigo-500/[0.07]"
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <Layers className="h-6 w-6" />
            </div>

            <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              Have an idea worth building?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Let&apos;s turn your requirements into a thoughtful, reliable
              software solution — from initial architecture to production
              launch.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-xl"
            >
              Let&apos;s discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
