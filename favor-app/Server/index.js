const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//ROUTES\\
//landing page
app.use("/", require("./Routes/landingPage"));
// listening
app.listen(5000, () => console.log("Example app listening on port 5000!"));
