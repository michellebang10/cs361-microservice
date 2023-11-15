/* Using material from Rob Hess' CS 290 course 
and https://blog.arnabghosh.me/bypass-cors-error */

const express = require('express')
const app = express()
const cors = require('cors')
var port = 2000

app.use(cors())

function generateRandomNumber() {
    num = Math.floor(Math.random() * 11)
    return num.toString()
}


app.get('/', (req, res) => {
    var text = generateRandomNumber()
    res.send(text)
  })

app.listen(port, function () {
    console.log("== Server is listening on port:", port)
})