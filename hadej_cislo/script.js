let input = document.getElementById("cislo");
let button = document.getElementById("cudlik");
let zprava = document.getElementById("zprava");

let nahodne_cislo = getRandomNumber();

button.addEventListener("click", vyhodnot);
document.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    vyhodnot();
  }
});

function getRandomNumber() {
  let cislo = Math.floor(Math.random() * 100) + 1;
  console.log("nahodne cislo je " + cislo);
  return cislo;
}

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
    return;
  }

  if (user_number > nahodne_cislo) {
    zprava.textContent = user_number + " ... cislo je mensi";
    zprava.style.color = "#e7e05a";
    return;
  }

  zprava.textContent = "yeesss";
  zprava.style.color = "#4eff4e";
  alert("vyhrals");
  nahodne_cislo = getRandomNumber();

  //   zprava.textContent = "blabla";
  //   zprava.style.color = "violet";
  //   for (let i = 0; i < 1000; i++) {
  //     let n = Math.floor(Math.random() * 100) + 1;
  //     if (n === 100) {
  //       console.log(n);
  //     }
  //   }
}
