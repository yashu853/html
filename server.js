const express = require('express');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = 3000;

// Route for root `/` path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

// Use /api routes
app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
