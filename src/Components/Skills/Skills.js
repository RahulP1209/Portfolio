import React from 'react'
import './Skills.css'
import UIDesign from '../../Assets/img/uiux.jpg'
import FullStack from '../../Assets/img/fsd.png'
import AiMl from '../../Assets/img/aiml.png'
import DA from '../../Assets/img/da.jpg'
import RND from '../../Assets/img/rnd.jpg'

export const Skills = () => {
  return (
    <div>
        <section id="skills">
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc"> I am a skilled and passionate web designer with experience in creating visually apeealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and Illustrator.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={FullStack} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Development</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AiMl} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AI/Ml Programming</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={DA} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analysis</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={RND} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Research and Development</h2>
                        <p>This is a demo text, you can write your own content here.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
