import React from "react";
import portrait from "../../assets/images/joshklope.jpg";
import { introBrief, introBriefHeading } from "../../components/constants";
import "./Home.css";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="hero-area">
                    <div className="hero-area-text-container">
                        <h1>{introBriefHeading}</h1>
                        {introBrief}
                    </div>
                    <div>
                        <div className="img-circle portrait">
                            <img src={portrait} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;