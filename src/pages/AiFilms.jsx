import PageTransition from '../components/animations/PageTransition';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

export default function AiFilms() {
  const filmProjects = projects.filter(
    (p) => p.category === 'AI Film' || p.services?.includes('AI Films')
  );

  return (
    <PageTransition>
      <div className="container-custom section-padding">
        <SectionTitle
          badge="Cinematics"
          title="AI Film"
          highlight="Production"
          subtitle="Directing machine cognition into narrative poetry, cinematic shorts, and festival-worthy conceptual cinema."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {filmProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
