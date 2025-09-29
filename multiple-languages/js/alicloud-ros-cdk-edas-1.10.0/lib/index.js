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
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QjtBQUM5Qiw0Q0FBMEI7QUFDMUIsa0RBQWdDO0FBQ2hDLGdEQUE4QjtBQUM5QixtREFBaUM7QUFDakMsK0NBQTZCO0FBQzdCLGtEQUFnQztBQUNoQyxxREFBbUM7QUFFbkMsMEJBQTBCO0FBQzFCLG1EQUFpQztBQUNqQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FwcGxpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY2x1c3Rlcic7XG5leHBvcnQgKiBmcm9tICcuL2NsdXN0ZXJtZW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi9kZXBsb3lncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2s4c2FwcGxpY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vazhzY2x1c3Rlcic7XG5leHBvcnQgKiBmcm9tICcuL2s4c3NsYmJpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi91c2VyZGVmaW5lcmVnaW9uJztcblxuLy8gQUxJWVVOOjpFREFTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZWRhcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19