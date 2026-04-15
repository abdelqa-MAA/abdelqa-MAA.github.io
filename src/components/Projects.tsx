interface Project {
  title: string;
  tech: string;
  description: string;
  link?: string;
  exhibit: string;
}

const projects: Project[] = [
  {
    title: "Project Alpha",
    tech: "React, TypeScript, Tailwind",
    description:
      "A full-featured web application with real-time data synchronization, responsive design, and an intuitive user interface that simplifies complex workflows.",
    link: "https://github.com/yourusername/project-alpha",
    exhibit: "01",
  },
  {
    title: "Project Beta",
    tech: "Node.js, PostgreSQL, Redis",
    description:
      "A scalable backend service handling thousands of concurrent requests with efficient caching strategies and robust error handling.",
    link: "https://github.com/yourusername/project-beta",
    exhibit: "02",
  },
  {
    title: "Project Gamma",
    tech: "Python, FastAPI, Docker",
    description:
      "An API-first microservice architecture designed for containerized deployment with automated testing and continuous integration.",
    link: "https://github.com/yourusername/project-gamma",
    exhibit: "03",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="border-t border-frame">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-4 p-8 border-b md:border-b-0 md:border-r border-frame">
          <h2 className="text-sm uppercase tracking-widest text-clay sticky top-8">
            Selected Works
          </h2>
        </div>
        <div className="md:col-span-8 p-8 flex flex-col gap-20 py-16 md:py-24">
          {projects.map((project) => (
            <article key={project.exhibit} className="group">
              <div className="text-xs font-medium uppercase tracking-widest text-clay mb-6">
                Exhibit {project.exhibit}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium tracking-tight font-heading">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:italic transition-all duration-300"
                      >
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm text-clay">{project.tech}</p>
                </div>
                <div className="text-sm leading-relaxed text-pretty">
                  {project.description}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
