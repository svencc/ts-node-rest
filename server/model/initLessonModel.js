"use strict";
exports.__esModule = true;
var ORM = require("Sequelize");
function initLessonModel(sequelize) {
    return sequelize.define('Lesson', {
        url: ORM.STRING,
        description: ORM.STRING,
        duration: ORM.STRING,
        seqNo: ORM.INTEGER,
        courseId: ORM.INTEGER,
        pro: ORM.BOOLEAN,
        tags: ORM.STRING,
        gitHubUrl: ORM.STRING,
    });
}
exports.initLessonModel = initLessonModel;
//# sourceMappingURL=initLessonModel.js.map