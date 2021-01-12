'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');


/**
 * Render logic for mainPage.alpenBanner component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.paragraph = content.paragraph ? content.paragraph : null;

    return new Template('experience/components/commerce_assets/alpenQuote').render(model).text;
};
