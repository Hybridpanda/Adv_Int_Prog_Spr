const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");

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
      return res.status(401).json("user already exists");
    }
    //3. bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const bcryptPassword = await bcrypt.hash(password, salt);
    //4. enter the new user in the database
    const newUser = await pool.query(
      "INSERT INTO authusers (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    res.json(newUser.rows[0]);

    //5. generate jwt token
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
