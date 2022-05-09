'use strict';

/**
 *  replica controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::replica.replica');
