import React from "react";
import portrait from "../../assets/images/joshklope.jpg";
// import { about1, about2, about3 } from "../../components/constants";
import {
  cssLogo,
  htmlLogo,
  jsLogo,
  nodeLogo,
  reactLogo,
} from "../../components/weblogos";
import "./About.css";

class About extends React.Component {
  render() {
    const logos = [htmlLogo, cssLogo, jsLogo, nodeLogo, reactLogo];
    return (
      <div>
        <div className="text-feature-box about-block">
          <h1>About Me</h1>
          <div className="about-flex">
            <div className="about-text">
              <p>
                I started my <strong>journey with tech</strong> as a 90s kid
                obsessed with video games. Eventually, I started tinkering with
                my favorite games, and that led me to discover a{" "}
                <strong>passion for programming.</strong>
              </p>
              <p>
                As a student in the <strong>Devslopes Web Academy</strong>, I've
                learned to find <strong>joy</strong> in the act of writing code,
                no matter what kind of project I'm working on. It's so
                satisfying to solve little pieces of a problem,{" "}
                <strong>one at a time</strong>, and then fit those pieces
                together to create an <strong>elegant, useful solution.</strong>
              </p>
              <p>
                When I'm not pursuing my{" "}
                <strong>passion for development</strong>, I enjoy hanging out
                with my wife and 3-year-old, taking late-night walks, and
                playing video games.
              </p>
              <div className="language-logos">
                {logos.map((item, index) => (
                  <img src={item} key={index} />
                ))}
              </div>
            </div>
            <div className="about-img"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
