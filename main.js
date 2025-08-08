let cards = document.querySelector(".cards");
let details = document.createElement("div");
details.classList.add("details");
document.querySelector(".container").appendChild(details);

let cars = [];
let localCars = JSON.parse(localStorage.getItem("cars"));
if (localCars === null) {
  localCars = cars = [];
}
cars = localCars;

for (let i = 0; i < cars.length; i++) {
  cards.innerHTML += `<div class="card  ${cars[i].name}">
  <h4 class="cerato">${cars[i].name}</h4>
  <p>Year:<span> ${cars[i].year}</span> </p>
  <p>Color:<span> ${cars[i].color}</span> </p>
  <p>Company:<span> ${cars[i].company}</span> </p>
  <p>Founded:<span> ${cars[i].founded}</span> </p>
  <button class="x" onclick="removeCard(this)">x</button></div>`;
}
function addEventLis() {
  for (var i = 0; i < document.querySelectorAll(".card").length; i++) {
    document
      .querySelectorAll(".card")
      [i].addEventListener("click", function () {
        for (let i = 0; i < document.querySelectorAll(".card").length; i++) {
          document.querySelectorAll(".card")[i].classList.remove("isSearched");
        }

        details.innerHTML = "";
        // let a = i;
        this.classList.add("isSearched");
        // console.log(this);
        // console.log(this.hasClass("cerato"));

        if (this.classList.contains("cerato")) {
          for (let car of cars) {
            if (car.name === "cerato") {
              let carLink = car.carLink;
              details.innerHTML = `
            <div class="img">
            
              <img src="${carLink}" alt="">
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sit
    consequatur iste? At porro soluta unde nostrum perspiciatis eveniet sequi?
    Eveniet error saepe nisi officia asperiores quo eligendi culpa dolorum?</div>
            </div>
            `;
            }
          }
        } else if (this.classList.contains("rio")) {
          for (let car of cars) {
            if (car.name === "rio") {
              let carLink = car.carLink;
              details.innerHTML = `
            <div class="img">
            
              <img src="${carLink}" alt="">
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sit
    consequatur iste? At porro soluta unde nostrum perspiciatis eveniet sequi?
    Eveniet error saepe nisi officia asperiores quo eligendi culpa dolorum?</div>
            </div>
            `;
            }
          }
        }

        //   console.log(5555);
      });
  }
}
addEventLis();

document.getElementById("addCar").addEventListener("click", function () {
  cards.innerHTML = "";

  let name = document.getElementById("name").value;
  let year = parseInt(document.getElementById("year").value);
  let color = document.getElementById("color").value;
  let company = document.getElementById("company").value;
  let founded = parseInt(document.getElementById("founded").value);

  if (name === "cerato") {
    var carLink =
      "https://ar.wheelz.me/wp-content/uploads/2021/06/KIA-Cerato.webp";
  } else if (name === "rio") {
    var carLink =
      "https://www.edmunds.com/assets/m/kia/rio/2022/oem/2022_kia_rio_sedan_s_fq_oem_1_815.jpg";
  }
  let newCar = { name, year, color, company, founded, carLink };

  // console.log(cars);

  if (!name || isNaN(year) || isNaN(founded) || !color || !company) {
    alert("Please enter valid input");
    return;
  }
  cars.push(newCar);

  localStorage.setItem("cars", JSON.stringify(cars));


  for (let car of cars) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(`${car.name}`);

    let carName = document.createElement("h4");
    carName.innerHTML = `${car.name}`;
    carName.classList.add(`${car.name}`);

    let carYear = document.createElement("p");
    carYear.innerHTML = `Year:<span> ${car.year}</span> `;

    let carColor = document.createElement("p");
    carColor.innerHTML = `Color:<span> ${car.color}</span> `;

    let carCompany = document.createElement("p");
    carCompany.innerHTML = `Company:<span> ${car.company}</span> `;

    let carFounded = document.createElement("p");
    carFounded.innerHTML = `Founded:<span> ${car.founded}</span> `;

    let carbutton = document.createElement("button");
    carbutton.classList.add("x");
    carbutton.innerHTML = "x";
    carbutton.setAttribute("onclick", "removeCard(this)");

    cards.appendChild(card);
    card.appendChild(carName);
    card.appendChild(carYear);
    card.appendChild(carColor);
    card.appendChild(carCompany);
    card.appendChild(carFounded);
    card.appendChild(carbutton);

    
    addEventLis();
  }
});

let cardNumber = [];
let search = document.getElementById("search");
search.addEventListener("change", function () {
  for (let i = 0; i < cars.length; i++) {

    if (cars[i].name === search.value) {
      cardNumber.push(i);
    }
  }
  cards.innerHTML = "";
  for (let i = 0; i < cardNumber.length; i++){


    cards.innerHTML += `<div class="card  ${cars[cardNumber[i]].name}">
    <h4 class="cerato">${cars[cardNumber[i]].name}</h4>
    <p>Year:<span> ${cars[cardNumber[i]].year}</span> </p>
    <p>Color:<span> ${cars[cardNumber[i]].color}</span> </p>
    <p>Company:<span> ${cars[cardNumber[i]].company}</span> </p>
    <p>Founded:<span> ${cars[cardNumber[i]].founded}</span> </p>
    <button class="x" onclick="removeCard(this)">x</button></div>`;
  }
  for (let i = 0; i < cardNumber.length; i++){

    let cardChosen = document.querySelectorAll(".card")[i];
    
  
    cardChosen.classList.add("isSearched");
  }

  
  addEventLis();
});

let x = document.querySelector("x");
function removeCard(button) {
  const card = button.parentElement;
  cars = cars.filter((obj) => obj.name !== `${card.classList[1]}`);

  card.remove();
}
