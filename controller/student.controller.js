"use strict";

const db = require('../db/models/index.js');
const querryInterface = db.sequelize.queryInterface;

//POST
const createStudent = async function (student) {
    try {
        await querryInterface.bulkInsert('students', [student]);
    }
    catch (ex) {
        console.error(ex);
        throw ex;
    }
};

//GET
const getStudentById = async function (id) {
    try {
        const res = await db["student"].findByPk(id);
        if (res) {
            return res.dataValues;
        }
        else {
            return null;
        }
    }
    catch (ex) {
        console.error(ex);
        throw (ex);
    }
};

//GET All students

const getAllStudents = async function(){
    try {
        const res = await db["student"].findAll();
        if (res) {
            const students = res.map((item)=>{return item.dataValues});
            return students;
        }
        else {
            return null;
        }
    }
    catch (ex) {
        console.error(ex);
        throw (ex);
    }
}

//PUT
const updateStudentById = async function (id, newValue) {
    try {
        await querryInterface.bulkUpdate("students", newValue, { id: id });
    }
    catch (ex) {
        console.error(ex);
        throw (ex);
    }
}

//DELETE
const deleteStudentById = async function (id) {
    try {
        await querryInterface.bulkDelete("students", { id: id })
    }
    catch (ex) {
        console.error(ex);
        throw ex;
    }
}


module.exports = {
    createStudent: createStudent,
    getStudentById: getStudentById,
    updateStudentById: updateStudentById,
    deleteStudentById: deleteStudentById,
    getAllStudents:getAllStudents
};