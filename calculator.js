// Setup
const express = require("express");
app = express();
const port = 3000

// Body Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/response", function(req, res) {
    const num1 = Number.parseFloat(req.body.num1);
    const num2 = Number.parseFloat(req.body.num2);
    let response = 0;

    switch (req.body.operation) {
        case "sum":
            response = num1 + num2;
            break;
        case "sub":
            response = num1 - num2;
            break;
        case "mult":
            response = num1 * num2;
            break;
        case "div":
            response = num1 / num2;
            break;
        default:
            break;
    }

    res.send(`Your response is ${response}`);
});

app.listen(port, function() {
    console.log(`listening on port ${port}`)
});