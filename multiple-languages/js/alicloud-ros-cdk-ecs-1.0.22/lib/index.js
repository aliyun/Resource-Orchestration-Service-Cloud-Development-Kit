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
__exportStar(require("./imagesharepermission"), exports);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0Isd0RBQXNDO0FBQ3RDLDZEQUEyQztBQUMzQywwREFBd0M7QUFDeEMsdURBQXFDO0FBQ3JDLDRDQUEwQjtBQUMxQiw4Q0FBNEI7QUFDNUIsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUNoQyxrREFBZ0M7QUFDaEMseUNBQXVCO0FBQ3ZCLG1EQUFpQztBQUNqQyxpREFBK0I7QUFDL0IsK0NBQTZCO0FBQzdCLHlEQUF1QztBQUN2Qyw2Q0FBMkI7QUFDM0Isa0RBQWdDO0FBQ2hDLGtEQUFnQztBQUNoQyx1REFBcUM7QUFDckMsK0NBQTZCO0FBQzdCLHNEQUFvQztBQUNwQyxtREFBaUM7QUFDakMscURBQW1DO0FBQ25DLCtEQUE2QztBQUM3QywrREFBNkM7QUFDN0MsK0NBQTZCO0FBQzdCLHNEQUFvQztBQUNwQywwQ0FBd0I7QUFDeEIsK0NBQTZCO0FBQzdCLDhDQUE0QjtBQUM1QiwrQ0FBNkI7QUFDN0IseURBQXVDO0FBQ3ZDLGtEQUFnQztBQUNoQyx1REFBcUM7QUFDckMsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2Qyw2Q0FBMkI7QUFDM0Isd0NBQXNCO0FBQ3RCLDRDQUEwQjtBQUUxQix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWN0aXZhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbmlwdjZhZGRyZXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25wcml2YXRlaXBhZGRyZXNzZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRvcHJvdmlzaW9uaW5nZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRvc25hcHNob3Rwb2xpY3knO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tYW5kJztcbmV4cG9ydCAqIGZyb20gJy4vY29weWltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9taW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWRpY2F0ZWRob3N0JztcbmV4cG9ydCAqIGZyb20gJy4vZGVwbG95bWVudHNldCc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2snO1xuZXhwb3J0ICogZnJvbSAnLi9kaXNrYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ZvcndhcmRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL2hwY2NsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZXNoYXJlcGVybWlzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VjbG9uZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZWdyb3VwY2xvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnZvY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vam9pbnNlY3VyaXR5Z3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXVuY2h0ZW1wbGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JraW50ZXJmYWNlYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2VwZXJtaXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlZml4bGlzdCc7XG5leHBvcnQgKiBmcm9tICcuL3JhbXJvbGVhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ydW5jb21tYW5kJztcbmV4cG9ydCAqIGZyb20gJy4vc25hdGVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vc3Noa2V5cGFpcic7XG5leHBvcnQgKiBmcm9tICcuL3NzaGtleXBhaXJhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBjbG9uZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBlZ3Jlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3VwaW5ncmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXBzaG90JztcbmV4cG9ydCAqIGZyb20gJy4vdnBjJztcbmV4cG9ydCAqIGZyb20gJy4vdnN3aXRjaCc7XG5cbi8vIEFMSVlVTjo6RUNTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZWNzLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG4iXX0=