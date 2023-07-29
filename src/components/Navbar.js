import { HashRouter, Link, useLocation } from "react-router-dom"

const Navbar = () => {

    const locations = [
        {text: "Home", link: "/#Home"},
        {text: "About", link: "/#About"},
        {text: "Projects", link: "/#Projects"},
        {text: "Contact", link: "/#Contact"}
    ]

    let theme = "dark";
    const themes = ["dark", "light"]

    function themeSwitch (e, overide) {

        console.log(overide);

        if (overide) {
            theme = overide;
        } else {
            if (themes[0] == theme) {
                theme = themes[1]
            } else {
                theme = themes[0]
            }
        }

        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }

    themeSwitch(null, localStorage.getItem("theme"));

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
            <button className="theme-button" onClick={themeSwitch}>Theme Style</button>
        </ul>
    </nav>
  )
}

export default Navbar
