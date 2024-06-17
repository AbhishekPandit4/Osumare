const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Tsak = require("./Model/Task");

const app = express(cors());
app.use(express.json());

mongoose
  .connect("mongodb://0.0.0.0:27017/Osumare_collection")
  .then(() => {
    console.log("mongodb conntect");
  })
  .catch((error) => {
    console.log("error--->", error);
  });

app.post("/tasks", (req, res) => {
  console.log("req.body-->", req.body);
  Tsak.create(req.body).then((task) => {
    console.log("task", task);
    return res.json(task);
  });
});
app.get("/tasks", (req, res) => {
  Tsak.find()
    .then((task) => {
      console.log("task-->", task);
      return res.json(task);
    })
    .catch((err) => {
      console.log("err-->", err);
      return res.status(500).json({ error: "Error is the fetching user" });
    });
});
app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;

  Tsak.findById({_id:id})
    .then((task) => {
      if (!task) {
        return res.status(404).json({ error: "Task not found" });
      }
      console.log("task -->", task);
      return res.json(task);
    })
    .catch((err) => {
      console.log("err -->", err);
      return res.status(500).json({ error: "Error fetching task" });
    });
});
app.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  Tsak.findByIdAndUpdate(
    id,
    {
      task: req.body.task,
      disruption: req.body.disruption,
    },
    { new: true }
  ).then((task) => {
    console.log("task-->", task);
    if (!task) {
      return res.status(400).json({ error: "task not find" });
    }
    res.json(task);
  });
});
app.delete("/task/:id", (req, res) => {
  const id = req.params.id;
  Tsak.findByIdAndDelete({ _id: id })
    .then((task) => {
      return res.json({ message: "delete sucessfulle" });
    })
    .catch((err) => console.log(err));
});
app.listen(8000, () => {
  console.log("Server running");
});
