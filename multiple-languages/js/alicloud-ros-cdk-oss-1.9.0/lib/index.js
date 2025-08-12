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
__exportStar(require("./bucket"), exports);
__exportStar(require("./bucketreplication"), exports);
__exportStar(require("./directory"), exports);
__exportStar(require("./domain"), exports);
__exportStar(require("./objectacl"), exports);
__exportStar(require("./website"), exports);
// ALIYUN::OSS Resources:
__exportStar(require("./oss.generated"), exports);
exports.datasource = require("./datasource");
__exportStar(require("./perms.cdk"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUF5QjtBQUN6QixzREFBb0M7QUFDcEMsOENBQTRCO0FBQzVCLDJDQUF5QjtBQUN6Qiw4Q0FBNEI7QUFDNUIsNENBQTBCO0FBRTFCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsNkNBQTJDO0FBRTNDLDhDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYnVja2V0JztcbmV4cG9ydCAqIGZyb20gJy4vYnVja2V0cmVwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RvcnknO1xuZXhwb3J0ICogZnJvbSAnLi9kb21haW4nO1xuZXhwb3J0ICogZnJvbSAnLi9vYmplY3RhY2wnO1xuZXhwb3J0ICogZnJvbSAnLi93ZWJzaXRlJztcblxuLy8gQUxJWVVOOjpPU1MgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9vc3MuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcblxuZXhwb3J0ICogZnJvbSAnLi9wZXJtcy5jZGsnOyJdfQ==