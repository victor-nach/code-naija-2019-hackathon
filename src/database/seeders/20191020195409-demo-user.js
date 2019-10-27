import { AuthUtils } from '../../utils';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', [
    {
      email: 'user@mail.com',
      firstName: 'femi',
      lastName: 'obatoki',
      password: AuthUtils.hashPassword('password'),
      type: 'user',
      createdAt: new Date(),
    },
    {
      email: 'agent@mail.com',
      firstName: 'jonathan',
      lastName: 'ebi',
      password: AuthUtils.hashPassword('password'),
      type: 'agent',
      createdAt: new Date(),
    },
    {
      email: 'landlord@mail.com',
      firstName: 'mike',
      lastName: 'andrews',
      password: AuthUtils.hashPassword('password'),
      type: 'owner',
      createdAt: new Date(),
    },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
