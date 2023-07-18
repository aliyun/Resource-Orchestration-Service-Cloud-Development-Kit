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
__exportStar(require("./backupclients"), exports);
__exportStar(require("./dbagent"), exports);
__exportStar(require("./dbplan"), exports);
__exportStar(require("./dbvault"), exports);
__exportStar(require("./restorejob"), exports);
__exportStar(require("./vault"), exports);
// ALIYUN::HBR Resources:
__exportStar(require("./hbr.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWdDO0FBQ2hDLDRDQUEwQjtBQUMxQiwyQ0FBeUI7QUFDekIsNENBQTBCO0FBQzFCLCtDQUE2QjtBQUM3QiwwQ0FBd0I7QUFFeEIseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQywyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2JhY2t1cGNsaWVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmFnZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGJwbGFuJztcbmV4cG9ydCAqIGZyb20gJy4vZGJ2YXVsdCc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc3RvcmVqb2InO1xuZXhwb3J0ICogZnJvbSAnLi92YXVsdCc7XG5cbi8vIEFMSVlVTjo6SEJSIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vaGJyLmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=