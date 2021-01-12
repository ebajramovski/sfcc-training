'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');


/**
 * Render logic for mainPage.alpenBanner component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    model.image = ImageTransformation.getScaledImage(content.image);
    model.alt = content.alt ? content.alt : null;
    model.title = content.title ? content.title : null;

    return new Template('experience/components/commerce_assets/alpenBanner').render(model).text;
};
