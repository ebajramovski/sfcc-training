"use strict";

var server = require("server");
var URLUtils = require("dw/web/URLUtils");

server.get("Show", function (req, res, next) {
    var newsletterForm = server.forms.getForm("newsletter");
    newsletterForm.clear();

    res.render("newsletter/newsletter", {
        actionUrl: URLUtils.url("Newsletter-Subscribe"),
        newsletterForm: newsletterForm,
    });
    next();
});

server.post("Subscribe", function (req, res, next) {
    res.json({
        result: "success",
    });
    next();
});

module.exports = server.exports();
