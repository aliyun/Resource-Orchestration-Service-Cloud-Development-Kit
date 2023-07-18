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
__exportStar(require("./accessgroup"), exports);
__exportStar(require("./accessrule"), exports);
__exportStar(require("./dataflow"), exports);
__exportStar(require("./filesystem"), exports);
__exportStar(require("./fileset"), exports);
__exportStar(require("./mounttarget"), exports);
__exportStar(require("./protocolmounttarget"), exports);
__exportStar(require("./protocolservice"), exports);
// ALIYUN::NAS Resources:
__exportStar(require("./nas.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQThCO0FBQzlCLCtDQUE2QjtBQUM3Qiw2Q0FBMkI7QUFDM0IsK0NBQTZCO0FBQzdCLDRDQUEwQjtBQUMxQixnREFBOEI7QUFDOUIsd0RBQXNDO0FBQ3RDLG9EQUFrQztBQUVsQyx5QkFBeUI7QUFDekIsa0RBQWdDO0FBQ2hDLDJDQUEyQztBQUNsQyxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vYWNjZXNzZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2Nlc3NydWxlJztcbmV4cG9ydCAqIGZyb20gJy4vZGF0YWZsb3cnO1xuZXhwb3J0ICogZnJvbSAnLi9maWxlc3lzdGVtJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZXNldCc7XG5leHBvcnQgKiBmcm9tICcuL21vdW50dGFyZ2V0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvdG9jb2xtb3VudHRhcmdldCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb3RvY29sc2VydmljZSc7XG5cbi8vIEFMSVlVTjo6TkFTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vbmFzLmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=