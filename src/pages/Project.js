import React from 'react'
import "../styles/Project.css"
import { BsArrowRight } from "react-icons/bs";

const Project = () => {
  return (
    <div className='project-page'>
        <h1>My Projects</h1>
        <div className="project-type">
            <button>All</button>
            <button>Frontend</button>
            <button>Backend</button>
        </div>
        <div className="project-container">
            <div className="project">
                <div className="project-image">
                    <img src="./assets/images/lilicafe.svg" alt="lily cafe website" />
                </div>
                <div className="project-text">
                    <h2 className="project-text-title">Lily Cafe Website</h2>
                    <div className="project-text-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JAVASCRIPT</span>
                        <span>SASS</span>
                    </div>
                    <p className="project-text-detail">
                        It is a static cafe website, with a gallery of photos, in which customers can see the menu and order online. I've used Grid and Flexbox throughout the website.
                    </p>
                    <div className="project-text-show">
                        <div className='project-text-demo'>
                            <span>Demo</span>
                            <span><BsArrowRight/></span>
                        </div>
                        <div className='project-text-code'>
                            <span>Code</span>
                            <span><BsArrowRight/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project