require('dotenv').config();
const mongoose = require('mongoose');

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB successfully.");

    const Schema = mongoose.Schema;

    const personSchema = new Schema({
      name: { type: String, required: true },
      age: Number,
      favoriteFoods: [String]
    });

    const Person = mongoose.model("Person", personSchema);

    const small = new Person({ name: 'small', age: 20, favoriteFoods: ['pizza', 'pasta'] });

    await small.save();
    console.log(small);
    exports.PersonModel = Person;

  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
}

connectToMongo();

// let createAndSavePerson = function (done) {
//   const janeFonda = new Person({ name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] });

//   janeFonda.save(function (err, data) {
//     if (err) return console.error(err);
//     done(null, data)

//   });

// };

// arrayOfPeople = { name: "Frankie", age: 74, favoriteFoods: ["Del Taco"] },
//   { name: "Sol", age: 76, favoriteFoods: ["roast chicken"] },
//   { name: "Robert", age: 78, favoriteFoods: ["wine"] }


// const createManyPeople = (arrayOfPeople, done) => {

//   Person.create(arrayOfPeople, (err, data) => {


//     if (err) return console.error(err);
//     done(null, data)
//   })



// done(null /*, data*/);
// }

// const findPeopleByName = (personName, done) => {
//   done(null /*, data*/);
// };

// const findOneByFood = (food, done) => {
//   done(null /*, data*/);
// };

// const findPersonById = (personId, done) => {
//   done(null /*, data*/);
// };

// const findEditThenSave = (personId, done) => {
//   const foodToAdd = "hamburger";

//   done(null /*, data*/);
// };

// const findAndUpdate = (personName, done) => {
//   const ageToSet = 20;

//   done(null /*, data*/);
// };

// const removeById = (personId, done) => {
//   done(null /*, data*/);
// };

// const removeManyPeople = (done) => {
//   const nameToRemove = "Mary";

//   done(null /*, data*/);
// };

// const queryChain = (done) => {
//   const foodToSearch = "burrito";

//   done(null /*, data*/);
// };

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

// exports.createAndSavePerson = createAndSavePerson;
// exports.findPeopleByName = findPeopleByName;
// exports.findOneByFood = findOneByFood;
// exports.findPersonById = findPersonById;
// exports.findEditThenSave = findEditThenSave;
// exports.findAndUpdate = findAndUpdate;
// exports.createManyPeople = createManyPeople;
// exports.removeById = removeById;
// exports.removeManyPeople = removeManyPeople;
// exports.queryChain = queryChain;
