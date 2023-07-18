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
__exportStar(require("./account"), exports);
__exportStar(require("./connection"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./prepayinstance"), exports);
__exportStar(require("./whitelist"), exports);
// ALIYUN::REDIS Resources:
__exportStar(require("./redis.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTBCO0FBQzFCLCtDQUE2QjtBQUM3Qiw2Q0FBMkI7QUFDM0IsbURBQWlDO0FBQ2pDLDhDQUE0QjtBQUU1QiwyQkFBMkI7QUFDM0Isb0RBQWtDO0FBQ2xDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWNjb3VudCc7XG5leHBvcnQgKiBmcm9tICcuL2Nvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL3ByZXBheWluc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vd2hpdGVsaXN0JztcblxuLy8gQUxJWVVOOjpSRURJUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3JlZGlzLmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=