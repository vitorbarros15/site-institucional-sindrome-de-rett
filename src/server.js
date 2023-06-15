const path = require('path');
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    // Lógica para recuperar e retornar dados de usuários
    const filePath = path.join(__dirname, '..', 'pages', 'home.html');
    res.sendFile(filePath);
  });   

const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));