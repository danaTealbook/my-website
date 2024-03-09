import React from "react";
import Header from "./Header";

export default function MainPage() {
    return (
        <section className="home" id="home">
            <div className="home-content">
                <h1>Hi, I'm <span>Dana Kenzhaliyeva</span></h1>
                <h3>Frontend Developer</h3>
                <p>Experienced Frontend Developer specializing in the design and implementation of real-time, distributed web applications. Skilled in the latest technologies such as React, TypeScript, and Node.js. My goal is to make websites easy to use and enjoyable for everyone.</p>
                <div className="btn-box">
                    <a href="#">Download CV</a>
                </div>
            </div>

            <div className="home-sci">
                <a href="https://www.linkedin.com/in/dana-dk/" target="_blank" rel="noopener noreferrer"><i class='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/danaTealbook" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github' ></i></a>
            </div>

            <span className="home-imgHover"></span>
        </section>
    )
}