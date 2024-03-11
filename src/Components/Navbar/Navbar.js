import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../Assets/Logo2.png'
import contactImg from '../../Assets/contact.png'
import {Link} from 'react-scroll'
import Menu from '../../Assets/menu.png'

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="desktopMenu">
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Experience</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Education</Link>
        </div>
        <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
        </button>

        <img src={Menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu? 'flex' : 'none'}}>
            <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Home</Link>
            <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >About</Link>
            <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Portfolio</Link>
            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Experience</Link>
            <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Education</Link>
            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-240} duration={500} className="listItem" onClick={() => setShowMenu(false)} >Contact</Link>
        </div>
    </nav>
  )
}
export default Navbar