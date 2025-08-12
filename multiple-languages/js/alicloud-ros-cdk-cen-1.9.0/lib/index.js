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
__exportStar(require("./cenbandwidthlimit"), exports);
__exportStar(require("./cenbandwidthpackage"), exports);
__exportStar(require("./cenbandwidthpackageassociation"), exports);
__exportStar(require("./ceninstance"), exports);
__exportStar(require("./ceninstanceattachment"), exports);
__exportStar(require("./cenroutemap"), exports);
__exportStar(require("./cenrouteservice"), exports);
__exportStar(require("./cenvbrhealthcheck"), exports);
__exportStar(require("./childinstancerouteentrytoattachment"), exports);
__exportStar(require("./routeentry"), exports);
__exportStar(require("./transitrouter"), exports);
__exportStar(require("./transitrouterpeerattachment"), exports);
__exportStar(require("./transitrouterrouteentry"), exports);
__exportStar(require("./transitrouterroutetable"), exports);
__exportStar(require("./transitrouterroutetableassociation"), exports);
__exportStar(require("./transitrouterroutetablepropagation"), exports);
__exportStar(require("./transitroutervbrattachment"), exports);
__exportStar(require("./transitroutervpcattachment"), exports);
__exportStar(require("./transitroutervpnattachment"), exports);
// ALIYUN::CEN Resources:
__exportStar(require("./cen.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFvQztBQUNwQyx3REFBc0M7QUFDdEMsbUVBQWlEO0FBQ2pELGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsZ0RBQThCO0FBQzlCLG9EQUFrQztBQUNsQyxzREFBb0M7QUFDcEMsd0VBQXNEO0FBQ3RELCtDQUE2QjtBQUM3QixrREFBZ0M7QUFDaEMsZ0VBQThDO0FBQzlDLDREQUEwQztBQUMxQyw0REFBMEM7QUFDMUMsdUVBQXFEO0FBQ3JELHVFQUFxRDtBQUNyRCwrREFBNkM7QUFDN0MsK0RBQTZDO0FBQzdDLCtEQUE2QztBQUU3Qyx5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY2VuYmFuZHdpZHRobGltaXQnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW5iYW5kd2lkdGhwYWNrYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY2VuYmFuZHdpZHRocGFja2FnZWFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vY2VuaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW5pbnN0YW5jZWF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW5yb3V0ZW1hcCc7XG5leHBvcnQgKiBmcm9tICcuL2NlbnJvdXRlc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2NlbnZicmhlYWx0aGNoZWNrJztcbmV4cG9ydCAqIGZyb20gJy4vY2hpbGRpbnN0YW5jZXJvdXRlZW50cnl0b2F0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZWVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJwZWVyYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJyb3V0ZWVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcnJvdXRldGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVycm91dGV0YWJsZWFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcnJvdXRldGFibGVwcm9wYWdhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJ2YnJhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcnZwY2F0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVydnBuYXR0YWNobWVudCc7XG5cbi8vIEFMSVlVTjo6Q0VOIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vY2VuLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG4iXX0=