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
__exportStar(require("./activations"), exports);
__exportStar(require("./autosnapshotpolicies"), exports);
__exportStar(require("./autosnapshotpolicy"), exports);
__exportStar(require("./command"), exports);
__exportStar(require("./commands"), exports);
__exportStar(require("./dedicatedhostclusters"), exports);
__exportStar(require("./dedicatedhosts"), exports);
__exportStar(require("./deploymentsets"), exports);
__exportStar(require("./disk"), exports);
__exportStar(require("./diskcategories"), exports);
__exportStar(require("./disks"), exports);
__exportStar(require("./hpcclusters"), exports);
__exportStar(require("./images"), exports);
__exportStar(require("./instances"), exports);
__exportStar(require("./keypair"), exports);
__exportStar(require("./keypairs"), exports);
__exportStar(require("./managedinstances"), exports);
__exportStar(require("./networkinterfaces"), exports);
__exportStar(require("./recommendinstancetypes"), exports);
__exportStar(require("./securitygroup"), exports);
__exportStar(require("./securitygroups"), exports);
__exportStar(require("./snapshot"), exports);
__exportStar(require("./snapshots"), exports);
__exportStar(require("./zones"), exports);
// DATASOURCE::ECS Resources:
__exportStar(require("./ecs.generated"), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxnREFBOEI7QUFDOUIseURBQXVDO0FBQ3ZDLHVEQUFxQztBQUNyQyw0Q0FBMEI7QUFDMUIsNkNBQTJCO0FBQzNCLDBEQUF3QztBQUN4QyxtREFBaUM7QUFDakMsbURBQWlDO0FBQ2pDLHlDQUF1QjtBQUN2QixtREFBaUM7QUFDakMsMENBQXdCO0FBQ3hCLGdEQUE4QjtBQUM5QiwyQ0FBeUI7QUFDekIsOENBQTRCO0FBQzVCLDRDQUEwQjtBQUMxQiw2Q0FBMkI7QUFDM0IscURBQW1DO0FBQ25DLHNEQUFvQztBQUNwQywyREFBeUM7QUFDekMsa0RBQWdDO0FBQ2hDLG1EQUFpQztBQUNqQyw2Q0FBMkI7QUFDM0IsOENBQTRCO0FBQzVCLDBDQUF3QjtBQUV4Qiw2QkFBNkI7QUFDN0Isa0RBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9hY3RpdmF0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL2F1dG9zbmFwc2hvdHBvbGljaWVzJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0b3NuYXBzaG90cG9saWN5JztcbmV4cG9ydCAqIGZyb20gJy4vY29tbWFuZCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1hbmRzJztcbmV4cG9ydCAqIGZyb20gJy4vZGVkaWNhdGVkaG9zdGNsdXN0ZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vZGVkaWNhdGVkaG9zdHMnO1xuZXhwb3J0ICogZnJvbSAnLi9kZXBsb3ltZW50c2V0cyc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2snO1xuZXhwb3J0ICogZnJvbSAnLi9kaXNrY2F0ZWdvcmllcyc7XG5leHBvcnQgKiBmcm9tICcuL2Rpc2tzJztcbmV4cG9ydCAqIGZyb20gJy4vaHBjY2x1c3RlcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbWFnZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnN0YW5jZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9rZXlwYWlyJztcbmV4cG9ydCAqIGZyb20gJy4va2V5cGFpcnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tYW5hZ2VkaW5zdGFuY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vbmV0d29ya2ludGVyZmFjZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWNvbW1lbmRpbnN0YW5jZXR5cGVzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHlncm91cCc7XG5leHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5Z3JvdXBzJztcbmV4cG9ydCAqIGZyb20gJy4vc25hcHNob3QnO1xuZXhwb3J0ICogZnJvbSAnLi9zbmFwc2hvdHMnO1xuZXhwb3J0ICogZnJvbSAnLi96b25lcyc7XG5cbi8vIERBVEFTT1VSQ0U6OkVDUyBSZXNvdXJjZXM6XG5leHBvcnQgKiBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuIl19