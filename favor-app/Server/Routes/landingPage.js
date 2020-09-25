const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("LANDING");
});

module.exports = router;
