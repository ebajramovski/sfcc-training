'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');

/**
 * Render logic for storefront.productTile component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var ProductFactory = require('*/cartridge/scripts/factories/product');

    var content = context.content;
    var productTileParams = { pview: 'tile', pid: context.content.product.ID };
    var product = ProductFactory.get(productTileParams);

    var productUrl = URLUtils.url('Tile-Show', 'pid', product.id).relative().toString();

    var model = new HashMap();
    model.product = product;
    model.display = {
        swatches: true
    };

    model.includeUrl = productUrl;

    return new Template('experience/components/commerce_assets/alpenProductTile').render(model).text;
};
