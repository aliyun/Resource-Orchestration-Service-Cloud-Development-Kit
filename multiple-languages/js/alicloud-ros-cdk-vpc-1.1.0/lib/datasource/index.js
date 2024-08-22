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
__exportStar(require("./anycasteipaddress"), exports);
__exportStar(require("./bgppeer"), exports);
__exportStar(require("./bgppeers"), exports);
__exportStar(require("./commonbandwidthpackage"), exports);
__exportStar(require("./commonbandwidthpackages"), exports);
__exportStar(require("./customergateway"), exports);
__exportStar(require("./customergateways"), exports);
__exportStar(require("./flowlog"), exports);
__exportStar(require("./flowlogs"), exports);
__exportStar(require("./havip"), exports);
__exportStar(require("./havips"), exports);
__exportStar(require("./ipv4gateway"), exports);
__exportStar(require("./ipv4gateways"), exports);
__exportStar(require("./natgateway"), exports);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMEI7QUFDMUIsOENBQTRCO0FBQzVCLHNEQUFvQztBQUNwQyw0Q0FBMEI7QUFDMUIsNkNBQTJCO0FBQzNCLDJEQUF5QztBQUN6Qyw0REFBMEM7QUFDMUMsb0RBQWtDO0FBQ2xDLHFEQUFtQztBQUNuQyw0Q0FBMEI7QUFDMUIsNkNBQTJCO0FBQzNCLDBDQUF3QjtBQUN4QiwyQ0FBeUI7QUFDekIsZ0RBQThCO0FBQzlCLGlEQUErQjtBQUMvQiwrQ0FBNkI7QUFDN0Isb0RBQWtDO0FBQ2xDLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLCtDQUE2QjtBQUM3QixnREFBOEI7QUFDOUIsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2QyxpREFBK0I7QUFDL0IsK0NBQTZCO0FBQzdCLGdEQUE4QjtBQUM5Qix3REFBc0M7QUFDdEMseURBQXVDO0FBQ3ZDLDRDQUEwQjtBQUMxQiw4Q0FBNEI7QUFDNUIsd0NBQXNCO0FBQ3RCLHlDQUF1QjtBQUV2Qiw2QkFBNkI7QUFDN0Isa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hZGRyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vYWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYW55Y2FzdGVpcGFkZHJlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9iZ3BwZWVyJztcbmV4cG9ydCAqIGZyb20gJy4vYmdwcGVlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb25iYW5kd2lkdGhwYWNrYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lcmdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9jdXN0b21lcmdhdGV3YXlzJztcbmV4cG9ydCAqIGZyb20gJy4vZmxvd2xvZyc7XG5leHBvcnQgKiBmcm9tICcuL2Zsb3dsb2dzJztcbmV4cG9ydCAqIGZyb20gJy4vaGF2aXAnO1xuZXhwb3J0ICogZnJvbSAnLi9oYXZpcHMnO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY0Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjRnYXRld2F5cyc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5em9uZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5cyc7XG5leHBvcnQgKiBmcm9tICcuL25hdGlwY2lkcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNscyc7XG5leHBvcnQgKiBmcm9tICcuL3ByZWZpeGxpc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVmaXhsaXN0cyc7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2lwYWRkcmVzc3Bvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNpcGFkZHJlc3Nwb29scyc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRlZW50cmllcyc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGUnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlcyc7XG5leHBvcnQgKiBmcm9tICcuL3RyYWZmaWNtaXJyb3JmaWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi90cmFmZmljbWlycm9yZmlsdGVycyc7XG5leHBvcnQgKiBmcm9tICcuL3Zzd2l0Y2gnO1xuZXhwb3J0ICogZnJvbSAnLi92c3dpdGNoZXMnO1xuZXhwb3J0ICogZnJvbSAnLi92cGMnO1xuZXhwb3J0ICogZnJvbSAnLi92cGNzJztcblxuLy8gREFUQVNPVVJDRTo6VlBDIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4iXX0=