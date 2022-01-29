const express = require("express");
const app = express();
app.get("/", (req, resp) => {
  resp.send("----Hello Kalyan Chandra ----");
});

app.get("/api/courses", (req, resp) => {
  resp.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, resp) => {
  resp.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, resp) => {
  resp.send(req.query);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
