import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({ connectionString: process.env.DATABASE_URL });

app.get("/", function (request, response) {
  response.json("This is my root route.");
});

app.post("/message", async function (request, response) {
  const message = await request.body.message;
  // db.query(
  //   `INSERT INTO students (firstname, lastname) VALUES ('${message["message"]}','${message["message"]}'`
  // );
  console.log(message);
  response.json({ Status: "Message received!" });
});
app.get("/message", async function (req, resp) {
  const result = await db.query(`SELECT * FROM students`);
  const message = result.rows;
  resp.json(message);
});
app.listen(3000, function () {
  console.log("I am running on port 3000");
});
