const input = document.getElementById("cislo");
const button = document.getElementById("cudlik");
const zprava = document.getElementById("zprava");
const life_element = document.getElementById("zivoty");

const MAX_LIFE = 3;
let nahodne_cislo;
let zivoty;

start_game();

button.addEventListener("click", vyhodnot);
document.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    vyhodnot();
  }
});

function start_game() {
  zivoty = MAX_LIFE;
  nahodne_cislo = getRandomNumber();
  update_srdicek()
  zprava.textContent = " "
}

function getRandomNumber() {
  let cislo = Math.floor(Math.random() * 100) + 1;
  console.log("nahodne cislo je " + cislo);
  return cislo;
}

function update_srdicek() {
  let srdicka = "";

  for (let i = 0; i < MAX_LIFE; i++) {
    if (i < zivoty) {
      srdicka += "❤️";
    } else {
      srdicka += "🖤";
    }
  }
  //🖤

  life_element.textContent = srdicka;

  if (zivoty == 0) {
    alert("konec hrani haha");
    start_game();
  }
}

update_srdicek();

function vyhodnot() {
  let user_number = Number(input.value);

  input.value = "";
  input.focus();

  if (user_number < 1 || user_number > 100) {
    zprava.textContent = "jsi idiot";
    zprava.style.color = "#00edff";
    return;
  }

  if (user_number < nahodne_cislo) {
    zprava.textContent = user_number + " ... cislo je vetsi";
    zprava.style.color = "#e7e05a";
    zivoty -= 1;
    update_srdicek();
    return;
  }

  if (user_number > nahodne_cislo) {
    zprava.textContent = user_number + " ... cislo je mensi";
    zprava.style.color = "#e7e05a";
    zivoty -= 1;
    update_srdicek();
    return;
  }

  // typek nasel cislo
  zprava.textContent = "yeesss";
  zprava.style.color = "#4eff4e";
  alert("vyhrals");
  start_game()

  //   zprava.textContent = "blabla";
  //   zprava.style.color = "violet";
  //   for (let i = 0; i < 1000; i++) {
  //     let n = Math.floor(Math.random() * 100) + 1;
  //     if (n === 100) {
  //       console.log(n);
  //     }
  //   }
}
