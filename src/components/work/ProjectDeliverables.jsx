export default function ProjectDeliverables({ project }) {
  return (
    <section id="project-deliverables" className="section-padding container-custom text-center">
      <div className="py-12 border border-dashed border-border-brand/50 rounded-2xl bg-surface/30">
        <span className="text-xs uppercase tracking-widest text-brand-violet font-semibold">
          Work Section Placeholder
        </span>
        <h2 className="text-2xl sm:text-4xl font-heading font-bold mt-3 text-text-primary">
          ProjectDeliverables
        </h2>
        {project?.deliverables && (
          <div className="mt-4 flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
            {project.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs rounded-full bg-surface border border-border-brand text-text-secondary"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
