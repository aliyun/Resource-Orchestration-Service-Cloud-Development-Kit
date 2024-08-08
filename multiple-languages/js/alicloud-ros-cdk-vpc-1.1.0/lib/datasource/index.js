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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMEI7QUFDMUIsOENBQTRCO0FBQzVCLHNEQUFvQztBQUNwQyw0REFBMEM7QUFDMUMsb0RBQWtDO0FBQ2xDLHFEQUFtQztBQUNuQyw0Q0FBMEI7QUFDMUIsNkNBQTJCO0FBQzNCLDBDQUF3QjtBQUN4QiwyQ0FBeUI7QUFDekIsZ0RBQThCO0FBQzlCLGlEQUErQjtBQUMvQiwrQ0FBNkI7QUFDN0Isb0RBQWtDO0FBQ2xDLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLCtDQUE2QjtBQUM3QixnREFBOEI7QUFDOUIsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2QyxpREFBK0I7QUFDL0IsK0NBQTZCO0FBQzdCLGdEQUE4QjtBQUM5Qix3REFBc0M7QUFDdEMseURBQXVDO0FBQ3ZDLDRDQUEwQjtBQUMxQiw4Q0FBNEI7QUFDNUIsd0NBQXNCO0FBQ3RCLHlDQUF1QjtBQUV2Qiw2QkFBNkI7QUFDN0Isa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hZGRyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vYWRkcmVzc2VzJztcbmV4cG9ydCAqIGZyb20gJy4vYW55Y2FzdGVpcGFkZHJlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tb25iYW5kd2lkdGhwYWNrYWdlcyc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyZ2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWVyZ2F0ZXdheXMnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9nJztcbmV4cG9ydCAqIGZyb20gJy4vZmxvd2xvZ3MnO1xuZXhwb3J0ICogZnJvbSAnLi9oYXZpcCc7XG5leHBvcnQgKiBmcm9tICcuL2hhdmlwcyc7XG5leHBvcnQgKiBmcm9tICcuL2lwdjRnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NGdhdGV3YXlzJztcbmV4cG9ydCAqIGZyb20gJy4vbmF0Z2F0ZXdheSc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXl6b25lcyc7XG5leHBvcnQgKiBmcm9tICcuL25hdGdhdGV3YXlzJztcbmV4cG9ydCAqIGZyb20gJy4vbmF0aXBjaWRycyc7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmthY2xzJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlZml4bGlzdCc7XG5leHBvcnQgKiBmcm9tICcuL3ByZWZpeGxpc3RzJztcbmV4cG9ydCAqIGZyb20gJy4vcHVibGljaXBhZGRyZXNzcG9vbCc7XG5leHBvcnQgKiBmcm9tICcuL3B1YmxpY2lwYWRkcmVzc3Bvb2xzJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGVlbnRyaWVzJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZSc7XG5leHBvcnQgKiBmcm9tICcuL3JvdXRldGFibGVzJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY21pcnJvcmZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3RyYWZmaWNtaXJyb3JmaWx0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vdnN3aXRjaCc7XG5leHBvcnQgKiBmcm9tICcuL3Zzd2l0Y2hlcyc7XG5leHBvcnQgKiBmcm9tICcuL3ZwYyc7XG5leHBvcnQgKiBmcm9tICcuL3ZwY3MnO1xuXG4vLyBEQVRBU09VUkNFOjpWUEMgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbiJdfQ==