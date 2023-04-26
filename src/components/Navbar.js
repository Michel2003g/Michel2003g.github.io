import { HashRouter, Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const locations = [
        {text: "Home", link: "/#Home"},
        {text: "About", link: "/#About"},
        {text: "Projects", link: "/#Projects"},
        {text: "Contact", link: "/#Contact"}
    ]

  return (
    <nav className="top-nav">
        <ul className="nav-list">
            {locations.map(current => {
                return (
                    <li key={current.text} className="nav-item">
                        <a className="nav-link" href={current.link}>{current.text}</a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar
