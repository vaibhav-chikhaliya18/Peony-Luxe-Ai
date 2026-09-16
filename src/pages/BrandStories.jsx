import PageTransition from '../components/animations/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function BrandStories() {
  const brandProjects = projects.filter(
    (p) => p.category === 'Brand Stories' || p.services?.includes('Brand Stories')
  );

  return (
    <PageTransition>
      <div className="container-custom section-padding">
        <SectionTitle
          badge="Storytelling"
          title="Narrative"
          highlight="Brand Stories"
          subtitle="Sculpting emotionally resonant visual worlds and timeless narratives for forward-thinking luxury brands."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {brandProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
