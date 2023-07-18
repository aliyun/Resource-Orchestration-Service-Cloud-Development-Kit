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
exports.datasource = void 0;
__exportStar(require("./accesskey"), exports);
__exportStar(require("./attachpolicytorole"), exports);
__exportStar(require("./attachpolicytouser"), exports);
__exportStar(require("./group"), exports);
__exportStar(require("./managedpolicy"), exports);
__exportStar(require("./ramaccountalias"), exports);
__exportStar(require("./role"), exports);
__exportStar(require("./samlprovider"), exports);
__exportStar(require("./securitypreference"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./usertogroupaddition"), exports);
// ALIYUN::RAM Resources:
__exportStar(require("./ram.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTRCO0FBQzVCLHVEQUFxQztBQUNyQyx1REFBcUM7QUFDckMsMENBQXdCO0FBQ3hCLGtEQUFnQztBQUNoQyxvREFBa0M7QUFDbEMseUNBQXVCO0FBQ3ZCLGlEQUErQjtBQUMvQix1REFBcUM7QUFDckMseUNBQXVCO0FBQ3ZCLHdEQUFzQztBQUV0Qyx5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWNjZXNza2V5JztcbmV4cG9ydCAqIGZyb20gJy4vYXR0YWNocG9saWN5dG9yb2xlJztcbmV4cG9ydCAqIGZyb20gJy4vYXR0YWNocG9saWN5dG91c2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9tYW5hZ2VkcG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vcmFtYWNjb3VudGFsaWFzJztcbmV4cG9ydCAqIGZyb20gJy4vcm9sZSc7XG5leHBvcnQgKiBmcm9tICcuL3NhbWxwcm92aWRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5cHJlZmVyZW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuZXhwb3J0ICogZnJvbSAnLi91c2VydG9ncm91cGFkZGl0aW9uJztcblxuLy8gQUxJWVVOOjpSQU0gUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9yYW0uZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==