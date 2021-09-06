// grab the entire form ID so we can attach an event listener to it.
const emailCollectorForm = document.getElementById("emailCollector")

// the actual event listener tied to the 'submit' button.
emailCollectorForm.addEventListener("submit", function (event) {
    // this prevents any default behaviour from happening.
    event.preventDefault()

    // grab all data (as an object) from the form tied to the submit button from the event listener above.
    const ourFormData = new FormData(event.target)
    // grab the data tied to the 'firstName' name on an input.
    const userFirstName = ourFormData.get("firstName")
    // grab the data tied to the 'emailAddress' name on an input.
    const userEmailAddress = ourFormData.get("emailAddress")

    // our new updated HTML to be injected after the event firing stored in a variable.
    const updatedHTMLContent = `
            <h2>Congratulations ${userFirstName}!</h2>
            <p>You're on your way to becoming a BBQ Master!</p>
            <p class="margin-top-kill">You will get weekly BBQ tips send to: ${userEmailAddress}</p>
            <p class="register__finePrint">We'll never share your information without your permission</p>
            `
    // grab the section#register for data injection.
    const mainContent = document.getElementById("register")
    // and finally the actual new content injection.
    mainContent.innerHTML = updatedHTMLContent

})