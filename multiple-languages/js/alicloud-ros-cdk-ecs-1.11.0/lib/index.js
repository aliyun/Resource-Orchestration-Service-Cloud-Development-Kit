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
__exportStar(require("./activation"), exports);
__exportStar(require("./assignipv6addresses"), exports);
__exportStar(require("./assignprivateipaddresses"), exports);
__exportStar(require("./autoprovisioninggroup"), exports);
__exportStar(require("./autosnapshotpolicy"), exports);
__exportStar(require("./capacityreservation"), exports);
__exportStar(require("./command"), exports);
__exportStar(require("./copyimage"), exports);
__exportStar(require("./customimage"), exports);
__exportStar(require("./dedicatedhost"), exports);
__exportStar(require("./deploymentset"), exports);
__exportStar(require("./disk"), exports);
__exportStar(require("./diskattachment"), exports);
__exportStar(require("./elasticityassurance"), exports);
__exportStar(require("./forwardentry"), exports);
__exportStar(require("./hpccluster"), exports);
__exportStar(require("./imagecomponent"), exports);
__exportStar(require("./imagepipeline"), exports);
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
__exportStar(require("./runcommandoflifespan"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sshkeypair"), exports);
__exportStar(require("./sshkeypairattachment"), exports);
__exportStar(require("./securitygroup"), exports);
__exportStar(require("./securitygroupclone"), exports);
__exportStar(require("./securitygroupegress"), exports);
__exportStar(require("./securitygroupegresses"), exports);
__exportStar(require("./securitygroupingress"), exports);
__exportStar(require("./securitygroupingresses"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./snapshotgroup"), exports);
__exportStar(require("./vpc"), exports);
__exportStar(require("./vswitch"), exports);
// ALIYUN::ECS Resources:
__exportStar(require("./ecs.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE2QjtBQUM3Qix3REFBc0M7QUFDdEMsNkRBQTJDO0FBQzNDLDBEQUF3QztBQUN4Qyx1REFBcUM7QUFDckMsd0RBQXNDO0FBQ3RDLDRDQUEwQjtBQUMxQiw4Q0FBNEI7QUFDNUIsZ0RBQThCO0FBQzlCLGtEQUFnQztBQUNoQyxrREFBZ0M7QUFDaEMseUNBQXVCO0FBQ3ZCLG1EQUFpQztBQUNqQyx3REFBc0M7QUFDdEMsaURBQStCO0FBQy9CLCtDQUE2QjtBQUM3QixtREFBaUM7QUFDakMsa0RBQWdDO0FBQ2hDLHlEQUF1QztBQUN2Qyw2Q0FBMkI7QUFDM0Isa0RBQWdDO0FBQ2hDLGtEQUFnQztBQUNoQyx1REFBcUM7QUFDckMsK0NBQTZCO0FBQzdCLHNEQUFvQztBQUNwQyxtREFBaUM7QUFDakMscURBQW1DO0FBQ25DLCtEQUE2QztBQUM3QywrREFBNkM7QUFDN0MsK0NBQTZCO0FBQzdCLHNEQUFvQztBQUNwQywwQ0FBd0I7QUFDeEIsK0NBQTZCO0FBQzdCLHlEQUF1QztBQUN2Qyw4Q0FBNEI7QUFDNUIsK0NBQTZCO0FBQzdCLHlEQUF1QztBQUN2QyxrREFBZ0M7QUFDaEMsdURBQXFDO0FBQ3JDLHdEQUFzQztBQUN0QywwREFBd0M7QUFDeEMseURBQXVDO0FBQ3ZDLDJEQUF5QztBQUN6Qyw2Q0FBMkI7QUFDM0Isa0RBQWdDO0FBQ2hDLHdDQUFzQjtBQUN0Qiw0Q0FBMEI7QUFFMUIseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FjdGl2YXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25pcHY2YWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYXNzaWducHJpdmF0ZWlwYWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3Byb3Zpc2lvbmluZ2dyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3NuYXBzaG90cG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FwYWNpdHlyZXNlcnZhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1hbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3B5aW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21pbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL2RlZGljYXRlZGhvc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9kZXBsb3ltZW50c2V0JztcbmV4cG9ydCAqIGZyb20gJy4vZGlzayc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2thdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZWxhc3RpY2l0eWFzc3VyYW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZvcndhcmRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL2hwY2NsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZWNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlcGlwZWxpbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZXNoYXJlcGVybWlzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VjbG9uZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZWdyb3VwY2xvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnZvY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vam9pbnNlY3VyaXR5Z3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9sYXVuY2h0ZW1wbGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JraW50ZXJmYWNlYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmtpbnRlcmZhY2VwZXJtaXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlZml4bGlzdCc7XG5leHBvcnQgKiBmcm9tICcuL3JhbXJvbGVhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ydW5jb21tYW5kJztcbmV4cG9ydCAqIGZyb20gJy4vcnVuY29tbWFuZG9mbGlmZXNwYW4nO1xuZXhwb3J0ICogZnJvbSAnLi9zbmF0ZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zc2hrZXlwYWlyJztcbmV4cG9ydCAqIGZyb20gJy4vc3Noa2V5cGFpcmF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZWN1cml0eWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cGNsb25lJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cGVncmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBlZ3Jlc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBpbmdyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cGluZ3Jlc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXBzaG90JztcbmV4cG9ydCAqIGZyb20gJy4vc25hcHNob3Rncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL3ZwYyc7XG5leHBvcnQgKiBmcm9tICcuL3Zzd2l0Y2gnO1xuXG4vLyBBTElZVU46OkVDUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19