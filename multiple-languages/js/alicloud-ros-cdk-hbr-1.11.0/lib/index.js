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
__exportStar(require("./backupclients"), exports);
__exportStar(require("./dbagent"), exports);
__exportStar(require("./dbplan"), exports);
__exportStar(require("./dbvault"), exports);
__exportStar(require("./restorejob"), exports);
__exportStar(require("./vault"), exports);
// ALIYUN::HBR Resources:
__exportStar(require("./hbr.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFnQztBQUNoQyw0Q0FBMEI7QUFDMUIsMkNBQXlCO0FBQ3pCLDRDQUEwQjtBQUMxQiwrQ0FBNkI7QUFDN0IsMENBQXdCO0FBRXhCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9iYWNrdXBjbGllbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vZGJhZ2VudCc7XG5leHBvcnQgKiBmcm9tICcuL2RicGxhbic7XG5leHBvcnQgKiBmcm9tICcuL2RidmF1bHQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXN0b3Jlam9iJztcbmV4cG9ydCAqIGZyb20gJy4vdmF1bHQnO1xuXG4vLyBBTElZVU46OkhCUiBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2hici5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19