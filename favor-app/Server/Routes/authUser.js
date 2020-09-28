const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validateInfo = require("../middleware/validateInfo");
const authorisation = require("../middleware/authorisation");

router.post("/register", validateInfo, async (req, res) => {
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

    //5. generate jwt token
    const token = jwtGenerator(newUser.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

// login
router.post("/login", validateInfo, async (req, res) => {
  try {
    //1. destructure req.body
    const { email, password } = req.body;
    //2. check if user exists (if they do not throw err)
    const user = await pool.query(
      "SELECT * FROM authusers WHERE user_email = $1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }
    //3. check if incoming password match database
    const validPassword = await bcrypt.compare(
      password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Password or Email is incorrect");
    }
    //4. give them jwt token
    const token = jwtGenerator(user.rows[0].user_id);

    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json("Server Error");
  }
});

router.get("/is-verify", authorisation, async (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
