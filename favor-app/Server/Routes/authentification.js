const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});

module.exports = router;
