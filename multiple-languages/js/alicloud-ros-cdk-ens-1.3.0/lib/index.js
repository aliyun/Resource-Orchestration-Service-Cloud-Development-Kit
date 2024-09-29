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
__exportStar(require("./disk"), exports);
__exportStar(require("./diskinstanceattachment"), exports);
__exportStar(require("./image"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./instancesecuritygroupattachment"), exports);
__exportStar(require("./keypair"), exports);
__exportStar(require("./network"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./securitygroup"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./vswitch"), exports);
// ALIYUN::ENS Resources:
__exportStar(require("./ens.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBdUI7QUFDdkIsMkRBQXlDO0FBQ3pDLDBDQUF3QjtBQUN4Qiw2Q0FBMkI7QUFDM0Isb0VBQWtEO0FBQ2xELDRDQUEwQjtBQUMxQiw0Q0FBMEI7QUFDMUIsK0NBQTZCO0FBQzdCLDBEQUF3QztBQUN4QyxrREFBZ0M7QUFDaEMsNkNBQTJCO0FBQzNCLDRDQUEwQjtBQUUxQix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZGlzayc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2tpbnN0YW5jZWF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VzZWN1cml0eWdyb3VwYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2tleXBhaXInO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2FjbCc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2xhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmFwc2hvdCc7XG5leHBvcnQgKiBmcm9tICcuL3Zzd2l0Y2gnO1xuXG4vLyBBTElZVU46OkVOUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Vucy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19