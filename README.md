# cs361-microservice
Random number generator microservice.

# How to REQUEST data
Data is requested by a HTTP GET request (using Express.js). In a separate local host from the main server, the random number microservice needs to run. To initialize server, enter 'node server.js' into the terminal. To initialize the microservice, enter 'node microservice.js' into a separate terminal. 

Code is already written to initiate a HTTP GET request once the user pushes one of the "easy", "medium", or "hard" buttons on the main GUI. Code for the request can be found in "request.js".

Example call would be to press the "easy" button, then the software would call to get "http://localhost:2000/easy".

# How to RECEIVE data

Data is received using Fetch API. Once the user requests a specific URL (depending on easy/medium/hard), the HTML from the URL is received as text. 

For instance, if the user pushes the "easy" button, then the following code would be run. 

```
async function getEasyNumber() {
    console.log("Request Sent")
    const response = await fetch("http://localhost:2000/easy")
    const number = await response.text() // Random number from HTML is saved here.
    console.log(number)
    document.getElementById("problem").textContent = number // This line of code displays the random number onto GUI. Could simply choose to 'return number' if that's all you want.
}
```

# UML Sequence Diagram
<img width="948" alt="Screen Shot 2023-11-20 at 8 41 10 PM" src="https://github.com/michellebang10/cs361-microservice/assets/97151565/e1e4e0c8-9182-4b56-949b-dff482e1fd6e">
