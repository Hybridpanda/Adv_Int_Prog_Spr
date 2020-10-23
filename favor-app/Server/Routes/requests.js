const router = require("express").Router();
const authorisation = require("../middleware/authorisation");

router.get("/", authorisation, async (req, res) => {
    try {
        
    } catch (err) {
        console.error(err.message);
    }

})