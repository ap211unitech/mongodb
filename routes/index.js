const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    let data = {
        name: "Pug",
    }
    res.status(200).render("index.pug", {
        person: data
    });
})

//Make a File Downloadable
router.get("/download", (req, res) => {
    res.status(200).download("public/file/index.pdf")
})

//Cookie parser
router.get("/cookie", (req, res) => {
    res.cookie("Name", "Arjun Porwal");
    res.cookie("Password", "123456", { maxAge: 5000 });
    console.log(req.cookies);
    res.status(200).send(req.cookies);
})


//Express session
router.get("/session", (req, res) => {
    if (req.session.count) {
        req.session.count++;
        res.status(200).send(`Count: ${req.session.count}`)
    }
    else {
        req.session.count = 1;
        res.status(200).send("Welcome first time On My Website....")
    }
})



module.exports = router;