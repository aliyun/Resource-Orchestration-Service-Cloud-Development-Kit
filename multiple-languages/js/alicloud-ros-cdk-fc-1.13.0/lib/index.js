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
__exportStar(require("./alias"), exports);
__exportStar(require("./customdomain"), exports);
__exportStar(require("./function"), exports);
__exportStar(require("./functioninvoker"), exports);
__exportStar(require("./layer"), exports);
__exportStar(require("./provisionconfig"), exports);
__exportStar(require("./service"), exports);
__exportStar(require("./trigger"), exports);
__exportStar(require("./version"), exports);
// ALIYUN::FC Resources:
__exportStar(require("./fc.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUF3QjtBQUN4QixpREFBK0I7QUFDL0IsNkNBQTJCO0FBQzNCLG9EQUFrQztBQUNsQywwQ0FBd0I7QUFDeEIsb0RBQWtDO0FBQ2xDLDRDQUEwQjtBQUMxQiw0Q0FBMEI7QUFDMUIsNENBQTBCO0FBRTFCLHdCQUF3QjtBQUN4QixpREFBK0I7QUFDL0IsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hbGlhcyc7XG5leHBvcnQgKiBmcm9tICcuL2N1c3RvbWRvbWFpbic7XG5leHBvcnQgKiBmcm9tICcuL2Z1bmN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZnVuY3Rpb25pbnZva2VyJztcbmV4cG9ydCAqIGZyb20gJy4vbGF5ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9wcm92aXNpb25jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdHJpZ2dlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZlcnNpb24nO1xuXG4vLyBBTElZVU46OkZDIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZmMuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbiJdfQ==