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
__exportStar(require("./flowlog"), exports);
__exportStar(require("./interregiontrafficqospolicy"), exports);
__exportStar(require("./interregiontrafficqosqueue"), exports);
__exportStar(require("./routeentry"), exports);
__exportStar(require("./transitrouter"), exports);
__exportStar(require("./transitroutercidr"), exports);
__exportStar(require("./transitroutergrantattachment"), exports);
__exportStar(require("./transitroutermulticastdomainassociation"), exports);
__exportStar(require("./transitrouterpeerattachment"), exports);
__exportStar(require("./transitrouterrouteentry"), exports);
__exportStar(require("./transitrouterroutetable"), exports);
__exportStar(require("./transitrouterroutetableassociation"), exports);
__exportStar(require("./transitrouterroutetableassociationreplacement"), exports);
__exportStar(require("./transitrouterroutetablepropagation"), exports);
__exportStar(require("./transitroutervbrattachment"), exports);
__exportStar(require("./transitroutervpcattachment"), exports);
__exportStar(require("./transitroutervpnattachment"), exports);
// ALIYUN::CEN Resources:
__exportStar(require("./cen.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFvQztBQUNwQyx3REFBc0M7QUFDdEMsbUVBQWlEO0FBQ2pELGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsZ0RBQThCO0FBQzlCLG9EQUFrQztBQUNsQyxzREFBb0M7QUFDcEMsd0VBQXNEO0FBQ3RELDRDQUEwQjtBQUMxQixnRUFBOEM7QUFDOUMsK0RBQTZDO0FBQzdDLCtDQUE2QjtBQUM3QixrREFBZ0M7QUFDaEMsc0RBQW9DO0FBQ3BDLGlFQUErQztBQUMvQyw0RUFBMEQ7QUFDMUQsZ0VBQThDO0FBQzlDLDREQUEwQztBQUMxQyw0REFBMEM7QUFDMUMsdUVBQXFEO0FBQ3JELGtGQUFnRTtBQUNoRSx1RUFBcUQ7QUFDckQsK0RBQTZDO0FBQzdDLCtEQUE2QztBQUM3QywrREFBNkM7QUFFN0MseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NlbmJhbmR3aWR0aGxpbWl0JztcbmV4cG9ydCAqIGZyb20gJy4vY2VuYmFuZHdpZHRocGFja2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NlbmJhbmR3aWR0aHBhY2thZ2Vhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2Nlbmluc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vY2VuaW5zdGFuY2VhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY2Vucm91dGVtYXAnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW5yb3V0ZXNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jZW52YnJoZWFsdGhjaGVjayc7XG5leHBvcnQgKiBmcm9tICcuL2NoaWxkaW5zdGFuY2Vyb3V0ZWVudHJ5dG9hdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZmxvd2xvZyc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVycmVnaW9udHJhZmZpY3Fvc3BvbGljeSc7XG5leHBvcnQgKiBmcm9tICcuL2ludGVycmVnaW9udHJhZmZpY3Fvc3F1ZXVlJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVyY2lkcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJncmFudGF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVybXVsdGljYXN0ZG9tYWluYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVycGVlcmF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVycm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJyb3V0ZXRhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcnJvdXRldGFibGVhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJyb3V0ZXRhYmxlYXNzb2NpYXRpb25yZXBsYWNlbWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJyb3V0ZXRhYmxlcHJvcGFnYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0cm91dGVydmJyYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3RyYW5zaXRyb3V0ZXJ2cGNhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdHJhbnNpdHJvdXRlcnZwbmF0dGFjaG1lbnQnO1xuXG4vLyBBTElZVU46OkNFTiBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Nlbi5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19