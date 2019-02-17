"use strict";
exports.__esModule = true;
var findAllCourses_1 = require("../queries/findAllCourses");
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
function apiGetAllCourses(req, res) {
    findAllCourses_1.findAllCourses()
        .then(function (result) { return onSuccess_1.onSuccess(res, result); })["catch"](function (err) { return onError_1.onError(res, "Find all courses failed", err); });
}
exports.apiGetAllCourses = apiGetAllCourses;
//# sourceMappingURL=apiGetAllCourses.js.map