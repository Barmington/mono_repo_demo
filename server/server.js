import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/message", function (request, response) {
  console.log("request.body");
  response.json({ Status: "Message received!" });
});

app.listen(3000, function () {
  console.log("I am running on port 3000");
});
