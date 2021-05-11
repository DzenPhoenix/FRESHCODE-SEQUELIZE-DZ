'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models["student"].belongsTo(models["group"],{foreignKey:"id",});
    }
  };
  Student.init({
    fullname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'student',
  });
  return Student;
};