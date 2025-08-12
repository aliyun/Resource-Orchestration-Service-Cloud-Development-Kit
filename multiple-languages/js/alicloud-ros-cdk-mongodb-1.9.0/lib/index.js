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
__exportStar(require("./instance"), exports);
__exportStar(require("./shardinginstance"), exports);
// ALIYUN::MONGODB Resources:
__exportStar(require("./mongodb.generated"), exports);
exports.datasource = require("./datasource");
__exportStar(require("./perms.cdk"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUEyQjtBQUMzQixxREFBbUM7QUFFbkMsNkJBQTZCO0FBQzdCLHNEQUFvQztBQUNwQyw2Q0FBMkM7QUFFM0MsOENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZSc7XG5leHBvcnQgKiBmcm9tICcuL3NoYXJkaW5naW5zdGFuY2UnO1xuXG4vLyBBTElZVU46Ok1PTkdPREIgUmVzb3VyY2VzOlxuZXhwb3J0ICogZnJvbSAnLi9tb25nb2RiLmdlbmVyYXRlZCc7XG5leHBvcnQgKiBhcyBkYXRhc291cmNlIGZyb20gJy4vZGF0YXNvdXJjZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vcGVybXMuY2RrJzsiXX0=