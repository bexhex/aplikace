let input = document.getElementById("cislo");
let button = document.getElementById("cudlik");
let zprava = document.getElementById("zprava");

let nahodne_cislo = getRandomNumber();
// zprava.textContent = nahodne_cislo;
// zprava.style.color = "yellow";

button.addEventListener("click", vyhodnot);
document.addEventListener("keydown", function (e) {
  // console.log(e)
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
  // button.innerText = "neco";
  input.value = "";
  input.focus();
  //   console.log(user_number);
  if (user_number < 1 || user_number > 100) {
    zprava.textContent = "jsi idiot";
    zprava.style.color = "red";
    return;
  }
  if (user_number < nahodne_cislo) {
    zprava.textContent = "cislo je vetsi";
    zprava.style.color = "red";
    return;
  }
  if (user_number > nahodne_cislo) {
    zprava.textContent = "cislo je mensi";
    zprava.style.color = "red";
    return;
  }

  zprava.textContent = "yeesss";
  zprava.style.color = "limegreen";
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
