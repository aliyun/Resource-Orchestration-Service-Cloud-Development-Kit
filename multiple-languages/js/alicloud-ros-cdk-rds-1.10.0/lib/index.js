"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.datasource = void 0;
__exportStar(require("./adinfo"), exports);
__exportStar(require("./account"), exports);
__exportStar(require("./accountprivilege"), exports);
__exportStar(require("./connection"), exports);
__exportStar(require("./dbinstance"), exports);
__exportStar(require("./dbinstanceclone"), exports);
__exportStar(require("./dbinstanceparametergroup"), exports);
__exportStar(require("./dbinstancesecurityips"), exports);
__exportStar(require("./dbproxy"), exports);
__exportStar(require("./database"), exports);
__exportStar(require("./migratetask"), exports);
__exportStar(require("./postgresextensions"), exports);
__exportStar(require("./prepaydbinstance"), exports);
__exportStar(require("./readonlydbinstance"), exports);
// ALIYUN::RDS Resources:
__exportStar(require("./rds.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QjtBQUN6Qiw0Q0FBMEI7QUFDMUIscURBQW1DO0FBQ25DLCtDQUE2QjtBQUM3QiwrQ0FBNkI7QUFDN0Isb0RBQWtDO0FBQ2xDLDZEQUEyQztBQUMzQywwREFBd0M7QUFDeEMsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQixnREFBOEI7QUFDOUIsdURBQXFDO0FBQ3JDLHFEQUFtQztBQUNuQyx1REFBcUM7QUFFckMseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FkaW5mbyc7XG5leHBvcnQgKiBmcm9tICcuL2FjY291bnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50cHJpdmlsZWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2RiaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlY2xvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlcGFyYW1ldGVyZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlc2VjdXJpdHlpcHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kYnByb3h5JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YWJhc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9taWdyYXRldGFzayc7XG5leHBvcnQgKiBmcm9tICcuL3Bvc3RncmVzZXh0ZW5zaW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3ByZXBheWRiaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seWRiaW5zdGFuY2UnO1xuXG4vLyBBTElZVU46OlJEUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3Jkcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19