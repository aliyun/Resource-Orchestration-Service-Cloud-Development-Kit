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
__exportStar(require("./application"), exports);
__exportStar(require("./applicationscalingrule"), exports);
__exportStar(require("./configmap"), exports);
__exportStar(require("./ingress"), exports);
__exportStar(require("./namespace"), exports);
__exportStar(require("./secret"), exports);
__exportStar(require("./slbbinding"), exports);
// ALIYUN::SAE Resources:
__exportStar(require("./sae.generated"), exports);
exports.datasource = require("./datasource");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QjtBQUM5QiwyREFBeUM7QUFDekMsOENBQTRCO0FBQzVCLDRDQUEwQjtBQUMxQiw4Q0FBNEI7QUFDNUIsMkNBQXlCO0FBQ3pCLCtDQUE2QjtBQUU3Qix5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYXBwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9hcHBsaWNhdGlvbnNjYWxpbmdydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZmlnbWFwJztcbmV4cG9ydCAqIGZyb20gJy4vaW5ncmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL25hbWVzcGFjZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3JldCc7XG5leHBvcnQgKiBmcm9tICcuL3NsYmJpbmRpbmcnO1xuXG4vLyBBTElZVU46OlNBRSBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL3NhZS5nZW5lcmF0ZWQnO1xuZXhwb3J0ICogYXMgZGF0YXNvdXJjZSBmcm9tICcuL2RhdGFzb3VyY2UnO1xuIl19