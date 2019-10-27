'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      address: 'user@mail.com',
      type: '3 bedroom flat',
      price: 509832,
      photo: ['cloudinary string', 'cloudinary string 2', 'cloudinary string 3'],
      cover: 'clodinary cover image string',
      createdAt: new Date(),
    },

  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
