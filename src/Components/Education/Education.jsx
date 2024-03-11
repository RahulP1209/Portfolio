import React from 'react'
import './Education.css'
import curajlogo from '../../Assets/img/curaj.gif'

const Education = () => {
  return (
    <div>
        <section id="educationpage">
            <div id="education">
                <h2 className="educationPageTitle">My Education</h2>
                <div className="university">
                    <img src={curajlogo} alt="Walmart" className="educationImg" />
                    <div className='university-details'>
                        <h2>Integrated Masters in Computer Science</h2>
                        <h3>Central University of Rajasthan</h3>
                        <p>Relevant Coursework:</p>
                        <span className='unidesc'>Artificial Intelligence | Machine Learning | 
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

export default Education