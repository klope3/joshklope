import React from "react";
import portrait from "../../assets/images/joshklope.jpg";
import { about1, about2, about3 } from "../../components/constants";
import { cssLogo, htmlLogo, jsLogo, nodeLogo, reactLogo } from "../../components/weblogos";
import "./About.css";

class About extends React.Component {
    render() {
        const logos = [ htmlLogo, cssLogo, jsLogo, nodeLogo, reactLogo ];
        return (
            <div>
                <div className="text-feature-box about-block">
                    <h1>About Me</h1>
                    <div className="about-flex">
                        <div className="about-text">
                            {about1}
                            {about2}
                            {about3}
                            <div className="language-logos">
                                {logos.map((item, index) => <img src={item} key={index}/>)}
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