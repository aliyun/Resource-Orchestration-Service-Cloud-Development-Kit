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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNENBQTBCO0FBQzFCLDhDQUE0QjtBQUM1QixzREFBb0M7QUFDcEMsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQiwyREFBeUM7QUFDekMsNERBQTBDO0FBQzFDLG9EQUFrQztBQUNsQyxxREFBbUM7QUFDbkMsNENBQTBCO0FBQzFCLDZDQUEyQjtBQUMzQiwwQ0FBd0I7QUFDeEIsMkNBQXlCO0FBQ3pCLGdEQUE4QjtBQUM5QixpREFBK0I7QUFDL0IsK0NBQTZCO0FBQzdCLG9EQUFrQztBQUNsQyxnREFBOEI7QUFDOUIsK0NBQTZCO0FBQzdCLGdEQUE4QjtBQUM5QiwrQ0FBNkI7QUFDN0IsZ0RBQThCO0FBQzlCLHdEQUFzQztBQUN0Qyx5REFBdUM7QUFDdkMsaURBQStCO0FBQy9CLCtDQUE2QjtBQUM3QixnREFBOEI7QUFDOUIsd0RBQXNDO0FBQ3RDLHlEQUF1QztBQUN2Qyw0Q0FBMEI7QUFDMUIsOENBQTRCO0FBQzVCLHdDQUFzQjtBQUN0Qix5Q0FBdUI7QUFFdkIsNkJBQTZCO0FBQzdCLGtEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWRkcmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL2FkZHJlc3Nlcyc7XG5leHBvcnQgKiBmcm9tICcuL2FueWNhc3RlaXBhZGRyZXNzJztcbmV4cG9ydCAqIGZyb20gJy4vYmdwcGVlcic7XG5leHBvcnQgKiBmcm9tICcuL2JncHBlZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uYmFuZHdpZHRocGFja2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1vbmJhbmR3aWR0aHBhY2thZ2VzJztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vY3VzdG9tZXJnYXRld2F5cyc7XG5leHBvcnQgKiBmcm9tICcuL2Zsb3dsb2cnO1xuZXhwb3J0ICogZnJvbSAnLi9mbG93bG9ncyc7XG5leHBvcnQgKiBmcm9tICcuL2hhdmlwJztcbmV4cG9ydCAqIGZyb20gJy4vaGF2aXBzJztcbmV4cG9ydCAqIGZyb20gJy4vaXB2NGdhdGV3YXknO1xuZXhwb3J0ICogZnJvbSAnLi9pcHY0Z2F0ZXdheXMnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRnYXRld2F5JztcbmV4cG9ydCAqIGZyb20gJy4vbmF0Z2F0ZXdheXpvbmVzJztcbmV4cG9ydCAqIGZyb20gJy4vbmF0Z2F0ZXdheXMnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXRpcGNpZHJzJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2FjbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9wcmVmaXhsaXN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJlZml4bGlzdHMnO1xuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWNpcGFkZHJlc3Nwb29sJztcbmV4cG9ydCAqIGZyb20gJy4vcHVibGljaXBhZGRyZXNzcG9vbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZWVudHJpZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yb3V0ZXRhYmxlJztcbmV4cG9ydCAqIGZyb20gJy4vcm91dGV0YWJsZXMnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFmZmljbWlycm9yZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdHJhZmZpY21pcnJvcmZpbHRlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi92c3dpdGNoJztcbmV4cG9ydCAqIGZyb20gJy4vdnN3aXRjaGVzJztcbmV4cG9ydCAqIGZyb20gJy4vdnBjJztcbmV4cG9ydCAqIGZyb20gJy4vdnBjcyc7XG5cbi8vIERBVEFTT1VSQ0U6OlZQQyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuIl19