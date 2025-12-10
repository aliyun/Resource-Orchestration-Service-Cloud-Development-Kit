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
__exportStar(require("./instance"), exports);
__exportStar(require("./instancev2"), exports);
__exportStar(require("./searchindex"), exports);
__exportStar(require("./table"), exports);
__exportStar(require("./vcuinstance"), exports);
__exportStar(require("./vpcbinder"), exports);
// ALIYUN::OTS Resources:
__exportStar(require("./ots.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEyQjtBQUMzQiwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLDBDQUF3QjtBQUN4QixnREFBOEI7QUFDOUIsOENBQTRCO0FBRTVCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNldjInO1xuZXhwb3J0ICogZnJvbSAnLi9zZWFyY2hpbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL3RhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vdmN1aW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi92cGNiaW5kZXInO1xuXG4vLyBBTElZVU46Ok9UUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL290cy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19