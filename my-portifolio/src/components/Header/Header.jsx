import React from "react";
import './Header.css';

function Header() {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <ul>
                    <li>Surafel Belachew</li>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#resume">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
