'use strict';

var db = require('../lib/database');

module.exports = function (router) {

    router.get('/', function (req, res) {
        db.query("SELECT 1 AS Hello", (err, Res) => {
            if(err) {
                res.send(err);
            } else {
                res.send(Res);
            }
        });
    });

    router.get('/category', function (req, res) {
        db.query("SELECT * FROM category", (err, Res) => {
            if(err) {
                res.send(err);
            } else {
                res.send(Res);
            }
        });
    });

    router.get('/product', function (req, res) {
        db.query("SELECT * FROM product", (err, Res) => {
            if(err) {
                res.send(err);
            } else {
                res.send(Res);
            }
        });
    });

    router.get('/category/:categoryId', function (req, res) {
        db.query("SELECT * FROM category WHERE id = '" + req.params.categoryId + "'", (err, Res) => {
            if(err) {
                res.send(err);
            } else {
                res.send(Res);
            }
        });
    });

    router.get('/product/:productId', function (req, res) {
        db.query("SELECT * FROM product WHERE id = '" + req.params.productId + "'", (err, Res) => {
            if(err) {
                res.send(err);
            } else {
                res.send(Res);
            }
        });
    });

};
