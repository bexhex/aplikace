let input = document.getElementById("cislo");
let button = document.getElementById("cudlik");
let zprava = document.getElementById("zprava");

let nahodne_cislo = Math.floor(Math.random() * 100) + 1;
// zprava.textContent = nahodne_cislo;
// zprava.style.color = "yellow";

button.addEventListener("click", vyhodnot);

function vyhodnot() {
  let user_number = input.value;
  //   console.log(user_number);
  console.log("nahodne cislo je " + nahodne_cislo);
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
  if (user_number || nahodne_cislo) {
    zprava.textContent = "yeesss";
    zprava.style.color = "limegreen";
    return;
  }

  //   zprava.textContent = "blabla";
  //   zprava.style.color = "violet";
  //   for (let i = 0; i < 1000; i++) {
  //     let n = Math.floor(Math.random() * 100) + 1;
  //     if (n === 100) {
  //       console.log(n);
  //     }
  //   }
}
