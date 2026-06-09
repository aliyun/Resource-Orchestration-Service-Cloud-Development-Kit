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
__exportStar(require("./dbcluster"), exports);
__exportStar(require("./enterprisedbcluster"), exports);
__exportStar(require("./enterprisedbclusteraccount"), exports);
__exportStar(require("./enterprisedbclusterbackuppolicy"), exports);
__exportStar(require("./enterprisedbclustersecurityip"), exports);
__exportStar(require("./syndb"), exports);
// ALIYUN::ClickHouse Resources:
__exportStar(require("./clickhouse.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE0QjtBQUM1Qix3REFBc0M7QUFDdEMsK0RBQTZDO0FBQzdDLG9FQUFrRDtBQUNsRCxrRUFBZ0Q7QUFDaEQsMENBQXdCO0FBRXhCLGdDQUFnQztBQUNoQyx5REFBdUM7QUFDdkMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9kYmNsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9lbnRlcnByaXNlZGJjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZW50ZXJwcmlzZWRiY2x1c3RlcmFjY291bnQnO1xuZXhwb3J0ICogZnJvbSAnLi9lbnRlcnByaXNlZGJjbHVzdGVyYmFja3VwcG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vZW50ZXJwcmlzZWRiY2x1c3RlcnNlY3VyaXR5aXAnO1xuZXhwb3J0ICogZnJvbSAnLi9zeW5kYic7XG5cbi8vIEFMSVlVTjo6Q2xpY2tIb3VzZSBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2NsaWNraG91c2UuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbiJdfQ==