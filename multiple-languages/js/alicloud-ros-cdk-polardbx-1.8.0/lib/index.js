"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./account"), exports);
__exportStar(require("./dbinstance"), exports);
__exportStar(require("./database"), exports);
// ALIYUN::PolarDBX Resources:
__exportStar(require("./polardbx.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMEI7QUFDMUIsK0NBQTZCO0FBQzdCLDZDQUEyQjtBQUUzQiw4QkFBOEI7QUFDOUIsdURBQXFDO0FBQ3JDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWNjb3VudCc7XG5leHBvcnQgKiBmcm9tICcuL2RiaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhYmFzZSc7XG5cbi8vIEFMSVlVTjo6UG9sYXJEQlggUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9wb2xhcmRieC5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19