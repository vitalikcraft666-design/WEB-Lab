const express = require('express');
const path = require('path');
const app = express();

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"public/index.html"));
});

app.get("/page1", (req,res) => {
    res.sendFile(path.join(__dirname,"public/page1.html"));
});

app.get("/page2", (req,res) => {
    res.sendFile(path.join(__dirname,"public/page2.html"));
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
