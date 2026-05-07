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
__exportStar(require("./accesscontrol"), exports);
__exportStar(require("./api"), exports);
__exportStar(require("./app"), exports);
__exportStar(require("./authorization"), exports);
__exportStar(require("./backend"), exports);
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
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUFnQztBQUNoQyx3Q0FBc0I7QUFDdEIsd0NBQXNCO0FBQ3RCLGtEQUFnQztBQUNoQyw0Q0FBMEI7QUFDMUIsaURBQStCO0FBQy9CLCtDQUE2QjtBQUM3QiwwQ0FBd0I7QUFDeEIsNkNBQTJCO0FBQzNCLDhDQUE0QjtBQUM1QiwyQ0FBeUI7QUFDekIscURBQW1DO0FBQ25DLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsZ0RBQThCO0FBQzlCLG1EQUFpQztBQUNqQywwREFBd0M7QUFDeEMsb0RBQWtDO0FBRWxDLGdDQUFnQztBQUNoQyx5REFBdUM7QUFDdkMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hY2Nlc3Njb250cm9sJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vYXBwJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aG9yaXphdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2JhY2tlbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21kb21haW4nO1xuZXhwb3J0ICogZnJvbSAnLi9kZXBsb3ltZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2xvZ2NvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3BsdWdpbic7XG5leHBvcnQgKiBmcm9tICcuL3BsdWdpbmF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWduYXR1cmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaWduYXR1cmViaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vc3RhZ2Vjb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFmZmljY29udHJvbCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWZmaWNjb250cm9sYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3ZwY2FjY2Vzc2NvbmZpZyc7XG5cbi8vIEFMSVlVTjo6QXBpR2F0ZXdheSBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2FwaWdhdGV3YXkuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbiJdfQ==