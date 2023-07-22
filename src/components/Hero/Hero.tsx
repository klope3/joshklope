import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export function Hero() {
  return (
    <section id="Hero" className="hero">
      <h4>Hi, I'm</h4>
      <div className="hero-flex">
        <div className="hero-headings">
          <h4>Hi, I'm</h4>
          <h1>JOSH KLOPE</h1>
          <h2>SOFTWARE DEVELOPER</h2>
        </div>
        <div className="hero-divider"></div>
        <div className="portrait"></div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        nesciunt dolorum tempore ab voluptatibus, magnam blanditiis modi optio!
        Nostrum, officiis vitae? Itaque qui porro voluptatum ea ad a sunt velit.
      </p>
      <div className="social-row">
        <a href="https://github.com/klope3" target="_blank" className="fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/josh-klope/"
          target="_blank"
          className="fa-2x"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </section>
  );
}
