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
__exportStar(require("./alert"), exports);
__exportStar(require("./analyzeproductlog"), exports);
__exportStar(require("./applyconfigtomachinegroup"), exports);
__exportStar(require("./audit"), exports);
__exportStar(require("./consumergroup"), exports);
__exportStar(require("./dashboard"), exports);
__exportStar(require("./etl"), exports);
__exportStar(require("./etlv2"), exports);
__exportStar(require("./index-resource"), exports);
__exportStar(require("./logstore"), exports);
__exportStar(require("./logtailconfig"), exports);
__exportStar(require("./machinegroup"), exports);
__exportStar(require("./metricstore"), exports);
__exportStar(require("./ossexport"), exports);
__exportStar(require("./ossexternalstore"), exports);
__exportStar(require("./project"), exports);
__exportStar(require("./rdsexternalstore"), exports);
__exportStar(require("./savedsearch"), exports);
__exportStar(require("./servicelog"), exports);
// ALIYUN::SLS Resources:
__exportStar(require("./sls.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUF3QjtBQUN4QixzREFBb0M7QUFDcEMsOERBQTRDO0FBQzVDLDBDQUF3QjtBQUN4QixrREFBZ0M7QUFDaEMsOENBQTRCO0FBQzVCLHdDQUFzQjtBQUN0QiwwQ0FBd0I7QUFDeEIsbURBQWlDO0FBQ2pDLDZDQUEyQjtBQUMzQixrREFBZ0M7QUFDaEMsaURBQStCO0FBQy9CLGdEQUE4QjtBQUM5Qiw4Q0FBNEI7QUFDNUIscURBQW1DO0FBQ25DLDRDQUEwQjtBQUMxQixxREFBbUM7QUFDbkMsZ0RBQThCO0FBQzlCLCtDQUE2QjtBQUU3Qix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWxlcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmFseXplcHJvZHVjdGxvZyc7XG5leHBvcnQgKiBmcm9tICcuL2FwcGx5Y29uZmlndG9tYWNoaW5lZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hdWRpdCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnN1bWVyZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXNoYm9hcmQnO1xuZXhwb3J0ICogZnJvbSAnLi9ldGwnO1xuZXhwb3J0ICogZnJvbSAnLi9ldGx2Mic7XG5leHBvcnQgKiBmcm9tICcuL2luZGV4LXJlc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vbG9nc3RvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9sb2d0YWlsY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vbWFjaGluZWdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vbWV0cmljc3RvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vc3NleHBvcnQnO1xuZXhwb3J0ICogZnJvbSAnLi9vc3NleHRlcm5hbHN0b3JlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3Jkc2V4dGVybmFsc3RvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9zYXZlZHNlYXJjaCc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2Vsb2cnO1xuXG4vLyBBTElZVU46OlNMUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3Nscy5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19