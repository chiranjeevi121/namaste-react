const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = 1234; // You can use any port, but Parcel often uses 1234/8080 by default

// =======================================================
// 🛑 STEP 1: Configure the Proxy Middleware for Swiggy
// =======================================================
app.use(
  '/dapi', // When the frontend requests anything starting with /dapi
  createProxyMiddleware({
    target: 'https://www.swiggy.com', // Target Swiggy's domain
    changeOrigin: true,                // Important: Changes the Origin header to the target URL
    secure: true,                      // Handles HTTPS connection to the target
    onProxyRes: function (proxyRes, req, res) {
      // Log the status code received from Swiggy's server
      console.log('Proxy Status Code from Swiggy:', proxyRes.statusCode, 'for URL:', req.url);
    }
  })
);

// =======================================================
// 🛑 STEP 2: Serve Parcel's Built Files
// =======================================================

// Assuming Parcel builds your files into a 'dist' directory
// You must run 'parcel build' first, or use a tool like 'concurrently' (see step 4)
const publicPath = path.join(__dirname, 'dist');
app.use(express.static(publicPath));

// This ensures all other routes (like deep links) fall back to your main HTML file
app.get('/*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Development Proxy Server listening at http://localhost:${port}`);
});