'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowDownRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden pt-24 sm:pt-28 lg:pt-8">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 -z-10 h-80 w-80 rounded-full bg-indigo-500/[0.06] blur-[110px]"
      />

      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1600px] grid-cols-1 items-center gap-8 px-5 pb-12 sm:px-8 md:gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-8 lg:px-12 lg:pb-8 xl:px-16">
        {/* Left: Introduction */}
        <div className="relative z-10 order-1 max-w-2xl py-6 lg:py-16">
          <div className="mb-7 inline-flex items-center gap-2.5  bg-white/[0.035] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs font-medium tracking-wide text-[var(--muted)]">
              Software developer · Lagos, Nigeria
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-blue)]">
            Hello, welcome to my portfolio
          </p>

          <h1 className="max-w-[700px] text-[clamp(3.2rem,6vw,6.3rem)] font-bold leading-[0.98] tracking-[-0.065em] text-[var(--foreground)]">
            I&apos;m Jeremiah
            <span className="mt-2 block text-[var(--muted)]">A Software</span>
            <span className="block text-[var(--foreground)]">
              Developer<span className="text-[var(--accent-blue)]">.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-[var(--muted)] sm:text-lg">
            I turn real-world problems into useful digital products, building
            thoughtful interfaces, reliable applications, and intelligent
            software that makes a difference.
          </p>

          {/* Actions */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--accent-blue)] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)]"
            >
              Explore my work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[var(--border)] px-6 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent-blue)] hover:bg-[var(--accent-blue)]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Let&apos;s talk
              <ArrowDownRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Social links */}
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[var(--border)] pt-6 sm:gap-5">
            <span className="mr-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              Find me on
            </span>

            <a
              href="https://github.com/Jerrykay60"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
            >
              <Github size={19} aria-hidden="true" />
            </a>

            <a
              href="https://linkedin.com/in/jeremiah-akindureni-834779285"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>

            <a
              href="mailto:jeremiahakindureni@gmail.com"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)]"
            >
              <Mail size={19} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Right: Large portrait */}
        <div className="relative order-2 mx-auto w-full max-w-[760px] lg:max-w-none">
          <div className="relative min-h-[440px] overflow-hidden rounded-[2rem] border border-white/[0.08] bg-white/[0.025] sm:min-h-[580px] lg:min-h-[min(78svh,820px)] lg:rounded-[2.5rem]">
            {/* Image backdrop */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/[0.12] via-transparent to-indigo-500/[0.10]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 top-10 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]"
            />

            <Image
              src="/images/jerry.jpg"
              alt="Jeremiah Akindureni, software developer"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 65vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Image overlays */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10"
            />

            {/* Floating introduction card */}
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 rounded-2xl border border-white/20 bg-black/35 p-4 backdrop-blur-xl sm:bottom-7 sm:left-7 sm:right-7 sm:p-6">
              <div className="min-w-0">
                <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  <Sparkles size={14} aria-hidden="true" />
                  My approach
                </div>
                <p className="max-w-sm text-lg font-semibold leading-snug text-white sm:text-2xl">
                  Thoughtful design.
                  <br />
                  Meaningful technology.
                </p>
              </div>

              <Link
                href="/about"
                aria-label="Learn more about me"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:rotate-45 hover:bg-blue-100"
              >
                <ArrowRight size={21} aria-hidden="true" />
              </Link>
            </div>

            {/* Decorative corner detail */}
            <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md sm:right-7 sm:top-7">
              Portfolio / 2026
            </div>
          </div>

          <p className="mt-4 text-center text-xs tracking-wide text-[var(--muted)] lg:text-right">
            Designing, building, and bringing ideas to life.
          </p>
        </div>
      </div>

      {/* Bottom portfolio links */}
      <div className="mx-auto max-w-[1600px] px-5 pb-12 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 border-t border-[var(--border)] sm:grid-cols-3">
          <Link
            href="/about"
            className="group border-b border-[var(--border)] py-6 sm:border-b-0 sm:border-r sm:pr-6 lg:py-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              01 / About
            </span>
            <span className="mt-3 flex items-center justify-between gap-3 text-base font-semibold text-[var(--foreground)]">
              Get to know me
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-blue)]"
                aria-hidden="true"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
              My background, approach, and what drives me.
            </span>
          </Link>

          <Link
            href="/projects"
            className="group border-b border-[var(--border)] py-6 sm:border-b-0 sm:border-r sm:px-6 lg:py-8"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              02 / Selected work
            </span>
            <span className="mt-3 flex items-center justify-between gap-3 text-base font-semibold text-[var(--foreground)]">
              Explore projects
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-blue)]"
                aria-hidden="true"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
              Applications, experiments, and products I&apos;ve built.
            </span>
          </Link>

          <Link href="/contact" className="group py-6 sm:pl-6 lg:py-8">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
              03 / Contact
            </span>
            <span className="mt-3 flex items-center justify-between gap-3 text-base font-semibold text-[var(--foreground)]">
              Start a conversation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-blue)]"
                aria-hidden="true"
              />
            </span>
            <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
              Have a project or opportunity in mind? Let&apos;s connect.
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
