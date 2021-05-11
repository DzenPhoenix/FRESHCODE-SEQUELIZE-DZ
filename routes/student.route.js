"use strict";

const controller = require('../controller/student.controller.js');
const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: true, }));
router.use(express.json());

router.get('/',async function (req,res){
    const student = await controller.getStudentById(req.query.id);
    if(student){
        res.send(student)
    }
    else{res.send("Student not found")};
});

router.get('/all/',async function (req,res){
    const students = await controller.getAllStudents();
    if(students){
        res.send(students)
    }
    else{res.send("Nothing was found")};
});


router.post('/',async function (req,res){
    const addedStudent = req.body;
    await controller.createStudent(addedStudent);
    res.send("Student was added to base");
});

router.put('/',async function (req,res){
    const updatedStudent = req.body;
    const id = req.query.id;
    await controller.updateStudentById(id,updatedStudent);
    res.send("Student was changed");
});


router.delete('/',async function (req,res){
    const id = req.query.id;
    await controller.deleteStudentById(id);
    res.send(`The student with id=${id} deleted from base`);
});


module.exports=router;