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
__exportStar(require("./askcluster"), exports);
__exportStar(require("./anycluster"), exports);
__exportStar(require("./clusteraddons"), exports);
__exportStar(require("./clusterapplication"), exports);
__exportStar(require("./clusterhelmapplication"), exports);
__exportStar(require("./clusternodepool"), exports);
__exportStar(require("./kubernetescluster"), exports);
__exportStar(require("./managededgekubernetescluster"), exports);
__exportStar(require("./managedkubernetescluster"), exports);
// ALIYUN::CS Resources:
__exportStar(require("./cs.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTZCO0FBQzdCLCtDQUE2QjtBQUM3QixrREFBZ0M7QUFDaEMsdURBQXFDO0FBQ3JDLDJEQUF5QztBQUN6QyxvREFBa0M7QUFDbEMsc0RBQW9DO0FBQ3BDLGlFQUErQztBQUMvQyw2REFBMkM7QUFFM0Msd0JBQXdCO0FBQ3hCLGlEQUErQjtBQUMvQiwyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2Fza2NsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9hbnljbHVzdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vY2x1c3RlcmFkZG9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2NsdXN0ZXJhcHBsaWNhdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2NsdXN0ZXJoZWxtYXBwbGljYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9jbHVzdGVybm9kZXBvb2wnO1xuZXhwb3J0ICogZnJvbSAnLi9rdWJlcm5ldGVzY2x1c3Rlcic7XG5leHBvcnQgKiBmcm9tICcuL21hbmFnZWRlZGdla3ViZXJuZXRlc2NsdXN0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9tYW5hZ2Vka3ViZXJuZXRlc2NsdXN0ZXInO1xuXG4vLyBBTElZVU46OkNTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vY3MuZ2VuZXJhdGVkJztcbmltcG9ydCAqIGFzIGRhdGFzb3VyY2UgZnJvbSAnLi9kYXRhc291cmNlJztcbmV4cG9ydCB7IGRhdGFzb3VyY2UgfTtcbiJdfQ==