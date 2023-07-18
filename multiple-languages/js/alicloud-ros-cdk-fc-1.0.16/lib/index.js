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
__exportStar(require("./alias"), exports);
__exportStar(require("./customdomain"), exports);
__exportStar(require("./function"), exports);
__exportStar(require("./functioninvoker"), exports);
__exportStar(require("./layer"), exports);
__exportStar(require("./provisionconfig"), exports);
__exportStar(require("./service"), exports);
__exportStar(require("./trigger"), exports);
__exportStar(require("./version"), exports);
// ALIYUN::FC Resources:
__exportStar(require("./fc.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXdCO0FBQ3hCLGlEQUErQjtBQUMvQiw2Q0FBMkI7QUFDM0Isb0RBQWtDO0FBQ2xDLDBDQUF3QjtBQUN4QixvREFBa0M7QUFDbEMsNENBQTBCO0FBQzFCLDRDQUEwQjtBQUMxQiw0Q0FBMEI7QUFFMUIsd0JBQXdCO0FBQ3hCLGlEQUErQjtBQUMvQiwyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FsaWFzJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZG9tYWluJztcbmV4cG9ydCAqIGZyb20gJy4vZnVuY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9mdW5jdGlvbmludm9rZXInO1xuZXhwb3J0ICogZnJvbSAnLi9sYXllcic7XG5leHBvcnQgKiBmcm9tICcuL3Byb3Zpc2lvbmNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi90cmlnZ2VyJztcbmV4cG9ydCAqIGZyb20gJy4vdmVyc2lvbic7XG5cbi8vIEFMSVlVTjo6RkMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9mYy5nZW5lcmF0ZWQnO1xuaW1wb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuZXhwb3J0IHsgZGF0YXNvdXJjZSB9O1xuIl19