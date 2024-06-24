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
__exportStar(require("./address"), exports);
__exportStar(require("./addresses"), exports);
__exportStar(require("./commonbandwidthpackages"), exports);
__exportStar(require("./customergateway"), exports);
__exportStar(require("./customergateways"), exports);
__exportStar(require("./flowlog"), exports);
__exportStar(require("./flowlogs"), exports);
__exportStar(require("./havip"), exports);
__exportStar(require("./havips"), exports);
__exportStar(require("./ipv4gateway"), exports);
__exportStar(require("./ipv4gateways"), exports);
__exportStar(require("./natgatewayzones"), exports);
__exportStar(require("./natgateways"), exports);
__exportStar(require("./natipcidrs"), exports);
__exportStar(require("./networkacls"), exports);
__exportStar(require("./prefixlist"), exports);
__exportStar(require("./prefixlists"), exports);
__exportStar(require("./publicipaddresspool"), exports);
__exportStar(require("./publicipaddresspools"), exports);
__exportStar(require("./routeentries"), exports);
__exportStar(require("./routetable"), exports);
__exportStar(require("./routetables"), exports);
__exportStar(require("./trafficmirrorfilter"), exports);
__exportStar(require("./trafficmirrorfilters"), exports);
__exportStar(require("./vswitch"), exports);
__exportStar(require("./vswitches"), exports);
__exportStar(require("./vpc"), exports);
__exportStar(require("./vpcs"), exports);
// DATASOURCE::VPC Resources:
__exportStar(require("./vpc.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMEI7QUFDMUIsOENBQTRCO0FBQzVCLDREQUEwQztBQUMxQyxvREFBa0M7QUFDbEMscURBQW1DO0FBQ25DLDRDQUEwQjtBQUMxQiw2Q0FBMkI7QUFDM0IsMENBQXdCO0FBQ3hCLDJDQUF5QjtBQUN6QixnREFBOEI7QUFDOUIsaURBQStCO0FBQy9CLG9EQUFrQztBQUNsQyxnREFBOEI7QUFDOUIsK0NBQTZCO0FBQzdCLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLHdEQUFzQztBQUN0Qyx5REFBdUM7QUFDdkMsaURBQStCO0FBQy9CLCtDQUE2QjtBQUM3QixnREFBOEI7QUFDOUIsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2Qyw0Q0FBMEI7QUFDMUIsOENBQTRCO0FBQzVCLHdDQUFzQjtBQUN0Qix5Q0FBdUI7QUFFdkIsNkJBQTZCO0FBQzdCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWRkcmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkZHJlc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbmJhbmR3aWR0aHBhY2thZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5cyc7XG5leHBvcnQgKiBmcm9tICcuL2Zsb3dsb2cnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9ncyc7XG5leHBvcnQgKiBmcm9tICcuL2hhdmlwJztcbmV4cG9ydCAqIGZyb20gJy4vaGF2aXBzJztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY0Z2F0ZXdheXMnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5em9uZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5cyc7XG5leHBvcnQgKiBmcm9tICcuL25hdGlwY2lkcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNscyc7XG5leHBvcnQgKiBmcm9tICcuL3ByZWZpeGxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVmaXhsaXN0cyc7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2lwYWRkcmVzc3Bvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNpcGFkZHJlc3Nwb29scyc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlZW50cmllcyc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWZmaWNtaXJyb3JmaWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFmZmljbWlycm9yZmlsdGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3Zzd2l0Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi92c3dpdGNoZXMnO1xuZXhwb3J0ICogZnJvbSAnLi92cGMnO1xuZXhwb3J0ICogZnJvbSAnLi92cGNzJztcblxuLy8gREFUQVNPVVJDRTo6VlBDIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4iXX0=