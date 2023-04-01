const bubbleMaker = () => {
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

  // bubble.style.setProperty("--left", Math.random() * 100 + "%");
  // pour modifier la var CSS aleatoirement
  // mais les bulles partent trop a droite, donc :

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // pour renvoyer un (--left) négatif aléatoirement
  bubble.style.setProperty("--left", Math.random() * 100 + plusMinus + "%"); // pour modifier la var CSS aleatoirement

  // disparition des bulles au click
  bubble.addEventListener("click", () => {
    bubble.remove();
  });

  //   setTimeout pour supprimer les bulles après 8s ..
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleMaker, 1000); // appeler bubbleMaker toutes les 0.3s ...
