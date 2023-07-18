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
__exportStar(require("./queue"), exports);
__exportStar(require("./subscription"), exports);
__exportStar(require("./topic"), exports);
// ALIYUN::MNS Resources:
__exportStar(require("./mns.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXdCO0FBQ3hCLGlEQUErQjtBQUMvQiwwQ0FBd0I7QUFFeEIseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQywyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL3F1ZXVlJztcbmV4cG9ydCAqIGZyb20gJy4vc3Vic2NyaXB0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdG9waWMnO1xuXG4vLyBBTElZVU46Ok1OUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL21ucy5nZW5lcmF0ZWQnO1xuaW1wb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuZXhwb3J0IHsgZGF0YXNvdXJjZSB9O1xuIl19