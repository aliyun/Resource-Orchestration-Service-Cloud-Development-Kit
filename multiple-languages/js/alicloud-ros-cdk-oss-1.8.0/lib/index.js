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
__exportStar(require("./bucket"), exports);
__exportStar(require("./directory"), exports);
__exportStar(require("./domain"), exports);
__exportStar(require("./objectacl"), exports);
__exportStar(require("./website"), exports);
// ALIYUN::OSS Resources:
__exportStar(require("./oss.generated"), exports);
exports.datasource = require("./datasource");
__exportStar(require("./perms.cdk"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBeUI7QUFDekIsOENBQTRCO0FBQzVCLDJDQUF5QjtBQUN6Qiw4Q0FBNEI7QUFDNUIsNENBQTBCO0FBRTFCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsNkNBQTJDO0FBRTNDLDhDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYnVja2V0JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vZG9tYWluJztcbmV4cG9ydCAqIGZyb20gJy4vb2JqZWN0YWNsJztcbmV4cG9ydCAqIGZyb20gJy4vd2Vic2l0ZSc7XG5cbi8vIEFMSVlVTjo6T1NTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vb3NzLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vcGVybXMuY2RrJzsiXX0=