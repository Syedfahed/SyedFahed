import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faNodeJs,
  faGitAlt,
  faGithub,
  faAws,
  faDocker,
  faPython,
  faFigma,
  faJs,
  faNpm,
  faGitlab,
  faJenkins,
  faDigitalOcean,
  faVuejs,
  faAngular,
  faSass,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div
      id="skills"
      className="target-section bg-gray-900 text-white py-10 px-4"
    >
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-20">
        <div className="skills-container">
          <h3 className="text-2xl font-bold mb-6">Frontend</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faReact}
                size="4x"
                style={{ color: "#61DAFB" }}
              />
              <p>React</p>
            </div>
            <div className="skill-icon">
              <img
                src="/images/redux.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <p>Redux</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/Ts.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <p>logo</p>
            </div>
            {/* <div className="skill-icon">
              <img
                src="/images/Ajax.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <p>AJAX</p>
            </div> */}

            <div className="skill-icon">
              <img
                src="/images/Next.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <p>Next.js</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faHtml5}
                size="4x"
                style={{ color: "#E34F26" }}
              />
              <p>HTML5</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faCss3Alt}
                size="4x"
                style={{ color: "#1572B6" }}
              />
              <p>CSS3</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faJs}
                size="4x"
                style={{ color: "#F7DF1E" }}
              />
              <p>JavaScript</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faBootstrap}
                size="4x"
                style={{ color: "#7952B3" }}
              />
              <p>Bootstrap</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faFigma}
                size="4x"
                style={{ color: "#F24E1E" }}
              />
              <p>Figma</p>
            </div>

            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faVuejs}
                size="4x"
                style={{ color: "#42B883" }}
              />
              <p>Vue.js</p>
            </div>

            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faAngular}
                size="4x"
                style={{ color: "#DD0031" }}
              />
              <p>Angular</p>
            </div>

            {/* <div className="skill-icon">
              <FontAwesomeIcon
                icon={faSass}
                size="4x"
                style={{ color: "#FFB6C1" }}
              />
              <p>Sass</p>
            </div> */}

            <div className="skill-icon">
              <img
                src="/images/webpack.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <p>WebPack</p>
            </div>
          </div>
        </div>

        <div className="skills-container">
          <h3 className="text-2xl font-bold mb-6">Backend</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faNodeJs}
                size="4x"
                style={{ color: "#339933" }}
              />
              <p>Node.js</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faNpm}
                size="4x"
                style={{ color: "#CB3837" }}
              />
              <p>NPM</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/bitbucket.png"
                alt="logo"
                style={{ width: "60px", height: "60px" }}
              />
              <p>Bit-Bucket</p>
            </div>


            <div className="skill-icon">
              <img
                src="/images/sql.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>SQL</p>
            </div>
            <div className="skill-icon">
              <img
                src="/images/Mongo.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Mongodb</p>
            </div>
          </div>
        </div>

        {/* Devops skills */}
        {/* <div className="skills-container">
          <h3 className="text-2xl font-bold mb-6">DevOps</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faGitAlt}
                size="4x"
                style={{ color: "#F05032" }}
              />
              <p>Git</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faGithub}
                size="4x"
                style={{ color: "purple" }}
              />
              <p>GitHub</p>
            </div>

            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faGitlab}
                size="4x"
                style={{ color: "#F05032" }}
              />
              <p>GitLab</p>
            </div>

            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faDocker}
                size="4x"
                style={{ color: "#2496ED" }}
              />
              <p>Docker</p>
            </div>
            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faJenkins}
                size="4x"
                style={{ color: "#CB3837" }}
              />
              <p>Jenkins</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/kubernetes.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Kubernetes</p>
            </div>

            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faDigitalOcean}
                size="4x"
                style={{ color: "#CB3837" }}
              />
              <p>Digital-Ocean</p>
            </div>

            <div className="skill-icon">
              <FontAwesomeIcon
                icon={faAws}
                size="4x"
                style={{ color: "#FF9900" }}
              />
              <p>AWS</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/azure.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Azure</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/Bash.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Bash-Script</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/ansible.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Ansible</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/terraform.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Terraform</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/promethus.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Promethus</p>
            </div>

            <div className="skill-icon">
              <img
                src="/images/grafana.png"
                alt="logo"
                style={{ width: "64px", height: "64px" }}
              />
              <p>Grafana</p>
            </div>
          </div>
        </div> */}
      </div>
      <style jsx="true">{`
        #skills {
          scroll-margin-top: 78px; /* Adjust this value as needed */
        }
        .skills-container {
          width: 100%;
          max-width: 400px;
          background: #111827;
          border: 2px solid #2563eb;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 0 15px #2563eb;
        }
        .skill-icon {
          // color: #2563EB;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.2s;
        }
        .skill-icon p {
          margin-top: 0.5rem;
          color: #ffffff;
          font-size: 0.875rem; /* Tailwind's text-sm */
        }
        .skill-icon:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Skills;
