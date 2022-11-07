import React from "react";
import logo from "./../../assets/logo.png";
import "./Nav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
const user = <FontAwesomeIcon icon={faUser} />


const Nav = () => {
    return (
        <div className="nav-container">
            <div className="nav-left">
                <img className="flash-logo" src={logo} alt="logo" />
                <p className="flash-logo-text">Fla<span className="text-center">shT</span>ype</p>
            </div>
            <div className="nav-right">
                <a target="_blank"
                   className="nav-link"
                   href="https://github.com/TheTechGoddess"
                   rel="noreferrer">
                    {user}
                </a>
            </div>
        </div>
    ) 
}

export default Nav;