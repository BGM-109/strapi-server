'use strict';

/**
 * replica service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::replica.replica');
