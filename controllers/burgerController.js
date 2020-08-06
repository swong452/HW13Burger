var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and setup logic within those routes 
// where required 

router.get("/", function (req, res) {
    burger.all(function (data) {
        console.log("inside burgerController");
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    console.log("Inside burgerController, before burger.create");
    burger.create(["name"], [req.body.name], function (result) {
        console.log("inside burgerController, burger.create Calling , before res.json");
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    // condition is the ID of the item, defined on assets/js/burger.js listenenr

    console.log("inside burgerController.js, Condition", condition);

    burger.update(
        {
            devour: req.body.devour
        },
        condition,
        function (result) {
            console.log("Inside catsController, inside function parameter");
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

module.exports = router;
