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

app.get("/servicos/start", (req, res) => {
  res.sendFile(__dirname + "/service-start.html");
});

app.get("/servicos/deployment", (req, res) => {
  res.sendFile(__dirname + "/service-deployment.html");
});

app.get("/servicos/evolution", (req, res) => {
  res.sendFile(__dirname + "/service-evolution.html");
});

app.get("/servicos/performance", (req, res) => {
  res.sendFile(__dirname + "/service-performance.html");
});

app.get("/modelo-de-negocios", (req, res) => {
  res.sendFile(__dirname + "/business.html");
});

app.get("/cabral-motors", (req, res) => {
  res.sendFile(__dirname + "/case-cabralMotors.html");
});
