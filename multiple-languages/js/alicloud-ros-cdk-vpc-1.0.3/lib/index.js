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
__exportStar(require("./anycasteip"), exports);
__exportStar(require("./anycasteipassociation"), exports);
__exportStar(require("./bgpgroup"), exports);
__exportStar(require("./bgpnetwork"), exports);
__exportStar(require("./bgppeer"), exports);
__exportStar(require("./commonbandwidthpackage"), exports);
__exportStar(require("./commonbandwidthpackageip"), exports);
__exportStar(require("./customergateway"), exports);
__exportStar(require("./dhcpoptionsset"), exports);
__exportStar(require("./dhcpoptionssetattachment"), exports);
__exportStar(require("./eip"), exports);
__exportStar(require("./eipassociation"), exports);
__exportStar(require("./eipsegment"), exports);
__exportStar(require("./flowlog"), exports);
__exportStar(require("./grantinstancetocen"), exports);
__exportStar(require("./ipsecserver"), exports);
__exportStar(require("./ipv6gateway"), exports);
__exportStar(require("./ipv6internetbandwidth"), exports);
__exportStar(require("./natgateway"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./peeringrouterinterfacebinding"), exports);
__exportStar(require("./peeringrouterinterfaceconnection"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetableassociation"), exports);
__exportStar(require("./routerinterface"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sslvpnclientcert"), exports);
__exportStar(require("./sslvpnserver"), exports);
__exportStar(require("./virtualborderrouter"), exports);
__exportStar(require("./vpnconnection"), exports);
__exportStar(require("./vpngateway"), exports);
__exportStar(require("./vpnpbrrouteentry"), exports);
__exportStar(require("./vpnrouteentry"), exports);
// ALIYUN::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLDZDQUEyQjtBQUMzQiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLDJEQUF5QztBQUN6Qyw2REFBMkM7QUFDM0Msb0RBQWtDO0FBQ2xDLG1EQUFpQztBQUNqQyw2REFBMkM7QUFDM0Msd0NBQXNCO0FBQ3RCLG1EQUFpQztBQUNqQywrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLHVEQUFxQztBQUNyQyxnREFBOEI7QUFDOUIsZ0RBQThCO0FBQzlCLDBEQUF3QztBQUN4QywrQ0FBNkI7QUFDN0IsK0NBQTZCO0FBQzdCLDBEQUF3QztBQUN4QyxrRUFBZ0Q7QUFDaEQscUVBQW1EO0FBQ25ELCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsb0RBQWtDO0FBQ2xDLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsaURBQStCO0FBQy9CLHdEQUFzQztBQUN0QyxrREFBZ0M7QUFDaEMsK0NBQTZCO0FBQzdCLHFEQUFtQztBQUNuQyxrREFBZ0M7QUFFaEMseUJBQXlCO0FBQ3pCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYW55Y2FzdGVpcCc7XG5leHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2JncGdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYmdwbmV0d29yayc7XG5leHBvcnQgKiBmcm9tICcuL2JncHBlZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb25iYW5kd2lkdGhwYWNrYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZWlwJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vZGhjcG9wdGlvbnNzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaGNwb3B0aW9uc3NldGF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9laXAnO1xuZXhwb3J0ICogZnJvbSAnLi9laXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VpcHNlZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9nJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhbnRpbnN0YW5jZXRvY2VuJztcbmV4cG9ydCAqIGZyb20gJy4vaXBzZWNzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY2Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjZpbnRlcm5ldGJhbmR3aWR0aCc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNsJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2FjbGFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcGVlcmluZ3JvdXRlcmludGVyZmFjZWJpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9wZWVyaW5ncm91dGVyaW50ZXJmYWNlY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXJpbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmF0ZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zc2x2cG5jbGllbnRjZXJ0JztcbmV4cG9ydCAqIGZyb20gJy4vc3NsdnBuc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlydHVhbGJvcmRlcnJvdXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZwbmNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi92cG5nYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vdnBucGJycm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3ZwbnJvdXRlZW50cnknO1xuXG4vLyBBTElZVU46OlZQQyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuIl19