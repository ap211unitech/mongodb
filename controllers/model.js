const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser")
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const model = require("../config/model");


//Middleware setup
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

//End points
router.get("/control", (req, res) => {
    res.status(200).json({
        status: true,
        massage: "Controller working..."
    })
})

router.post("/createnew", [
    //Checking Fields(Here's comes express validator)
    check("name").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    check("email").isEmail().normalizeEmail()
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.json({
            errors: errors.array()
        })
    }
    //Hashing password...
    const hashpassword = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hashpassword;

    return res.status(200).json({
        form: req.body
    })
})


module.exports = router;