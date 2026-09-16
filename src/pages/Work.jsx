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
      </div>
    </PageTransition>
  );
}
