"use strict";
exports.__esModule = true;
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./api/apiErrorHandler");
var app = express();
api_1.initRestApi(app);
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(8090, function () {
    console.log('Server is running on port 8090 ...');
});
//# sourceMappingURL=server.js.map