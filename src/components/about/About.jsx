import "./about.css"
import Me from "../../img/me-car.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();
export default function About() {
  return (
    <div className="about" data-aos="fade-up">
        <div className="aboutTitle">
            <h1>About Me</h1>
        </div>
        <div className="aboutContainer">
            <div className="aboutLeft">
                <img src={Me} alt="" className="aboutImg"/>
            </div>
            <div className="aboutRight">
                <div className="aboutDesc">
                    <p>I am a junior full stack web developer with experience in React.js, MongoDB, and Node.js. My hobbies including Game Design, music, etc. blah blah blah</p>
                </div>
                <div className="aboutHighlights">
                    <p className="aboutHighlightsIntro">Here are some highlights about me:</p>
                    <ul className="aboutHighlightsList">
                        <li className="aboutList">asdf</li>
                        <li className="aboutList">asdf</li>
                        <li className="aboutList">asdf</li>
                        <li className="aboutList">asdf</li>
                    </ul>
                </div>
                <div className="aboutButtonsContainer">
                    <div className="aboutButtonLeft">
                        <button className="hireBtn">Hire Me</button>
                    </div>
                    <div className="aboutButtonRight">
                        <button className="resumeBtn"> Resume</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
