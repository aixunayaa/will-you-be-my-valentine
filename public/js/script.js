const answers_no = [
  "No",
  "AEstás seguro?",
  "Muy seguro??",
  "Enserio estás muy seguro???",
  "Pensalo bien",
  "Pensalo bien otra vez",
  "Me odias?",
  "Podemos hablar de esto?",
  "Estás hiriendo mis sentimientos",
  "No puedo creer que digas que no!",
  "You are now just being mean!",
  "Por qué me haces esto?",
  "Dame una oportunidad",
  "Cortala porfa me haces mal",
  "Ok, vayamos de nuevo."
];

const answers_yes = "Chi";

const no_button = document.getElementById("no-button");
const yes_button = document.getElementById("yes-button");

let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener("click", () => {
  let banner = document.getElementById("banner");

  if (clicks === 0) {
    banner.src = "public/images/no.gif";
    refreshBanner();
  }

  clicks++;

  const sizes = [40, 50, 30, 35, 45];
  const random = Math.floor(Math.random() * sizes.length);
  size += sizes[random];

  yes_button.style.height = `${size}px`;
  yes_button.style.width = `${size}px`;

  let total = answers_no.length;

  if (i < total - 1) {
    no_button.innerHTML = answers_no[i];
    i++;
  } else if (i === total - 1) {
    alert(answers_no[i]);
    i = 1;
    no_button.innerHTML = answers_no[0];
    yes_button.innerHTML = answers_yes;
    yes_button.style.height = "50px";
    yes_button.style.width = "50px";
    size = 50;
  }
});

yes_button.addEventListener("click", () => {
  let banner = document.getElementById("banner");
  banner.src = "public/images/yes.gif";
  refreshBanner();

  let buttons = document.getElementsByClassName("buttons")[0];
  buttons.style.display = "none";

  let message = document.getElementsByClassName("message")[0];
  message.style.display = "block";
});

function refreshBanner() {
  let banner = document.getElementById("banner");
  let src = banner.src;
  banner.src = "";
  banner.src = src;
}
