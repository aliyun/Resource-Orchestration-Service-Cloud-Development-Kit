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
__exportStar(require("./alias"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./key"), exports);
__exportStar(require("./networkrule"), exports);
__exportStar(require("./policy"), exports);
__exportStar(require("./secret"), exports);
// ALIYUN::KMS Resources:
__exportStar(require("./kms.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUF3QjtBQUN4Qiw2Q0FBMkI7QUFDM0Isd0NBQXNCO0FBQ3RCLGdEQUE4QjtBQUM5QiwyQ0FBeUI7QUFDekIsMkNBQXlCO0FBRXpCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hbGlhcyc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4va2V5JztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya3J1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wb2xpY3knO1xuZXhwb3J0ICogZnJvbSAnLi9zZWNyZXQnO1xuXG4vLyBBTElZVU46OktNUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2ttcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19