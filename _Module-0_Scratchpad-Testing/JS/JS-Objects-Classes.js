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

let user2234 = new User("Jenny Rose", "Olais", 18, "Student", 7850)
let message = `${user2234.firstName} ${user2234.lastName} is an ${user2234.age} year old ${user2234.occupation} that makes $${user2234.income} per year.`
console.log(message)