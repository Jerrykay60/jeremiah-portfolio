'use client';

import Link from 'next/link';
import {
  Printer,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
} from 'lucide-react';

import { experienceData, educationData, skillCategories } from '@/data/skills';

import { projects } from '@/data/projects';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="min-h-screen bg-gray-100 px-4 py-8 text-gray-800 sm:px-6 lg:px-8 print:min-h-0 print:bg-white print:p-0">
        {/* Screen-only navigation and print controls */}
        <div className="mt-12 mx-auto mb-6 flex max-w-4xl items-center justify-between gap-4 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            <ArrowLeft size={17} />
            Back to Portfolio
          </Link>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover"
          >
            <Printer size={17} />
            Print / Save as PDF
          </button>
        </div>

        {/* Only this container should appear in the printed document */}
        <article
          id="resume-content"
          className="resume-paper mx-auto max-w-4xl border border-gray-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10 lg:px-12"
        >
          {/* Header */}
          <header className="border-b-2 border-brand-blue pb-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl">
              Jeremiah Akindureni
            </h1>

            <p className="mt-2 text-lg font-semibold text-brand-blue sm:text-xl">
              Software Developer | Aspiring Machine Learning Engineer
            </p>

            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-600 sm:grid-cols-2 sm:text-[15px]">
              <a
                href="mailto:jeremiahakindureni@gmail.com"
                className="flex min-w-0 items-center gap-2 break-all hover:text-brand-blue"
              >
                <Mail size={16} className="shrink-0 text-brand-blue" />
                jeremiahakindureni@gmail.com
              </a>

              <a
                href="tel:+2347019815820"
                className="flex items-center gap-2 hover:text-brand-blue"
              >
                <Phone size={16} className="shrink-0 text-brand-blue" />
                +234 701 981 5820
              </a>

              <p className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0 text-brand-blue" />
                Lagos, Nigeria
              </p>

              <a
                href="https://github.com/Jerrykay60"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-w-0 items-center gap-2 break-all hover:text-brand-blue"
              >
                <Github size={16} className="shrink-0 text-brand-blue" />
                github.com/Jerrykay60
              </a>
            </div>
          </header>

          {/* Professional Summary */}
          <section className="resume-section mt-7">
            <h2 className="mb-3 border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              Professional Summary
            </h2>

            <p className="text-sm leading-7 text-gray-700 sm:text-[15px]">
              Computer Science graduate and software developer with hands-on
              experience building and deploying web applications using React,
              Next.js, Node.js, and modern web technologies. Independently
              developed and deployed three live products, with a focus on
              creating practical, user-focused digital solutions. Currently
              expanding my knowledge of machine learning and artificial
              intelligence while continuing to strengthen my software
              engineering skills.
            </p>
          </section>

          {/* Professional Experience */}
          <section className="resume-section mt-7">
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              Professional Experience
            </h2>

            <div className="space-y-5">
              {experienceData.map((exp, index) => (
                <div
                  key={`${exp.company}-${exp.role}-${index}`}
                  className="resume-entry"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        {exp.role}
                      </h3>

                      <p className="mt-1 text-sm font-semibold text-gray-700 sm:text-[15px]">
                        {exp.company}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 sm:text-right">
                      <p className="font-medium">{exp.period}</p>
                      {exp.location && <p className="mt-1">{exp.location}</p>}
                    </div>
                  </div>

                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-gray-700 sm:text-[15px]">
                    {exp.description.map((bullet, bulletIndex) => (
                      <li key={`${index}-bullet-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Selected Projects */}
          <section className="resume-section mt-7">
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              Selected Products &amp; Projects
            </h2>

            <div className="space-y-5">
              {projects.map((proj) => (
                <div key={proj.id} className="resume-entry">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-gray-900">
                        {proj.title}
                      </h3>

                      {proj.subtitle && (
                        <p className="mt-1 text-sm font-medium text-gray-600">
                          {proj.subtitle}
                        </p>
                      )}
                    </div>

                    {proj.status && (
                      <span className="w-fit shrink-0 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-brand-blue print:border print:border-gray-300 print:bg-white print:text-gray-700">
                        {proj.status}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-gray-700 sm:text-[15px]">
                    {proj.description}
                  </p>

                  {proj.techStack && proj.techStack.length > 0 && (
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      <span className="font-semibold text-gray-800">
                        Technologies:
                      </span>{' '}
                      {proj.techStack.join(' · ')}
                    </p>
                  )}

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 break-all text-sm font-medium text-brand-blue"
                    >
                      <ExternalLink size={14} className="shrink-0" />
                      {proj.liveUrl
                        .replace(/^https?:\/\//, '')
                        .replace(/\/$/, '')}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="resume-section mt-7">
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              Education
            </h2>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div
                  key={`${edu.institution}-${edu.degree}-${index}`}
                  className="resume-entry"
                >
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="text-base font-bold text-gray-900">
                        {edu.degree}
                      </h3>

                      <p className="mt-1 text-sm text-gray-700 sm:text-[15px]">
                        {edu.institution}
                      </p>

                      {edu.location && (
                        <p className="mt-1 text-sm text-gray-500">
                          {edu.location}
                        </p>
                      )}
                    </div>

                    <p className="text-sm font-medium text-gray-500 sm:text-right">
                      {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section mt-7">
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-sm font-bold uppercase tracking-[0.16em] text-brand-blue">
              Technical Skills
            </h2>

            <div className="space-y-3">
              {skillCategories.map((category, index) => (
                <div
                  key={`${category.title}-${index}`}
                  className="resume-entry text-sm leading-6 sm:text-[15px]"
                >
                  <h3 className="mb-1 font-bold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="text-gray-700">
                    {category.skills.map((skill) => skill.name).join(' · ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500">
            Jeremiah Akindureni · Software Developer
          </footer>
        </article>
      </main>

      {/* Print rules: show only the résumé */}
      <style jsx global>{`
        @page {
          size: A4;
          margin: 12mm;
        }

        @media print {
          html,
          body {
            width: 100% !important;
            min-height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
            background: #ffffff !important;
          }

          body * {
            visibility: hidden !important;
          }

          #resume-content,
          #resume-content * {
            visibility: visible !important;
          }

          #resume-content {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            max-width: none !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            background: #ffffff !important;
            color: #1f2937 !important;
          }

          #resume-content .resume-section,
          #resume-content .resume-entry {
            break-inside: avoid;
            page-break-inside: avoid;
          }

          #resume-content a {
            color: inherit !important;
            text-decoration: none !important;
          }

          #resume-content h1,
          #resume-content h2,
          #resume-content h3,
          #resume-content p,
          #resume-content li,
          #resume-content span {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          button,
          nav,
          footer:not(#resume-content footer),
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
