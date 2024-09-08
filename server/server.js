import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", function (request, response) {
  response.json("WOO HOME ROUTE WOO!!!");
});

app.get("/mistakes", async function (request, response) {
  const mistakes = await db.query("SELECT * FROM mistakes");
  response.json(mistakes.rows);
});

app.post("/mistakes", async function (request, response) {
  const maker = request.body.usernmae;
  const blunder = request.body.password;
  const newMistake = await db.query(
    "INSERT INTO mistakes (username, password) VALUES ($1, $2)",
    [username, password]
  );
  response.json(login);
});

app.listen(8080, function () {
  console.log("App is running on port 8080");
});