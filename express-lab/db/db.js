const faker = require("faker");
const people = [];
for (let index = 0; index < 100; index++) {
  people.push({
    name: faker.name.findName(),
    email: faker.internet.email(),
    favoritQuote: faker.lorem.sentence(),
    pic: faker.image.nature(640, 480, true),
    followers: `${Math.floor(Math.random() * 100)}k`,
    job: faker.name.jobTitle()
  });
}
console.log(faker.image.people())
exports.getAll = ()=> people
