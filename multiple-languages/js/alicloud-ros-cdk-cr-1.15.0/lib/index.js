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
__exportStar(require("./artifactlifecyclerule"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./instanceendpointaclpolicy"), exports);
__exportStar(require("./instancev2"), exports);
__exportStar(require("./instancevpcendpointlinkedvpc"), exports);
__exportStar(require("./namespace"), exports);
__exportStar(require("./reposyncrule"), exports);
__exportStar(require("./repository"), exports);
__exportStar(require("./scanrule"), exports);
__exportStar(require("./storagedomainroutingrule"), exports);
__exportStar(require("./userinfo"), exports);
// ALIYUN::CR Resources:
__exportStar(require("./cr.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF3QztBQUN4Qyw2Q0FBMkI7QUFDM0IsOERBQTRDO0FBQzVDLCtDQUE2QjtBQUM3QixpRUFBK0M7QUFDL0MsOENBQTRCO0FBQzVCLGlEQUErQjtBQUMvQiwrQ0FBNkI7QUFDN0IsNkNBQTJCO0FBQzNCLDZEQUEyQztBQUMzQyw2Q0FBMkI7QUFFM0Isd0JBQXdCO0FBQ3hCLGlEQUErQjtBQUMvQiw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FydGlmYWN0bGlmZWN5Y2xlcnVsZSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2VlbmRwb2ludGFjbHBvbGljeSc7XG5leHBvcnQgKiBmcm9tICcuL2luc3RhbmNldjInO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZXZwY2VuZHBvaW50bGlua2VkdnBjJztcbmV4cG9ydCAqIGZyb20gJy4vbmFtZXNwYWNlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVwb3N5bmNydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vcmVwb3NpdG9yeSc7XG5leHBvcnQgKiBmcm9tICcuL3NjYW5ydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vc3RvcmFnZWRvbWFpbnJvdXRpbmdydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcmluZm8nO1xuXG4vLyBBTElZVU46OkNSIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vY3IuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbiJdfQ==