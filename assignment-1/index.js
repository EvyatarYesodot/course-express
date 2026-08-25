import http from "http";
import "dotenv/config";
import { checkArrPrimeNumbers, getArrPrimNumbers } from "./utils.js";

const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.url === "/api/numbers/prime/validate" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const data = JSON.parse(body);
      const result = checkArrPrimeNumbers(data.numbers);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ nessage: result }));
    });
  } else if (req.method === "GET") {
    const fullUrl = new URL(req.url, `http://${req.headers.host}`);
    if (fullUrl.pathname === "/api/numbers/prime") {
      const amount = fullUrl.searchParams.get("amount");
      const result = getArrPrimNumbers(amount);
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify({ nessage: result }));
    }
  } else {
    res.writeHead(404, { "content-type": "text/plane" });
    res.end("Not found");
  }
});

server.listen(port, () => {
  console.log(`server is runnig on http://localhost:${port}`);
});
