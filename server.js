const { response } = require("express");
const express = require("express");
const morgan = require("morgan");
const postBank = require("./model/postBank");
const postsController = require("./controller/postsController");
const postsView = require("./view/postsView");
const postView = require("./view/postView");
const app = express();
const PORT = 3001;

app.use(morgan("dev"));
app.use(express.static("public"));

app.get("/", (req, res) =>
  postsController.handlePosts(req, res, postBank, postsView.render)
);

app.get("/posts/:id", (req, res) => {
  postsController.handleSinglePost(req, res, postBank, postView.render);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
  next();
});

app.listen(PORT, () => {
  console.log("Server is running.");
});
