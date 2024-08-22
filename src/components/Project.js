// Projects.tsx
const projectsData = [
  {
    name: "Splitter (TypeScript)",
    description: " This project base on Room Maintenance",
    tech: [
      "Reactjs",
      "TypeScript",
      "react-hook-form",
      "Yup Validation",
      "Tailwind CSS",
    ],
    image: "/images/room-main.png", // Replace with the actual image path
    liveUrl: "https://spilit-app.vercel.app/", // Replace with the actual Google Drive link
    codeUrl: "https://github.com/Syedfahed/spilit-app", // Replace with the actual GitHub repo
  },
  {
    name: "Password Generator",
    description:
      " This project base on react Hooks and use to generator Password",
    tech: ["Reactjs", "CSS", "JavaScript"],
    image: "/images/password.png", // Replace with the actual image path
    liveUrl: "https://password-generator-zeta-weld.vercel.app/", // Replace with the actual Google Drive link
    codeUrl: "https://github.com/Syedfahed/Password-Generator", // Replace with the actual GitHub repo
  },
  {
    name: "Food-Recipe",
    description: "This project base on API and use to Food Recipe",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Fetch API"],
    image: "/images/foodRecipe.png",
    liveUrl: "https://food-recipes-sooty.vercel.app/",
    codeUrl: "https://github.com/Syedfahed/food-recipes",
  },

  {
    name: "Todo List",
    description:
      "  By Entring any word you can add in list. by one click list will underline. with double click delete",
    tech: ["HTLM", "CSS", "JavaScript"],
    image: "/images/todoslist.png", // Replace with the actual image path
    liveUrl: "https://todo-app-beta-wine.vercel.app/", // Replace with the actual Render URL once deployed
    codeUrl: "https://github.com/Syedfahed/TodoApp", // Replace with the actual GitHub repo
  },
  // ... Add other projects here
];

const Projects = () => {
  return (
    <div id="projects" className="target-section bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <p className="text-center mb-12">
          I have worked on this Full-Stack, Block-Chain, AI projects. The
          Dev-Ops & Cloud Blogs are on My-Blogs-on-Tech. Here are some of my
          projects.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="mb-4 text-blue-500">{project.downloadNote}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-purple-700 text-sm rounded px-2 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Project
                </a>
                <a
                  href={project.codeUrl}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        #projects {
          scroll-margin-top: 34px; /* Adjust this value as needed */
        }
      `}</style>
    </div>
  );
};

export { Projects };
