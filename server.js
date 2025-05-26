const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para servir ficheiros estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para interpretar JSON
app.use(express.json());

// Rota de teste
app.get('/api/hello', (req, res) => {
  res.json({ msg: 'Servidor a funcionar 🔥' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});
