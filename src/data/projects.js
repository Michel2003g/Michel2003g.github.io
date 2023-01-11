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

const projects = [
    new project(
        "https://batdongsantoanquoc.net/no-image.png",
        "Portfolio",
        "This website",
        [
            new tag("Html", "#1ad9ff"),
            new tag("Css", "#1ad9ff"),
            new tag("Js", "#1ad9ff"),
            new tag("React", "#1ad9ff")
        ]
    ),
]

export default projects;