const express = require('express');

const servidor = express();

const PORTA = 3000;
servidor.listen(PORTA, () => console.log('Servidor está rodando... 🔥'))
