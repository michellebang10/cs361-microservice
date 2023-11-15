async function getRandomNumber() {
    console.log("Request Sent")
    const response = await fetch("http://localhost:2000")
    const number = await response.text()
    console.log(number)
    document.getElementById("problem").textContent = number
}

var button = document.getElementById("num-button")
button.addEventListener("click", getRandomNumber)
