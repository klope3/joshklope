import React from "react";
import { projects } from "../../components/constants";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import PortfolioModal from "../../components/PortfolioModal/PortfolioModal";
import "./Portfolio.css";

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = { expandedProject: undefined };
    }
    handleCardClick = event => {
        const data = event.target.dataset.clickdata;
        if (data === "close") {
            this.setState({ expandedProject: undefined });
            return;
        }
        const clickedProject = projects.find(item => item.name === data);
        this.setState({ expandedProject: clickedProject });
    }
    render() {
        return (
            <div>
                <h1>Portfolio</h1>
                <PortfolioModal project={this.state.expandedProject} clickFunction={this.handleCardClick} />
                <div className="portfolio-card-collection">
                    {projects.map((item, index) => {
                        return (
                            <PortfolioCard 
                                key={index}
                                project={item}
                                clickFunction={this.handleCardClick} />
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Portfolio;