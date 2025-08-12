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
__exportStar(require("./contact"), exports);
__exportStar(require("./contactgroup"), exports);
__exportStar(require("./dynamictaggroup"), exports);
__exportStar(require("./eventrule"), exports);
__exportStar(require("./eventruletargets"), exports);
__exportStar(require("./groupmetricrule"), exports);
__exportStar(require("./metricruletargets"), exports);
__exportStar(require("./metricruletemplate"), exports);
__exportStar(require("./metricruletemplatedeployment"), exports);
__exportStar(require("./monitorgroup"), exports);
__exportStar(require("./monitorgroupinstances"), exports);
__exportStar(require("./monitoringagent"), exports);
__exportStar(require("./monitoringagentprocess"), exports);
__exportStar(require("./namespace"), exports);
__exportStar(require("./resourcemetricrule"), exports);
__exportStar(require("./sitemonitor"), exports);
__exportStar(require("./slsgroup"), exports);
// ALIYUN::CMS Resources:
__exportStar(require("./cms.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUEwQjtBQUMxQixpREFBK0I7QUFDL0Isb0RBQWtDO0FBQ2xDLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsb0RBQWtDO0FBQ2xDLHNEQUFvQztBQUNwQyx1REFBcUM7QUFDckMsaUVBQStDO0FBQy9DLGlEQUErQjtBQUMvQiwwREFBd0M7QUFDeEMsb0RBQWtDO0FBQ2xDLDJEQUF5QztBQUN6Qyw4Q0FBNEI7QUFDNUIsdURBQXFDO0FBQ3JDLGdEQUE4QjtBQUM5Qiw2Q0FBMkI7QUFFM0IseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NvbnRhY3QnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250YWN0Z3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9keW5hbWljdGFnZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHJ1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHJ1bGV0YXJnZXRzJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXBtZXRyaWNydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljcnVsZXRhcmdldHMnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNydWxldGVtcGxhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXRyaWNydWxldGVtcGxhdGVkZXBsb3ltZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbW9uaXRvcmdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vbW9uaXRvcmdyb3VwaW5zdGFuY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vbW9uaXRvcmluZ2FnZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbW9uaXRvcmluZ2FnZW50cHJvY2Vzcyc7XG5leHBvcnQgKiBmcm9tICcuL25hbWVzcGFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlbWV0cmljcnVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3NpdGVtb25pdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2xzZ3JvdXAnO1xuXG4vLyBBTElZVU46OkNNUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Ntcy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19