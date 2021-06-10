const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/', (req, res) => {
  res.send("Hello World! react-express")
});

app.get('/api', (req, res) => {
  res.json({ message: "Hello api World! react-express"})
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
});
