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
__exportStar(require("./accessstrategy"), exports);
__exportStar(require("./addresspool"), exports);
__exportStar(require("./cachedomain"), exports);
__exportStar(require("./customline"), exports);
__exportStar(require("./domain"), exports);
__exportStar(require("./domainattachment"), exports);
__exportStar(require("./domaingroup"), exports);
__exportStar(require("./domainrecord"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./monitorconfig"), exports);
__exportStar(require("./recoveryplan"), exports);
// ALIYUN::DNS Resources:
__exportStar(require("./dns.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFpQztBQUNqQyxnREFBOEI7QUFDOUIsZ0RBQThCO0FBQzlCLCtDQUE2QjtBQUM3QiwyQ0FBeUI7QUFDekIscURBQW1DO0FBQ25DLGdEQUE4QjtBQUM5QixpREFBK0I7QUFDL0IsNkNBQTJCO0FBQzNCLGtEQUFnQztBQUNoQyxpREFBK0I7QUFFL0IseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FjY2Vzc3N0cmF0ZWd5JztcbmV4cG9ydCAqIGZyb20gJy4vYWRkcmVzc3Bvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9jYWNoZWRvbWFpbic7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWxpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kb21haW4nO1xuZXhwb3J0ICogZnJvbSAnLi9kb21haW5hdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZG9tYWluZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9kb21haW5yZWNvcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL21vbml0b3Jjb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWNvdmVyeXBsYW4nO1xuXG4vLyBBTElZVU46OkROUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Rucy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19