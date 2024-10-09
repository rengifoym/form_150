'use strict';

module.exports = {
    async find(ctx){
        try{
            return await strapi.plugin("formulario").service("formulario").find(ctx.query);
        } catch(err){
            ctx.throw(500, err)
        }
    },
    async export(ctx) {
        const { format = 'json' } = ctx.query;
    
        try {
          const data = await strapi.plugin("formulario").service("formulario").export(ctx.query, format);
    
          if (format === 'csv') {
            ctx.set('Content-Type', 'text/csv');
            ctx.set('Content-Disposition', 'attachment; filename=form-data.csv');
            ctx.body = data;
          } else {
            ctx.set('Content-Type', 'application/json');
            ctx.body = data;
          }
        } catch (err) {
          ctx.throw(500, err);
        }
    },

  async create(ctx) {
    try {
      const { name, email, message } = ctx.request.body;
      
      // aqui validamos que siempre tengan datos para no mandar campos vacios
      if (!name || !email || !message) {
        return ctx.badRequest('Faltan campos requeridos.');
      }

      // aqui vamos a crear un nuevo campo en la bd
      const newEntry = await strapi.entityService.create("plugin::formulario.formulario", {
        data: {
          name,
          email,
          message
        }
      });

      ctx.send({ message: 'Formulario enviado correctamente.', data: newEntry });
    } catch (err) {
      ctx.throw(500, err);
    }
  },

};