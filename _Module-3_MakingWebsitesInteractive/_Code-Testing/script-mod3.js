// stores the leads
let myLeads = []

// grabs the html elements
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#save-btn")
const deleteBtn = document.querySelector("#delete-btn")
const ulEl = document.querySelector("#ul-el")

// assigns 'parsed' leads from 'myLeads' in local storage to the constant 'leadsFromLocalStorage'
const leadsFromLocalStorage = JSON.parse(localStorage.getItem(myLeads))
// if there are any leads (parsed - as JSON OBJ) in const then assign them to the array 'myLeads' and call 'renderLeads()' to display them.
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

// listens for double-click of the deleteBtn html element.
// clears localStorage, clears myLeads array, and calls 'renderLeads()'.
// we call 'renderLeads()' to clear the <li> element(s) rather than clear it manually with innerHTML for a few reasons.
// 1) the renderLeads() function is already written. 2) it's less computationally expensive.
// 3) the renderLeads() function wil already be cleared as the 'myLeads' array is already cleared in the below function therefore 'renderLeads()'
// will have nothing to actually 'render' when it runs 'ulEl.innerHTML = listItems'.
deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

// on click on button (btnEl) it will .push the .value in the input field (inputEl) to 'myLeads'.
// will set .value of input field to "" (blank), or reset it.
// will call renderLeads() function
saveBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log(localStorage.getItem("myLeads"))
})

// this function will loop through the input of the 'myLeads' array and then reassign the value into the 'listItems' variable.
// as seen, it will wrap the values in <li> tags, and then finally change the 'innerHTML' of the 'ul-el' html element with the value
// sorted in the variable 'listItems'. We do this this way for better DOM performance. This way the DOM is NOT manipulated x times during the loop.
function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
                    <li>
                        <a href="${myLeads}" target="_blank">
                            ${myLeads[i]}
                        </a>
                    </li>
                    `
    }
    ulEl.innerHTML = listItems
}


// localStorage Manipulation.
// localStorage.setItem("name", "Jacob")
// console.log(localStorage.getItem("name"))
// localStorage.clear()