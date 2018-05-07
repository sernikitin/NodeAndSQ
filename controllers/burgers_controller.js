
var express = require('express');
var router = express.Router();
var db = require('../models');
router.get("/", function (req, res) {
    res.redirect("/burgers")

})

router.get("/burgers", function (req, res) {

    db.burgers_dbs.findAll({}).then(function (data) {
        var hbsObject = { burgers: data };
        res.render('index', hbsObject);
    });


})
router.post("/burgers/add", function (req, res) {
    db.burgers_dbs.create({
        burger_name: req.body.burger_name
    }).then(function (data) {
        res.redirect("/burgers")
    })

})
router.post('/burgers/toDelete/:id', function (req, res) {
    db.burgers_dbs.update({
        devoured: "1"},
        {where: {
            id: req.params.id
        }
    }).then(function (data) {
        res.redirect("/burgers")

    })

})
module.exports = router