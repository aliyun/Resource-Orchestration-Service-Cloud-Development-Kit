"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchBaseline = exports.PatchBaselineProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const oos_generated_1 = require("./oos.generated");
Object.defineProperty(exports, "PatchBaselineProperty", { enumerable: true, get: function () { return oos_generated_1.RosPatchBaseline; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OOS::PatchBaseline`, which is used to query a patch baseline.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPatchBaseline`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oos-patchbaseline
 */
class PatchBaseline extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosPatchBaseline = new oos_generated_1.RosPatchBaseline(this, id, {
            patchBaselineName: props.patchBaselineName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPatchBaseline;
        this.attrApprovalRules = rosPatchBaseline.attrApprovalRules;
        this.attrApprovedPatches = rosPatchBaseline.attrApprovedPatches;
        this.attrApprovedPatchesEnableNonSecurity = rosPatchBaseline.attrApprovedPatchesEnableNonSecurity;
        this.attrCreateTime = rosPatchBaseline.attrCreateTime;
        this.attrCreatedBy = rosPatchBaseline.attrCreatedBy;
        this.attrDescription = rosPatchBaseline.attrDescription;
        this.attrIsDefault = rosPatchBaseline.attrIsDefault;
        this.attrOperationSystem = rosPatchBaseline.attrOperationSystem;
        this.attrPatchBaselineId = rosPatchBaseline.attrPatchBaselineId;
        this.attrPatchBaselineName = rosPatchBaseline.attrPatchBaselineName;
        this.attrRejectedPatches = rosPatchBaseline.attrRejectedPatches;
        this.attrRejectedPatchesAction = rosPatchBaseline.attrRejectedPatchesAction;
        this.attrResourceGroupId = rosPatchBaseline.attrResourceGroupId;
        this.attrShareType = rosPatchBaseline.attrShareType;
        this.attrSources = rosPatchBaseline.attrSources;
        this.attrTags = rosPatchBaseline.attrTags;
        this.attrUpdatedBy = rosPatchBaseline.attrUpdatedBy;
        this.attrUpdatedDate = rosPatchBaseline.attrUpdatedDate;
    }
}
exports.PatchBaseline = PatchBaseline;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0Y2hiYXNlbGluZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBhdGNoYmFzZWxpbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFtRDtBQUV0QixzR0FGcEIsZ0NBQWdCLE9BRXlCO0FBY2xEOzs7O0dBSUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdHM0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBeUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JELGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7U0FDN0MsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUM7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxvQ0FBb0MsR0FBRyxnQkFBZ0IsQ0FBQyxvQ0FBb0MsQ0FBQztRQUNsRyxJQUFJLENBQUMsY0FBYyxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDaEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUNwRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7UUFDaEUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDO1FBQzVFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztJQUM1RCxDQUFDO0NBQ0o7QUFuSUQsc0NBbUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUGF0Y2hCYXNlbGluZSB9IGZyb20gJy4vb29zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1BhdGNoQmFzZWxpbmUgYXMgUGF0Y2hCYXNlbGluZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUGF0Y2hCYXNlbGluZWAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2Utb29zLXBhdGNoYmFzZWxpbmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQYXRjaEJhc2VsaW5lUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGF0Y2hCYXNlbGluZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwYXRjaCBiYXNlbGluZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBwYXRjaEJhc2VsaW5lTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6T09TOjpQYXRjaEJhc2VsaW5lYCwgd2hpY2ggaXMgdXNlZCB0byBxdWVyeSBhIHBhdGNoIGJhc2VsaW5lLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUGF0Y2hCYXNlbGluZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1vb3MtcGF0Y2hiYXNlbGluZVxuICovXG5leHBvcnQgY2xhc3MgUGF0Y2hCYXNlbGluZSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogUGF0Y2hCYXNlbGluZVByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBcHByb3ZhbFJ1bGVzOiBBY2NlcHQgdGhlIHJ1bGVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQXBwcm92YWxSdWxlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFwcHJvdmVkUGF0Y2hlczogQXBwcm92ZWQgcGF0Y2ggbGlzdC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcHJvdmVkUGF0Y2hlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFwcHJvdmVkUGF0Y2hlc0VuYWJsZU5vblNlY3VyaXR5OiBBcHByb3ZlIHdoZXRoZXIgdGhlIHBhdGNoIGluY2x1ZGVzIHVwZGF0ZXMgb3RoZXIgdGhhbiBzZWN1cml0eS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwcHJvdmVkUGF0Y2hlc0VuYWJsZU5vblNlY3VyaXR5OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogQ3JlYXRpb24gdGltZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNyZWF0ZVRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcmVhdGVkQnk6IFBhdGNoIGJhc2VsaW5lIGNyZWF0b3IuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVkQnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZXNjcmlwdGlvbjogUGF0Y2hlcyBiYXNlbGluZSBkZXNjcmlwdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXNEZWZhdWx0OiBXaGV0aGVyIGl0IGlzIHRoZSBkZWZhdWx0IHBhdGNoIGJhc2VsaW5lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXNEZWZhdWx0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3BlcmF0aW9uU3lzdGVtOiBPcGVyYXRpbmcgc3lzdGVtIHR5cGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcGVyYXRpb25TeXN0ZW06IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYXRjaEJhc2VsaW5lSWQ6IFBhdGNoIGJhc2VsaW5lIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGF0Y2hCYXNlbGluZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGF0Y2hCYXNlbGluZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSBwYXRjaCBiYXNlbGluZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBhdGNoQmFzZWxpbmVOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVqZWN0ZWRQYXRjaGVzOiBSZWplY3QgdGhlIG5hbWUgb2YgdGhlIHBhdGNoLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVqZWN0ZWRQYXRjaGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVqZWN0ZWRQYXRjaGVzQWN0aW9uOiBUaGUgb3BlcmF0aW9uIG9mIHJlamVjdGluZyB0aGUgcGF0Y2guXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZWplY3RlZFBhdGNoZXNBY3Rpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZUdyb3VwSWQ6IEFwcHJvdmUgd2hldGhlciB0aGUgcGF0Y2ggaW5jbHVkZXMgdXBkYXRlcyBvdGhlciB0aGFuIHNlY3VyaXR5XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZUdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTaGFyZVR5cGU6IFBhdGNoIGJhc2VsaW5lIHNoYXJpbmcgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNoYXJlVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNvdXJjZXM6IFBhdGNoIHNvdXJjZSBjb25maWd1cmF0aW9uIGxpc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTb3VyY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFnczogVGFncyBvZiBwYXRjaCBiYXNlbGluZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVcGRhdGVkQnk6IFBhdGNoIGJhc2VsaW5lIHVwZGF0ZXIuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcGRhdGVkQnk6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBVcGRhdGVkRGF0ZTogVXBkYXRlIHRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJVcGRhdGVkRGF0ZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFBhdGNoQmFzZWxpbmVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1BhdGNoQmFzZWxpbmUgPSBuZXcgUm9zUGF0Y2hCYXNlbGluZSh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBhdGNoQmFzZWxpbmVOYW1lOiBwcm9wcy5wYXRjaEJhc2VsaW5lTmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQYXRjaEJhc2VsaW5lO1xuICAgICAgICB0aGlzLmF0dHJBcHByb3ZhbFJ1bGVzID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyQXBwcm92YWxSdWxlcztcbiAgICAgICAgdGhpcy5hdHRyQXBwcm92ZWRQYXRjaGVzID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyQXBwcm92ZWRQYXRjaGVzO1xuICAgICAgICB0aGlzLmF0dHJBcHByb3ZlZFBhdGNoZXNFbmFibGVOb25TZWN1cml0eSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ckFwcHJvdmVkUGF0Y2hlc0VuYWJsZU5vblNlY3VyaXR5O1xuICAgICAgICB0aGlzLmF0dHJDcmVhdGVUaW1lID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlZEJ5ID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyQ3JlYXRlZEJ5O1xuICAgICAgICB0aGlzLmF0dHJEZXNjcmlwdGlvbiA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ckRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmF0dHJJc0RlZmF1bHQgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJJc0RlZmF1bHQ7XG4gICAgICAgIHRoaXMuYXR0ck9wZXJhdGlvblN5c3RlbSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0ck9wZXJhdGlvblN5c3RlbTtcbiAgICAgICAgdGhpcy5hdHRyUGF0Y2hCYXNlbGluZUlkID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyUGF0Y2hCYXNlbGluZUlkO1xuICAgICAgICB0aGlzLmF0dHJQYXRjaEJhc2VsaW5lTmFtZSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clBhdGNoQmFzZWxpbmVOYW1lO1xuICAgICAgICB0aGlzLmF0dHJSZWplY3RlZFBhdGNoZXMgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJSZWplY3RlZFBhdGNoZXM7XG4gICAgICAgIHRoaXMuYXR0clJlamVjdGVkUGF0Y2hlc0FjdGlvbiA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clJlamVjdGVkUGF0Y2hlc0FjdGlvbjtcbiAgICAgICAgdGhpcy5hdHRyUmVzb3VyY2VHcm91cElkID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyUmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTaGFyZVR5cGUgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJTaGFyZVR5cGU7XG4gICAgICAgIHRoaXMuYXR0clNvdXJjZXMgPSByb3NQYXRjaEJhc2VsaW5lLmF0dHJTb3VyY2VzO1xuICAgICAgICB0aGlzLmF0dHJUYWdzID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyVGFncztcbiAgICAgICAgdGhpcy5hdHRyVXBkYXRlZEJ5ID0gcm9zUGF0Y2hCYXNlbGluZS5hdHRyVXBkYXRlZEJ5O1xuICAgICAgICB0aGlzLmF0dHJVcGRhdGVkRGF0ZSA9IHJvc1BhdGNoQmFzZWxpbmUuYXR0clVwZGF0ZWREYXRlO1xuICAgIH1cbn1cbiJdfQ==