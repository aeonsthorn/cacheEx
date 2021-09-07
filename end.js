const express = require("express");

const app = express();

const cache = {};

async function computeStuff(num) {
  return new Promise((res) => {
    setTimeout(() => {
      res("expensive result: " + num);
    }, 5000);
  });
}

app.get("/:num", async (req, res) => {
  const num = req.params.num;

  if (cache[num]) {
    res.json({ result: cache[num] });
    return;
  } else {
    const result = await computeStuff(num);
    cache[num] = result;
    res.json({ result: result });
  }
});

app.listen(3000, () => console.log("app started on port 3000"));
