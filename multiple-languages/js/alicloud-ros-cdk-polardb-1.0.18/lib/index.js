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
__exportStar(require("./accountprivilege"), exports);
__exportStar(require("./dbcluster"), exports);
__exportStar(require("./dbclusteraccesswhitelist"), exports);
__exportStar(require("./dbclusterendpoint"), exports);
__exportStar(require("./dbclusterendpointaddress"), exports);
__exportStar(require("./dbinstance"), exports);
__exportStar(require("./dbnodes"), exports);
__exportStar(require("./globaldatabasenetwork"), exports);
__exportStar(require("./parametergroup"), exports);
// ALIYUN::POLARDB Resources:
__exportStar(require("./polardb.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMEI7QUFDMUIscURBQW1DO0FBQ25DLDhDQUE0QjtBQUM1Qiw2REFBMkM7QUFDM0Msc0RBQW9DO0FBQ3BDLDZEQUEyQztBQUMzQywrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLDBEQUF3QztBQUN4QyxtREFBaUM7QUFFakMsNkJBQTZCO0FBQzdCLHNEQUFvQztBQUNwQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FjY291bnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50cHJpdmlsZWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZGJjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZGJjbHVzdGVyYWNjZXNzd2hpdGVsaXN0JztcbmV4cG9ydCAqIGZyb20gJy4vZGJjbHVzdGVyZW5kcG9pbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmNsdXN0ZXJlbmRwb2ludGFkZHJlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vZGJub2Rlcyc7XG5leHBvcnQgKiBmcm9tICcuL2dsb2JhbGRhdGFiYXNlbmV0d29yayc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFtZXRlcmdyb3VwJztcblxuLy8gQUxJWVVOOjpQT0xBUkRCIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vcG9sYXJkYi5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19