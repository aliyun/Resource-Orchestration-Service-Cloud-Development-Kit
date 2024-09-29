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
__exportStar(require("./aitask"), exports);
__exportStar(require("./account"), exports);
__exportStar(require("./accountprivilege"), exports);
__exportStar(require("./backup"), exports);
__exportStar(require("./dbcluster"), exports);
__exportStar(require("./dbclusteraccesswhitelist"), exports);
__exportStar(require("./dbclusterendpoint"), exports);
__exportStar(require("./dbclusterendpointaddress"), exports);
__exportStar(require("./dbnodes"), exports);
__exportStar(require("./database"), exports);
__exportStar(require("./globaldatabasenetwork"), exports);
__exportStar(require("./parametergroup"), exports);
// ALIYUN::POLARDB Resources:
__exportStar(require("./polardb.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUI7QUFDekIsNENBQTBCO0FBQzFCLHFEQUFtQztBQUNuQywyQ0FBeUI7QUFDekIsOENBQTRCO0FBQzVCLDZEQUEyQztBQUMzQyxzREFBb0M7QUFDcEMsNkRBQTJDO0FBQzNDLDRDQUEwQjtBQUMxQiw2Q0FBMkI7QUFDM0IsMERBQXdDO0FBQ3hDLG1EQUFpQztBQUVqQyw2QkFBNkI7QUFDN0Isc0RBQW9DO0FBQ3BDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWl0YXNrJztcbmV4cG9ydCAqIGZyb20gJy4vYWNjb3VudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjY291bnRwcml2aWxlZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9iYWNrdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmNsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9kYmNsdXN0ZXJhY2Nlc3N3aGl0ZWxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmNsdXN0ZXJlbmRwb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL2RiY2x1c3RlcmVuZHBvaW50YWRkcmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL2Ribm9kZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhYmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL2dsb2JhbGRhdGFiYXNlbmV0d29yayc7XG5leHBvcnQgKiBmcm9tICcuL3BhcmFtZXRlcmdyb3VwJztcblxuLy8gQUxJWVVOOjpQT0xBUkRCIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vcG9sYXJkYi5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19