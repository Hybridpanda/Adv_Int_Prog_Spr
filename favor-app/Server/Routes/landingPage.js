const router = require("express").Router();

router.get("/", async (req, res) => {
  res.json("LANDING");
});

module.exports = router;
