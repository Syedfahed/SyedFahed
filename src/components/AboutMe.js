import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useMemo, useState } from "react";

const AboutMe = () => {
  const titles = useMemo(
    () => ["Front-End Developer", "Entrepreneur", "UI/UX Interface"],
    []
  );
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    // Title cycle effect
    const cycleTitles = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitle((prevTitle) => {
          const currentIndex = titles.indexOf(prevTitle);
          const nextIndex = (currentIndex + 1) % titles.length;
          return titles[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 3000);

    // Scroll to about-section on initial load
    const targetElement = document.getElementById("about-section");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }

    // Smooth scroll effect for navigation
    const handleSmoothScroll = (event) => {
      if (event.target.matches(".scroll-target")) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    // Clean up
    return () => {
      clearInterval(cycleTitles);
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, [titles]); // Depend on titles to prevent multiple intervals
  return (
    <main id="about-section" className="pt-16 bg-gray-900 text-white">
      <section className="flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-purple-600">
            <img
              src="/images/syed.jpg"
              alt="Profile Picture"
              className=" bg-cover w-full h-auto"
            />
          </div>

          <div className="scroll-section text-center md:pl-6 -mt-20 ">
            <h1 className="text-5xl font-bold">
              Hi, I am <br /> Syed Motesim Fahed
            </h1>
            <p
              className={`text-purple-500 text-3xl font-light mt-4 ${
                fade ? "fade-enter-active" : "fade-exit-active"
              }`}
            >
              {currentTitle}
            </p>
            <p className="mt-4 max-w-6xl mx-4">
              I'm Syed Motesim Fahed, a passionate Front-End Developer with
              a deep understanding of modern web technologies. With expertise in
              React.js, Next.js, Tailwind CSS, and Bootstrap, I specialize in
              creating dynamic and responsive user interfaces. I enjoy turning
              complex problems into simple, beautiful, and intuitive designs. My
              journey in web development has been driven by a desire to
              continuously learn and grow. Whether I'm building a small API or a
              full-scale web application, I strive to deliver high-quality code
              that meets user needs while being maintainable and scalable.
              <br />
              I'm particularly adept at state management using localStorage in
              React.js projects, and I have a preference for using Ant Design's
              search input for filtering and displaying data. I am always eager
              to take on new challenges, whether it's learning a new technology
              or optimizing an existing one.
              <br />
              If you’re looking for someone who is not only skilled but also
              enthusiastic about web development, let's connect. I'm excited to
              bring my skills to a growth-oriented team where I can contribute
              and thrive.
              <br></br>
              <span className="md:mt-5 font-bold">
                <a
                  href="/resume/syed-fahed.pdf"
                  download="syed-fahed-resume.pdf"
                  className="mt-4 md:mt-3 ml-5 inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300"
                >
                  My Resume
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <style  jsx="true" >{`
        .scroll-section::before {
          content: "";
          display: block;
          height: 90px;
          visibility: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        .fade-enter {
          opacity: 0;
        }
        .fade-enter-active {
          opacity: 1;
          transition: opacity 500ms;
        }
        .fade-exit {
          opacity: 1;
        }
        .fade-exit-active {
          opacity: 0;
          transition: opacity 500ms;
        }
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
        .fade-enter-active {
          animation: fadeInOut 3s ease-in-out infinite;
        }
        .fade-exit-active {
          animation: fadeInOut 3s ease-in-out infinite;
        }

        .nav-item::before {
          content: "";
          position: absolute;
          bottom: -5px; // Adjusted to appear at the bottom
          left: 0;
          width: 100%; // Span the full width of the nav item
          height: 2px; // Thickness of the blue line
          background-color: transparent;
          transition: background-color 0.3s ease-in-out;
        }
        .nav-item:hover::before {
          background-color: blue; // Blue line appears on hover
        }
      `}</style>
    </main>
  );
};
export { AboutMe };
