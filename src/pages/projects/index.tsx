import { Button } from "../../components/Button";
import { HeaderTitle } from "../../components/HeaderTitle";

const projectsData = [
  {
    title: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: "path/to/your/image1.jpg",
    techStack: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    imageUrl: "path/to/your/image2.jpg",
    techStack: ["Next.js", "Styled Components", "GraphQL"],
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    imageUrl: "path/to/your/image3.jpg",
    techStack: ["Vue.js", "Vuetify", "Firebase"],
  },
  {
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    imageUrl: "path/to/your/image4.jpg",
    techStack: ["Django", "PostgreSQL", "Docker"],
  }, {
    title: "Project One",
    description: "This is a brief description of Project One.",
    imageUrl: "path/to/your/image1.jpg",
    techStack: ["React", "Tailwind CSS", "Node.js"],
  },
  {
    title: "Project Two",
    description: "This is a brief description of Project Two.",
    imageUrl: "path/to/your/image2.jpg",
    techStack: ["Next.js", "Styled Components", "GraphQL"],
  },
  {
    title: "Project Three",
    description: "This is a brief description of Project Three.",
    imageUrl: "path/to/your/image3.jpg",
    techStack: ["Vue.js", "Vuetify", "Firebase"],
  },
  {
    title: "Project Four",
    description: "This is a brief description of Project Four.",
    imageUrl: "path/to/your/image4.jpg",
    techStack: ["Django", "PostgreSQL", "Docker"],
  },
];

export const Projects = () => {


  return (
    <section id="projects" className="flex flex-col items-start justify-start min-h-screen py-12 ">
      <HeaderTitle level="h3" children='personal projects' align="right" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 py-28">
        {projectsData.map((project, index) => (
          <div key={index} className="flex border rounded-lg shadow-lg overflow-hidden">
            <div className="flex-none w-1/3">
              <img src={project.imageUrl} alt={project.title} className="object-cover w-full h-full" />
              <div className="flex space-x-2 p-2">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-black font-extrabold text-lg">{project.title}</h2>
                <p className="text-black text-base">{project.description}</p>
                <p className="text-gray-400 text-sm mt-2">Lorem ipsum dolor sit amet.</p>
              </div>
              <div className="mt-4 flex space-x-4">
                <a href="#/" className="bg-emerald-900 text-white py-2 px-4 rounded hover:bg-emerald-900">See Project</a>
                <a href="#/" className="bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400">See Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full pb-12">
        <Button onClick={() => { }} ariaLabel="See more projects" isBold fontSize="18px" >
          Show more projects
        </Button>
      </div>
      <div className="h-px bg-custom-gray w-full" />
    </section>
  );
};
