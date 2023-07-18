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
__exportStar(require("./domain"), exports);
__exportStar(require("./domaingroup"), exports);
__exportStar(require("./domainrecord"), exports);
// ALIYUN::DNS Resources:
__exportStar(require("./dns.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlCO0FBQ3pCLGdEQUE4QjtBQUM5QixpREFBK0I7QUFFL0IseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQywyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2RvbWFpbic7XG5leHBvcnQgKiBmcm9tICcuL2RvbWFpbmdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vZG9tYWlucmVjb3JkJztcblxuLy8gQUxJWVVOOjpETlMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9kbnMuZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==