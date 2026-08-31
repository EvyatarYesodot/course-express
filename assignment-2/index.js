import express from "express";
import "dotenv/config";
import { checkArrPrimeNumbers, getArrPrimNumbers } from "./utils.js";

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

app.post("/api/numbers/prime/validate", (req, res) => {
  const data = req.body;
  const arrNum = data.numbers;
  const result = checkArrPrimeNumbers(arrNum);
  res.send(result);
});

app.get("/api/numbers/prime", (req, res) => {
  const amount = req.query.amount;
  const primNumbers = getArrPrimNumbers(amount);
  res.send(primNumbers);
});

app.get("/api/numbers/prime/display", (req, res) => {
  const amount = 10;
  const primNumbers = getArrPrimNumbers(amount);

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
