import React from 'react'
import './Intro.css'
// import bg from '../Assets/image.png'
import btnImg from '../../Assets/hireme.png'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div className="intoContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Rahul Pandey</span> <br/>A Full Stack Developer | AI/ML programmer</span>
            <p className="introPara">I am a skilled Full Stack Developer with experience in creating visually appealing and user friendly websites.
             I also deploy AI and ML algorithms to keep up with the future.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire me" className ="btnImg"/>Hire me</button></Link>
        </div>
        {/* <img src={bg} alt="Profile" className='bg'/> */}
    </section>
  )
}

export default Intro