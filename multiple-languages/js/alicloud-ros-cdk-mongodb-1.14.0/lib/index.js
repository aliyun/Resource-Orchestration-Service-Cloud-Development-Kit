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
__exportStar(require("./auditpolicy"), exports);
__exportStar(require("./globalsecurityipgroup"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./privatesrvnetworkaddress"), exports);
__exportStar(require("./shardinginstance"), exports);
__exportStar(require("./shardingnetworkprivateaddress"), exports);
__exportStar(require("./shardingnetworkpublicaddress"), exports);
// ALIYUN::MONGODB Resources:
__exportStar(require("./mongodb.generated"), exports);
exports.datasource = require("./datasource");
__exportStar(require("./perms.cdk"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsNkNBQTJCO0FBQzNCLDZEQUEyQztBQUMzQyxxREFBbUM7QUFDbkMsa0VBQWdEO0FBQ2hELGlFQUErQztBQUUvQyw2QkFBNkI7QUFDN0Isc0RBQW9DO0FBQ3BDLDZDQUEyQztBQUUzQyw4Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2F1ZGl0cG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vZ2xvYmFsc2VjdXJpdHlpcGdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9wcml2YXRlc3J2bmV0d29ya2FkZHJlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZGluZ2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hhcmRpbmduZXR3b3JrcHJpdmF0ZWFkZHJlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9zaGFyZGluZ25ldHdvcmtwdWJsaWNhZGRyZXNzJztcblxuLy8gQUxJWVVOOjpNT05HT0RCIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vbW9uZ29kYi5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuXG5leHBvcnQgKiBmcm9tICcuL3Blcm1zLmNkayc7Il19