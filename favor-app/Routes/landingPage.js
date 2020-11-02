const pool = require("../db");
const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    

    const board = await pool.query(
      "SELECT user_name, user_email FROM authusers"
    );
    res.json(board.rows);

  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
