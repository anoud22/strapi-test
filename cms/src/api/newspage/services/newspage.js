'use strict';

/**
 * newspage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newspage.newspage');
