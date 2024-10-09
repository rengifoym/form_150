module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/find',
    handler: 'formulario.find',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/export',
    handler: 'formulario.export',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'POST',
    path: '/create',
    handler: 'formulario.create',
    config: {
      policies: [],
      "middleware": ["validador"],
      auth: false,
    },
  },
];
