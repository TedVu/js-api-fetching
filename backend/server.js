const express = require("express");
const app = express();
const axios = require("axios");

const port = 3000 || env.PORT;

async function getTodoItem() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);

    return res.data.title;
  } catch (err) {
    console.error(err);
  }
}

app.get("/", async (req, res) => {
  const title = await getTodoItem();
  res.send(`The title of this post is ${title}`);
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
