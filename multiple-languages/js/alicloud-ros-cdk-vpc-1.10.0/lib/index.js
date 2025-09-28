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
__exportStar(require("./forwardentry"), exports);
__exportStar(require("./fullnatentry"), exports);
__exportStar(require("./grantinstancetocen"), exports);
__exportStar(require("./havip"), exports);
__exportStar(require("./havipassociation"), exports);
__exportStar(require("./ipam"), exports);
__exportStar(require("./ipamscope"), exports);
__exportStar(require("./ipsecserver"), exports);
__exportStar(require("./ipv4gateway"), exports);
__exportStar(require("./ipv6gateway"), exports);
__exportStar(require("./ipv6internetbandwidth"), exports);
__exportStar(require("./natgateway"), exports);
__exportStar(require("./natip"), exports);
__exportStar(require("./natipcidr"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./peeringrouterinterfacebinding"), exports);
__exportStar(require("./peeringrouterinterfaceconnection"), exports);
__exportStar(require("./prefixlist"), exports);
__exportStar(require("./publicipaddresspool"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetableassociation"), exports);
__exportStar(require("./routetablewithgatewayassociation"), exports);
__exportStar(require("./routerinterface"), exports);
__exportStar(require("./snatentry"), exports);
__exportStar(require("./sslvpnclientcert"), exports);
__exportStar(require("./sslvpnserver"), exports);
__exportStar(require("./trafficmirrorfilter"), exports);
__exportStar(require("./trafficmirrorsession"), exports);
__exportStar(require("./trafficmirrorsessionsourcesaddition"), exports);
__exportStar(require("./vswitchcidrreservation"), exports);
__exportStar(require("./vcorouteentry"), exports);
__exportStar(require("./virtualborderrouter"), exports);
__exportStar(require("./vpccidrblockassociation"), exports);
__exportStar(require("./vpcgatewayendpoint"), exports);
__exportStar(require("./vpcgatewayendpointassociation"), exports);
__exportStar(require("./vpcipv6cidrallocation"), exports);
__exportStar(require("./vpcpeerconnection"), exports);
__exportStar(require("./vpnattachment"), exports);
__exportStar(require("./vpnconnection"), exports);
__exportStar(require("./vpngateway"), exports);
__exportStar(require("./vpnpbrrouteentry"), exports);
__exportStar(require("./vpnrouteentry"), exports);
// ALIYUN::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE2QjtBQUM3QiwwREFBd0M7QUFDeEMsNkNBQTJCO0FBQzNCLCtDQUE2QjtBQUM3Qiw0Q0FBMEI7QUFDMUIsMkRBQXlDO0FBQ3pDLDZEQUEyQztBQUMzQyxvREFBa0M7QUFDbEMsbURBQWlDO0FBQ2pDLDZEQUEyQztBQUMzQyx3Q0FBc0I7QUFDdEIsbURBQWlDO0FBQ2pDLDJDQUF5QjtBQUN6QiwrQ0FBNkI7QUFDN0IsNENBQTBCO0FBQzFCLGlEQUErQjtBQUMvQixpREFBK0I7QUFDL0IsdURBQXFDO0FBQ3JDLDBDQUF3QjtBQUN4QixxREFBbUM7QUFDbkMseUNBQXVCO0FBQ3ZCLDhDQUE0QjtBQUM1QixnREFBOEI7QUFDOUIsZ0RBQThCO0FBQzlCLGdEQUE4QjtBQUM5QiwwREFBd0M7QUFDeEMsK0NBQTZCO0FBQzdCLDBDQUF3QjtBQUN4Qiw4Q0FBNEI7QUFDNUIsK0NBQTZCO0FBQzdCLDBEQUF3QztBQUN4QyxrRUFBZ0Q7QUFDaEQscUVBQW1EO0FBQ25ELCtDQUE2QjtBQUM3Qix3REFBc0M7QUFDdEMsK0NBQTZCO0FBQzdCLDBEQUF3QztBQUN4QyxxRUFBbUQ7QUFDbkQsb0RBQWtDO0FBQ2xDLDhDQUE0QjtBQUM1QixxREFBbUM7QUFDbkMsaURBQStCO0FBQy9CLHdEQUFzQztBQUN0Qyx5REFBdUM7QUFDdkMsd0VBQXNEO0FBQ3RELDJEQUF5QztBQUN6QyxrREFBZ0M7QUFDaEMsd0RBQXNDO0FBQ3RDLDREQUEwQztBQUMxQyx1REFBcUM7QUFDckMsa0VBQWdEO0FBQ2hELDBEQUF3QztBQUN4QyxzREFBb0M7QUFDcEMsa0RBQWdDO0FBQ2hDLGtEQUFnQztBQUNoQywrQ0FBNkI7QUFDN0IscURBQW1DO0FBQ25DLGtEQUFnQztBQUVoQyx5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYW55Y2FzdGVpcCc7XG5leHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2JncGdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vYmdwbmV0d29yayc7XG5leHBvcnQgKiBmcm9tICcuL2JncHBlZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb25iYW5kd2lkdGhwYWNrYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZWlwJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vZGhjcG9wdGlvbnNzZXQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaGNwb3B0aW9uc3NldGF0dGFjaG1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9laXAnO1xuZXhwb3J0ICogZnJvbSAnLi9laXBhc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2VpcHBybyc7XG5leHBvcnQgKiBmcm9tICcuL2VpcHNlZ21lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9nJztcbmV4cG9ydCAqIGZyb20gJy4vZm9yd2FyZGVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vZnVsbG5hdGVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vZ3JhbnRpbnN0YW5jZXRvY2VuJztcbmV4cG9ydCAqIGZyb20gJy4vaGF2aXAnO1xuZXhwb3J0ICogZnJvbSAnLi9oYXZpcGFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaXBhbSc7XG5leHBvcnQgKiBmcm9tICcuL2lwYW1zY29wZSc7XG5leHBvcnQgKiBmcm9tICcuL2lwc2Vjc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY2Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjZpbnRlcm5ldGJhbmR3aWR0aCc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRpcCc7XG5leHBvcnQgKiBmcm9tICcuL25hdGlwY2lkcic7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2wnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNsYXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9wZWVyaW5ncm91dGVyaW50ZXJmYWNlYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL3BlZXJpbmdyb3V0ZXJpbnRlcmZhY2Vjb25uZWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlZml4bGlzdCc7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2lwYWRkcmVzc3Bvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZWFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZXdpdGhnYXRld2F5YXNzb2NpYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXJpbnRlcmZhY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmF0ZW50cnknO1xuZXhwb3J0ICogZnJvbSAnLi9zc2x2cG5jbGllbnRjZXJ0JztcbmV4cG9ydCAqIGZyb20gJy4vc3NsdnBuc2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY21pcnJvcmZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYWZmaWNtaXJyb3JzZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY21pcnJvcnNlc3Npb25zb3VyY2VzYWRkaXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi92c3dpdGNoY2lkcnJlc2VydmF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdmNvcm91dGVlbnRyeSc7XG5leHBvcnQgKiBmcm9tICcuL3ZpcnR1YWxib3JkZXJyb3V0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi92cGNjaWRyYmxvY2thc3NvY2lhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3ZwY2dhdGV3YXllbmRwb2ludCc7XG5leHBvcnQgKiBmcm9tICcuL3ZwY2dhdGV3YXllbmRwb2ludGFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdnBjaXB2NmNpZHJhbGxvY2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdnBjcGVlcmNvbm5lY3Rpb24nO1xuZXhwb3J0ICogZnJvbSAnLi92cG5hdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdnBuY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3ZwbmdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi92cG5wYnJyb3V0ZWVudHJ5JztcbmV4cG9ydCAqIGZyb20gJy4vdnBucm91dGVlbnRyeSc7XG5cbi8vIEFMSVlVTjo6VlBDIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG4iXX0=