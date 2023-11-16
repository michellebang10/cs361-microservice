/* Using Fetch API: 
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */

async function getEasyNumber() {
    console.log("Request Sent")
    const response = await fetch("http://localhost:2000/easy")
    const number = await response.text()
    console.log(number)
    document.getElementById("problem").textContent = number
}

var easyButton = document.getElementById("easy-button")
easyButton.addEventListener("click", getEasyNumber)

async function getMedNumber() {
    console.log("Request Sent")
    const response = await fetch("http://localhost:2000/medium")
    const number = await response.text()
    console.log(number)
    document.getElementById("problem").textContent = number
}

var medButton = document.getElementById("medium-button")
medButton.addEventListener("click", getMedNumber)

async function getHardNumber() {
    console.log("Request Sent")
    const response = await fetch("http://localhost:2000/hard")
    const number = await response.text()
    console.log(number)
    document.getElementById("problem").textContent = number
}

var hardButton = document.getElementById("hard-button")
hardButton.addEventListener("click", getHardNumber)