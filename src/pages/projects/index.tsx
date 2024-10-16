import { useState } from 'react';
import { Button, HeaderTitle } from '@/components';
import { useTheme } from '@/context/theme';
import { projectsData } from '@/utils/projects';


export const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [visibleProjects, setVisibleProjects] = useState<number>(8);

  const handleShowMoreProjects: VoidFunction = () => {
    setVisibleProjects((prevCount) => prevCount + 6);
  };

  return (
    <section id="projects" className="flex flex-col items-start justify-start min-h-screen py-12">
      <HeaderTitle level="h2" children="personal projects" align="right" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 py-28">
        {projectsData.slice(0, visibleProjects).map((project, index) => (
          <div key={index} className="flex flex-col sm:flex-row md:flex-col xl:flex-row border rounded-lg shadow-lg overflow-hidden">
            <div className="w-full sm:w-full xl:w-1/3">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="object-cover w-full h-48 sm:h-48 xl:h-full "
              />
            </div>
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h2 className={`font-extrabold text-lg ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                  {project.title}
                </h2>
                <p className={`text-base ${isDarkMode ? 'text-dark-text' : 'text-light-text'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 py-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See Project"
                  className={`py-2 px-4 rounded hover:bg-slate-400 ${isDarkMode ? 'bg-light-bg text-light-text' : 'bg-dark-bg text-dark-text'}`}
                >
                  See Project
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="See Code"
                  className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
                >
                  See Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projectsData.length && (
        <div className={`flex items-center justify-center w-full pb-12 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          <Button
            onClick={handleShowMoreProjects}
            ariaLabel="See more projects"
            isBold
            fontSize="18px"
          >
            Show more projects
          </Button>
        </div>
      )}
      <div className="h-px bg-custom-gray w-full" />
    </section>
  )
};
