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
exports.datasource = void 0;
__exportStar(require("./instance"), exports);
__exportStar(require("./shardinginstance"), exports);
// ALIYUN::MONGODB Resources:
__exportStar(require("./mongodb.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJCO0FBQzNCLHFEQUFtQztBQUVuQyw2QkFBNkI7QUFDN0Isc0RBQW9DO0FBQ3BDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZGluZ2luc3RhbmNlJztcblxuLy8gQUxJWVVOOjpNT05HT0RCIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vbW9uZ29kYi5nZW5lcmF0ZWQnO1xuaW1wb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuZXhwb3J0IHsgZGF0YXNvdXJjZSB9O1xuIl19