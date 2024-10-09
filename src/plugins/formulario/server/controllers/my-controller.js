'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('formulario')
      .service('myService')
      .getWelcomeMessage();
  },
});
