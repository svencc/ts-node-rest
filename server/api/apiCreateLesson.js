"use strict";
exports.__esModule = true;
var onError_1 = require("./onError");
var onSuccess_1 = require("./onSuccess");
var createLesson_1 = require("../queries/createLesson");
function apiCreateLesson(req, res) {
    createLesson_1.createLesson(req.body)
        .then(function (result) { return onSuccess_1.onSuccess(res, result); })["catch"](function (err) { return onError_1.onError(res, "Could not create lesson", err); });
}
exports.apiCreateLesson = apiCreateLesson;
//# sourceMappingURL=apiCreateLesson.js.map