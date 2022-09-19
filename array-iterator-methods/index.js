// FOR EACH
const friends = ["Melissa", "Marc", "Andrew", "Nick"];
// logs out "I have a friend named <friend's name>" for each friend
const logName = (name, idx, arr) => {
  console.log(`I have a friend named ${name.toLowerCase()}.\n`);
};

friends.forEach(logName);

// MAP
const nums = [1, 2, 3];
const squareNums = (num) => num * num;
const squared = nums.map(squareNums);
// squared --> [1, 4, 9]

/*--- using an arrow function for the callback ---*/
const instructors = ["Alex", "Ben", "Daniel", "Morgan", "Micah", "Jims"];
const coolMessage = (person) => `${person} is awesome`;
let newInstructorsArr = instructors.map(coolMessage);
console.log(newInstructorsArr);
const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
let nicePeople = people.filter((person) => !(person === "jerks"));

const cars = [
  { color: "red", make: "BMW", year: 2001 },
  { color: "white", make: "Toyota", year: 2013 },
  { color: "blue", make: "Ford", year: 2014 },
  { color: "white", make: "Tesla", year: 2016 },
];

// let firstWhiteCar = cars.find(function (car) {
//   return car.color === "white";
// });

let missingCar = cars.find(function (car) {
  return car.color === "black";
});

let firstWhiteCar = cars.find((car) => car.color === "white");
let notTooOldCar = cars.find((car) => car.year < 2014);
console.log(notTooOldCar)

const myRoom = ["evil monkey", "bed", "lamp"];
// let isEvilMonkeyInRoom = /* Fill code in here */
