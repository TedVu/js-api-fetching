const express = require("express");
const app = express();
const axios = require("axios");

const port = 3000 || env.PORT;

async function getTodoItem() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}

app.get("/", (req, res) => {
  getTodoItem();
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
