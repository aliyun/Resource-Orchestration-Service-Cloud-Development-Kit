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
__exportStar(require("./addressbook"), exports);
__exportStar(require("./allfwswitch"), exports);
__exportStar(require("./controlpolicy"), exports);
__exportStar(require("./fwswitch"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./natfirewallcontrolpolicy"), exports);
__exportStar(require("./trfirewall"), exports);
__exportStar(require("./trfirewallroutepolicy"), exports);
__exportStar(require("./vpcfirewallcen"), exports);
__exportStar(require("./vpcfirewallconfigure"), exports);
__exportStar(require("./vpcfirewallcontrolpolicy"), exports);
// ALIYUN::CLOUDFW Resources:
__exportStar(require("./cloudfw.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QjtBQUM5QixnREFBOEI7QUFDOUIsa0RBQWdDO0FBQ2hDLDZDQUEyQjtBQUMzQiw2Q0FBMkI7QUFDM0IsNkRBQTJDO0FBQzNDLCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsbURBQWlDO0FBQ2pDLHlEQUF1QztBQUN2Qyw2REFBMkM7QUFFM0MsNkJBQTZCO0FBQzdCLHNEQUFvQztBQUNwQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FkZHJlc3Nib29rJztcbmV4cG9ydCAqIGZyb20gJy4vYWxsZndzd2l0Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9jb250cm9scG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vZndzd2l0Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL25hdGZpcmV3YWxsY29udHJvbHBvbGljeSc7XG5leHBvcnQgKiBmcm9tICcuL3RyZmlyZXdhbGwnO1xuZXhwb3J0ICogZnJvbSAnLi90cmZpcmV3YWxscm91dGVwb2xpY3knO1xuZXhwb3J0ICogZnJvbSAnLi92cGNmaXJld2FsbGNlbic7XG5leHBvcnQgKiBmcm9tICcuL3ZwY2ZpcmV3YWxsY29uZmlndXJlJztcbmV4cG9ydCAqIGZyb20gJy4vdnBjZmlyZXdhbGxjb250cm9scG9saWN5JztcblxuLy8gQUxJWVVOOjpDTE9VREZXIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vY2xvdWRmdy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19