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
__exportStar(require("./havip"), exports);
__exportStar(require("./havipassociation"), exports);
__exportStar(require("./ipsecserver"), exports);
__exportStar(require("./ipv4gateway"), exports);
__exportStar(require("./ipv6gateway"), exports);
__exportStar(require("./ipv6internetbandwidth"), exports);
__exportStar(require("./natgateway"), exports);
__exportStar(require("./natip"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./peeringrouterinterfacebinding"), exports);
__exportStar(require("./peeringrouterinterfaceconnection"), exports);
__exportStar(require("./prefixlist"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetableassociation"), exports);
__exportStar(require("./routerinterface"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sslvpnclientcert"), exports);
__exportStar(require("./sslvpnserver"), exports);
__exportStar(require("./trafficmirrorfilter"), exports);
__exportStar(require("./virtualborderrouter"), exports);
__exportStar(require("./vpcpeerconnection"), exports);
__exportStar(require("./vpnconnection"), exports);
__exportStar(require("./vpngateway"), exports);
__exportStar(require("./vpnpbrrouteentry"), exports);
__exportStar(require("./vpnrouteentry"), exports);
// ALIYUN::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLDZDQUEyQjtBQUMzQiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLDJEQUF5QztBQUN6Qyw2REFBMkM7QUFDM0Msb0RBQWtDO0FBQ2xDLG1EQUFpQztBQUNqQyw2REFBMkM7QUFDM0Msd0NBQXNCO0FBQ3RCLG1EQUFpQztBQUNqQywyQ0FBeUI7QUFDekIsK0NBQTZCO0FBQzdCLDRDQUEwQjtBQUMxQix1REFBcUM7QUFDckMsMENBQXdCO0FBQ3hCLHFEQUFtQztBQUNuQyxnREFBOEI7QUFDOUIsZ0RBQThCO0FBQzlCLGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsK0NBQTZCO0FBQzdCLDBDQUF3QjtBQUN4QiwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLGtFQUFnRDtBQUNoRCxxRUFBbUQ7QUFDbkQsK0NBQTZCO0FBQzdCLCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsb0RBQWtDO0FBQ2xDLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsaURBQStCO0FBQy9CLHdEQUFzQztBQUN0Qyx3REFBc0M7QUFDdEMsc0RBQW9DO0FBQ3BDLGtEQUFnQztBQUNoQywrQ0FBNkI7QUFDN0IscURBQW1DO0FBQ25DLGtEQUFnQztBQUVoQyx5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYW55Y2FzdGVpcCc7XG5leHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2JncGdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYmdwbmV0d29yayc7XG5leHBvcnQgKiBmcm9tICcuL2JncHBlZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb25iYW5kd2lkdGhwYWNrYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZWlwJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vZGhjcG9wdGlvbnNzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaGNwb3B0aW9uc3NldGF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9laXAnO1xuZXhwb3J0ICogZnJvbSAnLi9laXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VpcHBybyc7XG5leHBvcnQgKiBmcm9tICcuL2VpcHNlZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9nJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhbnRpbnN0YW5jZXRvY2VuJztcbmV4cG9ydCAqIGZyb20gJy4vaGF2aXAnO1xuZXhwb3J0ICogZnJvbSAnLi9oYXZpcGFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaXBzZWNzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY0Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjZnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NmludGVybmV0YmFuZHdpZHRoJztcbmV4cG9ydCAqIGZyb20gJy4vbmF0Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL25hdGlwJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2FjbCc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2xhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3BlZXJpbmdyb3V0ZXJpbnRlcmZhY2ViaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vcGVlcmluZ3JvdXRlcmludGVyZmFjZWNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVmaXhsaXN0JztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZSc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGVhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlcmludGVyZmFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXRlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3NzbHZwbmNsaWVudGNlcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zc2x2cG5zZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFmZmljbWlycm9yZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlydHVhbGJvcmRlcnJvdXRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZwY3BlZXJjb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdnBuY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3ZwbmdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi92cG5wYnJyb3V0ZWVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vdnBucm91dGVlbnRyeSc7XG5cbi8vIEFMSVlVTjo6VlBDIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG4iXX0=