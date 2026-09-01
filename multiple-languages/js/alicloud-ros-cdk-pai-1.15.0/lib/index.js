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
__exportStar(require("./codesource"), exports);
__exportStar(require("./dataset"), exports);
__exportStar(require("./datasetversion"), exports);
__exportStar(require("./experiment"), exports);
__exportStar(require("./image"), exports);
__exportStar(require("./member"), exports);
__exportStar(require("./modelversion"), exports);
__exportStar(require("./quota"), exports);
__exportStar(require("./resourcegroup"), exports);
__exportStar(require("./run"), exports);
__exportStar(require("./service"), exports);
__exportStar(require("./userconfig"), exports);
__exportStar(require("./workspace"), exports);
__exportStar(require("./workspaceresource"), exports);
__exportStar(require("./workspaceresourcedlc"), exports);
__exportStar(require("./workspaceresourceflink"), exports);
__exportStar(require("./workspaceresourcemaxcompute"), exports);
// ALIYUN::PAI Resources:
__exportStar(require("./pai.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE2QjtBQUM3Qiw0Q0FBMEI7QUFDMUIsbURBQWlDO0FBQ2pDLCtDQUE2QjtBQUM3QiwwQ0FBd0I7QUFDeEIsMkNBQXlCO0FBQ3pCLGlEQUErQjtBQUMvQiwwQ0FBd0I7QUFDeEIsa0RBQWdDO0FBQ2hDLHdDQUFzQjtBQUN0Qiw0Q0FBMEI7QUFDMUIsK0NBQTZCO0FBQzdCLDhDQUE0QjtBQUM1QixzREFBb0M7QUFDcEMseURBQXVDO0FBQ3ZDLDJEQUF5QztBQUN6QyxnRUFBOEM7QUFFOUMseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQyw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2NvZGVzb3VyY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhc2V0JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YXNldHZlcnNpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9leHBlcmltZW50JztcbmV4cG9ydCAqIGZyb20gJy4vaW1hZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9tZW1iZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbHZlcnNpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9xdW90YSc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc291cmNlZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9ydW4nO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcmNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL3dvcmtzcGFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3dvcmtzcGFjZXJlc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vd29ya3NwYWNlcmVzb3VyY2VkbGMnO1xuZXhwb3J0ICogZnJvbSAnLi93b3Jrc3BhY2VyZXNvdXJjZWZsaW5rJztcbmV4cG9ydCAqIGZyb20gJy4vd29ya3NwYWNlcmVzb3VyY2VtYXhjb21wdXRlJztcblxuLy8gQUxJWVVOOjpQQUkgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9wYWkuZ2VuZXJhdGVkJztcbmV4cG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbiJdfQ==