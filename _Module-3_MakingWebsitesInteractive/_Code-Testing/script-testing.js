// manual localStorage.setItem(s)
// localStorage.setItem("name", "Jacob")
// localStorage.setItem("age", 38)
// localStorage.setItem("country", "Canada")

// a testing object.
// let jacobObj = {
//     name: "Jacob",
//     age: 38,
//     location: "Toronto, Canada",
//     status: "engaged"
// }

// pushing the 'stringified' obj to local storage.
// localStorage can only accept STRINGS, this is a limitation of working with 'localStorage'.
// therefore, as learned from Per (Scrimba) we must run it through the JSON.stringify() method.

// localStorage.setItem("jacobOBJ", JSON.stringify(jacobObj))

// let test = localStorage.getItem("age")

// console.log(test)

console.log(localStorage.getItem("country"))
