'use strict';
let moment = require('moment');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      groupId:{
        type: Sequelize.INTEGER,
        references: {
          model: "groups",//Why!!! attribute called 'model' if value is 'table_name', attribute must be called tableName!!! (((( sequelize!!!
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      fullname: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: moment(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: moment(),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('students');
  }
};