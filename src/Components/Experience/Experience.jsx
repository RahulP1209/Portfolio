import React from 'react'
import './Experience.css'
import Wl from '../../Assets/img/wl.png'
import curaj from '../../Assets/img/curaj.gif'

const Experience = () => {
  return (
    <div>
        <section id="experiencepage">
            <div id="experience">
                <h2 className="experiencePageTitle">My Experience</h2>
                <div className="company">
                    <img src={Wl} alt="Webologix" className="companyImg" />
                    <div className='company-details'>
                        <h2>Full Stack Developer(MERN)</h2>
                        <h3>Webologix LLP</h3>
                        <p>Skills Utilized:</p>
                        <span className='compdesc'>Artificial Intelligence | Machine Learning | 
                        Data Structures | Data Mining & Data Warehousing | Digital Image 
                        Processing | Design & Analysis of Algorithms | Compiler Design | 
                        Mathematics | Statistics.</span>
                    </div>
                </div>
                <div className="company">
                    <img src={curaj} alt="CURAJ" className="companyImg" />
                    <div className='company-details'>
                        <h2>AI Project Intern</h2>
                        <h3>Central University of Rajasthan</h3>
                        <p>Skills Utilized:</p>
                        <span className='compdesc'>Artificial Intelligence | Machine Learning | 
                        Data Structures | Data Mining & Data Warehousing | Digital Image 
                        Processing | Design & Analysis of Algorithms | Compiler Design | 
                        Mathematics | Statistics.</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Experience