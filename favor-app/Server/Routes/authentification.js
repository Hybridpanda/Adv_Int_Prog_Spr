const router = require("express").Router();
const pool = require("../db");

router.post("/register", async (req, res) => {
  try {
    //1. destructure the req.body (name, email, password)
    const { name, email, password } = req.body;
    //2. check if users exists (if they do then throw error)
    const user = await pool.query(
      "SELECT * FROM authusers WHERE user_email = $1",
      [email]
    );

    if (user.rows.length !== 0) {
      return res.status(401).send("user already exists");
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
