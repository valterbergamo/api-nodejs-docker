const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res, next) => {
  res.json(
    `Teste VPS rodando Node.JS pelo Docker na porta ${port}`
  );
});

app.get("/test", (req, res, next) => {
  res.json(["Valter", "Bergamo"]);
});

//Teste commit
