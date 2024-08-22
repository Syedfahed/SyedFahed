const Experience = () => {
  const experienceData = [
    {
      id: 1,
      company: "StoryTech, Hyderabad, India",
      role: "Junor Software Engineer",
      date: "January 2023 – August 2024",
      description:
        "Engaged in developing robust, Front-End-Devloper applications, focusing on both the client and server sides to deliver comprehensive business solutions. Collaborated closely with project managers, UX/UI designers, and engineers to create scalable and efficient systems.",
      imageUrl: "/images/storyTeach.png", // Ensure you have this image in your public/images directory or replace with an appropriate path
      contributions: [
        "Spearheaded the development of a dynamic job search application designed for high-volume transactions, involving extensive backend reengineering and frontend redesign.",
        "Contributed significantly to the overhaul of a legacy ERP system, employing modern development practices to enhance functionality and user engagement.",
        "Developed microservices for automating business operations, streamlining workflows, and reducing human error across various business processes.",
      ],
      tasks: [
        "Interpreted complex requirements to create detailed technical specifications for each project.",
        "Developed resilient web services and responsive user interfaces across multiple projects.",
        "Implemented comprehensive automated testing strategies to ensure robustness and reliability of software solutions.",
        "Managed backend integrations and database management using contemporary frameworks and technologies.",
      ],
      achievements: [
        "Successfully launched an job search platform ",
      ],
      technologies:
        "React, Nextjs, Angular, HTML5, CSS3, Bootstrap, TypeScript, Git, Bitbucket, ASANA, Webpack, npm",
    },
    {
        id: 2,
        company: "StoryTech, Hyderabad, India",
        role: "Web Devloper Intern",
        date: "August 2022 – January 2023",
        description:
          "Engaged in developing robust, Front-End-Devloper applications, focusing on both the client and server sides to deliver comprehensive business solutions. Collaborated closely with project managers, UX/UI designers, and engineers to create scalable and efficient systems.",
        imageUrl: "/images/storyTeach.png", // Ensure you have this image in your public/images directory or replace with an appropriate path
        contributions: [
          "Spearheaded the development of a dynamic langin page application designed for high-volume transactions, involving extensive backend reengineering and frontend redesign.",
        ],
        tasks: [
          "Developed resilient web services and responsive user interfaces across multiple projects.",
          "Implemented comprehensive automated testing strategies to ensure robustness and reliability of software solutions.",
        ],
        achievements: [
          "Successfully launched an company website langing page ",
        ],
        technologies:
          "Nextjs, HTML5, CSS3, Bootstrap, Git, Bitbucket, ASANA, Webpack, npm",
      },
  ];

  return (
    <div id="experience" className="target-section bg-gray-900 text-white p-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Professional Experience
      </h2>
      <p className="text-center mb-10">
        Below is a summary of my professional experience, highlighting my roles
        and contributions to each organization.
      </p>
      <div className="space-y-6">
        {experienceData.map((exp) => (
          <div
            key={exp.id}
            className="experience-entry bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-blue-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="flex-shrink-0 w-24 h-24 relative mb-4 lg:mb-0">
                <img
                  src={exp.imageUrl}
                  alt={`${exp.company} logo`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-bold">{exp.company}</h3>
                <p className="text-purple-400">{exp.role}</p>
                <p className="text-gray-400">{exp.date}</p>
                <p className="text-sm mt-2">{exp.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-blue-400">
                    Contributions:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    {exp.contributions.map((contribution, index) => (
                      <li key={index}>{contribution}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-green-400 mt-3">
                    Tasks:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    {exp.tasks.map((task, index) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-red-400 mt-3">
                    Achievements:
                  </h4>
                  <ul className="list-disc ml-5 text-sm text-gray-300">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  <p className="mt-2 text-orange-400">
                    <strong>Technologies Used:</strong> {exp.technologies}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        #experience {
          scroll-margin-top: 50px; /* Adjust this value as needed */
        }
        .experience-entry:hover {
          box-shadow: 0 10px 30px -5px rgba(153, 102, 255, 0.5); /* Purple glow */
          border-color: #7e22ce; /* Darker purple border */
        }
      `}</style>
    </div>
  );
};

export default Experience;
