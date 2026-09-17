import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectHero from '../components/work/ProjectHero';
import ProjectOverview from '../components/work/ProjectOverview';
import WhatWeCreated from '../components/work/WhatWeCreated';
import CreativeDirection from '../components/work/CreativeDirection';
import ProjectGallery from '../components/work/ProjectGallery';
import ProjectFilm from '../components/work/ProjectFilm';
import ProjectProcess from '../components/work/ProjectProcess';
import ProjectDeliverables from '../components/work/ProjectDeliverables';
import NextProject from '../components/work/NextProject';
import PageTransition from '../components/animations/PageTransition';

export default function ProjectDetails() {
  const { slug } = useParams();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[currentIndex];

  if (slug === 'ai-short-film' || project?.category === 'AI Films' || project?.category === 'AI Film') {
    return <Navigate to="/ai-films" replace />;
  }

  if (!project) {
    return (
      <PageTransition>
        <div className="container-custom section-padding min-h-[60vh] flex flex-col items-center justify-center text-center">
          <span className="px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest text-brand-magenta bg-brand-magenta/10 border border-brand-magenta/20 rounded-full">
            404
          </span>
          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary">
            Project Not Found
          </h1>
          <p className="mt-4 text-text-secondary text-sm sm:text-base max-w-md">
            The project you are looking for does not exist or has been relocated.
          </p>
          <Link
            to="/work"
            className="mt-8 px-6 py-2.5 rounded-full text-sm font-semibold bg-surface-elevated text-text-primary border border-border-brand hover:border-text-secondary transition-all"
          >
            &larr; Back to Our Work
          </Link>
        </div>
      </PageTransition>
    );
  }

  // Find next project in circular order
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <WhatWeCreated project={project} />
      <CreativeDirection project={project} />
      <ProjectGallery project={project} />
      <ProjectFilm project={project} />
      <ProjectProcess project={project} />
      <ProjectDeliverables project={project} />
      <NextProject nextProject={nextProject} />
    </PageTransition>
  );
}
