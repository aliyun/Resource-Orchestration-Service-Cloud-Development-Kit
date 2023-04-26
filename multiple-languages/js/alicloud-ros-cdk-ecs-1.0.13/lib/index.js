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
__exportStar(require("./assignipv6addresses"), exports);
__exportStar(require("./assignprivateipaddresses"), exports);
__exportStar(require("./autoprovisioninggroup"), exports);
__exportStar(require("./autosnapshotpolicy"), exports);
__exportStar(require("./command"), exports);
__exportStar(require("./copyimage"), exports);
__exportStar(require("./customimage"), exports);
__exportStar(require("./dedicatedhost"), exports);
__exportStar(require("./deploymentset"), exports);
__exportStar(require("./disk"), exports);
__exportStar(require("./diskattachment"), exports);
__exportStar(require("./forwardentry"), exports);
__exportStar(require("./hpccluster"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./instanceclone"), exports);
__exportStar(require("./instancegroup"), exports);
__exportStar(require("./instancegroupclone"), exports);
__exportStar(require("./invocation"), exports);
__exportStar(require("./joinsecuritygroup"), exports);
__exportStar(require("./launchtemplate"), exports);
__exportStar(require("./networkinterface"), exports);
__exportStar(require("./networkinterfaceattachment"), exports);
__exportStar(require("./networkinterfacepermission"), exports);
__exportStar(require("./prefixlist"), exports);
__exportStar(require("./route"), exports);
__exportStar(require("./runcommand"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sshkeypair"), exports);
__exportStar(require("./sshkeypairattachment"), exports);
__exportStar(require("./securitygroup"), exports);
__exportStar(require("./securitygroupclone"), exports);
__exportStar(require("./securitygroupegress"), exports);
__exportStar(require("./securitygroupingress"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./vpc"), exports);
__exportStar(require("./vswitch"), exports);
// ALIYUN::ECS Resources:
__exportStar(require("./ecs.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx3REFBc0M7QUFDdEMsNkRBQTJDO0FBQzNDLDBEQUF3QztBQUN4Qyx1REFBcUM7QUFDckMsNENBQTBCO0FBQzFCLDhDQUE0QjtBQUM1QixnREFBOEI7QUFDOUIsa0RBQWdDO0FBQ2hDLGtEQUFnQztBQUNoQyx5Q0FBdUI7QUFDdkIsbURBQWlDO0FBQ2pDLGlEQUErQjtBQUMvQiwrQ0FBNkI7QUFDN0IsNkNBQTJCO0FBQzNCLGtEQUFnQztBQUNoQyxrREFBZ0M7QUFDaEMsdURBQXFDO0FBQ3JDLCtDQUE2QjtBQUM3QixzREFBb0M7QUFDcEMsbURBQWlDO0FBQ2pDLHFEQUFtQztBQUNuQywrREFBNkM7QUFDN0MsK0RBQTZDO0FBQzdDLCtDQUE2QjtBQUM3QiwwQ0FBd0I7QUFDeEIsK0NBQTZCO0FBQzdCLDhDQUE0QjtBQUM1QiwrQ0FBNkI7QUFDN0IseURBQXVDO0FBQ3ZDLGtEQUFnQztBQUNoQyx1REFBcUM7QUFDckMsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2Qyw2Q0FBMkI7QUFDM0Isd0NBQXNCO0FBQ3RCLDRDQUEwQjtBQUUxQix5QkFBeUI7QUFDekIsa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25pcHY2YWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYXNzaWducHJpdmF0ZWlwYWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3Byb3Zpc2lvbmluZ2dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3NuYXBzaG90cG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWFuZCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcHlpbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZGVkaWNhdGVkaG9zdCc7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveW1lbnRzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXNrJztcbmV4cG9ydCAqIGZyb20gJy4vZGlza2F0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3J3YXJkZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9ocGNjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZWNsb25lJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2Vncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlZ3JvdXBjbG9uZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludm9jYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9qb2luc2VjdXJpdHlncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2xhdW5jaHRlbXBsYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2VhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZXBlcm1pc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVmaXhsaXN0JztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ydW5jb21tYW5kJztcbmV4cG9ydCAqIGZyb20gJy4vc25hdGVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vc3Noa2V5cGFpcic7XG5leHBvcnQgKiBmcm9tICcuL3NzaGtleXBhaXJhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBjbG9uZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBlZ3Jlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3VwaW5ncmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXBzaG90JztcbmV4cG9ydCAqIGZyb20gJy4vdnBjJztcbmV4cG9ydCAqIGZyb20gJy4vdnN3aXRjaCc7XG5cbi8vIEFMSVlVTjo6RUNTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG4iXX0=