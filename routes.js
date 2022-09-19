const express = require("express");
const Router = express.Router();
const Url = "https://www.benova.ag";

Router.get("/", (req, res) => {
  res.render("index", {
    title: "Benova - Gestão ponta a ponta do seu ecommerce",
    robots: '<meta name="robots" content="index">',
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: Url,
  });
});

Router.get("/benova", (req, res) => {
  res.render("benova", {
    title: "Benova - Gestão ponta a ponta do seu ecommerce",
    robots: '<meta name="robots" content="index">',
    description:
      "Implantação e Evolução para Lojas Virtuais. Agência de e-commerce especialista em transformação de negócios digitais. Inicie a sua operação online conosco!",
    url: Url + "/benova",
  });
});

Router.get("/outsourcing", (req, res) => {
  res.render("outsourcing", {
    title: "Benova - Outsourcing",
    robots: '<meta name="robots" content="index">',
    description:
      "Terceirize serviços estratégicos com a Benova, diminua seus custos e melhore a eficiência de sua operação.",
    url: Url + "/outsourcing",
  });
});

Router.get("/servicos", (req, res) => {
  res.render("services", {
    title: "Benova - Serviços",
    robots: '<meta name="robots" content="index">',
    description:
      "Gestão completa para o seu comércio digital, ou serviços modulares que se adaptam ao momento da sua empresa.",
    url: Url + "/servicos",
  });
});

Router.get("/servicos/one-stop-shop", (req, res) => {
  res.render("service-oneStopShop", {
    title: "Benova - One-Stop Shop",
    robots: '<meta name="robots" content="index">',
    description:
      "Desenvolver, controlar e otimizar a experiência do usuário de maneira inovadora e humanizada, são os principais pilares da estratégia do One-Stop Shop.",
    url: Url + "/servicos/one-stop-shop",
  });
});

Router.get("/servicos/modular-management", (req, res) => {
  res.render("service-modularManagement", {
    title: "Benova - Modular Management",
    robots: '<meta name="robots" content="index">',
    description:
      "Customize as operações de seu negócio online com um conceito On Demand, onde você escolhe os serviços que mais se encaixam em sua estratégia digital.",
    url: Url + "/servicos/modular-management",
  });
});

Router.get("/servicos/start", (req, res) => {
  res.render("service-start", {
    title: "Benova - Start",
    robots: '<meta name="robots" content="index">',
    description:
      "Consultorias dedicadas para a evolução de sua operação digital.",
    url: Url + "/servicos/start",
  });
});

Router.get("/servicos/deployment", (req, res) => {
  res.render("service-deployment", {
    title: "Benova - Deployment",
    robots: '<meta name="robots" content="index">',
    description:
      "Auxiliamos você a optar pela plataforma ideal para sua loja online, considerando Escabilidade, Facilidade, Segurança, Custo, Flexibilidade e Conformidade.",
    url: Url + "/servicos/deployment",
  });
});

Router.get("/servicos/evolution", (req, res) => {
  res.render("service-evolution", {
    title: "Benova - Evolution",
    robots: '<meta name="robots" content="index">',
    description:
      "Dê mais um passo e evolua de forma integrada trazendo mais resultados ao seu negócio digital.",
    url: Url + "/servicos/evolution",
  });
});

Router.get("/servicos/performance", (req, res) => {
  res.render("service-performance", {
    title: "Benova - Performance",
    robots: '<meta name="robots" content="index">',
    description:
      "Consultorias dedicadas para a evolução de sua operação digital.",
    url: Url + "/servicos/performance",
  });
});

Router.get("/modelo-de-negocios", (req, res) => {
  res.render("business", {
    title: "Benova - Modelo de Negócios",
    robots: '<meta name="robots" content="index">',
    description:
      "Estruturamos como sua empresa cria, entrega e captura valor para o seu cliente.",
    url: Url + "/modelo-de-negocios",
  });
});

Router.get("/cabral-motors", (req, res) => {
  res.render("case-cabralMotors", {
    title: "Benova - Cabral Motors",
    robots: '<meta name="robots" content="index">',
    description:
      "A Benova traz uma loja com layout diferenciado e com visual moderno e totalmente customizado e também funcionalidades exclusivas para a Cabral Motor.",
    url: Url + "/cabral-motors",
  });
});

Router.get("/branco", (req, res) => {
  res.render("case-branco", {
    title: "Benova - Branco",
    robots: '<meta name="robots" content="index">',
    description:
      "Benova concluiu o projeto VTEX IO para a Branco, trazendo um novo conceito visual para loja online, novas funcionalidades e gestão completa para o e-commerce",
    url: Url + "/branco",
  });
});

Router.get("/gmad", (req, res) => {
  res.render("case-gmad", {
    title: "Benova - GMAD",
    robots: '<meta name="robots" content="index">',
    description:
      "Projeto Benova e GMAD, entregando uma loja de alta performance e rápido carregamento, design para uma navegação agradável e uma experiência focada no usuário.",
    url: Url + "/gmad",
  });
});

Router.get("/crocs", (req, res) => {
  res.render("case-crocs", {
    title: "Benova - Crocs",
    robots: '<meta name="robots" content="index">',
    description:
      "A Benova trouxe um layout totalmente customizado e diferente dentro da plataforma Mercado Shops, entregando um projeto superando as expectativas do cliente.",
    url: Url + "/crocs",
  });
});

Router.get("/dex", (req, res) => {
  res.render("case-dex", {
    title: "Benova - Dex",
    robots: '<meta name="robots" content="index">',
    description:
      "A Benova, com todo o seu Know-how em VTEX, além de um novo layout, criou e desenvolveu um aplicativo exclusivo de busca para o maior revendedor de peças Volvo.",
    url: Url + "/dex",
  });
});

Router.get("/uau-bobinex", (req, res) => {
  res.render("case-bobinex", {
    title: "Benova - Uau Bobinex",
    robots: '<meta name="robots" content="index">',
    description:
      "Projeto VTEX IO para a UAU Bobinex, onde a Benova atuou de forma completa, entregando além de novo layout, novas aplicativos e gestão completa do e-commerce.",
    url: Url + "/uau-bobinex",
  });
});

Router.get("/criar-demanda", (req, res) => {
  res.render("criar-demanda", {
    title: "Benova - Criar demanda",
    robots: '<meta name="robots" content="noindex">',
    description:
      "Crie sua demanda!",
    url: Url + "/criar-demanda",
  });
});

module.exports = Router;
