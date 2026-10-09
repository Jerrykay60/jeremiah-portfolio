import {
  Mail,
  Phone,
  Github,
  Linkedin,
  MessageSquare,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  Clock,
  Code2,
  ArrowRight,
} from 'lucide-react';

import { ContactForm } from '@/components/ContactForm';

const contactMethods = [
  {
    label: 'Email Address',
    value: 'jeremiahakindureni@gmail.com',
    href: 'mailto:jeremiahakindureni@gmail.com',
    icon: Mail,
    iconStyle:
      'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
    hoverStyle: 'group-hover:text-blue-500',
    description: 'For opportunities and inquiries',
  },
  {
    label: 'Phone / WhatsApp',
    value: '+234 701 981 5820',
    href: 'tel:+2347019815820',
    icon: Phone,
    iconStyle:
      'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    hoverStyle: 'group-hover:text-emerald-500',
    description: "Let's have a conversation",
  },
  {
    label: 'GitHub',
    value: '@Jerrykay60',
    href: 'https://github.com/Jerrykay60',
    icon: Github,
    iconStyle:
      'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
    hoverStyle: 'group-hover:text-purple-500',
    description: 'Explore my code and projects',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'Jeremiah Akindureni',
    href: 'https://linkedin.com/in/jeremiah-akindureni-834779285',
    icon: Linkedin,
    iconStyle: 'bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400',
    hoverStyle: 'group-hover:text-sky-500',
    description: 'Connect professionally',
    external: true,
  },

  {
    label: 'WhatsApp',
    value: '+234 701 981 5820',
    href: 'https://wa.me/2347019815820',
    icon: MessageCircle,
    iconStyle:
      'bg-green-50 text-green-600 dark:bg-green-500/10 dark:text-green-400',
    hoverStyle: 'group-hover:text-green-500',
    description: 'Message me directly on WhatsApp',
    external: true,
  },
];

const faqs = [
  {
    number: '01',
    question: 'What are your core specializations?',
    answer:
      'Full-stack web development with React, Next.js, TypeScript, Node.js, and modern databases, alongside applied machine learning with Python, Pandas, and Scikit-learn.',
  },
  {
    number: '02',
    question: 'Are you open to remote opportunities?',
    answer:
      "Yes. I'm open to remote opportunities and comfortable with remote collaboration, asynchronous workflows, and working across WAT, GMT, EST, and CET time zones.",
  },
  {
    number: '03',
    question: 'Can you handle projects end-to-end?',
    answer:
      "Yes. I've independently taken three products from initial concept to production, working across design, frontend development, database schemas, authentication, and cloud hosting.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#0B0D12] dark:text-white sm:py-32">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 -z-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[700px] -z-0 h-80 w-80 rounded-full bg-indigo-500/[0.08] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16 px-4 sm:px-6 sm:space-y-20 lg:px-8">
        {/* Hero */}
        <section className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
            <Sparkles className="h-4 w-4" />
            Connect &amp; Collaborate
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="mt-1 block bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-500 bg-clip-text pb-1 text-transparent">
              meaningful together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have a project in mind, a role to discuss, or an idea worth
            exploring? I'm open to connecting with recruiters, founders,
            developers, and teams building useful technology.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to opportunities
            </span>

            <span className="inline-flex items-center gap-2">
              <Code2 className="h-4 w-4 text-brand-blue" />
              Software development
            </span>

            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-brand-blue" />
              Remote collaboration
            </span>
          </div>
        </section>

        {/* Contact methods */}
        <section aria-label="Contact details">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Get in touch
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              Find the best way to reach me.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="group flex min-h-[190px] flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-xl hover:shadow-slate-900/[0.05] dark:border-white/[0.09] dark:bg-[#12151D] dark:hover:border-brand-blue/40 dark:hover:shadow-black/20"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${method.iconStyle}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <ArrowUpRight
                      className={`h-5 w-5 text-slate-400 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${method.hoverStyle}`}
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
                      {method.label}
                    </p>

                    <p className="mt-2 break-words text-sm font-bold leading-6 text-slate-900 transition-colors group-hover:text-brand-blue dark:text-white sm:text-[15px]">
                      {method.value}
                    </p>

                    <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      {method.description}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* Contact form */}
        <section
          id="contact-form"
          className="scroll-mt-28"
          aria-label="Send a message"
        >
          <div className="mb-7 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              Start a conversation
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Tell me what you're building.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Share a little about your project, opportunity, or idea. I'll be
              glad to hear what you have in mind.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm dark:border-white/[0.09] dark:bg-[#12151D] sm:p-8 lg:p-10">
            <ContactForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-slate-200 pt-12 dark:border-white/10 sm:pt-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-blue">
              A few quick answers
            </p>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              Frequently asked questions.
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              A little more about my work, availability, and the projects I can
              help bring to life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {faqs.map((faq) => (
              <article
                key={faq.number}
                className="group rounded-3xl border border-slate-200/80 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg hover:shadow-slate-900/[0.04] dark:border-white/[0.09] dark:bg-[#12151D] dark:hover:border-brand-blue/40 sm:p-7"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-blue/[0.08] text-xs font-extrabold text-brand-blue">
                  {faq.number}
                </span>

                <h3 className="mt-5 text-base font-extrabold leading-6 text-slate-900 dark:text-white sm:text-lg">
                  {faq.question}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-white/10 dark:bg-[#12151D] sm:p-12 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/[0.07] via-transparent to-indigo-500/[0.07]"
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
              <MessageSquare className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
              Have something in mind?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Whether it's a software project, a collaboration, or a career
              opportunity, let's start with a conversation.
            </p>

            <a
              href="#contact-form"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-blue/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-blue-hover hover:shadow-xl"
            >
              Send me a message
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
