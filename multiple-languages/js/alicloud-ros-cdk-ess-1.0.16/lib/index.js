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
__exportStar(require("./alarmtask"), exports);
__exportStar(require("./alarmtaskenable"), exports);
__exportStar(require("./lifecyclehook"), exports);
__exportStar(require("./scalingconfiguration"), exports);
__exportStar(require("./scalinggroup"), exports);
__exportStar(require("./scalinggroupenable"), exports);
__exportStar(require("./scalingrule"), exports);
__exportStar(require("./scheduledtask"), exports);
// ALIYUN::ESS Resources:
__exportStar(require("./ess.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTRCO0FBQzVCLG9EQUFrQztBQUNsQyxrREFBZ0M7QUFDaEMseURBQXVDO0FBQ3ZDLGlEQUErQjtBQUMvQix1REFBcUM7QUFDckMsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUVoQyx5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWxhcm10YXNrJztcbmV4cG9ydCAqIGZyb20gJy4vYWxhcm10YXNrZW5hYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vbGlmZWN5Y2xlaG9vayc7XG5leHBvcnQgKiBmcm9tICcuL3NjYWxpbmdjb25maWd1cmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2NhbGluZ2dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vc2NhbGluZ2dyb3VwZW5hYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vc2NhbGluZ3J1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zY2hlZHVsZWR0YXNrJztcblxuLy8gQUxJWVVOOjpFU1MgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9lc3MuZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==