import "./About.css";

export function About() {
  return (
    <section id="About">
      <h3>ABOUT ME</h3>
      <div className="about-flex">
        <div className="about-icons">
          <img src="/HTML5_Badge_256.png" alt="HTML" />
          <img src="/1452px-CSS3_logo_and_wordmark.svg.png" alt="CSS" />
          <img src="/Javascript_Logo.png" alt="JavaScript" />
          <img src="/logo192.png" alt="React" />
          <img src="/react-router-mark-color.svg" alt="React Router" />
          <img src="/Typescript_logo_2020.svg" alt="TypeScript" />
          <img src="/1920px-Redux_Logo.png" alt="Redux" />
          <img src="/zod.svg" alt="Zod" />
          <img src="/1280px-Node.js_logo.svg.png" alt="Node" />
        </div>
        <div className="about-copy-container">
          <p>
            I started my journey with tech as a 90s kid obsessed with video
            games. Eventually, I started tinkering with my favorite games, and
            that led me to discover a passion for programming.
          </p>
          <p>
            As a student in the{" "}
            <a href="https://devslopes.com/">Devslopes Web Academy</a>, I've
            learned to find joy in the act of writing code, no matter what kind
            of project I'm working on. It's so satisfying to solve little pieces
            of a problem, one at a time, and then fit those pieces together to
            create an elegant, useful solution.
          </p>
          <p>
            When I'm not pursuing my passion for development, I enjoy hanging
            out with my wife and 4-year-old, taking late-night walks, and
            playing video games.
          </p>
        </div>
      </div>
    </section>
  );
}
