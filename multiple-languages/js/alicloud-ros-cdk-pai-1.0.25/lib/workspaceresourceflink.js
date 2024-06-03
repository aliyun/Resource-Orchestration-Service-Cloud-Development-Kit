"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceResourceFlink = exports.WorkspaceResourceFlinkProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const pai_generated_1 = require("./pai.generated");
Object.defineProperty(exports, "WorkspaceResourceFlinkProperty", { enumerable: true, get: function () { return pai_generated_1.RosWorkspaceResourceFlink; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::WorkspaceResourceFlink`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceFlink`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
class WorkspaceResourceFlink extends ros.Resource {
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
        const rosWorkspaceResourceFlink = new pai_generated_1.RosWorkspaceResourceFlink(this, id, {
            isDefault: props.isDefault,
            groupName: props.groupName,
            workspaceId: props.workspaceId,
            option: props.option,
            resources: props.resources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaceResourceFlink;
        this.attrCreateTime = rosWorkspaceResourceFlink.attrCreateTime;
        this.attrGroupName = rosWorkspaceResourceFlink.attrGroupName;
        this.attrIsDefault = rosWorkspaceResourceFlink.attrIsDefault;
        this.attrResources = rosWorkspaceResourceFlink.attrResources;
    }
}
exports.WorkspaceResourceFlink = WorkspaceResourceFlink;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya3NwYWNlcmVzb3VyY2VmbGluay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndvcmtzcGFjZXJlc291cmNlZmxpbmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUE0RDtBQUV0QiwrR0FGN0IseUNBQXlCLE9BRWtDO0FBb0NwRTs7OztHQUlHO0FBQ0gsTUFBYSxzQkFBdUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTBCcEQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBa0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUM3SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0seUJBQXlCLEdBQUcsSUFBSSx5Q0FBeUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7U0FDN0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx5QkFBeUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsY0FBYyxHQUFHLHlCQUF5QixDQUFDLGNBQWMsQ0FBQztRQUMvRCxJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLHlCQUF5QixDQUFDLGFBQWEsQ0FBQztJQUNqRSxDQUFDO0NBQ0o7QUFuREQsd0RBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zV29ya3NwYWNlUmVzb3VyY2VGbGluayB9IGZyb20gJy4vcGFpLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmsgYXMgV29ya3NwYWNlUmVzb3VyY2VGbGlua1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgV29ya3NwYWNlUmVzb3VyY2VGbGlua2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1wYWktd29ya3NwYWNlcmVzb3VyY2VmbGlua1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFdvcmtzcGFjZVJlc291cmNlRmxpbmtQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cE5hbWU6IFJlc291cmNlIGdyb3VwIG5hbWUuIElmIHlvdSB3YW50IHRvIG9idGFpbiBhIHJlc291cmNlIGdyb3VwIG5hbWUsIHNlZSBbTGlzdFJlc291cmNlc10uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXNvdXJjZXM6IFJlc291cmNlIExpc3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VzOiBBcnJheTxSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rLlJlc291cmNlc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHdvcmtzcGFjZUlkOiBUaGUgSUQgb2YgdGhlIHdvcmtzcGFjZSB0byB3aGljaCB0aGUgd29ya3NwYWNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcmVhZG9ubHkgd29ya3NwYWNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlzRGVmYXVsdDogSW5kaWNhdGVzIHdoZXRoZXIgaXQgaXMgdGhlIGRlZmF1bHQgcmVzb3VyY2UuIEN1cnJlbnRseSwgdGhpcyBwYXJhbWV0ZXIgb25seSBzdXBwb3J0cyB0aGUgaW5wdXQgb2YgdHJ1ZSBhbmQgZG9lcyBub3Qgc3VwcG9ydCBmYWxzZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpc0RlZmF1bHQ/OiBib29sZWFuIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3B0aW9uOiBDcmVhdGUgYmVoYXZpb3IgdGhhdCBzdXBwb3J0cyB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICAgKiAtIENyZWF0ZUFuZEF0dGFjaDogQ3JlYXRlIHJlc291cmNlIGFuZCBiaW5kIHRvIHdvcmtzcGFjZVxuICAgICAqIC0gQXR0YWNoOiBiaW5kIHJlc291cmNlIHRvIHdvcmtzcGFjZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBvcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlBBSTo6V29ya3NwYWNlUmVzb3VyY2VGbGlua2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcGFpLXdvcmtzcGFjZXJlc291cmNlZmxpbmtcbiAqL1xuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVJlc291cmNlRmxpbmsgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFdvcmtzcGFjZVJlc291cmNlRmxpbmtQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ3JlYXRlVGltZTogVGhlIGNyZWF0aW9uIHRpbWUgb2YgdGhlIHJlc291cmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdyb3VwTmFtZTogUmVzb3VyY2UgZ3JvdXAgbmFtZS4gSWYgeW91IHdhbnQgdG8gb2J0YWluIGEgcmVzb3VyY2UgZ3JvdXAgbmFtZSwgc2VlIFtMaXN0UmVzb3VyY2VzXSh+fiA0NDkxNDMgfn4pLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXNEZWZhdWx0OiBJbmRpY2F0ZXMgd2hldGhlciBpdCBpcyB0aGUgZGVmYXVsdCByZXNvdXJjZS4gQ3VycmVudGx5LCB0aGlzIHBhcmFtZXRlciBvbmx5IHN1cHBvcnRzIHRoZSBpbnB1dCBvZiB0cnVlIGFuZCBkb2VzIG5vdCBzdXBwb3J0IGZhbHNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXNEZWZhdWx0OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VzOiBSZXNvdXJjZSBMaXN0LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVzb3VyY2VzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogV29ya3NwYWNlUmVzb3VyY2VGbGlua1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zV29ya3NwYWNlUmVzb3VyY2VGbGluayA9IG5ldyBSb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaXNEZWZhdWx0OiBwcm9wcy5pc0RlZmF1bHQsXG4gICAgICAgICAgICBncm91cE5hbWU6IHByb3BzLmdyb3VwTmFtZSxcbiAgICAgICAgICAgIHdvcmtzcGFjZUlkOiBwcm9wcy53b3Jrc3BhY2VJZCxcbiAgICAgICAgICAgIG9wdGlvbjogcHJvcHMub3B0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VzOiBwcm9wcy5yZXNvdXJjZXMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zV29ya3NwYWNlUmVzb3VyY2VGbGluaztcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmsuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwTmFtZSA9IHJvc1dvcmtzcGFjZVJlc291cmNlRmxpbmsuYXR0ckdyb3VwTmFtZTtcbiAgICAgICAgdGhpcy5hdHRySXNEZWZhdWx0ID0gcm9zV29ya3NwYWNlUmVzb3VyY2VGbGluay5hdHRySXNEZWZhdWx0O1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZXMgPSByb3NXb3Jrc3BhY2VSZXNvdXJjZUZsaW5rLmF0dHJSZXNvdXJjZXM7XG4gICAgfVxufVxuIl19