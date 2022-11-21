import React from "react";
import NavLinkCustom from "../NavLink/NavLink";
import "./NavBar.css";

class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <NavLinkCustom to="/" children={<div>Home</div>} />
                    <NavLinkCustom to="/page1" children={<div>Page 1</div>} />
                    <NavLinkCustom to="/page2" children={<div>Page 2</div>} />
                </ul>
            </nav>
        )
    }
}

export default NavBar;