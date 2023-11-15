/* Using material from Rob Hess' CS 290 course. */

var http = require("http")
var fs = require("fs")
var port = 3000


if (process.env.PORT != undefined){
    port = process.env.PORT
}

var indexHTML = fs.readFileSync("./index.html", "utf8")
console.log("== index.html read")
var indexJS = fs.readFileSync("./request.js", "utf8")
console.log("== request.js read")
var errorHTML = fs.readFileSync("./404.html", "utf8")
console.log("== 404.html read")


var server = http.createServer(function (req, res) {

    if (req.url == "/index.html" || req.url == "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write(indexHTML)
        res.end()
    } else if (req.url == "/request.js"){
        res.writeHead(200, {
            "Content-Type": "application/javascript"
        })
        res.write(indexJS)
        res.end()
    } else {
        res.writeHead(404, {
            "Content-Type": "text/html"
        })
        res.write(errorHTML)
        res.end()
    }
})

server.listen(port, function () {
	console.log("== Server is listening on port", port)
})

