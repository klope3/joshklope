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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            error id quae vitae beatae, accusantium quam corporis dolorum, omnis
            eveniet magnam provident explicabo quo! Doloremque ea corporis
            facilis adipisci ad.
          </div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            adipisci corrupti obcaecati aperiam cupiditate, neque distinctio sed
            ab error vero fugit ratione necessitatibus ut iure consectetur alias
            facere voluptate. Nesciunt?
          </div>
        </div>
      </div>
    </section>
  );
}
