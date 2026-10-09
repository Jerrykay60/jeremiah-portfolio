import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Download,
  FileText,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { skillCategories, experienceData, educationData } from '@/data/skills';

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-[#F8FAFC] py-20 text-slate-900 dark:bg-[#0B0F17] dark:text-white sm:py-28">
      {/* Restrained background lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-48 top-0 h-[32rem] w-[32rem] rounded-full bg-blue-500/[0.055] blur-[120px] dark:bg-blue-500/[0.08]" />
        <div className="absolute -left-48 top-[40rem] h-[28rem] w-[28rem] rounded-full bg-indigo-500/[0.035] blur-[120px] dark:bg-indigo-500/[0.045]" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-24 px-5 sm:px-8 lg:space-y-32 lg:px-10">
        {/* 01 — INTRODUCTION */}
        <section className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-2 space-y-7 lg:order-1 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
              <Sparkles className="h-3.5 w-3.5" />
              About me
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                Building with code.
                <span className="mt-2 block text-brand-blue">
                  Driven by purpose.
                </span>
              </h1>

              <p className="max-w-2xl text-lg font-medium leading-8 text-slate-700 dark:text-slate-200 sm:text-xl">
                I&apos;m Jeremiah Akindureni, a Computer Science graduate and
                full-stack developer focused on building practical,
                user-centered digital products.
              </p>
            </div>

            <div className="max-w-2xl space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
              <p>
                I build web applications with React, Next.js, and Node.js, with
                an emphasis on useful functionality, thoughtful user
                experiences, and maintainable engineering.
              </p>

              <p>
                I&apos;ve independently designed, built, and deployed three live
                products used by real people, taking ownership of the work from
                frontend development to database architecture.
              </p>

              <p>
                I&apos;m also deepening my knowledge of machine learning and
                artificial intelligence, working toward combining strong
                software engineering with intelligent applications.
              </p>
            </div>

            {/* Professional highlights */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                Lagos, Nigeria
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                <BriefcaseBusiness className="h-3.5 w-3.5 text-brand-blue" />
                Software Developer
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                <GraduationCap className="h-3.5 w-3.5 text-brand-blue" />
                Computer Science
              </span>
            </div>

            {/* Primary actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/resume"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B0F17]"
              >
                <FileText className="h-4 w-4" />
                View my resume
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.06]"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-5">
            <div className="relative w-full max-w-[390px]">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-brand-blue/20 sm:-right-5 sm:-top-5"
              />

              <div
                aria-hidden="true"
                className="absolute -left-3 top-16 z-20 h-8 w-8 rounded-xl bg-emerald-400 shadow-lg shadow-emerald-500/20 sm:-left-4"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-3 right-8 z-20 h-6 w-6 rounded-full border-4 border-[#F8FAFC] bg-amber-400 dark:border-[#0B0F17]"
              />

              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30">
                <Image
                  src="/images/jerry.jpg"
                  alt="Jeremiah Akindureni, Software developer and aspiring machine learning engineer"
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-xl font-bold tracking-tight">
                    Jeremiah Akindureni
                  </p>
                  <p className="mt-1.5 text-sm text-white/75">
                    Software Developer · Aspiring ML Engineer
                  </p>
                  <div className="mt-4 h-px w-full bg-white/20" />
                  <p className="mt-3 text-xs font-medium tracking-wide text-white/70">
                    Engineering from first principles
                  </p>
                </div>
              </div>

              <p className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 sm:justify-start">
                <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                Based in Lagos, Nigeria
              </p>
            </div>
          </div>
        </section>

        {/* 02 — TECHNICAL SKILLS */}
        <section className="space-y-9">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                <Code2 className="h-3.5 w-3.5" />
                Technical expertise
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                Skills &amp; toolkit
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
                Technologies and competencies organized by their role in the
                software development stack.
              </p>
            </div>

            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {skillCategories.length} skill categories
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <article
                key={cat.title}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/25 hover:shadow-xl hover:shadow-slate-900/[0.04] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:bg-white/[0.04] dark:hover:shadow-black/10 sm:p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/10 bg-brand-blue/[0.07] text-brand-blue transition-colors group-hover:bg-brand-blue group-hover:text-white">
                  <Code2 className="h-5 w-5" />
                </div>

                <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white sm:text-lg">
                  {cat.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {cat.description}
                </p>

                <div className="my-5 h-px bg-slate-100 dark:bg-white/[0.07]" />

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 dark:border-white/[0.08] dark:bg-white/[0.035] dark:text-slate-300"
                    >
                      {skill.name}
                      {skill.badge && (
                        <span className="text-[10px] font-semibold text-brand-blue">
                          {skill.badge}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03 — EXPERIENCE & EDUCATION */}
        <section className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Experience */}
          <div className="space-y-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                Professional journey
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Experience
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Roles, responsibilities, and professional growth.
              </p>
            </div>

            <div className="space-y-4">
              {experienceData.map((exp) => (
                <article
                  key={`${exp.role}-${exp.company}`}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-blue/25 hover:shadow-lg hover:shadow-slate-900/[0.035] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 font-semibold text-brand-blue">
                        {exp.company}
                      </p>
                    </div>

                    <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-emerald-500/20 bg-emerald-500/[0.07] px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      {exp.type}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                      {exp.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-blue" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="my-5 h-px bg-slate-100 dark:bg-white/[0.07]" />

                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={`${exp.role}-${i}`}
                        className="flex items-start gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300"
                      >
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-7">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.06] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                <GraduationCap className="h-3.5 w-3.5" />
                Academic foundation
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Education
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                Academic background and learning milestones.
              </p>
            </div>

            <div className="space-y-4">
              {educationData.map((edu) => (
                <article
                  key={`${edu.degree}-${edu.institution}`}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-200 hover:border-brand-blue/25 hover:shadow-lg hover:shadow-slate-900/[0.035] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-blue/10 bg-brand-blue/[0.07] text-brand-blue">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>

                  <p className="mt-2 font-semibold text-brand-blue">
                    {edu.institution}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                      {edu.location}
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-brand-blue" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="my-5 h-px bg-slate-100 dark:bg-white/[0.07]" />

                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {edu.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 04 — RESUME & CONTACT */}
        <section
          id="resume"
          className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-xl shadow-slate-900/[0.035] dark:border-white/[0.08] dark:bg-white/[0.025] dark:shadow-black/20 sm:p-10 lg:p-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-blue/[0.07] blur-[80px] dark:bg-brand-blue/[0.10]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-blue">
                <FileText className="h-4 w-4" />
                Curriculum vitae
              </div>

              <h2 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-3xl">
                A closer look at my professional background.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                Explore my experience at Lisa Technologies Ltd, Computer Science
                background, technical toolkit, and product work across Rent
                Tracker, PropNest, SmartBite, and CampusFund.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link
                href="/resume"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B0F17]"
              >
                <Download className="h-4 w-4" />
                View &amp; print CV
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-blue/40 hover:text-brand-blue dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.06]"
              >
                Discuss an opportunity
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
