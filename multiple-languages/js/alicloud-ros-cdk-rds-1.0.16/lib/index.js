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
__exportStar(require("./adinfo"), exports);
__exportStar(require("./account"), exports);
__exportStar(require("./accountprivilege"), exports);
__exportStar(require("./connection"), exports);
__exportStar(require("./dbinstance"), exports);
__exportStar(require("./dbinstanceclone"), exports);
__exportStar(require("./dbinstanceparametergroup"), exports);
__exportStar(require("./dbinstancesecurityips"), exports);
__exportStar(require("./database"), exports);
__exportStar(require("./migratetask"), exports);
__exportStar(require("./prepaydbinstance"), exports);
__exportStar(require("./readonlydbinstance"), exports);
// ALIYUN::RDS Resources:
__exportStar(require("./rds.generated"), exports);
const datasource = require("./datasource");
exports.datasource = datasource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXlCO0FBQ3pCLDRDQUEwQjtBQUMxQixxREFBbUM7QUFDbkMsK0NBQTZCO0FBQzdCLCtDQUE2QjtBQUM3QixvREFBa0M7QUFDbEMsNkRBQTJDO0FBQzNDLDBEQUF3QztBQUN4Qyw2Q0FBMkI7QUFDM0IsZ0RBQThCO0FBQzlCLHFEQUFtQztBQUNuQyx1REFBcUM7QUFFckMseUJBQXlCO0FBQ3pCLGtEQUFnQztBQUNoQywyQ0FBMkM7QUFDbEMsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2FkaW5mbyc7XG5leHBvcnQgKiBmcm9tICcuL2FjY291bnQnO1xuZXhwb3J0ICogZnJvbSAnLi9hY2NvdW50cHJpdmlsZWdlJztcbmV4cG9ydCAqIGZyb20gJy4vY29ubmVjdGlvbic7XG5leHBvcnQgKiBmcm9tICcuL2RiaW5zdGFuY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlY2xvbmUnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlcGFyYW1ldGVyZ3JvdXAnO1xuZXhwb3J0ICogZnJvbSAnLi9kYmluc3RhbmNlc2VjdXJpdHlpcHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRhYmFzZSc7XG5leHBvcnQgKiBmcm9tICcuL21pZ3JhdGV0YXNrJztcbmV4cG9ydCAqIGZyb20gJy4vcHJlcGF5ZGJpbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5ZGJpbnN0YW5jZSc7XG5cbi8vIEFMSVlVTjo6UkRTIFJlc291cmNlczpcbmV4cG9ydCAqIGZyb20gJy4vcmRzLmdlbmVyYXRlZCc7XG5pbXBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5leHBvcnQgeyBkYXRhc291cmNlIH07XG4iXX0=