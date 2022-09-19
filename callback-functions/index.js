/*const cars = [
  { make: "Toyota", yrsOld: 5, mileage: 92399 },
  { make: "Ford", yrsOld: 12, mileage: 255005 },
  { make: "Ferrari", yrsOld: 9, mileage: 12966 },
  { make: "Subaru", yrsOld: 9, mileage: 111266 },
  { make: "Toyota", yrsOld: 2, mileage: 41888 },
  { make: "Tesla", yrsOld: 3, mileage: 57720 },
];

const returnFilteredcars = (car) => car.mileage / car.yrsOld > 20_000;
const wellDrivenCars = cars.filter(returnFilteredcars);

const printEachCar = (car) => console.log(car);

wellDrivenCars.forEach(printEachCar);*/

// Using a "lookup" data-structure minimizes code and increases flexibility
const lightSequence = [
  { color: "red", time: 3000 },
  { color: "green", time: 2000 },
  { color: "yellow", time: 1000 },
];

const lightEls = document.querySelectorAll("main > div");
let currentLightIndex = 0;

function renderLight(cb) {
  lightEls.forEach((light) => (light.style.backgroundColor = "black"));
  lightEls[currentLightIndex].style.backgroundColor =
    lightSequence[currentLightIndex].color;
  setTimeout(cb, lightSequence[currentLightIndex].time);
}

function renderLightSequence() {
  renderLight(renderLightSequence);
  currentLightIndex = ++currentLightIndex % 3;
}

renderLightSequence();
