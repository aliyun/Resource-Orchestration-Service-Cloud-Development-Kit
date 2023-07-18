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
// ALIYUN::CEN Resources:
__exportStar(require("./cen.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsc0RBQW9DO0FBQ3BDLHdEQUFzQztBQUN0QyxtRUFBaUQ7QUFDakQsZ0RBQThCO0FBQzlCLDBEQUF3QztBQUN4QyxnREFBOEI7QUFDOUIsb0RBQWtDO0FBQ2xDLHNEQUFvQztBQUNwQyx3RUFBc0Q7QUFDdEQsK0NBQTZCO0FBQzdCLGtEQUFnQztBQUNoQyxnRUFBOEM7QUFDOUMsNERBQTBDO0FBQzFDLDREQUEwQztBQUMxQyx1RUFBcUQ7QUFDckQsdUVBQXFEO0FBQ3JELCtEQUE2QztBQUM3QywrREFBNkM7QUFFN0MseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQywyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NlbmJhbmR3aWR0aGxpbWl0JztcbmV4cG9ydCAqIGZyb20gJy4vY2VuYmFuZHdpZHRocGFja2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NlbmJhbmR3aWR0aHBhY2thZ2Vhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2Nlbmluc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2VuaW5zdGFuY2VhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY2Vucm91dGVtYXAnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW5yb3V0ZXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW52YnJoZWFsdGhjaGVjayc7XG5leHBvcnQgKiBmcm9tICcuL2NoaWxkaW5zdGFuY2Vyb3V0ZWVudHJ5dG9hdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVycGVlcmF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVycm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJyb3V0ZXRhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcnJvdXRldGFibGVhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJyb3V0ZXRhYmxlcHJvcGFnYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVydmJyYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJ2cGNhdHRhY2htZW50JztcblxuLy8gQUxJWVVOOjpDRU4gUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9jZW4uZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==