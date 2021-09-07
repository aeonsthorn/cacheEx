const express = require("express");

const app = express();

async function computeStuff(num) {
  return new Promise((res) => {
    setTimeout(() => {
      res("expensive result: " + num);
    }, 5000);
  });
}

app.get("/:num", async (req, res) => {
  const num = req.params.num;

  const result = await computeStuff(num);

  res.json({ result: result });
});

app.listen(3000, () => console.log("app started on port 3000"));
