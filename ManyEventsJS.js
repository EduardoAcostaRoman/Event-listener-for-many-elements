let createElementBtn = document.getElementById("addElementBtn");

let elementList = document.getElementById("list");

elementList.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.target.classList.toggle("selected");
  }
});

let elementNumber = 1;

createElementBtn.addEventListener("click", () => {
  elementNumber += 1;

  let elementHTML =
    '<a href="#">Element ' +
    elementNumber +
    ' <img class="" src="../Images/icono-check.png" alt=""></a>';

  elementList.innerHTML += elementHTML;
});
