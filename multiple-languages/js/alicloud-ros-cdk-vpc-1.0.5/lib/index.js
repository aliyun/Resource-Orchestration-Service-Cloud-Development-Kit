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
__exportStar(require("./eippro"), exports);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLDZDQUEyQjtBQUMzQiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLDJEQUF5QztBQUN6Qyw2REFBMkM7QUFDM0Msb0RBQWtDO0FBQ2xDLG1EQUFpQztBQUNqQyw2REFBMkM7QUFDM0Msd0NBQXNCO0FBQ3RCLG1EQUFpQztBQUNqQywyQ0FBeUI7QUFDekIsK0NBQTZCO0FBQzdCLDRDQUEwQjtBQUMxQix1REFBcUM7QUFDckMsZ0RBQThCO0FBQzlCLGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsK0NBQTZCO0FBQzdCLCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsa0VBQWdEO0FBQ2hELHFFQUFtRDtBQUNuRCwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLG9EQUFrQztBQUNsQyw4Q0FBNEI7QUFDNUIscURBQW1DO0FBQ25DLGlEQUErQjtBQUMvQix3REFBc0M7QUFDdEMsa0RBQWdDO0FBQ2hDLCtDQUE2QjtBQUM3QixxREFBbUM7QUFDbkMsa0RBQWdDO0FBRWhDLHlCQUF5QjtBQUN6QixrREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hbnljYXN0ZWlwYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9iZ3Bncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL2JncG5ldHdvcmsnO1xuZXhwb3J0ICogZnJvbSAnLi9iZ3BwZWVyJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbmJhbmR3aWR0aHBhY2thZ2VpcCc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyZ2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2RoY3BvcHRpb25zc2V0JztcbmV4cG9ydCAqIGZyb20gJy4vZGhjcG9wdGlvbnNzZXRhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZWlwJztcbmV4cG9ydCAqIGZyb20gJy4vZWlwYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9laXBwcm8nO1xuZXhwb3J0ICogZnJvbSAnLi9laXBzZWdtZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZmxvd2xvZyc7XG5leHBvcnQgKiBmcm9tICcuL2dyYW50aW5zdGFuY2V0b2Nlbic7XG5leHBvcnQgKiBmcm9tICcuL2lwc2Vjc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NmdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY2aW50ZXJuZXRiYW5kd2lkdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2FjbCc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2xhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3BlZXJpbmdyb3V0ZXJpbnRlcmZhY2ViaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vcGVlcmluZ3JvdXRlcmludGVyZmFjZWNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZWFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVyaW50ZXJmYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vc25hdGVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vc3NsdnBuY2xpZW50Y2VydCc7XG5leHBvcnQgKiBmcm9tICcuL3NzbHZwbnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpcnR1YWxib3JkZXJyb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi92cG5jb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdnBuZ2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL3ZwbnBicnJvdXRlZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi92cG5yb3V0ZWVudHJ5JztcblxuLy8gQUxJWVVOOjpWUEMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbiJdfQ==