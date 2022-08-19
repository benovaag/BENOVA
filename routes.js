const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("index", {
    title: "Benova - Gestão ponta a ponta do seu ecommerce",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/",
  });
});

Router.get("/servicos", (req, res) => {
  res.render("services", {
    title: "Benova - Serviços",
    url: "/servicos",
  });
});

Router.get("/servicos/one-stop-shop", (req, res) => {
  res.render("service-oneStopShop", {
    title: "Benova - One-Stop Shop",
    url: "/servicos/one-stop-shop",
  });
});

Router.get("/servicos/modular-management", (req, res) => {
  res.render("service-modularManagement", {
    title: "Benova - Modular Management",
    url: "/servicos/modular-management",
  });
});

Router.get("/servicos/start", (req, res) => {
  res.render("service-start", {
    title: "Benova - Start",
    url: "/servicos/start",
  });
});

Router.get("/servicos/deployment", (req, res) => {
  res.render("service-deployment", {
    title: "Benova - Deployment",
    url: "/servicos/deployment",
  });
});

Router.get("/servicos/evolution", (req, res) => {
  res.render("service-evolution", {
    title: "Benova - Evolution",
    url: "/servicos/evolution",
  });
});

Router.get("/servicos/performance", (req, res) => {
  res.render("service-performance", {
    title: "Benova - Performance",
    url: "/servicos/performance",
  });
});

Router.get("/modelo-de-negocios", (req, res) => {
  res.render("business", {
    title: "Benova - Modelo de Negócios",
    url: "/modelo-de-negocios",
  });
});

Router.get("/cabral-motors", (req, res) => {
  res.render("case-cabralMotors", {
    title: "Benova - Cabral Motors",
    url: "/cabral-motors",
  });
});

module.exports = Router;
