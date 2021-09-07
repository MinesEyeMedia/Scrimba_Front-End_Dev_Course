// * JavaScript Objects

// Object Creation
let personA = {
    firstName: "Jacob",
    lastName: "Mines",
    age: 38,
    maritalStatus: "Married",
    city: "Toronto",
    province: "Ontario",
    country: "Canada",
    spouseName: "Melgine"
}

// TODO: Accessing object properties
// We can use 'dot(.) notation' or 'bracket notation'
// I personally prefer dot(.) notation.

// * Dot Notation
// for this method we use the object name 'person' followed by a dot(.) and the property.
// objectName.propertyName
let userFirstName = personA.firstName
console.log(userFirstName)

// * Bracket Notation
// for this method we use square brackets [] such as when creating an array.
// objectName["propertyName"] <== notice the quotes wrapping the property name.
let userLastName = personA["lastName"]
console.log(userLastName)


// TODO: Object Methods
// an object method is a function stored within an object.
// note: we can't use arrow functions to define an object property.
let personB = {
    firstName: "Melgine",
    lastName: "Olais",
    age: 35,
    maritalStatus: "Married",
    city: "Cebu City",
    province: "Cebu",
    country: "Philippines",
    spouseName: "Jacob",
    birthYear: function () {
        return 2021 - this.age
    },
    marriedName: function () {
        return `${personB.firstName} ${personA.lastName}`
    }
}
console.log(personB.birthYear())
console.log(personB.marriedName())


// TODO: Classes - Templates/Blueprints for Objects
// a class is a template or blueprint for how you want an object constructed.
// after writing the keyword 'class' followed by the desired className, we use the 'constructor' method.
// the basic syntax is:
// class className {
//     constructor(propertyName1, propertyName2) {
//
//     }
// }

// we'll create a new class called 'Car' that takes 4 properties: make, model, year & cost.
// this will now be the template/blueprint for all new objects we make using the 'Car' class template.
// an actual example:
class Car {
    constructor(make, model, year, cost) {
        this.make = make
        this.model = model
        this.year = year
        this.cost = cost
    }
}

// TODO: To USE the Class
// we use the 'new' keyword with the the name of the class followed by the params in brackets.
// make sure to follow traditional data type rules (quotes for strings, etc.)
// let newObjName = new className(param1, param2, param3, etc)

let firstCar = new Car("Ford", "F150", 2022, 74999)
console.log(firstCar)

// we can of course also create methods within the class template
class User {
    constructor(firstName, lastName, age, occupation, income) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.occupation = occupation
        this.income = income
    }
    birthYear() {
        return 2021 - this.age
    }
}

let JRose = new User("Jenny Rose", "Olais", 18, "Student", 7850)
let message = `${JRose.firstName} ${JRose.lastName} is an ${JRose.age} year old ${JRose.occupation} that makes $${JRose.income} per year.`
console.log(message)


// TODO: Class Inheritance or 'Extending'
// we are able to 'inherit' or 'pull' CLASS properties and methods from an existing class and bring them into a new class.
// it's a slightly more complicated concept to understand but easy once you get it.
// to create a class inheritance we use the 'extend' keyword.
// we'll 'extend' or 'pull' (as I prefer to think of it) some properties/methods from the class 'User' above.
// we start with the class keyword followed by the new class name and the extend keyword followed again by the class we're 'pulling from'.
class AdditionalStats extends User {
    // the arguments within the constructor need to have ALL the params that will be used or inherited from the reference class.
    // below we're inheriting the params: firstName, lastName, age, occupation and income from the class template above called 'User'.
    constructor(firstName, lastName, age, occupation, income, gender, pronouns, sexualPreference, city, country) {
        // we use the 'super' function (with the desired arguments passed) to reference/pull from the class we're inheriting or extending from.
        super(firstName, lastName, age, occupation, income)
        // as gender, pronouns, sexualPreference, city & country are new properties, we have to declare them here as we normally would.
        this.gender = gender
        this.pronouns = pronouns
        this.sexualPreference = sexualPreference
        this.city = city
        this.country = country
    }
    // we've also created a new method called 'summary()' which console.logs our message.
    summary() {
        console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.gender} from ${this.city}, ${this.country}, who works as a ${this.occupation} making ${this.income} a year. This person uses the pronouns "${this.pronouns}" and prefers ${this.sexualPreference} sexually.`)
    }
}

// here we use the new CLASS "AdditionalStats" that is inheriting various properties from the CLASS "User" to create the new OBJECT called "Ares".
let Ares = new AdditionalStats("Ares", "Olais", 28, "Saleswoman", 10500, "Female", "She/Her", "Men", "Cebu", "Philippines")

// this will display the object and it's properties and methods.
console.log(Ares)

// this calls the 'summary()' method within the object "Ares".
Ares.summary()