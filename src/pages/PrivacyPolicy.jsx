import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText, Sparkles, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/animations/PageTransition';

const sections = [
  {
    number: '01',
    title: 'Studio Commitment & Confidentiality',
    icon: ShieldCheck,
    content: `At Peony Luxe AI ("we", "our", or "the Studio"), we operate at the pinnacle of luxury generative art, cinematic AI films, and bespoke brand storytelling. We recognize that visionary creators, fashion houses, and enterprise brands entrust us with sensitive campaign concepts, unreleased product blueprints, and proprietary creative visions. 

We hold client privacy, creative discretion, and data security to the highest international luxury atelier standards. This Privacy Policy delineates how we collect, safeguard, and responsibly process your information.`,
  },
  {
    number: '02',
    title: 'Information We Collect',
    icon: FileText,
    content: `We collect only the essential information necessary to conceptualize, produce, and deliver world-class creative commissions:

• Contact & Commission Details: Your name, business email address, Phone / WhatsApp number, company name, and project requirements submitted via our commission forms.
• Creative Briefs & Brand Assets: Moodboards, reference photography, visual identity guides, 3D files, and creative directives shared for project execution.
• Digital Interactions: Anonymous technical metrics such as device type, screen resolution, and navigation paths to ensure an optimal high-fidelity viewing experience on our website.`,
  },
  {
    number: '03',
    title: 'AI Ethics & Proprietary Asset Protection',
    icon: Sparkles,
    content: `As an avant-garde AI creative studio, we adhere to strict ethical and operational principles regarding artificial intelligence:

• NO Public Model Training: Your confidential assets, private logos, brand IP, and bespoke project outputs are NEVER uploaded, fed, or used to train public artificial intelligence models without your prior express written authorization.
• Isolated Production Environments: Generative workflows, custom LoRA models, style weights, and synthetic asset pipelines are maintained in secure, private computational environments.
• Human Artistry Oversight: Every AI asset is directed, refined, and curated by human artists to ensure originality and brand distinction.`,
  },
  {
    number: '04',
    title: 'Non-Disclosure (NDA) & Client Discretion',
    icon: Lock,
    content: `We honor bilateral Non-Disclosure Agreements (NDAs) for pre-release campaigns, confidential hardware launches, and private studio inquiries. 

Any visual asset, draft render, narrative script, or commercial treatment created during production remains confidential until the brand publicly debuts the campaign or grants written permission for portfolio inclusion.`,
  },
  {
    number: '05',
    title: 'Intellectual Property & Commercial Rights',
    icon: Eye,
    content: `Upon full completion of a commissioned project and final settlement of agreed fees, commercial usage rights and high-resolution master assets (4K/8K stills, ProRes video files, motion renders) are transferred to the client as stipulated in the specific project agreement.

Peony Luxe AI retains the right to display non-confidential deliverables in our official portfolio and showreels only upon mutual agreement or public launch.`,
  },
  {
    number: '06',
    title: 'Data Retention & Security Safeguards',
    icon: ShieldCheck,
    content: `We implement modern encryption and multi-tier access controls:

• Communication Channels: Form submissions are routed through encrypted transmission endpoints to our dedicated studio correspondence team.
• Asset Archives: Project working files are archived on encrypted cloud infrastructure and retained only for the duration required for asset handoff and backup support.
• Right of Erasure: You may request the permanent deletion of your contact records or creative briefs from our internal systems at any time.`,
  },
];

export default function PrivacyPolicy() {
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
                LEGAL & CONFIDENTIALITY
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-heading font-extrabold text-white tracking-tight leading-[1.08] mb-6">
              Privacy{' '}
              <span className="bg-gradient-to-r from-white via-white/95 to-[#A78BFA] bg-clip-text text-transparent">
                Policy.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#9DA3AF] font-normal leading-relaxed">
              Transparency, discretion, and creative integrity. Discover how Peony Luxe AI safeguards your proprietary concepts, brand assets, and digital inquiries.
            </p>

            <div className="mt-5 flex items-center gap-4 text-xs font-mono text-[#8E95A5]">
              <span>EFFECTIVE DATE: SEPTEMBER 2026</span>
              <span>•</span>
              <span>VERSION 2.4</span>
            </div>
          </motion.div>

          {/* Structured Policy Clauses Grid */}
          <div className="space-y-6 sm:space-y-8">
            {sections.map((section, index) => {
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

          {/* Contact Atelier Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#11131E] to-[#0A0B10] border border-white/[0.1] flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-mono tracking-[0.24em] text-[#8967FD] uppercase font-semibold">
                CONFIDENTIAL INQUIRIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                Require a Mutual NDA Before Discussion?
              </h3>
              <p className="text-sm text-[#9DA3AF] leading-relaxed">
                We routinely execute client-furnished or studio NDAs for embargoed brand launches, private studio commissions, and unreleased IP.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center p-[1px] rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_28px_rgba(137,103,253,0.45)]"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6286FE] via-[#8967FD] to-[#D770FF] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center px-6 py-3.5 rounded-full bg-[#0E1016]/90 group-hover:bg-[#12141D]/80 backdrop-blur-md transition-all duration-300 text-xs sm:text-[13px] font-heading font-semibold text-white tracking-wider uppercase overflow-hidden">
                  <span className="relative z-10">Initiate Commission</span>
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
