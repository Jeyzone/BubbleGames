const counterDisplay = document.querySelector("h2");
let counter = 0;
let totalTime = 15000;

const bubbleMaker = () => {
  const bubble = document.createElement("span"); // Creer une balise
  bubble.classList.add("bubble"); // Ajouter une class depuis CSS
  document.body.appendChild(bubble); // Creer une class

  const size = Math.random() * 200 + 100 + "px"; // Met des chiffres dans la console entre 100px et 300px

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%"; // Pour que la bulle part de bas en haut grace au + 50
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1; // c'est un IfElse si le cond est plus grand que 0.5 on fait x1 sinon x-1
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  setTimeout(() => {
    bubble.remove();
  }, 5000);
};
setInterval(bubbleMaker, 500);
