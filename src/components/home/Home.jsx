import "./home.css"
import Me from "../../img/me.JPG"

export default function Home() {
  return (
<div className="i">
    <div className="i-left">
        <div className="i-left-wrapper">
            <h2 className="i-intro">Hey, my name is</h2>
            <h1 className="i-name">Nick Skinner</h1>
            <div className="i-title">
                <div className="i-title-wrapper">
                    <div className="i-title-item">UI/UX Designer</div>
                    <div className="i-title-item">Game Designer</div>
                    <div className="i-title-item">Full Stack Developer</div>
                    <div className="i-title-item">Musician</div>
                    <div className="i-title-item">Content Creator</div>
                </div>
            </div>
            <p className="i-desc">
                I design and develop services for customers of all sizes, blah, blah, blah
            </p>
        </div>
    </div>
    <div className="i-right">
        <img src={Me} alt="" className="i-img"/>
    </div>

</div>
  )
}
