import React from "react";
import portrait from "../assets/images/joshklope.jpg";

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="portrait">
                    <img src={portrait} />
                </div>
            </div>
        )
    }
}

export default Home;