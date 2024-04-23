// server.js
const express = require('express');
const path = require('path');
const { serverRender } = require('@issr/core'); // Проверьте правильность импорта здесь
const serialize = require('serialize-javascript');
const { App } = require('./src/App');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define route handler for all requests
app.get('*', async (req, res) => {
  try {
    const { html, state } = await serverRender(() => <App />);
    
    // Send the server-rendered React application as the response
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Title</title>
          <script>
            window.SSR_DATA = ${serialize(state, { isJSON: true })}
          </script>
      </head>
      <body>
          <div id="root">${html}</div>
          <script src="/client.js"></script> <!-- Changed to client.js -->
      </body>
      </html>
    `);
  } catch (error) {
    // Catch any errors that occur during server rendering
    console.error('Error during server rendering:', error);
    // Don't send Internal Server Error response, just log the error
    // res.status(500).send('Internal Server Error');
  }
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
