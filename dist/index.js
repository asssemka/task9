// index.js

const express = require('express');
const app = express();

// Определите здесь обработчики маршрутов и другую конфигурацию вашего сервера

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
