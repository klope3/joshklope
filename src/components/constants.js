import { cssLogo, htmlLogo, jsLogo, nodeLogo, reactLogo } from "./weblogos";
import myTubePic from "../assets/images/project-mytube.png";
import debtFreePic from "../assets/images/project-debtfree.png";
import jsApiPic from "../assets/images/project-jsapi.png";
import battleshipPic from "../assets/images/project-nodebattleship.png";
import nodeCalcPic from "../assets/images/project-nodecalc.png";
import responsiveSitePic from "../assets/images/project-responsive.png";
import saasPic from "../assets/images/project-saas.png";

export const introBriefHeading = "Hi, I'm Josh Klope.";
export const introBrief = <p>I'm a front end developer with a passion for lots of different creative pursuits. I love making <strong>interactive experiences</strong>, discovering <strong>new technologies</strong>, and making my code a little <strong>cleaner</strong> and <strong>prettier</strong> than it was before.</p>;

export const about1 = <p>I started my <strong>journey with tech</strong> as a 90s kid obsessed with video games. Eventually, I started tinkering with my favorite games, and that led me to discover a <strong>passion for programming.</strong></p>
export const about2 = <p>As a student in the <strong>Devslopes Web Academy</strong>, I've learned to find <strong>joy</strong> in the act of writing code, no matter what kind of project I'm working on. It's so satisfying to solve little pieces of a problem, <strong>one at a time</strong>, and then fit those pieces together to create an <strong>elegant, useful solution.</strong></p>;
export const about3 = <p>When I'm not pursuing my <strong>passion for development</strong>, I enjoy hanging out with my wife and 3-year-old, taking late-night walks, and playing video games.</p>

export const technologies = [
    {
        name: "HTML",
        logo: htmlLogo,
    },
    {
        name: "CSS",
        logo: cssLogo,
    },
    {
        name: "JavaScript",
        logo: jsLogo,
    },
    {
        name: "Node",
        logo: nodeLogo,
    },
    {
        name: "React",
        logo: reactLogo,
    },
];

const [html, css, js, node, react] = technologies;
export const projects = [
    {
        name: "MyTube",
        technologies: [html, css],
        descriptionShort: "YouTube Clone",
        descriptionLong: <p>This was my first project in the Devslopes Academy. I've come a long way since then! But despite how unpolished it looks in some places, I'm still proud of the work I did with the experience I had at the time. We were given a lot of <strong>design freedom</strong>, and I took the opportunity to go <strong>above and beyond</strong>, creating <strong>my own color scheme</strong> and a simple <strong>sidebar UI</strong>. Neither of these were requirements in the project instructions.</p>,
        githubLink: "",
        demoLink: "",
        imgPath: myTubePic,
        projectType: "devslopes",
    },
    {
        name: "Responsive Website",
        technologies: [html, css],
        descriptionShort: "A Study in Implementing Mockups",
        descriptionLong: <p>In this project, we were required to implement a landing page based on some mockup images. Three images were provided, each one showing what the page should look like at <strong>different display sizes</strong>. I knew that as a professional, I would often need to <strong>implement a designer's ideas</strong>, so I was <strong>meticulous</strong> about making the page look exactly right. What I'm most proud of here is my <strong>attention to detail</strong> in imitating the mockups.</p>,
        githubLink: "",
        demoLink: "",
        imgPath: responsiveSitePic,
        projectType: "devslopes",
    },
    {
        name: "SaaS Website",
        technologies: [html, css],
        descriptionShort: "More Design Implementation",
        descriptionLong: <p>Like the Responsive Website project, this one also required us to <strong>imitate the mockups</strong> as closely as possible. This time, though, the mockups had much more content, and the arrangement of the content was more complex. I ran into lots of <strong>technical difficulties</strong> while trying to implement these complex arrangements. I'm proud of the way I was able to <strong>work through</strong> these difficulties and still produce something that was <strong>incredibly faithful</strong> to the requested design.</p>,
        githubLink: "",
        demoLink: "",
        imgPath: saasPic,
        projectType: "devslopes",
    },
    {
        name: "Node Calculator",
        technologies: [node],
        descriptionShort: "Basic Command Line Application",
        descriptionLong: <p>This is the first JavaScript project assigned by the Devslopes Web Academy. Succeeding with JavaScript is very different from succeeding with HTML and CSS, but my background with C# gave me an excellent <strong>head start</strong>. I met the requirements and <strong>eagerly tackled</strong> the bonus tasks.</p>,
        githubLink: "",
        demoLink: "",
        imgPath: nodeCalcPic,
        projectType: "devslopes",
    },
    {
        name: "Node Battleship",
        technologies: [node],
        descriptionShort: "A Mini Battleship Game",
        descriptionLong: <p>This project came in 4 parts. Parts 1 and 2 established the most basic functionality of the classic game Battleship. Parts 3 and 4 were more advanced, and were optional. I tackled all 4 parts eagerly, and went <strong>above and beyond</strong> by giving the opponent some simple AI--a task that wasn't even mentioned in the project description. This project demonstrates how much <strong>joy</strong> I find in <strong>solving complex problems</strong> and creating <strong>useful, interactive solutions.</strong></p>,
        githubLink: "",
        demoLink: "",
        imgPath: battleshipPic,
        projectType: "devslopes",
    },
    {
        name: "JS Website with API",
        technologies: [html, css, js],
        descriptionShort: "A Simple Favorites List",
        descriptionLong: <p>The goal of this project was to create a simple "My Favorites" app, where the user can <strong>interact with data</strong> from an API, choose the data they like, and assign it to a "Favorites" list. I went <strong>above and beyond</strong> by creating a <strong>unique visual style</strong> and <strong>inventing my own method</strong> of animating the move from one list to another. I then wrote an <a href="https://medium.com/@klope3/animating-list-items-with-vanilla-js-6026f7b7000d" target="_blank" rel="noopener noreferrer" className="hyperlink">article</a> outlining this method, so that other beginner developers can add a nice touch to their own sites if they choose.</p>,
        githubLink: "",
        demoLink: "",
        imgPath: jsApiPic,
        projectType: "devslopes",
    },
    {
        name: "Debt-Free Calculator",
        technologies: [html, css, react],
        descriptionShort: "A Simple React App",
        descriptionLong: <p>This project really opened my eyes to the power of React. There were lots of moving parts here, because user input in one place usually influenced multiple other areas in a variety of ways. React took a lot of the headache out of implementing these interactions. I surpassed expectations by creating my own fully functional progress bar to make loan repayment more intuitive. I then wrote an article to help other developers create their own progress bars.</p>,
        githubLink: "",
        demoLink: "",
        imgPath: debtFreePic,
        projectType: "devslopes",
    },
];