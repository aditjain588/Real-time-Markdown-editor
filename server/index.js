const express = require("express");
const showdown = require('showdown');
const bodyParser = require('body-parser');
const cors = require("cors");

// middleware functions
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// api call to check if server is successfully running or not
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

converter = new showdown.Converter();

// POST request which converts text into HTML using showdown library
app.post("/convert", function(req, res, next) {
try{
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        const err = {"error": "No data found"}
        res.send(err);
    } else {
        text = req.body.content;
        html = converter.makeHtml(text);

        const result = {
            markdown : html
        }
        res.send(result)
    }
}catch(e){
    console.log("ERROR OCCURED ", e)
    res.send(e)
}
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});