var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all our routes and setup logic within those routes where required 

// Display all burger, base on logic on index handlebars
router.get("/", function (req, res) {
    burger.all(function (data) {
        //console.log("inside burgerController");
        var hbsObject = {
            burger: data
        };
        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Add new burger 
router.post("/api/burgers", function (req, res) {
    // [name] is the SQL Table 'burger' field name
    //burger.create(["name"], [req.body.name], function (result) {
    burger.create(["name"], [req.body.name], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


// Update the burgur devour DB record status - if a burger has devour status  =1,
// during get rendering; will place the burger under "Available" or "Devoured " base
// on this devour status. 
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    // condition is the ID of the item, defined on assets/js/burger.js listenenr
    burger.update(
        {
            devour: req.body.devour
        },
        condition,
        function (result) {
            console.log("Inside burgerController, inside function parameter");
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Delete Route
router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    burger.delete(condition, function (result) {
            if (result.affectedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        });
});



module.exports = router;
