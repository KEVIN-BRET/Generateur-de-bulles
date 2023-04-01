const bubble = document.createElement("span"); // on initialise une const bubble qui va créer une <span> dans notre le <body> de notre html
bubble.classList.add("bubble");
document.body.appendChild(bubble); // on attribu la balise <span> (const bubble) comme élément de notre body

// console.log(Math.random()); // evoi un chiffe aléatoire entre 0 et 1
// console.log(Math.random() * 200 + 100); // evoi un chiffe aléatoire entre 100 et 300

const size = Math.random() * 200 + 100 + "px";
bubble.style.height = size;
bubble.style.width = size;

bubble.style.top = Math.random() * 100 + 50 + "%";
bubble.style.left = Math.random() * 100 + "%";

// bubble.style.setProperty("--left", Math.random() * 100 + "%"); // pour modifier la var CSS aleatoirement

console.log(bubble);
