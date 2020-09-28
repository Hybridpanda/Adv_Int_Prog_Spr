const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//ROUTES\\
//landing page
app.use("/", require("./Routes/landingPage"));
//registering and login handling route
app.use("/auth", require("./Routes/authUser"));
// profile page
app.use("/profile", require("./Routes/profile"));
// listening
app.listen(5000, () => console.log("api is listening on: localhost:5000"));
