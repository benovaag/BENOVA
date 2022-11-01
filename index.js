const express = require("express");
const Router = require("./routes.js");
const handlebars = require("express-handlebars");
const app = express();

// Configurando o handlebars
app.engine(
  "handlebars",
  handlebars.engine({
    defaultLayout: "main",
    extname: "handlebars",
  })
);
app.set("view engine", "handlebars");
app.use(express.static("assets"));

// Configurando rotas
app.use(Router);

app.listen(3500, () => {
  console.log("Servidor rodando!");
});
