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
__exportStar(require("./dedicatedhost"), exports);
__exportStar(require("./dedicatedhostgroup"), exports);
__exportStar(require("./mybase"), exports);
// ALIYUN::CDDC Resources:
__exportStar(require("./cddc.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFnQztBQUNoQyx1REFBcUM7QUFDckMsMkNBQXlCO0FBRXpCLDBCQUEwQjtBQUMxQixtREFBaUM7QUFDakMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9kZWRpY2F0ZWRob3N0JztcbmV4cG9ydCAqIGZyb20gJy4vZGVkaWNhdGVkaG9zdGdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vbXliYXNlJztcblxuLy8gQUxJWVVOOjpDRERDIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vY2RkYy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19