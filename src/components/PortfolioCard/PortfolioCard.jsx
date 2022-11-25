import React from "react";
import "./PortfolioCard.css";

class PortfolioCard extends React.Component {
    render() {
        const {
            project: {
                name,
                technologies,
                descriptionShort,
                descriptionLong,
                githubLink,
                demoLink,
                imgPath,
            },
            index,
            expanded,
            clickFunction,
        } = this.props;
        const className = `portfolio-card ${expanded ? "portfolio-card-expanded" : ""}`;
        const style = {
            position: expanded ? "absolute" : undefined,
            left: expanded ? "60px" : undefined,
            right: expanded ? "60px" : undefined,
            top: expanded ? "60px" : undefined,
            bottom: expanded ? "60px" : undefined,
            zIndex: expanded ? "10" : undefined,
        };
        return (
            <div className={className} style={style} data-clickdata={`${name}`} onClick={clickFunction}>
                <div className="portfolio-card-img-container">
                    <img src={imgPath} />
                </div>
                <h2>{name}</h2>
                <div className="language-logos">
                    {technologies.map((item, index) => <img src={item.logo} key={index} />)}
                </div>
            </div>
        )
    }
}

export default PortfolioCard;