const express = require("express");
const Router = require("./routes.js");
const handlebars = require("express-handlebars");
const compression = require("compression");
const app = express();

// Configuração de compactação gzip
app.use(compression({
  level: 6
}));

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
