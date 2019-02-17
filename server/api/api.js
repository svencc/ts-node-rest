"use strict";
exports.__esModule = true;
var apiGetAllCourses_1 = require("./apiGetAllCourses");
var apiCourseDetail_1 = require("./apiCourseDetail");
var apiCreateLesson_1 = require("./apiCreateLesson");
function initRestApi(app) {
    app.route('/api/courses').get(apiGetAllCourses_1.apiGetAllCourses);
    app.route('/api/courses/:id').get(apiCourseDetail_1.apiGetCourseDetail);
    app.route('/api/lesson').post(apiCreateLesson_1.apiCreateLesson);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map