const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("./db/mongoose");
const { Todo } = require("./models/Todo");
const { User } = require("./models/User");

// configuration for the express app
const PORT = 3001 || process.env.PORT;

const app = express();

// middle ware
app.use(bodyParser.json()); // get json data from the body

app.post("/todos", (req, res) => {
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then(doc => res.send(doc), e => res.status(400).send(e));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
