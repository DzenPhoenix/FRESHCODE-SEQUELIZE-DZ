"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "students",
      [
        {
          fullname: "Ivan Ivanov",
          age: 16,
          email:"ivanov@mail.com",
          groupId: 1,
        },
        {
          fullname: "Denis Ivanov",
          age: 18,
          email:"ivanovD@mail.com",
          groupId: 1,
        },
        {
          fullname: "Sveta Petrova",
          age: 17,
          email:"petrova@mail.com",
          groupId: 2,
        },
        {
          fullname: "Peter Pupkin",
          age: 17,
          email:"petrov@mail.com",
          groupId: 2,
        },
        {
          fullname: "Konstantin Malevich",
          age: 20,
          email:"malevich@mail.com",
          groupId: 2,
        },
        {
          fullname: "Alisa Taburetkina",
          age: 16,
          email:"taburetka@mail.com",
          groupId: 2,
        },
        {
          fullname: "Oleg Monitor",
          age: 17,
          email:"monitor@mail.com",
          groupId: 3,
        },
        {
          fullname: "Roman Svetliy",
          age: 16,
          email:"svetliy@mail.com",
          groupId: 3,
        },
        {
          fullname: "Felis Velikolepna",
          age: 16,
          email:"velikolepna@mail.com",
          groupId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('students', null, {});
     
  },
};
