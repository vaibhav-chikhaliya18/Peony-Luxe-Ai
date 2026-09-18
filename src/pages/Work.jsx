import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import PageTransition from '../components/animations/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function Work() {
  return (
    <PageTransition>
      <div className="container-custom section-padding">
        <SectionTitle
          badge="Portfolio"
          title="Selected"
          highlight="Works"
          subtitle="Explore our archive of avant-garde visual campaigns, narrative AI films, and bespoke brand worlds."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-surface border border-border-brand/70 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-brand-violet/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-brand-magenta/20 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-violet/10 text-brand-violet border border-brand-violet/30 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-brand-magenta" />
              Collaborate With Us
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-bold text-text-primary mb-3">
              Ready to create your next iconic visual campaign?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mb-8">
              From bespoke AI image generation to cinematic films and brand worlds, we elevate luxury brands to the vanguard of visual art.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-brand-violet to-brand-magenta text-white shadow-lg shadow-brand-violet/25 hover:shadow-brand-magenta/40 hover:scale-105 transition-all duration-300"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
