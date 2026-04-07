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
__exportStar(require("./accessgroup"), exports);
__exportStar(require("./accessrule"), exports);
__exportStar(require("./dataflow"), exports);
__exportStar(require("./filesystem"), exports);
__exportStar(require("./fileset"), exports);
__exportStar(require("./mounttarget"), exports);
__exportStar(require("./protocolmounttarget"), exports);
__exportStar(require("./protocolservice"), exports);
// ALIYUN::NAS Resources:
__exportStar(require("./nas.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsNkNBQTJCO0FBQzNCLCtDQUE2QjtBQUM3Qiw0Q0FBMEI7QUFDMUIsZ0RBQThCO0FBQzlCLHdEQUFzQztBQUN0QyxvREFBa0M7QUFFbEMseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FjY2Vzc2dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYWNjZXNzcnVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGFmbG93JztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZXN5c3RlbSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbGVzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb3VudHRhcmdldCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb3RvY29sbW91bnR0YXJnZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm90b2NvbHNlcnZpY2UnO1xuXG4vLyBBTElZVU46Ok5BUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL25hcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19