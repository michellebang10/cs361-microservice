/*var http = require("http")
var fs = require("fs")
var port = 2000


if (process.env.PORT != undefined){
    port = process.env.PORT
}

function generateRandomNumber() {
    num = Math.floor(Math.random() * 11)
    return num.toString()
}

var server = http.createServer(function (req, res) {

    if (req.url == "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        text = generateRandomNumber()
        res.write(text)
        res.end()
    } 
})

server.listen(port, function () {
	console.log("== Server is listening on port", port)
})*/

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