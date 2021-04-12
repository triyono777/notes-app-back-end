// eslint-disable-next-line max-len
const {addNoteHandler, getAllNoteHandler, getNoteByIdHandler} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

  {
    method: 'GET',
    path: '/notes',
    handler: getAllNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  }, {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },

  },
];

module.exports = routes;
