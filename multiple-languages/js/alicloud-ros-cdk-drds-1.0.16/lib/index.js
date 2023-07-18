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
__exportStar(require("./drdsdb"), exports);
__exportStar(require("./drdsinstance"), exports);
// ALIYUN::DRDS Resources:
__exportStar(require("./drds.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlCO0FBQ3pCLGlEQUErQjtBQUUvQiwwQkFBMEI7QUFDMUIsbURBQWlDO0FBQ2pDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZHJkc2RiJztcbmV4cG9ydCAqIGZyb20gJy4vZHJkc2luc3RhbmNlJztcblxuLy8gQUxJWVVOOjpEUkRTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZHJkcy5nZW5lcmF0ZWQnO1xuaW1wb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuZXhwb3J0IHsgZGF0YXNvdXJjZSB9O1xuIl19