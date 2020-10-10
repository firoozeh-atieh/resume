import React, { Component } from 'react';
import { Link, Element } from 'react-scroll';
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      
      <header >
         <nav id="nav-wrap">
            <ul id="nav" className="nav">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} delay={0}>  
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               </Link>
               <Link activeClass="active" to="About" spy={true} smooth={true} offset={50} duration={500} delay={0}>   
               <li><a className="smoothscroll" href="#about">About</a></li>
               </Link>
               <Link activeClass="active" to="Skills" spy={true} smooth={true} offset={50} duration={500} delay={0}>
             <li><a className="smoothscroll" href="#resume">Skills</a></li>
             </Link>
            </ul>
         </nav>

        

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}