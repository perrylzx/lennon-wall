'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   // FK name is <Model>Id
   return queryInterface.addColumn('Posts', 'WallId', Sequelize.INTEGER);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Posts', 'WallId');
  }
};
