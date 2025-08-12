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
__exportStar(require("./disk"), exports);
__exportStar(require("./diskinstanceattachment"), exports);
__exportStar(require("./image"), exports);
__exportStar(require("./instance"), exports);
__exportStar(require("./instancesecuritygroupattachment"), exports);
__exportStar(require("./keypair"), exports);
__exportStar(require("./network"), exports);
__exportStar(require("./networkacl"), exports);
__exportStar(require("./networkaclassociation"), exports);
__exportStar(require("./securitygroup"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./vswitch"), exports);
// ALIYUN::ENS Resources:
__exportStar(require("./ens.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF1QjtBQUN2QiwyREFBeUM7QUFDekMsMENBQXdCO0FBQ3hCLDZDQUEyQjtBQUMzQixvRUFBa0Q7QUFDbEQsNENBQTBCO0FBQzFCLDRDQUEwQjtBQUMxQiwrQ0FBNkI7QUFDN0IsMERBQXdDO0FBQ3hDLGtEQUFnQztBQUNoQyw2Q0FBMkI7QUFDM0IsNENBQTBCO0FBRTFCLHlCQUF5QjtBQUN6QixrREFBZ0M7QUFDaEMsNkNBQTJDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9kaXNrJztcbmV4cG9ydCAqIGZyb20gJy4vZGlza2luc3RhbmNlYXR0YWNobWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2ltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZXNlY3VyaXR5Z3JvdXBhdHRhY2htZW50JztcbmV4cG9ydCAqIGZyb20gJy4va2V5cGFpcic7XG5leHBvcnQgKiBmcm9tICcuL25ldHdvcmsnO1xuZXhwb3J0ICogZnJvbSAnLi9uZXR3b3JrYWNsJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2FjbGFzc29jaWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL3NuYXBzaG90JztcbmV4cG9ydCAqIGZyb20gJy4vdnN3aXRjaCc7XG5cbi8vIEFMSVlVTjo6RU5TIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vZW5zLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG4iXX0=