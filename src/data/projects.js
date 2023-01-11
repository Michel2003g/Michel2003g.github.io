class project {
    constructor(img, title, description, tags) {
        this.img = img;
        this.title = title;
        this.description = description;
        this.tags = tags;
    }
}

class tag {
    constructor(text, color) {
        this.text = text;
        this.color = color;
    }
}

const tags = {
    react: new tag("React", "#1ad9ff"),
    html: new tag("Html", "rgb(255, 145, 0)"),
    css: new tag("Css", "rgb(0, 153, 255)"),
    js: new tag("Js", "rgb(255, 208, 0)"),
    lua: new tag("Lua", "rgb(66, 72, 245)"),
}

const projects = [
    new project(
        "https://batdongsantoanquoc.net/no-image.png",
        "Portfolio",
        "This website",
        [
            tags.html,
            tags.js,
            tags.css,
            tags.react,
        ]
    ),
    new project(
        "https://batdongsantoanquoc.net/no-image.png",
        "CoreModular",
        "Documentation website.",
        [
            tags.html,
            tags.js,
            tags.css,
            tags.react,
        ]
    ),
    new project(
        "https://batdongsantoanquoc.net/no-image.png",
        "Meshparticles",
        "roblox module",
        [
            tags.lua
        ]
    ),
]

export default projects;