'use strict';

const fs = require('fs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const majorsJSON = JSON.parse(fs.readFileSync('./seeders/major.json', 'utf8'));
    const majors = majorsJSON.map(major => {
      const { majorId, name } = major;
      return { majorId, name, createdAt: new Date(), updatedAt: new Date() }
    });
    await queryInterface.bulkInsert('majors', majors, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('majors', null, {})
  }
};
