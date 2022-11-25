import React from "react";
import "./PortfolioModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

class PortfolioModal extends React.Component {
    render() {
        if (!this.props.project) return;
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
            clickFunction,
        } = this.props;
        return (
            <div>
                <div className="portfolio-modal-bg"></div>
                <div className="portfolio-modal">
                    <FontAwesomeIcon icon={faXmark} className="modal-x" onClick={clickFunction} />
                    <img src={imgPath} className="portfolio-modal-img"></img>
                    <h2>{name}</h2>
                    <div className="description-short">{descriptionShort}</div>
                    <div className="description-long">{descriptionLong}</div>
                    <div className="language-logos">
                        {technologies.map((item, index) => <img src={item.logo} key={index} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioModal;