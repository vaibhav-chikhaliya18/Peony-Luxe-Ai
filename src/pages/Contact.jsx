import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, MapPin, Phone } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';

const projectTypes = [
  'AI Film / Narrative Short',
  'Commercial Video Production',
  'Brand Storytelling & Editorial',
  'AI Image Creation & Key Visuals',
  'Creative Direction & Concepting',
  'Bespoke Studio Inquiry',
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'AI Film / Narrative Short',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/vaibhavchikhaliya18@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Project Inquiry: ${formData.projectType} — ${formData.name}`,
          _cc: 'peonyluxeai03@gmail.com',
          _template: 'table',
          'Client Name': formData.name,
          'Client Email': formData.email,
          'Phone / WhatsApp': formData.phone || 'N/A',
          'Brand / Studio': formData.company || 'N/A',
          'Project Discipline': formData.projectType,
          'Vision & Overview': formData.message,
        }),
      });

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#070709] text-white pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden selection:bg-[#9166FD] selection:text-white">
        {/* Background Ambient Violet / Cyan Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[#5D87FF]/[0.06] via-[#9166FD]/[0.08] to-[#D770FF]/[0.05] rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Main Grid: Left Column (Brand Narrative & Studio Info) | Right Column (Luxury Commission Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* LEFT COLUMN: Atelier Presentation & Direct Lines */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex flex-col text-left space-y-8"
            >
              {/* Kicker Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] animate-pulse" />
                <span className="text-[11px] font-mono tracking-[0.24em] text-zinc-400 uppercase">
                  COMMISSIONS & INQUIRIES
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-extrabold text-white tracking-tight leading-[1.06]">
                  Start a <br />
                  <span className="bg-gradient-to-r from-white via-white/95 to-[#A78BFA] bg-clip-text text-transparent">
                    Conversation.
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-[#9DA3AF] font-normal leading-relaxed max-w-lg">
                  Whether producing an avant-garde AI film, orchestrating a global brand campaign, or exploring creative frontiers, our studio collaborates with world-class visionaries.
                </p>
              </div>

              {/* Studio Metadata Highlights */}
              <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                {/* Email Direct */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D0E14]/70 border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#8967FD] mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <span className="block text-[11px] font-mono tracking-[0.2em] text-[#8E95A5] uppercase">
                      DIRECT INQUIRIES
                    </span>
                    <a
                      href="mailto:vaibhavchikhaliya18@gmail.com"
                      className="text-sm sm:text-base font-medium text-white hover:text-[#8967FD] transition-colors break-all"
                    >
                      vaibhavchikhaliya18@gmail.com
                    </a>
                    <a
                      href="mailto:peonyluxeai03@gmail.com"
                      className="text-sm sm:text-base font-medium text-white hover:text-[#8967FD] transition-colors break-all"
                    >
                      peonyluxeai03@gmail.com
                    </a>
                  </div>
                </div>

                {/* Studio Hubs */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0D0E14]/70 border border-white/[0.06]">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#6286FE]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono tracking-[0.2em] text-[#8E95A5] uppercase">
                      LOCATION
                    </span>
                    <span className="text-sm sm:text-base font-medium text-white">
                      Surat, Gujarat
                    </span>
                  </div>
                </div>

                {/* Turnaround Time & Guarantee */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#0D0E14]/70 border border-white/[0.06]">
                    <Clock className="w-4 h-4 text-[#8967FD] mb-2" />
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#8E95A5] uppercase">
                      RESPONSE TIME
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      Within 24 Hours
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0D0E14]/70 border border-white/[0.06]">
                    <Phone className="w-4 h-4 text-[#6286FE] mb-2" />
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#8E95A5] uppercase">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href="tel:+919825548544"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-[#6286FE] transition-colors block"
                    >
                      +91 98255 48544
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN: Haute Couture Commission Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative rounded-[28px] sm:rounded-[32px] bg-[#0E1016]/90 backdrop-blur-2xl border border-white/[0.09] shadow-[0_20px_70px_rgba(0,0,0,0.7)] p-6 sm:p-8 lg:p-8 xl:p-12 text-left overflow-hidden">
                {/* Top Subtle Gradient Edge Highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8967FD]/60 to-transparent" />

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    /* SUCCESS SCREEN */
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 sm:py-16 flex flex-col items-center text-center space-y-5"
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#6286FE] via-[#8967FD] to-[#D770FF] p-[2px] flex items-center justify-center shadow-lg shadow-[#8967FD]/30">
                        <div className="w-full h-full bg-[#0E1016] rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-8 h-8 text-[#A78BFA]" />
                        </div>
                      </div>

                      <div className="space-y-2 max-w-md">
                        <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                          Inquiry Received.
                        </h3>
                        <p className="text-sm sm:text-base text-[#9DA3AF] leading-relaxed">
                          Thank you, <span className="text-white font-medium">{formData.name || 'Visionary'}</span>. Our Creative Direction team is reviewing your vision and will respond within 24 hours.
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            company: '',
                            projectType: 'AI Film / Narrative Short',
                            message: '',
                          });
                        }}
                        className="mt-6 px-6 py-2.5 rounded-full border border-white/20 text-xs font-mono uppercase tracking-[0.2em] text-white hover:bg-white/[0.06] transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    /* COMMISSION INQUIRY FORM */
                    <form key="form" onSubmit={handleSubmit} className="space-y-7">
                      {/* SECTION 1: PROJECT TYPE SELECTION */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono tracking-[0.22em] text-[#8E95A5] uppercase">
                          01. SELECT PROJECT DISCIPLINE
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {projectTypes.map((type) => {
                            const isSelected = formData.projectType === type;
                            return (
                              <button
                                type="button"
                                key={type}
                                onClick={() => setFormData({ ...formData, projectType: type })}
                                className={`px-4 py-3 rounded-xl text-left text-xs sm:text-[13px] font-medium transition-all duration-200 border ${isSelected
                                  ? 'bg-gradient-to-r from-[#6286FE]/15 to-[#8967FD]/20 border-[#8967FD] text-white shadow-sm shadow-[#8967FD]/20'
                                  : 'bg-[#141620]/60 border-white/[0.06] text-zinc-400 hover:text-white hover:border-white/20 hover:bg-[#141620]'
                                  }`}
                              >
                                {type}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* SECTION 2: CONTACT DETAILS */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono tracking-[0.22em] text-[#8E95A5] uppercase">
                          02. YOUR DETAILS
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <input
                              required
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Your Name *"
                              className="w-full px-4 py-3.5 rounded-xl bg-[#141620]/80 border border-white/[0.08] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#8967FD] focus:ring-1 focus:ring-[#8967FD]/30 transition-all text-sm"
                            />
                          </div>

                          <div>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="Email Address *"
                              className="w-full px-4 py-3.5 rounded-xl bg-[#141620]/80 border border-white/[0.08] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#8967FD] focus:ring-1 focus:ring-[#8967FD]/30 transition-all text-sm"
                            />
                          </div>

                          <div>
                            <input
                              required
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="Phone / WhatsApp Number *"
                              className="w-full px-4 py-3.5 rounded-xl bg-[#141620]/80 border border-white/[0.08] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#8967FD] focus:ring-1 focus:ring-[#8967FD]/30 transition-all text-sm"
                            />
                          </div>

                          <div>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Brand / Organization (Optional)"
                              className="w-full px-4 py-3.5 rounded-xl bg-[#141620]/80 border border-white/[0.08] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#8967FD] focus:ring-1 focus:ring-[#8967FD]/30 transition-all text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      {/* SECTION 3: VISION BRIEF */}
                      <div className="space-y-3">
                        <label className="block text-xs font-mono tracking-[0.22em] text-[#8E95A5] uppercase">
                          03. VISION & OVERVIEW
                        </label>
                        <textarea
                          required
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about the project vision, narrative goals, timeline, and key creative objectives..."
                          className="w-full px-4 py-3.5 rounded-xl bg-[#141620]/80 border border-white/[0.08] text-white placeholder:text-zinc-500 focus:outline-none focus:border-[#8967FD] focus:ring-1 focus:ring-[#8967FD]/30 transition-all text-sm resize-none"
                        />
                      </div>

                      {/* SUBMIT BUTTON */}
                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="group relative w-full inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.015] active:scale-[0.985] hover:shadow-[0_0_35px_rgba(137,103,253,0.45)] disabled:opacity-60 cursor-pointer select-none"
                        >
                          {/* Animated Iridescent Gradient Border */}
                          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Inner Dark Glass Pill Body */}
                          <span className="relative w-full flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#0E1016]/95 group-hover:bg-[#12141D]/85 backdrop-blur-md transition-all duration-300 text-white font-heading font-semibold text-sm sm:text-base tracking-wider uppercase overflow-hidden">
                            {/* Shimmer Light Reflection Sweep on Hover */}
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />

                            {isSubmitting ? (
                              <span className="relative z-10 flex items-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Transmitting Vision...</span>
                              </span>
                            ) : (
                              <>
                                <span className="relative z-10">Send Project Inquiry</span>
                                <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5 text-[#C4B5FD] group-hover:text-white" />
                              </>
                            )}
                          </span>
                        </button>
                        <p className="text-[11px] text-zinc-500 font-mono tracking-wider text-center pt-3">
                          PROTECTED BY PEONY LUXE AI NON-DISCLOSURE STANDARDS
                        </p>
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
