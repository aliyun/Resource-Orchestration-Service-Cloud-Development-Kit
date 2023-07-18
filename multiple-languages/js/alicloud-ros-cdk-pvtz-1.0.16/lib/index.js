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
__exportStar(require("./rule"), exports);
__exportStar(require("./uservpcauthorization"), exports);
__exportStar(require("./zone"), exports);
__exportStar(require("./zonerecord"), exports);
__exportStar(require("./zonevpcbinder"), exports);
// ALIYUN::PVTZ Resources:
__exportStar(require("./pvtz.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXVCO0FBQ3ZCLHlEQUF1QztBQUN2Qyx5Q0FBdUI7QUFDdkIsK0NBQTZCO0FBQzdCLGtEQUFnQztBQUVoQywwQkFBMEI7QUFDMUIsbURBQWlDO0FBQ2pDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vcnVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXJ2cGNhdXRob3JpemF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vem9uZSc7XG5leHBvcnQgKiBmcm9tICcuL3pvbmVyZWNvcmQnO1xuZXhwb3J0ICogZnJvbSAnLi96b25ldnBjYmluZGVyJztcblxuLy8gQUxJWVVOOjpQVlRaIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vcHZ0ei5nZW5lcmF0ZWQnO1xuaW1wb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuZXhwb3J0IHsgZGF0YXNvdXJjZSB9O1xuIl19