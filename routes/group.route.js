"use strict";

const controller = require('../controller//group.controller.js');
const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true, }));
router.use(express.json());

router.get('/',async function (req,res){
    const group = await controller.getGroupById(req.query.id);
    if(group){
        res.send(group)
    }
    else{res.send("Group not found")};
});

router.get('/all/',async function (req,res){
    const groups = await controller.getAllGroups();
    if(groups){
        res.send(groups)
    }
    else{res.send("Nothing was found")};
});


router.post('/',async function (req,res){
    const addedGroup = req.body;
    await controller.createGroup(addedGroup);
    res.send("Group was added to base");
});

router.put('/',async function (req,res){
    const updatedGroup = req.body;
    const id = req.query.id;
    await controller.updateGroupById(id,updatedGroup);
    res.send("Group was changed");
});


router.delete('/',async function (req,res){
    const id = req.query.id;
    await controller.deleteGroupById(id);
    res.send(`The group with id=${id} deleted from base`);
});


module.exports=router;