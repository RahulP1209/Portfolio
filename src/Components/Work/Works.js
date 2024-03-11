import React, { useState } from 'react'
import './Works.css'
import airbnb from '../../Assets/img/airbnb.PNG'
import chatgpt from '../../Assets/img/chatgpt.PNG'
import edusity from '../../Assets/img/edusity.PNG'
import weather from '../../Assets/img/Weather.PNG'
import notes from '../../Assets/img/Notes.PNG'
import todo from '../../Assets/img/todo.PNG'
import tenzies from '../../Assets/img/Tenzies.PNG'
import signup from '../../Assets/img/signup.PNG'
import meme from '../../Assets/img/meme.PNG'
import tictactoe from '../../Assets/img/tictactoe.PNG'
import card from '../../Assets/img/card.PNG'
// import airbnbicon from '../../Assets/img/airbnbicon.png'
// import chatgpticon from '../../Assets/img/gpticon.png'
//import edusityicon from '../../Assets/img/education.jpg'
// import weathericon from '../../Assets/img/weather icon.jpg'
// import notesicon from '../../Assets/img/notesicon.png'
// import todoicon from '../../Assets/img/todoicon.png'
// import gameicon from '../../Assets/img/game.png'
// import signupicon from '../../Assets/img/logoinicon.jpg'
// import memeicon from '../../Assets/img/memeicon.png'
// import cardicon from '../../Assets/img/profile.jpg'

export const Works = () =>{
  
  const [showMore, setShowMore] = useState(false);
  
  return (
    <div>
        <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">I take pride in paying small attention to the smallest details 
            and making sure that my work is pixel perfect. I am excited to bring my skills and experience 
            to help businesses achieve their goals and create a strong online presence.</span>
            <div className="worksImgs">
              {showMore ?
                <div>
                  <img src={edusity} alt="Portfolio3" className="worksImg" />
                  <img src={airbnb} alt="Portfolio1" className="worksImg" />
                  <img src={chatgpt} alt="Portfolio2" className="worksImg" />
                  <img src={weather} alt="Portfolio4" className="worksImg" />
                  <img src={notes} alt="Portfolio5" className="worksImg" />
                  <img src={todo} alt="Portfolio6" className="worksImg" />
                  <img src={tenzies} alt="Portfolio7" className="worksImg" />
                  <img src={signup} alt="Portfolio8" className="worksImg" />
                  <img src={meme} alt="Portfolio9" className="worksImg" />
                  <img src={tictactoe} alt="Portfolio10" className="worksImg" />
                  <img src={card} alt="Portfolio11" className="worksImg" />
                </div>
              : 
                <div>
                  <img src={edusity} alt="Portfolio3" className="worksImg" />
                  <img src={airbnb} alt="Portfolio1" className="worksImg" />
                  <img src={chatgpt} alt="Portfolio2" className="worksImg" />
                  <img src={weather} alt="Portfolio4" className="worksImg" />
                  <img src={notes} alt="Portfolio5" className="worksImg" />
                  <img src={todo} alt="Portfolio6" className="worksImg" />
                </div>
              }
            </div>
            <button className="workBtn" onClick={() => setShowMore(!showMore)}>{showMore ? "See Less" : "See More"}</button>
        </section>
    </div>
  )
}





// import React, { useState } from 'react'
// import './Works.css'
// import airbnb from '../../Assets/img/airbnb.PNG'
// import chatgpt from '../../Assets/img/chatgpt.PNG'
// import edusity from '../../Assets/img/edusity.PNG'
// import weather from '../../Assets/img/Weather.PNG'
// import notes from '../../Assets/img/Notes.PNG'
// import todo from '../../Assets/img/todo.PNG'
// import tenzies from '../../Assets/img/Tenzies.PNG'
// import signup from '../../Assets/img/signup.PNG'
// import meme from '../../Assets/img/meme.PNG'
// import tictactoe from '../../Assets/img/tictactoe.PNG'
// import card from '../../Assets/img/card.PNG'

// export const Works = () =>{
//   const [showMore, setShowMore] = useState(false);
//   const worksImgs = [airbnb, chatgpt, edusity, weather, notes, todo, tenzies, signup, meme, tictactoe, card]
//   return (
//     <div>
//         <section id="works">
//             <h2 className="worksTitle">My Portfolio</h2>
//             <span className="worksDesc">I take pride in paying small attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
//             <div className="worksImgs">
//               {showMore ? worksImgs.map((img, index) => (
//                 <img src={img} alt={`Portfolio${index + 1}`} className="worksImg" key={index} />
//               )) : worksImgs.slice(0, 6).map((img, index) => (
//                 <img src={img} alt={`Portfolio${index + 1}`} className="worksImg" key={index} />
//               ))}
//             </div>
//             <button className="workBtn" onClick={() => setShowMore(!showMore)}>{showMore ? "See Less" : "See More"}</button>
//         </section>
//     </div>
//   )
// }





// import React from 'react'
// import './Works.css'
// import airbnb from '../../Assets/img/airbnb.PNG'
// import chatgpt from '../../Assets/img/chatgpt.PNG'
// import edusity from '../../Assets/img/edusity.PNG'
// import weather from '../../Assets/img/Weather.PNG'
// import notes from '../../Assets/img/Notes.PNG'
// import todo from '../../Assets/img/todo.PNG'
// import tenzies from '../../Assets/img/Tenzies.PNG'
// import signup from '../../Assets/img/signup.PNG'
// import meme from '../../Assets/img/meme.PNG'
// import tictactoe from '../../Assets/img/tictactoe.PNG'
// import card from '../../Assets/img/card.PNG'

// export const Works = () => {
//   return (
//     <div>
//         <section id="works">
//             <h2 className="worksTitle">My Portfolio</h2>
//             <span className="worksDesc">I take pride in paying small attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span>
//             <div className="worksImgs">
//                 <img src={airbnb} alt="Portfolio1" className="worksImg" />
//                 <img src={chatgpt} alt="Portfolio2" className="worksImg" />
//                 <img src={edusity} alt="Portfolio3" className="worksImg" />
//                 <img src={weather} alt="Portfolio4" className="worksImg" />
//                 <img src={notes} alt="Portfolio5" className="worksImg" />
//                 <img src={todo} alt="Portfolio6" className="worksImg" />
//                 <img src={tenzies} alt="Portfolio7" className="worksImg" />
//                 <img src={signup} alt="Portfolio8" className="worksImg" />
//                 <img src={meme} alt="Portfolio9" className="worksImg" />
//                 <img src={tictactoe} alt="Portfolio10" className="worksImg" />
//                 <img src={card} alt="Portfolio11" className="worksImg" />
//             </div>
//             <button className="workBtn">See More</button>
//         </section>
//     </div>
//   )
// }
