const router = require("express").Router();
const pool = require("../db");
const authorisation = require("../middleware/authorisation");

router.get("/", authorisation, async (req, res) => {
  try {
    //req.user has the payload
    //res.json(req.user);

    // all favours and name

    /* const user = await pool.query(
      "SELECT user_name FROM authusers WHERE user_id = $1",
      [req.user_id]
    ); */

    const user = await pool.query(
      "SELECT a.user_name, f.favour_id, f.description, f.recipient_email FROM authusers AS a LEFT JOIN favours AS f ON a.user_id = f.user_id WHERE a.user_id = $1",
      [req.user.id]
    );
    //create a favour

    router.post("/favours", authorisation, async (req, res) => {
      try {
        //console.log(req.body);
        const { description, recipient_email } = req.body;
        const newFavour = await pool.query(
          "INSERT INTO favours (user_id, description, recipient_email) VALUES ($1, $2, $3) RETURNING *",
          [req.user.id, description, recipient_email]
        );

        res.json(newFavour.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });

    //update a favour

    router.put("/favours/:id", authorisation, async (req, res) => {
      try {
        const { id } = req.params;
        const { description } = req.body;
        const updateFavour = await pool.query(
          "UPDATE favours SET description = $1 WHERE favour_id = $2 AND user_id = $3 RETURNING *",
          [description, id, req.user.id]
        );

        if (updateFavour.rows.length === 0) {
          return res.json("this favour is not yours");
        }
        res.json("Favour updated");
      } catch (err) {
        console.error(err.message);
      }
    });
    //delete a favour

    router.delete("/favours/:id", authorisation, async (req, res) => {
      try {
        const { id } = req.params;
        const deleteFavour = await pool.query(
          "DELETE FROM favours WHERE favour_id = $1 AND user_id = $2 RETURNING *",
          [id, req.user.id]
        );

        if (deleteFavour.rows.length === 0) {
          return res.json("this favour is not yours");
        }

        res.json("Favour Deleted");
      } catch (err) {
        console.error(err.message);
      }
    });

    //get an id from an email
    router.post("/api/getId", authorisation, async (req, res) => {
      try {
        const { email } = req.body;
        const parseId = await pool.query(
          "SELECT user_id FROM authusers WHERE user_email = $1",
          [email]
        );
        res.json(parseId.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });
    // return a name from id
    router.post("/api/getName", authorisation, async (req, res) => {
      try {
        const { id } = req.body;
        const parseName = await pool.query(
          "SELECT user_name FROM authusers WHERE user_id = $1",
          [id]
        );
        res.json(parseName.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });

    //return an email from an Id
    router.post("/api/getEmail", authorisation, async (req, res) => {
      try {
        const { id } = req.body;
        const parseId = await pool.query(
          "SELECT user_email FROM authusers WHERE user_id = $1",
          [id]
        );
        res.json(parseId.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });

    //return favour if recipient id is the same as the inputed email
    router.post("/favours/return", authorisation, async (req, res) => {
      try {
        const recipientFavour = await pool.query(
          "SELECT favour_id, user_id, description, recipient_email FROM favours WHERE recipient_id = $1",
          [req.user.id]
        );
        res.json(recipientFavour.rows);
      } catch (err) {
        console.error(err.message);
      }
    });

    //show the favour owed to to the other person
    router.get("/recipient", authorisation, async (req, res) => {
      try {
        const recipient = await pool.query(
          "SELECT user_id, favour_id, description, recipient_email FROM favours WHERE recipient_id = $1",
          [req.user.id]
        );
        res.json(recipient.rows);
      } catch (err) {
        console.error(err.message);
      }
    });
    //for deleting from owing
    router.delete("/favours/remove/:id", authorisation, async (req, res) => {
      try {
        const { id } = req.params;
        const { resipientOwed } = req.body;
        const deleteOwing = await pool.query(
          "DELETE FROM favours WHERE favour_id = $1 AND recipient_email = $2 RETURNING *",
          [id, resipientOwed]
        );

        if (deleteOwing.rows.length === 0) {
          return res.json("Not your favour");
        }
        res.json("Favour Deleted");
        
      } catch (err) {
        console.error(err.message);
      }
    });

    res.json(user.rows); //eventually delete [0] in rows[0] because I want to return multiple
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});

module.exports = router;
