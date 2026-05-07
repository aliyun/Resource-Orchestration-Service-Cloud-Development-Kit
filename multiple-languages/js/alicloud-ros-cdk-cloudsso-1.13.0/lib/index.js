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
__exportStar(require("./accessassignment"), exports);
__exportStar(require("./accessconfiguration"), exports);
__exportStar(require("./accessconfigurationprovision"), exports);
__exportStar(require("./directory"), exports);
__exportStar(require("./group"), exports);
__exportStar(require("./permissionpolicytoaccessconfigurationaddition"), exports);
__exportStar(require("./samlidentityprovider"), exports);
__exportStar(require("./scimservercredential"), exports);
__exportStar(require("./scimsynchronization"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userprovision"), exports);
__exportStar(require("./usertogroupaddition"), exports);
// ALIYUN::CloudSSO Resources:
__exportStar(require("./cloudsso.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQW1DO0FBQ25DLHdEQUFzQztBQUN0QyxpRUFBK0M7QUFDL0MsOENBQTRCO0FBQzVCLDBDQUF3QjtBQUN4QixrRkFBZ0U7QUFDaEUseURBQXVDO0FBQ3ZDLHlEQUF1QztBQUN2Qyx3REFBc0M7QUFDdEMseUNBQXVCO0FBQ3ZCLGtEQUFnQztBQUNoQyx3REFBc0M7QUFFdEMsOEJBQThCO0FBQzlCLHVEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWNjZXNzYXNzaWdubWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2FjY2Vzc2NvbmZpZ3VyYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9hY2Nlc3Njb25maWd1cmF0aW9ucHJvdmlzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0b3J5JztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9wZXJtaXNzaW9ucG9saWN5dG9hY2Nlc3Njb25maWd1cmF0aW9uYWRkaXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zYW1saWRlbnRpdHlwcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NjaW1zZXJ2ZXJjcmVkZW50aWFsJztcbmV4cG9ydCAqIGZyb20gJy4vc2NpbXN5bmNocm9uaXphdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuZXhwb3J0ICogZnJvbSAnLi91c2VycHJvdmlzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcnRvZ3JvdXBhZGRpdGlvbic7XG5cbi8vIEFMSVlVTjo6Q2xvdWRTU08gUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9jbG91ZHNzby5nZW5lcmF0ZWQnO1xuIl19