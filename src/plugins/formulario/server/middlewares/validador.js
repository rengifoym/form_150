module.exports = async (ctx, next) => {
    const { name, email, message } = ctx.request.body;
  
    if (!name || name.length < 3) {
      return ctx.badRequest('El nombre debe tener al menos 3 caracteres.');
    }
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      return ctx.badRequest('Por favor ingrese un correo electrónico válido.');
    }
  
    if (!message || message.length < 10) {
      return ctx.badRequest('El mensaje debe tener al menos 10 caracteres.');
    }
  
    await next();
  };