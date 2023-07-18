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
__exportStar(require("./ramroleattachment"), exports);
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
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXNDO0FBQ3RDLDZEQUEyQztBQUMzQywwREFBd0M7QUFDeEMsdURBQXFDO0FBQ3JDLDRDQUEwQjtBQUMxQiw4Q0FBNEI7QUFDNUIsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUNoQyxrREFBZ0M7QUFDaEMseUNBQXVCO0FBQ3ZCLG1EQUFpQztBQUNqQyxpREFBK0I7QUFDL0IsK0NBQTZCO0FBQzdCLDZDQUEyQjtBQUMzQixrREFBZ0M7QUFDaEMsa0RBQWdDO0FBQ2hDLHVEQUFxQztBQUNyQywrQ0FBNkI7QUFDN0Isc0RBQW9DO0FBQ3BDLG1EQUFpQztBQUNqQyxxREFBbUM7QUFDbkMsK0RBQTZDO0FBQzdDLCtEQUE2QztBQUM3QywrQ0FBNkI7QUFDN0Isc0RBQW9DO0FBQ3BDLDBDQUF3QjtBQUN4QiwrQ0FBNkI7QUFDN0IsOENBQTRCO0FBQzVCLCtDQUE2QjtBQUM3Qix5REFBdUM7QUFDdkMsa0RBQWdDO0FBQ2hDLHVEQUFxQztBQUNyQyx3REFBc0M7QUFDdEMseURBQXVDO0FBQ3ZDLDZDQUEyQjtBQUMzQix3Q0FBc0I7QUFDdEIsNENBQTBCO0FBRTFCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsMkNBQTJDO0FBQ2xDLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25pcHY2YWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYXNzaWducHJpdmF0ZWlwYWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3Byb3Zpc2lvbmluZ2dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3NuYXBzaG90cG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWFuZCc7XG5leHBvcnQgKiBmcm9tICcuL2NvcHlpbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZGVkaWNhdGVkaG9zdCc7XG5leHBvcnQgKiBmcm9tICcuL2RlcGxveW1lbnRzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXNrJztcbmV4cG9ydCAqIGZyb20gJy4vZGlza2F0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mb3J3YXJkZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9ocGNjbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZWNsb25lJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2Vncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlZ3JvdXBjbG9uZSc7XG5leHBvcnQgKiBmcm9tICcuL2ludm9jYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9qb2luc2VjdXJpdHlncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2xhdW5jaHRlbXBsYXRlJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2VhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZXBlcm1pc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVmaXhsaXN0JztcbmV4cG9ydCAqIGZyb20gJy4vcmFtcm9sZWF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3J1bmNvbW1hbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmF0ZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zc2hrZXlwYWlyJztcbmV4cG9ydCAqIGZyb20gJy4vc3Noa2V5cGFpcmF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cGNsb25lJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cGVncmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBpbmdyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vc25hcHNob3QnO1xuZXhwb3J0ICogZnJvbSAnLi92cGMnO1xuZXhwb3J0ICogZnJvbSAnLi92c3dpdGNoJztcblxuLy8gQUxJWVVOOjpFQ1MgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==