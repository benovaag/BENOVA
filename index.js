const express = require("express");
const app = express();

app.use("/assets", express.static("assets"));

app.listen(3500, () => {
  console.log("Servidor rodando!");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/servicos", (req, res) => {
  res.sendFile(__dirname + "/services.html");
});

app.get("/servicos/one-stop-shop", (req, res) => {
  res.sendFile(__dirname + "/service-oneStopShop.html");
});

app.get("/servicos/modular-management", (req, res) => {
  res.sendFile(__dirname + "/service-modularManagement.html");
});
