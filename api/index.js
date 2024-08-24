const http = require("http");
const PORT = 3000;
const server = http.createServer(requestHandler);

// Faz o servidor escutar na porta definida
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
