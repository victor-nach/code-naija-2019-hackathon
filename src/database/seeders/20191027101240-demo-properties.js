'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Properties', [
    {
      address: 'user@mail.com',
      type: '3 bedroom flat',
      price: 509832,
      photo: ['cloudinary string', 'cloudinary string 2', 'cloudinary string 3'],
      cover: 'clodinary cover image string',
      createdAt: new Date(),
      lat: 5.514611,
      lng: 5.747964,
    },

  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Properties', null, {}),
};
