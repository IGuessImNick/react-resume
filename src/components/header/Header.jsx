import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="topLeft">
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-github"></i>
            <i className="topIcon fa-solid fa-square-envelope"></i>
      </div>
      <div className="topRight">
        <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">RESUME</li>
            <li className="topListItem">CONTACT</li>
        </ul>
      </div>
    </div>
  )
}
