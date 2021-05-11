"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "groups",
      [
        {
          name: "pd2020-1",
        },
        {
          name: "pd2020-2",
        },
        {
          name: "pd2020-3",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('groups', null,{});
  },
};
