import animate, {delay} from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

const random = (min, max) =>
    Math.random() * (max - min) + min;

const window_width = window.innerWidth;
// console.log(window_width);
let content;
if (window_width >= 900) {
    content = {
        h1: "Hi, I'm Fanco  :)",
        h2: "A python developer. ",
        p1: "Since turning my passion into code, I've done multi-type of projects.",
        p2: "I use python and focus on back-end.",
        p3: "I hope for working with positive people to create more ambitious products.",
        p4: "Check out my projects, and feel free to contact me.",
        button: " "
    };
} else {
    content = {
        h1: "Hi, I'm Fanco  :)",
        h2: "A python developer. ",
        p1: "Since turning my passion into code,",
        p2: "I've done multi-type of projects.",
        p3: "I hope for working with positive people",
        p4: "Check out my projects,",
        p5: "And feel free to contact me.",
        button: " "
    };
}

const elements = [];

const dom = Object.entries(content).reduce((fragment, [type, text]) => {
    const node = text.split("").reduce((element, character) => {
        const span = document.createElement("span");

        span.textContent = character;
        if (character == " ") {
            span.className = "space";
        }
        elements.push(span);
        element.append(span);
        if (element.tagName == 'BUTTON') {
            // const span = document.createElement("button");
            span.className = "fas fa-arrow-right arrow";
            element.setAttribute("id", "ckintro");
        }
        // const span = document.createElement("span");
        // span.textContent = character;
        // if (character == " ") {
        //     span.className = "space";
        // }
        // elements.push(span);
        // element.append(span);
        // if (element.tagName == 'JUMPTO') {
        //     span.className = "fas fa-arrow-right arrow";
        //     element.setAttribute("id", "ckintro");
        // }

        return element;
    }, document.createElement(type));

    fragment.append(node);
    return fragment;
}, document.createDocumentFragment());

document.body.append(dom);

export const play = async () => {
    await animate({
        elements,
        duration: 1000,
        delay: index => index * 15,
        easing: "out-elastic 1 .7",
        opacity: [0, 1],
        transform: ["scale(0)", "1"]
    });

    await animate({
        elements: document.getElementsByTagName('button')[0].children,
        easing: "in-out-cubic",
        duration: 1500,
        loop: true,
        direction: "alternate",
        blur: {x: 1, y: 2},
        transform: ["translate(0%)", "translate(80%)"]
    });

};

export const stop = async (url) => {
    await animate({
        elements,
        duration: 500,
//    delay: 300,
        easing: "out-circular",
        opacity: [1, 0],
        transform: () => [
            "translate(0vw, 0vh) scale(1) rotate(0turn)",
            `${random(-100, 100)} ${random(-100, 100)} ${random(5, 15)} ${random(-1, 1)}`
        ]
    });
    window.location.href = url

};





