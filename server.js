const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.json()); //body-parser(inbuilt-middleware)
app.use(express.static(path.join(__dirname,'build')));

// app.use("/", require("./server/routes/cryptoroutes")); 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on the port ${port}`);
});