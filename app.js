require("dotenv").config(); //For env file...
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser"); //It contains data in Client Side 
const session = require("express-session"); //It contains data in Server Side  
const database=require("./config/model")

//Setting Static folder
app.use("/public", express.static("./public")); //First parameter is virtual name given and second is making file static...


//Setting template engine
app.set("view engine", "pug");
app.set("views", "./views");


//Middlewares
app.use(morgan("dev"));
app.use(cors());

//Bodyparser set
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//Cookie parser Setup
app.use(cookieparser());

//Express session setup
app.use(session({ secret: "`2$$Es(^QqU)9A&*" }));


//End points
app.use("/", require("./routes/index"));
app.use("/",require("./controllers/model"))
app.all('*', (req, res) => {
    res.status(400).send("This is error page");
})

app.listen(process.env.PORT, () => {
    console.log("Server started....")
})




