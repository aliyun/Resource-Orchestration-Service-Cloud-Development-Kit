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
__exportStar(require("./execution"), exports);
__exportStar(require("./parameter"), exports);
__exportStar(require("./patchbaseline"), exports);
__exportStar(require("./secretparameter"), exports);
__exportStar(require("./template"), exports);
// ALIYUN::OOS Resources:
__exportStar(require("./oos.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTRCO0FBQzVCLDhDQUE0QjtBQUM1QixrREFBZ0M7QUFDaEMsb0RBQWtDO0FBQ2xDLDZDQUEyQjtBQUUzQix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZXhlY3V0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcGFyYW1ldGVyJztcbmV4cG9ydCAqIGZyb20gJy4vcGF0Y2hiYXNlbGluZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3JldHBhcmFtZXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3RlbXBsYXRlJztcblxuLy8gQUxJWVVOOjpPT1MgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9vb3MuZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==