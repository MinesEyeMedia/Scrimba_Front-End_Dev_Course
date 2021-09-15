// TODO: Bored Bot Project

const containerEl = document.querySelector(".container")
const paraEl = document.querySelector("#suggestion")
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", function () {
    fetch('https://apis.scrimba.com/bored/api/activity')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            paraEl.textContent = `${data.activity}`
        })
})