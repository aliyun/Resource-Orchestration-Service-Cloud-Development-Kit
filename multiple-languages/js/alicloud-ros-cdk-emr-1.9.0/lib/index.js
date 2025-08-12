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
__exportStar(require("./cluster"), exports);
__exportStar(require("./cluster2"), exports);
__exportStar(require("./clusterserviceconfigs"), exports);
__exportStar(require("./flowproject"), exports);
// ALIYUN::EMR Resources:
__exportStar(require("./emr.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDRDQUEwQjtBQUMxQiw2Q0FBMkI7QUFDM0IsMERBQXdDO0FBQ3hDLGdEQUE4QjtBQUU5Qix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vY2x1c3Rlcic7XG5leHBvcnQgKiBmcm9tICcuL2NsdXN0ZXIyJztcbmV4cG9ydCAqIGZyb20gJy4vY2x1c3RlcnNlcnZpY2Vjb25maWdzJztcbmV4cG9ydCAqIGZyb20gJy4vZmxvd3Byb2plY3QnO1xuXG4vLyBBTElZVU46OkVNUiBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Vtci5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19