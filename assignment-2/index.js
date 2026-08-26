import express from "express";
import "dotenv/config";
import { checkPrimeNumber } from "./utils.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.post("/api/numbers/prime/validate", (req, res) => {
  const data = req.body;
  const arrNum = data.numbers;
  for (let index = 0; index < arrNum.length; index++) {
    if (checkPrimeNumber(arrNum[index]) === false) {
      res.send(false);
      return;
    }
  }
  res.send(true);
});

app.get("/api/numbers/prime", (req, res) => {
  const amount = req.query.amount;
  const primNumbers = [];
  let num = 2;
  while (primNumbers.length < amount) {
    if (checkPrimeNumber(num)) {
      primNumbers.push(num);
    }
    num++;
  }
  res.send(primNumbers);
});

app.get("/api/numbers/prime/display", (req, res) => {
  const amount = 10;
  const primNumbers = [];
  let num = 2;

  while (primNumbers.length < amount) {
    if (checkPrimeNumber(num)) {
      primNumbers.push(num);
    }
    num++;
  }

  const primeDivs = primNumbers.map((num) => `<div>${num}</div>`).join("");

  const htmlPage = `
        <!DOCTYPE html>
        <html lang="he">
        <head>
            <meta charset="UTF-8">
            <title>Prime Numbers</title>
        </head>
        <body>
            <h1>First 10 prime numbers:</h1>
            ${primeDivs}
        </body>
        </html>
    `;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.status(200).send(htmlPage);
});


app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
