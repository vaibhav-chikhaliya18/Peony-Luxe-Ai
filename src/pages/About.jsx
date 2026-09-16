import PageTransition from '../components/animations/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';

export default function About() {
  return (
    <PageTransition>
      <div className="container-custom section-padding">
        <SectionTitle
          badge="Studio Philosophy"
          title="Where Human Soul Meets"
          highlight="Machine Vision"
          subtitle="Peony Luxe AI is an international creative atelier crafting high-fidelity synthetic cinema, luxury imagery, and narrative universes."
        />

        <div className="max-w-3xl mx-auto space-y-6 text-text-secondary leading-relaxed text-base sm:text-lg mt-8">
          <p>
            Founded on the conviction that generative intelligence represents the most significant creative paradigm shift since the camera obscura, Peony Luxe AI operates at the intersection of haute couture art direction and algorithmic mastery.
          </p>
          <p>
            We do not use AI as a shortcut for volume. We treat generative diffusion models and neural video networks as luminous paintbrushes — carefully directed, rigorously prompted, and obsessively curated by award-winning art directors and visual designers.
          </p>
          <div className="pt-8 border-t border-border-brand/40 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
            <div className="p-4 rounded-xl bg-surface border border-border-brand/50">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient">2026</div>
              <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Next-Gen Studio</div>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border-brand/50">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient">8K+</div>
              <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Mastering Fidelity</div>
            </div>
            <div className="p-4 rounded-xl bg-surface border border-border-brand/50 col-span-2 sm:col-span-1">
              <div className="text-2xl sm:text-3xl font-heading font-extrabold text-gradient">Global</div>
              <div className="text-xs text-text-muted mt-1 uppercase tracking-wider">Prestige Commissions</div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
