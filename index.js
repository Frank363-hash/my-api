const express = require('express');
const app = express();
const PORT = 3000;

// GET /
app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// GET /health
app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

// GET /me
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Francis somtochukwu Nwokeocha",     
    email: "frank.cloudbuilds@gmail.com",     
    github: "https://github.com/Frank363-hash"  
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});