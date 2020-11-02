const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production 

//middleware
app.use(express.json());
app.use(cors());


if (process.env.NODE_ENV === "production") {
    //server stat
    //nom run build
    app.use(express.static(path.join(__dirname, "client/")))
}
//ROUTES\\
//landing page
app.use("/", require("./routes/landingPage"));
//registering and login handling route
app.use("/auth", require("./routes/authUser"));
// profile page
app.use("/profile", require("./routes/profile"));
// requests page (if I get time to make it work)
//app.use("/requests", require("./Routes/requests"));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/index.html"))
})
// listening
app.listen(PORT, () => console.log(`api is listening on: localhost: ${PORT}`));
