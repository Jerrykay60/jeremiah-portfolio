'use client';

import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Mail,
  Phone,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim() ||
      !formData.phone.trim()
    ) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '532f9ebd-f728-4e0b-a3de-2c57089872a2',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject:
            formData.subject || `Portfolio Contact from ${formData.name}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send your message.');
      }

      setStatus('success');

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2B66FF', '#60A5FA', '#10B981', '#F59E0B'],
        });
      } catch {
        // The form still works if the confetti animation fails.
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.',
      );
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left side: Direct contact channels */}
      <div className="lg:col-span-5 space-y-5">
        <div>
          <h3 className="font-serif text-2xl font-normal text-slate-900 dark:text-white">
            Direct Reach &amp; Information
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
            Have a project, role, or collaboration in mind? Feel free to reach
            out via any preferred channel.
          </p>
        </div>

        {/* Email card */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-white/10 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center text-brand-blue">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                Email
              </p>
              <a
                href="mailto:jeremiahakindureni@gmail.com"
                className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-blue transition-colors"
              >
                jeremiahakindureni@gmail.com
              </a>
            </div>
          </div>
          <button
            onClick={() =>
              copyToClipboard('jeremiahakindureni@gmail.com', 'email')
            }
            className="p-2 rounded-lg text-slate-400 hover:text-brand-blue hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            title="Copy email"
            aria-label="Copy email"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Phone / WhatsApp card */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-white/10 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-bold">
                Phone / WhatsApp
              </p>
              <a
                href="tel:+2347019815820"
                className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white hover:text-brand-blue transition-colors"
              >
                +234 701 981 5820
              </a>
            </div>
          </div>
          <button
            onClick={() => copyToClipboard('+2347019815820', 'phone')}
            className="p-2 rounded-lg text-slate-400 hover:text-brand-blue hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            title="Copy phone"
            aria-label="Copy phone"
          >
            {copiedPhone ? (
              <Check className="w-4 h-4 text-emerald-500" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Availability Badge */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-500/20">
          <div className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1 animate-pulse" />
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">
                Active Availability
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Responding typically within 12–24 hours for full-stack
                engineering roles, software contracts, and partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Interactive Form */}
      <div className="lg:col-span-7 bg-white dark:bg-[#1E293B] border border-slate-200/80 dark:border-white/10 rounded-3xl p-7 sm:p-9 shadow-sm">
        {status === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="font-serif text-2xl font-normal text-slate-900 dark:text-white">
              Thank You, {formData.name}!
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
              Your inquiry has been recorded and addressed to{' '}
              <strong className="text-brand-blue">
                jeremiahakindureni@gmail.com
              </strong>
              .
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:jeremiahakindureni@gmail.com?subject=${encodeURIComponent(
                  formData.subject || `Inquiry from ${formData.name}`,
                )}&body=${encodeURIComponent(
                  `Hi Jeremiah,

${formData.message}

From: ${formData.name} (${formData.email})
Phone: ${formData.phone}`,
                )}`}
                className="px-5 py-2.5 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all"
              >
                Send via Mail App
              </a>
              <button
                type="button"
                onClick={() => {
                  setStatus('idle');
                  setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: '',
                  });
                }}
                className="px-5 py-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
              >
                Write Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-600 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#13161C] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-bold text-slate-700 dark:text-slate-300"
                >
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#13161C] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-sm font-bold text-slate-700 dark:text-slate-300"
                >
                  Phone Number{' '}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+234 801 234 5678"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#13161C] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Product inquiry / Engineering role"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#13161C] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="message"
                className="text-xs font-bold text-slate-700 dark:text-slate-300"
              >
                Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me about your product requirements, team needs, or what you'd like to collaborate on..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#13161C] text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 px-6 bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-70 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-sm hover:shadow-glow flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Dispatching message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
