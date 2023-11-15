async function getRandomNumber() {
    console.log("Request Sent")
    const response = await fetch("http://localhost:2000")
    const number = await response.text()
    console.log(number)
    document.getElementById("problem").textContent = number
}

/*function getRandomNumber() {
    console.log("Request Sent")
    fetch("http://localhost:2000").then((response) => response.text).then((text) => {
        document.getElementById("problem").textContent = text
    })
} */

var button = document.getElementById("num-button")
button.addEventListener("click", getRandomNumber)
