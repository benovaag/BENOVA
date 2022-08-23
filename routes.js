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

Router.get("/benova", (req, res) => {
  res.render("benova", {
    title: "Benova - Gestão ponta a ponta do seu ecommerce",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/",
  });
});

Router.get("/servicos", (req, res) => {
  res.render("services", {
    title: "Benova - Serviços",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos",
  });
});

Router.get("/servicos/one-stop-shop", (req, res) => {
  res.render("service-oneStopShop", {
    title: "Benova - One-Stop Shop",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos/one-stop-shop",
  });
});

Router.get("/servicos/modular-management", (req, res) => {
  res.render("service-modularManagement", {
    title: "Benova - Modular Management",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos/modular-management",
  });
});

Router.get("/servicos/start", (req, res) => {
  res.render("service-start", {
    title: "Benova - Start",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos/start",
  });
});

Router.get("/servicos/deployment", (req, res) => {
  res.render("service-deployment", {
    title: "Benova - Deployment",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos/deployment",
  });
});

Router.get("/servicos/evolution", (req, res) => {
  res.render("service-evolution", {
    title: "Benova - Evolution",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos/evolution",
  });
});

Router.get("/servicos/performance", (req, res) => {
  res.render("service-performance", {
    title: "Benova - Performance",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/servicos/performance",
  });
});

Router.get("/modelo-de-negocios", (req, res) => {
  res.render("business", {
    title: "Benova - Modelo de Negócios",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/modelo-de-negocios",
  });
});

Router.get("/cabral-motors", (req, res) => {
  res.render("case-cabralMotors", {
    title: "Benova - Cabral Motors",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/cabral-motors",
  });
});

Router.get("/branco", (req, res) => {
  res.render("case-branco", {
    title: "Benova - Branco",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/branco",
  });
});

Router.get("/gmad", (req, res) => {
  res.render("case-gmad", {
    title: "Benova - GMAD",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/gmad",
  });
});

Router.get("/crocs", (req, res) => {
  res.render("case-crocs", {
    title: "Benova - Crocs",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/crocs",
  });
});

Router.get("/dex", (req, res) => {
  res.render("case-dex", {
    title: "Benova - Dex",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/dex",
  });
});

Router.get("/uau-bobinex", (req, res) => {
  res.render("case-bobinex", {
    title: "Benova - Uau Bobinex",
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: "/uau-bobinex",
  });
});

module.exports = Router;
