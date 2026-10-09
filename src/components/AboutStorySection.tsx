import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  FileDown,
  MapPin,
  Sparkles,
} from 'lucide-react';

export function AboutStorySection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-slate-200/70 bg-white py-20 dark:border-white/[0.06] dark:bg-[#0B0F17] sm:py-28"
    >
      {/* Subtle ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-72 w-72 rounded-full bg-blue-500/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-emerald-400/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <div className="flex justify-center lg:col-span-5 lg:justify-start">
            <div className="relative w-full max-w-[390px]">
              {/* Decorative frame */}
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-blue-500/20 sm:-right-5 sm:-top-5"
              />

              <div
                aria-hidden="true"
                className="absolute -left-4 top-16 z-20 h-9 w-9 rounded-xl border border-white/80 bg-emerald-400 shadow-lg shadow-emerald-500/20 dark:border-slate-800"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-4 right-8 z-20 h-7 w-7 rounded-full border-4 border-white bg-amber-400 dark:border-[#0B0F17]"
              />

              <div className="group relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900 dark:shadow-black/30">
                <Image
                  src="/images/about.jpg"
                  alt="Jeremiah Akindureni, full-stack developer and aspiring machine learning engineer"
                  fill
                  priority={false}
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/65 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3 text-white">
                  <div>
                    <p className="text-lg font-bold tracking-tight">
                      Jeremiah Akindureni
                    </p>
                    <p className="mt-1 text-xs text-white/75">
                      Developer · Problem solver
                    </p>
                  </div>
                  <span className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-md">
                    <Sparkles className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500 dark:text-slate-400 sm:justify-start">
                <MapPin className="h-4 w-4 text-brand-blue" />
                <span>Lagos, Nigeria</span>
                <span className="mx-1 h-1 w-1 rounded-full bg-slate-400" />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/15 bg-blue-500/[0.06] px-3.5 py-2 text-xs font-semibold tracking-wide text-brand-blue">
                <span className="h-1.5 w-1.5 rounded-full bg-current" />A LITTLE
                ABOUT ME
              </div>

              <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-[3.25rem]">
                Building useful things.
                <span className="mt-1 block text-brand-blue">
                  Solving real problems.
                </span>
              </h2>

              <p className="mt-5 text-base italic leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
                “Every great product begins with solving a real human problem.”
              </p>

              <div className="mt-7 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
                <p>
                  I&apos;m a Computer Science graduate and full-stack developer
                  who builds practical, user-centered web applications with
                  React, Next.js, and Node.js.
                </p>

                <p>
                  I&apos;ve independently designed, built, and deployed three
                  live products used by real people, taking ownership of the
                  entire process—from frontend experiences to database
                  architecture.
                </p>

                <p>
                  I&apos;m now deepening my expertise in machine learning and
                  artificial intelligence, with the goal of becoming a
                  well-rounded full-stack and ML engineer.
                </p>
              </div>

              {/* Experience and education */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition-colors hover:border-blue-500/30 hover:bg-blue-500/[0.03] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:bg-white/[0.045]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-brand-blue">
                      <BriefcaseBusiness className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        Software Developer
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        Lisa Technologies Ltd
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                        Dec 2025 – May 2026 · Lagos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 transition-colors hover:border-blue-500/30 hover:bg-blue-500/[0.03] dark:border-white/[0.08] dark:bg-white/[0.025] dark:hover:bg-white/[0.045]">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-semibold text-slate-900 dark:text-white">
                        B.Sc. Computer Science
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                        Lagos State University of Education
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">
                        2025/2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/15 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0B0F17]"
                >
                  Read my full story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.07] dark:focus-visible:ring-offset-[#0B0F17]"
                >
                  <FileDown className="h-4 w-4 text-brand-blue" />
                  View resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
