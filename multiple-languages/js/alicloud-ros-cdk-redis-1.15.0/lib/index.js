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
__exportStar(require("./account"), exports);
__exportStar(require("./auditlogconfig"), exports);
__exportStar(require("./connection"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./prepayinstance"), exports);
__exportStar(require("./upgradeversion"), exports);
__exportStar(require("./whitelist"), exports);
// ALIYUN::REDIS Resources:
__exportStar(require("./redis.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUEwQjtBQUMxQixtREFBaUM7QUFDakMsK0NBQTZCO0FBQzdCLDZDQUEyQjtBQUMzQixtREFBaUM7QUFDakMsbURBQWlDO0FBQ2pDLDhDQUE0QjtBQUU1QiwyQkFBMkI7QUFDM0Isb0RBQWtDO0FBQ2xDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWNjb3VudCc7XG5leHBvcnQgKiBmcm9tICcuL2F1ZGl0bG9nY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlcGF5aW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi91cGdyYWRldmVyc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3doaXRlbGlzdCc7XG5cbi8vIEFMSVlVTjo6UkVESVMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9yZWRpcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19