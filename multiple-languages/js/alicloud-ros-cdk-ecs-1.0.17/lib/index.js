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
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSx3REFBc0M7QUFDdEMsNkRBQTJDO0FBQzNDLDBEQUF3QztBQUN4Qyx1REFBcUM7QUFDckMsNENBQTBCO0FBQzFCLDhDQUE0QjtBQUM1QixnREFBOEI7QUFDOUIsa0RBQWdDO0FBQ2hDLGtEQUFnQztBQUNoQyx5Q0FBdUI7QUFDdkIsbURBQWlDO0FBQ2pDLGlEQUErQjtBQUMvQiwrQ0FBNkI7QUFDN0IsNkNBQTJCO0FBQzNCLGtEQUFnQztBQUNoQyxrREFBZ0M7QUFDaEMsdURBQXFDO0FBQ3JDLCtDQUE2QjtBQUM3QixzREFBb0M7QUFDcEMsbURBQWlDO0FBQ2pDLHFEQUFtQztBQUNuQywrREFBNkM7QUFDN0MsK0RBQTZDO0FBQzdDLCtDQUE2QjtBQUM3QixzREFBb0M7QUFDcEMsMENBQXdCO0FBQ3hCLCtDQUE2QjtBQUM3Qiw4Q0FBNEI7QUFDNUIsK0NBQTZCO0FBQzdCLHlEQUF1QztBQUN2QyxrREFBZ0M7QUFDaEMsdURBQXFDO0FBQ3JDLHdEQUFzQztBQUN0Qyx5REFBdUM7QUFDdkMsNkNBQTJCO0FBQzNCLHdDQUFzQjtBQUN0Qiw0Q0FBMEI7QUFFMUIseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2Fzc2lnbmlwdjZhZGRyZXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25wcml2YXRlaXBhZGRyZXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRvcHJvdmlzaW9uaW5nZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRvc25hcHNob3Rwb2xpY3knO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tYW5kJztcbmV4cG9ydCAqIGZyb20gJy4vY29weWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9taW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWRpY2F0ZWRob3N0JztcbmV4cG9ydCAqIGZyb20gJy4vZGVwbG95bWVudHNldCc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2snO1xuZXhwb3J0ICogZnJvbSAnLi9kaXNrYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvcndhcmRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL2hwY2NsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlY2xvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2Vncm91cGNsb25lJztcbmV4cG9ydCAqIGZyb20gJy4vaW52b2NhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2pvaW5zZWN1cml0eWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vbGF1bmNodGVtcGxhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JraW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZWF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JraW50ZXJmYWNlcGVybWlzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3ByZWZpeGxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9yYW1yb2xlYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlJztcbmV4cG9ydCAqIGZyb20gJy4vcnVuY29tbWFuZCc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3NzaGtleXBhaXInO1xuZXhwb3J0ICogZnJvbSAnLi9zc2hrZXlwYWlyYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3VwY2xvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3VwZWdyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cGluZ3Jlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmFwc2hvdCc7XG5leHBvcnQgKiBmcm9tICcuL3ZwYyc7XG5leHBvcnQgKiBmcm9tICcuL3Zzd2l0Y2gnO1xuXG4vLyBBTElZVU46OkVDUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19