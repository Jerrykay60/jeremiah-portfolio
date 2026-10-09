'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, FileDown, ArrowUpRight, Code2 } from 'lucide-react';

import { ThemeToggle } from './ThemeToggle';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/85 shadow-sm backdrop-blur-2xl dark:border-white/[0.08] dark:bg-[#111318]/85'
          : 'border-b border-transparent bg-white/60 backdrop-blur-md dark:bg-[#111318]/95'
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'h-[68px]' : 'h-[76px]'
          }`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)]"
            aria-label="Jeremiah, home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-blue)] text-white shadow-md shadow-blue-500/20 transition-transform duration-300 group-hover:-rotate-6">
              <Code2 size={22} strokeWidth={2.2} aria-hidden="true" />
            </span>

            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
              Jeremiah<span className="text-[var(--accent-blue)]">.</span>
              <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.23em] text-slate-500 dark:text-slate-400">
                Software Developer
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-slate-100/60 p-1 dark:border-white/[0.07] dark:bg-white/[0.035] md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 lg:px-5 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm dark:bg-white/10 dark:text-white'
                      : 'text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-1 h-0.5 rounded-full bg-[var(--accent-blue)]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-xs font-semibold text-slate-700 transition-all duration-200 hover:border-[var(--accent-blue)] hover:text-[var(--accent-blue)] dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200"
            >
              <FileDown size={15} aria-hidden="true" />
              Resume
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent-blue)] px-5 py-3 text-xs font-semibold text-white shadow-md shadow-blue-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-blue)]"
            >
              Let&apos;s talk
              <ArrowUpRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={
                mobileMenuOpen ? 'Close navigation' : 'Open navigation'
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/80 text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10"
            >
              {mobileMenuOpen ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!mobileMenuOpen}
        className={`overflow-hidden border-t border-slate-200/70 bg-white/95 backdrop-blur-2xl transition-all duration-300 dark:border-white/[0.08] dark:bg-[#111318]/95 md:hidden ${
          mobileMenuOpen
            ? 'visible max-h-[480px] opacity-100'
            : 'invisible max-h-0 border-t-transparent opacity-0'
        }`}
      >
        <nav
          aria-label="Mobile navigation links"
          className="mx-auto max-w-[1440px] space-y-1 px-5 py-5 sm:px-8"
          inert={!mobileMenuOpen}
        >
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-[var(--accent-blue)]/10 text-[var(--accent-blue)]'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/[0.05]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>
                  <span className="mr-3 font-mono text-xs text-slate-400">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>

                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            );
          })}

          <div className="grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-4 dark:border-white/10">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
            >
              <FileDown size={16} aria-hidden="true" />
              Resume
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-blue)] px-3 py-3 text-sm font-semibold text-white"
            >
              Let&apos;s talk
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
