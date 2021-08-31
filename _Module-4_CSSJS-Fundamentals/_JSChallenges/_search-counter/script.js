// Extremely Basic Search String in JS //

// grab the input element.
const inputEl = document.querySelector("#searchInput")

// adds a 'keyup'(key-release) event listener on the input (search) field.
// basically this means that upon the keyboard key-release it will run the function.
// this function has a arg of 'event' and will take the target.value of event, convert it to lower case and store it in 'searchQuery'.
inputEl.addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName("name")

    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase()

        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = "block"
        } else {
            allNamesDOMCollection[i].style.display = "none"
        }
    }
})




// console.log(nameEl)