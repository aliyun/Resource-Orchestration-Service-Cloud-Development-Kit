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
__exportStar(require("./swimminglane"), exports);
__exportStar(require("./swimminglanegroup"), exports);
__exportStar(require("./userdefineregion"), exports);
// ALIYUN::EDAS Resources:
__exportStar(require("./edas.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QjtBQUM5Qiw0Q0FBMEI7QUFDMUIsa0RBQWdDO0FBQ2hDLGdEQUE4QjtBQUM5QixtREFBaUM7QUFDakMsK0NBQTZCO0FBQzdCLGtEQUFnQztBQUNoQyxpREFBK0I7QUFDL0Isc0RBQW9DO0FBQ3BDLHFEQUFtQztBQUVuQywwQkFBMEI7QUFDMUIsbURBQWlDO0FBQ2pDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYXBwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2x1c3Rlcm1lbWJlcic7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vazhzYXBwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9rOHNjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vazhzc2xiYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3N3aW1taW5nbGFuZSc7XG5leHBvcnQgKiBmcm9tICcuL3N3aW1taW5nbGFuZWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcmRlZmluZXJlZ2lvbic7XG5cbi8vIEFMSVlVTjo6RURBUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2VkYXMuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbiJdfQ==