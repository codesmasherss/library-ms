const express = require('express');
const app = express();
const path = require('path');

// const db = require('./db/connect');
// Require the DB connect file

app.use(express.json({ limit: '2mb' }));

// Load in the routes
const booksRouter = require('./routes/books');
app.use(booksRouter);

const publicDir = path.join(__dirname, '../public');

// Let's serve the static files, remember to build them first!
app.use(express.static(publicDir));

// Server the static files for GUI
app.get(/.*/, (req, res) => res.sendFile(path.join(publicDir, 'index.html')));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`App started on http://localhost:${PORT}`));
