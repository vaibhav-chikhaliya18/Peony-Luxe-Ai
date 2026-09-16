import { motion } from 'framer-motion';
import { Scale, FileCheck, Award, RefreshCw, DollarSign, ShieldAlert, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';

const termsSections = [
  {
    number: '01',
    title: 'Scope of Creative Commissions',
    icon: Scale,
    content: `Peony Luxe AI ("the Studio", "we", "our") is an avant-garde visual laboratory producing bespoke generative AI imagery, cinematic commercial films, brand narratives, and visual identity systems.

All commissions, creative partnerships, and commercial productions are governed by these Terms of Service in conjunction with individual project Statements of Work (SOW), quotations, or formal commission agreements mutually agreed upon in writing.`,
  },
  {
    number: '02',
    title: 'Project Workflow & Milestones',
    icon: FileCheck,
    content: `To ensure world-class aesthetic excellence and dependable timelines, all studio engagements follow our structured creative pipeline:

• Phase 01 — Idea & Briefing: Alignment on narrative goals, brand essence, and target deliverables.
• Phase 02 — Concept & Direction: Style moodboards, visual treatments, and aesthetic parameters.
• Phase 03 — Production & Synthesis: AI generation with hands-on human artistry, prompt engineering, and synthetic cinematography.
• Phase 04 — Review & Final Delivery: Color grading, upscale mastering (4K/8K stills, ProRes video), and deliverable handoff.`,
  },
  {
    number: '03',
    title: 'Commercial Rights & Asset Ownership',
    icon: Award,
    content: `Client commercial ownership is fundamental to our enterprise studio practice:

• Transfer of Rights: Upon final delivery and complete settlement of agreed commission fees, the client receives exclusive commercial usage rights, reproduction rights, and broadcast privileges for all finalized deliverables specified in the project agreement.
• Raw Working Files: Custom synthetic prompts, proprietary LoRA weights, intermediate seed renders, and project codebases remain the intellectual craft of Peony Luxe AI unless explicitly contracted as an exclusive buyout.
• Portfolio Showcase: Peony Luxe AI reserves the standard artistic privilege to showcase non-confidential deliverables in our official portfolio, showreel, and case studies following public release.`,
  },
  {
    number: '04',
    title: 'Revisions & Creative Refinements',
    icon: RefreshCw,
    content: `We are dedicated to exceeding creative expectations. Each project tier includes allocated revision rounds:

• Included Rounds: Standard commissions include up to two (2) rounds of focused aesthetic refinement (color calibration, composition adjustments, character consistency, motion rhythm).
• Additional Iterations: Revisions exceeding the agreed scope or fundamental changes to approved concept directions are accommodated through supplementary milestone addendums.`,
  },
  {
    number: '05',
    title: 'Client Assets & Indemnification',
    icon: ShieldAlert,
    content: `Clients represent and warrant that all logos, trademarks, reference footage, product photographs, and assets supplied to the Studio are owned or legally licensed by the client.

Peony Luxe AI conducts rigorous due diligence and ethical AI synthesis to deliver original, commercially deployable imagery that does not replicate proprietary third-party copyrights.`,
  },
  {
    number: '06',
    title: 'Payment Schedules & Invoicing',
    icon: DollarSign,
    content: `Unless otherwise stipulated in an individual enterprise contract:

• Retainer: An initial production deposit (typically 50%) is required prior to initiating concept treatments and generative compute pipelines.
• Final Milestone: The remaining balance is payable upon approval of master watermarked previews, prior to uncompressed high-resolution asset handoff.
• Taxes & Invoicing: Standard international bank wire, digital transfer, or studio invoice protocols apply.`,
  },
];

export default function TermsOfService() {
  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[#070709] text-white pt-28 pb-24 sm:pt-36 sm:pb-32 overflow-hidden selection:bg-[#9166FD] selection:text-white text-left">
        {/* Ambient Studio Lighting Aura */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-[#6286FE]/[0.05] via-[#8967FD]/[0.08] to-[#D770FF]/[0.05] rounded-full blur-[160px] pointer-events-none -z-10" />

        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 sm:mb-20 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-5 w-fit select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8967FD] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.26em] text-[#8E95A5] uppercase">
                LEGAL & GOVERNANCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Terms of{' '}
              <span className="bg-gradient-to-r from-white via-white/95 to-[#A78BFA] bg-clip-text text-transparent">
                Service.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#9DA3AF] font-normal leading-relaxed">
              Standard commercial framework governing bespoke generative commissions, high-resolution master asset licenses, and studio client collaborations.
            </p>

            <div className="mt-5 flex items-center gap-4 text-xs font-mono text-[#8E95A5]">
              <span>EFFECTIVE DATE: SEPTEMBER 2026</span>
              <span>•</span>
              <span>VERSION 2.4</span>
            </div>
          </motion.div>

          {/* Terms Clauses List */}
          <div className="space-y-6 sm:space-y-8">
            {termsSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative rounded-2xl sm:rounded-3xl bg-[#0D0F16]/80 backdrop-blur-xl border border-white/[0.08] hover:border-[#8967FD]/40 transition-all duration-300 p-6 sm:p-8 lg:p-10 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(137,103,253,0.15)] overflow-hidden"
                >
                  {/* Subtle top edge gradient reflection on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#8967FD]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="flex items-start gap-4 sm:gap-6">
                    {/* Number Badge */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#8967FD] group-hover:scale-105 group-hover:border-[#8967FD]/50 transition-all duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#A78BFA]" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono tracking-widest text-[#8967FD] font-semibold">
                          SECTION {section.number}
                        </span>
                      </div>

                      <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight">
                        {section.title}
                      </h2>

                      <div className="text-sm sm:text-[15px] text-[#9DA3AF] font-normal leading-relaxed whitespace-pre-line pt-1">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contract / SOW Inquiry Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#11131E] to-[#0A0B10] border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono tracking-[0.24em] text-[#8967FD] uppercase font-semibold">
                COMMERCIAL AGREEMENTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                Enterprise SOW or Customized Licensing?
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed">
                We accommodate tailored enterprise master service agreements (MSAs), bespoke buyout options, and custom multi-territory broadcast licenses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-xs sm:text-[13px] font-heading font-semibold text-white tracking-wider uppercase overflow-hidden">
                  <span className="relative z-10">Inquire via Atelier</span>
                  <ArrowRight className="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1 text-[#C4B5FD] group-hover:text-white" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
