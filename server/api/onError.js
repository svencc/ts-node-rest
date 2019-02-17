"use strict";
exports.__esModule = true;
function onError(res, msg, err) {
    console.error('Promise chain error', msg, err);
    res.status(500).send();
}
exports.onError = onError;
//# sourceMappingURL=onError.js.map