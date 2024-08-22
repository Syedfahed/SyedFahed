import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {


  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto text-center">
        <div className="mb-4">
         
          <h2 className="text-2xl font-bold">Syed Motesim Fahed</h2>
          <nav className="flex justify-center my-4">
            <a href="#about-section" className="scroll-target mx-2">About</a>
            <a href="#skills" className="scroll-target mx-2">Skills</a>
            <a href="#projects" className="scroll-target mx-2">Projects</a>
            <a href="#education" className="scroll-target mx-2">Education</a>
          </nav>
          <div className="flex justify-center gap-4">
            {/* <a href="" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a> */}
            <a href="https://www.linkedin.com/in/syed-motesim-fahed/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
            </a>
            <a href="https://www.instagram.com/syed_fahed21/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://github.com/Syedfahed/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            {/* Add more social media icons here */}
          </div>
        </div>
        <p className="text-sm">&copy;2024 Syed Motesim Fahed. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;