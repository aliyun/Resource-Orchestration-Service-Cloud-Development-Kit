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
__exportStar(require("./commonbandwidthpackage"), exports);
__exportStar(require("./commonbandwidthpackageip"), exports);
__exportStar(require("./customergateway"), exports);
__exportStar(require("./eip"), exports);
__exportStar(require("./eipassociation"), exports);
__exportStar(require("./grantinstancetocen"), exports);
__exportStar(require("./ipv6gateway"), exports);
__exportStar(require("./ipv6internetbandwidth"), exports);
__exportStar(require("./natgateway"), exports);
__exportStar(require("./peeringrouterinterfacebinding"), exports);
__exportStar(require("./peeringrouterinterfaceconnection"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetableassociation"), exports);
__exportStar(require("./routerinterface"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sslvpnclientcert"), exports);
__exportStar(require("./sslvpnserver"), exports);
__exportStar(require("./vpnconnection"), exports);
__exportStar(require("./vpngateway"), exports);
// ALIYUN::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUM7QUFDekMsNkRBQTJDO0FBQzNDLG9EQUFrQztBQUNsQyx3Q0FBc0I7QUFDdEIsbURBQWlDO0FBQ2pDLHVEQUFxQztBQUNyQyxnREFBOEI7QUFDOUIsMERBQXdDO0FBQ3hDLCtDQUE2QjtBQUM3QixrRUFBZ0Q7QUFDaEQscUVBQW1EO0FBQ25ELCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsb0RBQWtDO0FBQ2xDLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsaURBQStCO0FBQy9CLGtEQUFnQztBQUNoQywrQ0FBNkI7QUFFN0IseUJBQXlCO0FBQ3pCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbmJhbmR3aWR0aHBhY2thZ2VpcCc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyZ2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2VpcCc7XG5leHBvcnQgKiBmcm9tICcuL2VpcGFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhbnRpbnN0YW5jZXRvY2VuJztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NmdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY2aW50ZXJuZXRiYW5kd2lkdGgnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vcGVlcmluZ3JvdXRlcmludGVyZmFjZWJpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9wZWVyaW5ncm91dGVyaW50ZXJmYWNlY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXJpbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmF0ZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zc2x2cG5jbGllbnRjZXJ0JztcbmV4cG9ydCAqIGZyb20gJy4vc3NsdnBuc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vdnBuY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3ZwbmdhdGV3YXknO1xuXG4vLyBBTElZVU46OlZQQyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuIl19