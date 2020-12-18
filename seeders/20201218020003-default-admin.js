'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password =  process.env.ADMIN_PASSWORD || 'defaultpassword';
    return queryInterface.bulkInsert('users', [{
          email: 'admin@admin.com',
          password: 'bukanadmin',
          roles: ['admin'],
          createdAt: new Date(),
          updatedAt: new Date()
        }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', { email: 'admin@admin.com' }, {});
  }
};
