"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderTable = void 0;
const rosDiff = require("@alicloud/ros-cdk-template-diff");
function renderTable(cells, columns) {
    // The rosDiff module has logic for terminal-width aware table
    // formatting (and nice colors), let's just reuse that.
    return rosDiff.formatTable(cells, columns);
}
exports.renderTable = renderTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFibGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJEQUEyRDtBQUUzRCxTQUFnQixXQUFXLENBQUMsS0FBaUIsRUFBRSxPQUFnQjtJQUM3RCw4REFBOEQ7SUFDOUQsdURBQXVEO0lBQ3ZELE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUpELGtDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zRGlmZiBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay10ZW1wbGF0ZS1kaWZmJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhYmxlKGNlbGxzOiBzdHJpbmdbXVtdLCBjb2x1bW5zPzogbnVtYmVyKSB7XG4gIC8vIFRoZSByb3NEaWZmIG1vZHVsZSBoYXMgbG9naWMgZm9yIHRlcm1pbmFsLXdpZHRoIGF3YXJlIHRhYmxlXG4gIC8vIGZvcm1hdHRpbmcgKGFuZCBuaWNlIGNvbG9ycyksIGxldCdzIGp1c3QgcmV1c2UgdGhhdC5cbiAgcmV0dXJuIHJvc0RpZmYuZm9ybWF0VGFibGUoY2VsbHMsIGNvbHVtbnMpO1xufVxuIl19