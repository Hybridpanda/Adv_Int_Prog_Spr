const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

app.use("/", require("./Routes/landingPage"));

app.listen(5000, () => console.log("Example app listening on port 5000!"));
