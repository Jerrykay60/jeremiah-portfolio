"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Phone, Heart, Globe, ArrowUp } from "lucide-react";

export function Footer() {
  const [lagosTime, setLagosTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date());
        setLagosTime(timeStr);
      } catch (e) {
        setLagosTime("12:00 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 dark:bg-[#0E1116] border-t border-slate-200 dark:border-white/5 text-slate-600 dark:text-slate-400 text-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-200 dark:border-white/5">
          {/* Col 1: Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white"
            >
              <span className="text-brand-blue font-mono font-black">&lt;/&gt;</span>
              <span>Jeremiah Akindureni</span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              Full-stack developer turning real-world problems into shipped products. Based in Lagos, Nigeria, building practical web applications and engineering intelligent AI/ML solutions.
            </p>
            {/* Live Location / Time widget */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                Lagos, Nigeria (WAT)
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                {lagosTime || "GMT+1"}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-blue transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-blue transition-colors">
                  About Me & Bio
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-blue transition-colors">
                  Projects & SaaS
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-blue transition-colors">
                  Contact & Inquiry
                </Link>
              </li>
              <li>
                <Link href="/resume" className="hover:text-brand-blue transition-colors">
                  Resume &amp; CV (Print / PDF)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Channels (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect & Collaborate
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Open for full-time full-stack roles, freelance client projects, and AI/ML partnerships.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://github.com/Jerrykay60"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/jeremiah-akindureni-834779285"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:jeremiahakindureni@gmail.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:+2347019815820"
                aria-label="Phone"
                className="w-9 h-9 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/60 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Jeremiah Akindureni. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-[11px]">
              Crafted with Next.js, React 19 & Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 hover:bg-brand-blue hover:text-white text-slate-600 dark:text-slate-400 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
