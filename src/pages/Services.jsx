import PageTransition from '../components/animations/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ServiceCard from '../components/ui/ServiceCard';
import { services } from '../data/services';

export default function Services() {
  return (
    <PageTransition>
      <div className="container-custom section-padding">
        <SectionTitle
          badge="Capabilities"
          title="Bespoke AI Creative"
          highlight="Services"
          subtitle="Merging human artistic sensibility with world-class generative AI models to deliver cinematic distinction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
