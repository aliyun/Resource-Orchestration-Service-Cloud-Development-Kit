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
__exportStar(require("./api"), exports);
__exportStar(require("./app"), exports);
__exportStar(require("./authorization"), exports);
__exportStar(require("./customdomain"), exports);
__exportStar(require("./deployment"), exports);
__exportStar(require("./group"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./logconfig"), exports);
__exportStar(require("./plugin"), exports);
__exportStar(require("./pluginattachment"), exports);
__exportStar(require("./signature"), exports);
__exportStar(require("./signaturebinding"), exports);
__exportStar(require("./stageconfig"), exports);
__exportStar(require("./trafficcontrol"), exports);
__exportStar(require("./trafficcontrolbinding"), exports);
__exportStar(require("./vpcaccessconfig"), exports);
// ALIYUN::ApiGateway Resources:
__exportStar(require("./apigateway.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXNCO0FBQ3RCLHdDQUFzQjtBQUN0QixrREFBZ0M7QUFDaEMsaURBQStCO0FBQy9CLCtDQUE2QjtBQUM3QiwwQ0FBd0I7QUFDeEIsNkNBQTJCO0FBQzNCLDhDQUE0QjtBQUM1QiwyQ0FBeUI7QUFDekIscURBQW1DO0FBQ25DLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsZ0RBQThCO0FBQzlCLG1EQUFpQztBQUNqQywwREFBd0M7QUFDeEMsb0RBQWtDO0FBRWxDLGdDQUFnQztBQUNoQyx5REFBdUM7QUFDdkMsMkNBQTJDO0FBQ2xDLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9hcHAnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRob3JpemF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZG9tYWluJztcbmV4cG9ydCAqIGZyb20gJy4vZGVwbG95bWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2djb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9wbHVnaW4nO1xuZXhwb3J0ICogZnJvbSAnLi9wbHVnaW5hdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2lnbmF0dXJlJztcbmV4cG9ydCAqIGZyb20gJy4vc2lnbmF0dXJlYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YWdlY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY2NvbnRyb2wnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFmZmljY29udHJvbGJpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi92cGNhY2Nlc3Njb25maWcnO1xuXG4vLyBBTElZVU46OkFwaUdhdGV3YXkgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9hcGlnYXRld2F5LmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=