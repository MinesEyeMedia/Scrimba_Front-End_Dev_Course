// Basic Search String in JS //

// grab the input element.
const inputEl = document.querySelector("#searchInput")

// adds a 'keyup'(on key-release) event listener tied to the input (search) field element.
// basically this means that upon the keyboard key-release it will run the event function.
inputEl.addEventListener("keyup", function (event) {
    // on key release store the value inputted to 'searchQuery' variable, after converting all to lower case for later comparisons.
    let searchQuery = event.target.value.toLowerCase()
    // grab all the elements with class name of '.name' and store in allNamesDOMCollection variable.
    let allNamesDOMCollection = document.getElementsByClassName("name")

    // the actual search action --
    // basic for loop to run through an array.
    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        // run the loop and store all the names present within 'allNamesDOMCollection' into 'currentName' after converting to lowerCase.
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase()

        // using the awesome .includes method we check to see if 'currentName' (which is storing all the 'database' names) INCLUDES the characters (one by one) of what has been inputted in the search field by the user. As this is a 'live search' it updates per keypress entered from our 'keyup' event listener above.
        if (currentName.includes(searchQuery)) {
            // if true, change the display style to 'block' for all iterations of 'allNamesDOMCollection'.
            allNamesDOMCollection[i].style.display = "block"
        } else {
            // else, display none, or essentially hide all names that don't include what the user has searched.
            allNamesDOMCollection[i].style.display = "none"
        }
    }
})