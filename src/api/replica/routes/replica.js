'use strict';

/**
 * replica router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::replica.replica');
