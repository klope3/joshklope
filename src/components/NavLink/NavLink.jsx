import React from "react";
import { Link } from "react-router-dom";

class NavLinkCustom extends React.Component {
    render() {
        const { to, children } = this.props;
        return (
            <li className="navlink-li">
                <Link to={to}>
                    {children}
                </Link>
            </li>
        )
    }
}

export default NavLinkCustom;