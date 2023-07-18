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
__exportStar(require("./instance"), exports);
__exportStar(require("./searchindex"), exports);
__exportStar(require("./table"), exports);
__exportStar(require("./vpcbinder"), exports);
// ALIYUN::OTS Resources:
__exportStar(require("./ots.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJCO0FBQzNCLGdEQUE4QjtBQUM5QiwwQ0FBd0I7QUFDeEIsOENBQTRCO0FBRTVCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsMkNBQTJDO0FBQ2xDLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlYXJjaGluZGV4JztcbmV4cG9ydCAqIGZyb20gJy4vdGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi92cGNiaW5kZXInO1xuXG4vLyBBTElZVU46Ok9UUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL290cy5nZW5lcmF0ZWQnO1xuaW1wb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuZXhwb3J0IHsgZGF0YXNvdXJjZSB9O1xuIl19