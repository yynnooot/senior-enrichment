const db = require('./db');
const Student = require('./db/models').Student;
const Campus = require('./db/models').Campus;
const Faker = require('faker');

function seed() {
  const students = [];
  for (let i = 0; i < 60; i++) {
    students.push(
      Student.create({
        firstname: Faker.name.firstName(),
        lastname: Faker.name.lastName(),
        email: Faker.internet.email(),
        campusId: Math.floor(Math.random() * 4) + 1
      })
    );
  }
  return students;
}

db
  .sync({ force: true })
  .then(() => {
    console.log('Seeding database');
    return Campus.bulkCreate([
      {
        name: 'Express',
        image: './img/Campus1.png'
      },
      {
        name: 'Node',
        image: './img/Campus2.png'
      },
      {
        name: 'React',
        image: './img/Campus3.png'
      },
      {
        name: 'Redux',
        image: './img/Campus4.png'
      }
    ]);
  })
  .then(() => {
    return Promise.all(seed());
  })
  .then(() => {
    console.log('Seeding successful');
    db.close();
    return null;
  });

