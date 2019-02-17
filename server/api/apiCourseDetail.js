"use strict";
exports.__esModule = true;
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var findCourseDetail_1 = require("../queries/findCourseDetail");
function apiGetCourseDetail(req, res) {
    var courseId = parseInt(req.params.id);
    findCourseDetail_1.findCourseDetail(courseId)
        .then(function (result) { return onSuccess_1.onSuccess(res, result); })["catch"](function (err) { return onError_1.onError(res, "Find course detail failed", err); });
}
exports.apiGetCourseDetail = apiGetCourseDetail;
//# sourceMappingURL=apiCourseDetail.js.map