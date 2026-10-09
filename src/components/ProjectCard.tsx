"use client";

import { ArrowUpRight, Github, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-white/10 p-7 sm:p-8 transition-all duration-300 hover:shadow-card-hover hover:border-brand-blue/40">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
            {project.category}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
              project.status === "Active SaaS"
                ? "bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20"
                : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                project.status === "Active SaaS" ? "bg-amber-500" : "bg-emerald-500"
              }`}
            />
            {project.status}
          </span>
        </div>

        {/* Project Title with Serif & Sans combo */}
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 dark:text-white tracking-tight group-hover:text-brand-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-xs font-semibold text-brand-blue mt-0.5 mb-3 font-sans">
          {project.subtitle}
        </p>

        {/* One-line Description */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="space-y-1.5 mb-6 text-xs text-slate-500 dark:text-slate-400">
          {project.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-brand-blue mt-0.5 font-bold">•</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg shadow-sm transition-all"
            >
              <span>Live Product</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-brand-blue hover:text-brand-blue rounded-lg transition-all"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {!project.liveUrl && (
            <span className="text-xs text-slate-400 italic">
              Private Repo • Ongoing
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
