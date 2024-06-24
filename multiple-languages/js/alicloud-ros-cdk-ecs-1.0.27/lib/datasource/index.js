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
__exportStar(require("./activation"), exports);
__exportStar(require("./activations"), exports);
__exportStar(require("./autosnapshotpolicies"), exports);
__exportStar(require("./autosnapshotpolicy"), exports);
__exportStar(require("./command"), exports);
__exportStar(require("./commands"), exports);
__exportStar(require("./dedicatedhostcluster"), exports);
__exportStar(require("./dedicatedhostclusters"), exports);
__exportStar(require("./dedicatedhosts"), exports);
__exportStar(require("./deploymentset"), exports);
__exportStar(require("./deploymentsets"), exports);
__exportStar(require("./disk"), exports);
__exportStar(require("./diskcategories"), exports);
__exportStar(require("./disks"), exports);
__exportStar(require("./hpccluster"), exports);
__exportStar(require("./hpcclusters"), exports);
__exportStar(require("./images"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./instances"), exports);
__exportStar(require("./keypair"), exports);
__exportStar(require("./keypairs"), exports);
__exportStar(require("./launchtemplate"), exports);
__exportStar(require("./launchtemplates"), exports);
__exportStar(require("./managedinstances"), exports);
__exportStar(require("./networkinterfaces"), exports);
__exportStar(require("./recommendinstancetypes"), exports);
__exportStar(require("./securitygroup"), exports);
__exportStar(require("./securitygroups"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./snapshots"), exports);
__exportStar(require("./zones"), exports);
// DATASOURCE::ECS Resources:
__exportStar(require("./ecs.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLHlEQUF1QztBQUN2Qyx1REFBcUM7QUFDckMsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQix5REFBdUM7QUFDdkMsMERBQXdDO0FBQ3hDLG1EQUFpQztBQUNqQyxrREFBZ0M7QUFDaEMsbURBQWlDO0FBQ2pDLHlDQUF1QjtBQUN2QixtREFBaUM7QUFDakMsMENBQXdCO0FBQ3hCLCtDQUE2QjtBQUM3QixnREFBOEI7QUFDOUIsMkNBQXlCO0FBQ3pCLDZDQUEyQjtBQUMzQiw4Q0FBNEI7QUFDNUIsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQixtREFBaUM7QUFDakMsb0RBQWtDO0FBQ2xDLHFEQUFtQztBQUNuQyxzREFBb0M7QUFDcEMsMkRBQXlDO0FBQ3pDLGtEQUFnQztBQUNoQyxtREFBaUM7QUFDakMsNkNBQTJCO0FBQzNCLDhDQUE0QjtBQUM1QiwwQ0FBd0I7QUFFeEIsNkJBQTZCO0FBQzdCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2FjdGl2YXRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3NuYXBzaG90cG9saWNpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRvc25hcHNob3Rwb2xpY3knO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tYW5kJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWFuZHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWRpY2F0ZWRob3N0Y2x1c3Rlcic7XG5leHBvcnQgKiBmcm9tICcuL2RlZGljYXRlZGhvc3RjbHVzdGVycyc7XG5leHBvcnQgKiBmcm9tICcuL2RlZGljYXRlZGhvc3RzJztcbmV4cG9ydCAqIGZyb20gJy4vZGVwbG95bWVudHNldCc7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveW1lbnRzZXRzJztcbmV4cG9ydCAqIGZyb20gJy4vZGlzayc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2tjYXRlZ29yaWVzJztcbmV4cG9ydCAqIGZyb20gJy4vZGlza3MnO1xuZXhwb3J0ICogZnJvbSAnLi9ocGNjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaHBjY2x1c3RlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL2tleXBhaXInO1xuZXhwb3J0ICogZnJvbSAnLi9rZXlwYWlycyc7XG5leHBvcnQgKiBmcm9tICcuL2xhdW5jaHRlbXBsYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vbGF1bmNodGVtcGxhdGVzJztcbmV4cG9ydCAqIGZyb20gJy4vbWFuYWdlZGluc3RhbmNlcyc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vcmVjb21tZW5kaW5zdGFuY2V0eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3Vwcyc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXBzaG90JztcbmV4cG9ydCAqIGZyb20gJy4vc25hcHNob3RzJztcbmV4cG9ydCAqIGZyb20gJy4vem9uZXMnO1xuXG4vLyBEQVRBU09VUkNFOjpFQ1MgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbiJdfQ==