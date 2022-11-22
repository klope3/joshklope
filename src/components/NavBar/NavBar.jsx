import React from "react";
import NavLinkCustom from "../NavLink/NavLink";
import "./NavBar.css";

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavLinkCustom to="/" children={<div>Home</div>} />
                    <NavLinkCustom to="/about" children={<div>About</div>} />
                    <NavLinkCustom to="/portfolio" children={<div>Portfolio</div>} />
                    <NavLinkCustom to="/contact" children={<div>Contact</div>} />
                </ul>
            </nav>
        )
    }
}

export default NavBar;