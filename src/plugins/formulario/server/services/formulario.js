'use strict';
const { Parser } = require('json2csv');

module.exports = ({ strapi }) => ({
    async find(query){
        return await strapi.entityService.findMany("plugin::formulario.formulario", query);
    },
    async export(query, format) {
        const data = await this.find(query);
    
        if (format === 'csv') {
          const fields = ['name', 'email', 'message'];
          const json2csv = new Parser({ fields });
          return json2csv.parse(data);
        } else {
          return data; // Retorna JSON por defecto
        }
      },
});
