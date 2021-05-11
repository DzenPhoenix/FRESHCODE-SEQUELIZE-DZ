"use strict";

const db = require('../db/models/index.js');
const querryInterface = db.sequelize.queryInterface;

//POST
const createGroup = async function (group) {
    try {
        await querryInterface.bulkInsert('groups', [group]);
    }
    catch (ex) {
        console.error(ex);
        throw ex;
    }
};

//GET
const getGroupById = async function (id) {
    try {
        const res = await db["group"].findByPk(id);
        if(res){
            return res.dataValues;
        }
        else{
            return null;
        }
    }
    catch (ex) {
        console.error(ex);
        throw (ex);
    }
};

//GET All groups
const getAllGroups = async function(){
    try {
        const res = await db["group"].findAll();
        if (res) {
            const groups = res.map((item)=>{return item.dataValues});
            return groups;
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
const updateGroupById = async function (id, newValue) {
    try {
        await querryInterface.bulkUpdate("groups", newValue, { id: id });
    }
    catch (ex) {
        console.error(ex);
        throw (ex);
    }
};

//DELETE
const deleteGroupById = async function (id) {
    try {
        await querryInterface.bulkDelete("groups", { id: id })
    }
    catch (ex) {
        console.error(ex);
        throw ex;
    }
}


module.exports = {
    createGroup: createGroup,
    getGroupById: getGroupById,
    updateGroupById: updateGroupById,
    deleteGroupById:deleteGroupById,
    getAllGroups:getAllGroups,
};