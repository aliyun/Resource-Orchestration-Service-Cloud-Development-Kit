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
__exportStar(require("./application"), exports);
__exportStar(require("./cluster"), exports);
__exportStar(require("./clustermember"), exports);
__exportStar(require("./deploygroup"), exports);
__exportStar(require("./k8sapplication"), exports);
__exportStar(require("./k8scluster"), exports);
__exportStar(require("./k8sslbbinding"), exports);
__exportStar(require("./userdefineregion"), exports);
// ALIYUN::EDAS Resources:
__exportStar(require("./edas.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQThCO0FBQzlCLDRDQUEwQjtBQUMxQixrREFBZ0M7QUFDaEMsZ0RBQThCO0FBQzlCLG1EQUFpQztBQUNqQywrQ0FBNkI7QUFDN0Isa0RBQWdDO0FBQ2hDLHFEQUFtQztBQUVuQywwQkFBMEI7QUFDMUIsbURBQWlDO0FBQ2pDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYXBwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2x1c3Rlcm1lbWJlcic7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vazhzYXBwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9rOHNjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vazhzc2xiYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXJkZWZpbmVyZWdpb24nO1xuXG4vLyBBTElZVU46OkVEQVMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9lZGFzLmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=