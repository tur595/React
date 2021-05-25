import { useProjectsValue } from "../context";

export const ProjectOverlay = ({
  setProject,
  showProjectOverlay,
  setShowProjectOverlay,
}) => {
  const { projects } = useProjectsValue();

  return (
    projects &&
    showProjectOverlay && (
      <div className="project-overlay" data-testid="project-overlay">
        <ul className="project-overlay__list">
          {projects.map((project) => (
            <li
              key={project.projectId}
              data-testid="project-overlay-action"
              aria-label={`Select project: ${project.name}`}
              role="button"
              tabIndex={0}
              onClick={() => {
                setProject(project.projectId);
                setShowProjectOverlay(false);
              }}
              onKeyDown={() => {
                setProject(project.projectId);
                setShowProjectOverlay(false);
              }}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </div>
    )
  );
};
