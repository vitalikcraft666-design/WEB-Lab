const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public"));

// Маршрути
app.get("/", (req, res) => {
    res.send("<h1>Лабораторна 12</h1><a href='/float'>Float</a><br><a href='/flex'>Flex</a><br><a href='/grid'>Grid</a>");
});

app.get("/float", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "float.html"));
});

app.get("/flex", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "flex.html"));
});

app.get("/grid", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "grid.html"));
});

// Запуск сервера
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
