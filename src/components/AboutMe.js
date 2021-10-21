import React from 'react'
import './AboutMe.scss'
import '../App.css'
import {Link} from 'react-router-dom';

function AboutMe(props) {
    return (
        <div className="about-me">
            <div className="about-me-text">
            <h1>About Me</h1>
            <p>Mi nombre es Juan Camilo Goméz Rodríguez soy un ingeniero multimedia 
                en formacion, he trabajado en proyectos tanto audiovisual como de desarrollo, 
                me encanta aprender y mejorar. 
            </p>
            </div>
            <Link className='about-me-img-link' to="*">
                        <img src="https://i.pinimg.com/originals/b6/d0/e5/b6d0e50d112fa707846504a74b323bed.jpg" alt="AboutMeImg"
                        className="aboutMe-img"/>     
                </Link>
        </div>
    )
}

export default AboutMe;
