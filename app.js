"use strict";

const express = require("express");
const server = express();
const studentRoute = require("./routes/student.route.js");
const groupRoute = require("./routes/group.route.js");

server.use("/student", studentRoute);
server.use("/group",groupRoute);


const port = 3000;
server.listen(port, function () {
    console.log(`Server listening at http://localhost:${port}`);
});
