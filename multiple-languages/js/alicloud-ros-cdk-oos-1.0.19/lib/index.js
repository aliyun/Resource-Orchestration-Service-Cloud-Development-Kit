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
__exportStar(require("./defaultpatchbaseline"), exports);
__exportStar(require("./execution"), exports);
__exportStar(require("./parameter"), exports);
__exportStar(require("./patchbaseline"), exports);
__exportStar(require("./secretparameter"), exports);
__exportStar(require("./template"), exports);
// ALIYUN::OOS Resources:
__exportStar(require("./oos.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBdUM7QUFDdkMsOENBQTRCO0FBQzVCLDhDQUE0QjtBQUM1QixrREFBZ0M7QUFDaEMsb0RBQWtDO0FBQ2xDLDZDQUEyQjtBQUUzQix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdHBhdGNoYmFzZWxpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9leGVjdXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wYXJhbWV0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wYXRjaGJhc2VsaW5lJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjcmV0cGFyYW1ldGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdGVtcGxhdGUnO1xuXG4vLyBBTElZVU46Ok9PUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL29vcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19