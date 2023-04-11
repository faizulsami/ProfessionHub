import React from "react";
import "./Header.css";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <Navbar fluid={true} rounded={true}>
            <Navbar.Brand href="https://flowbite.com/">
                <span className="web-name-font ms-3 self-center whitespace-nowrap text-2xl lg:text-4xl font-semibold dark:text-white">
                ProfessionHub
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2 ">
                <button className="custom-btn me-2 text-sm p-2 lg:text-xl lg:p-3">Start Applying</button>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
            <NavLink
                to="/"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
            >
            Home
            </NavLink>
                <NavLink to="/statistics"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
                >Statistics
            </NavLink>
                <NavLink 
                to="/applied-jobs"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
                >Applied Jobs
            </NavLink>
                <NavLink 
                to="/blog"
                className={({ isActive }) =>
                isActive ? "active" : "custom-navbar-font"
            }
                >Blog
            </NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
