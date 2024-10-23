import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", function (request, response) {
  response.json("You are looking at my root route. How roude.");
});

app.post("/message", function (request, response) {
  const message = request.body.message;
  response.json({ Status: "Message received!" });
});

app.listen(3000, function () {
  console.log("I am running on port 3000");
});
