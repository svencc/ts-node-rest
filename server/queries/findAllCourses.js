"use strict";
exports.__esModule = true;
var model_1 = require("../model/model");
function findAllCourses() {
    return model_1.CourseModel.findAll({
        order: ['seqNo']
    });
}
exports.findAllCourses = findAllCourses;
//# sourceMappingURL=findAllCourses.js.map