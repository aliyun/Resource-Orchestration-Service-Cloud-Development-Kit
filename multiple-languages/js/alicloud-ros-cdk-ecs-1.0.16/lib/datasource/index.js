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
__exportStar(require("./autosnapshotpolicies"), exports);
__exportStar(require("./commands"), exports);
__exportStar(require("./dedicatedhostclusters"), exports);
__exportStar(require("./dedicatedhosts"), exports);
__exportStar(require("./deploymentsets"), exports);
__exportStar(require("./diskcategories"), exports);
__exportStar(require("./disks"), exports);
__exportStar(require("./hpcclusters"), exports);
__exportStar(require("./images"), exports);
__exportStar(require("./instances"), exports);
__exportStar(require("./keypairs"), exports);
__exportStar(require("./managedinstances"), exports);
__exportStar(require("./networkinterfaces"), exports);
__exportStar(require("./recommendinstancetypes"), exports);
__exportStar(require("./securitygroups"), exports);
__exportStar(require("./snapshots"), exports);
__exportStar(require("./zones"), exports);
// DATASOURCE::ECS Resources:
__exportStar(require("./ecs.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx5REFBdUM7QUFDdkMsNkNBQTJCO0FBQzNCLDBEQUF3QztBQUN4QyxtREFBaUM7QUFDakMsbURBQWlDO0FBQ2pDLG1EQUFpQztBQUNqQywwQ0FBd0I7QUFDeEIsZ0RBQThCO0FBQzlCLDJDQUF5QjtBQUN6Qiw4Q0FBNEI7QUFDNUIsNkNBQTJCO0FBQzNCLHFEQUFtQztBQUNuQyxzREFBb0M7QUFDcEMsMkRBQXlDO0FBQ3pDLG1EQUFpQztBQUNqQyw4Q0FBNEI7QUFDNUIsMENBQXdCO0FBRXhCLDZCQUE2QjtBQUM3QixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2F1dG9zbmFwc2hvdHBvbGljaWVzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWFuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWRpY2F0ZWRob3N0Y2x1c3RlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWRpY2F0ZWRob3N0cyc7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveW1lbnRzZXRzJztcbmV4cG9ydCAqIGZyb20gJy4vZGlza2NhdGVnb3JpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXNrcyc7XG5leHBvcnQgKiBmcm9tICcuL2hwY2NsdXN0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vaW1hZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VzJztcbmV4cG9ydCAqIGZyb20gJy4va2V5cGFpcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYW5hZ2VkaW5zdGFuY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWNvbW1lbmRpbnN0YW5jZXR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cHMnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmFwc2hvdHMnO1xuZXhwb3J0ICogZnJvbSAnLi96b25lcyc7XG5cbi8vIERBVEFTT1VSQ0U6OkVDUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuIl19