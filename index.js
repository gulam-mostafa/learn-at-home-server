const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/category.json");

const topics = require("./data/topics");

app.get("/", (req, res) => {
  res.send("new API Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const category_topics = topics.filter((t) => t.category_id == id);
  res.send(category_topics);
});

app.get("/topics", (req, res) => {
  res.send(topics);
});

app.get("/topics/:id", (req, res) => {
  const id = req.params.id;
  const selectTopics = topics.find((t) => t._id == id);
  res.send(selectTopics);
});

app.listen(port, () => {
  console.log("server running ", port);
});
