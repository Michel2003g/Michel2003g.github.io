import { HashRouter, Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const location = useLocation();

    const locations = [
        {text: "Home", link: "/"},
        {text: "About", link: "/about"},
        {text: "Projects", link: "/projects"},
        {text: "Contact", link: "/contact"}
    ]

    console.log(location)

  return (
    <nav className="top-nav">
        <ul className="nav-list">
            {locations.map(current => {
                let active = "false"
                if (current.link === location.pathname) {
                    active = "true"
                }
                return (
                    <li className="nav-item">
                        <Link className="nav-link" active={active} to={current.link}>{current.text}</Link>
                    </li>
                )
            })}Z
        </ul>
    </nav>
  )
}

export default Navbar
