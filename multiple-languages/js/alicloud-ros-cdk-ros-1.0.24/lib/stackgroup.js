"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackGroup = exports.StackGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ros_generated_1 = require("./ros.generated");
Object.defineProperty(exports, "StackGroupProperty", { enumerable: true, get: function () { return ros_generated_1.RosStackGroup; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ROS::StackGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStackGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stackgroup
 */
class StackGroup extends ros.Resource {
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
        const rosStackGroup = new ros_generated_1.RosStackGroup(this, id, {
            description: props.description,
            parameters: props.parameters,
            resourceGroupId: props.resourceGroupId,
            dynamicTemplateBody: props.dynamicTemplateBody,
            stackGroupName: props.stackGroupName,
            templateVersion: props.templateVersion,
            administrationRoleName: props.administrationRoleName,
            templateBody: props.templateBody,
            templateUrl: props.templateUrl,
            autoDeployment: props.autoDeployment,
            permissionModel: props.permissionModel,
            executionRoleName: props.executionRoleName,
            templateId: props.templateId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosStackGroup;
        this.attrStackGroupId = rosStackGroup.attrStackGroupId;
    }
}
exports.StackGroup = StackGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhY2tncm91cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0YWNrZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUEwRTVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVd4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQjtZQUM5QyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxzQkFBc0I7WUFDcEQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxpQkFBaUI7WUFDMUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1NBQy9CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7SUFDM0QsQ0FBQztDQUNKO0FBekNELGdDQXlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1N0YWNrR3JvdXAgfSBmcm9tICcuL3Jvcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NTdGFja0dyb3VwIGFzIFN0YWNrR3JvdXBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFN0YWNrR3JvdXBgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9zLXN0YWNrZ3JvdXBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGFja0dyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3RhY2tHcm91cE5hbWU6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHN0YWNrR3JvdXBOYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZG1pbmlzdHJhdGlvblJvbGVOYW1lOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBhZG1pbmlzdHJhdGlvblJvbGVOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYXV0b0RlcGxveW1lbnQ6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9EZXBsb3ltZW50PzogUm9zU3RhY2tHcm91cC5BdXRvRGVwbG95bWVudFByb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZHluYW1pY1RlbXBsYXRlQm9keTogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgZHluYW1pY1RlbXBsYXRlQm9keT86IHsgW2tleTogc3RyaW5nXTogKGFueSB8IHJvcy5JUmVzb2x2YWJsZSkgfSB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGV4ZWN1dGlvblJvbGVOYW1lOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSBleGVjdXRpb25Sb2xlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhcmFtZXRlcnM6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcmFtZXRlcnM/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJtaXNzaW9uTW9kZWw6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcm1pc3Npb25Nb2RlbD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogdW5kZWZpbmVkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGVtcGxhdGVCb2R5OiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUJvZHk/OiB7IFtrZXk6IHN0cmluZ106IChhbnkgfCByb3MuSVJlc29sdmFibGUpIH0gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB0ZW1wbGF0ZUlkOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGVtcGxhdGVVcmw6IHVuZGVmaW5lZFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlVXJsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGVtcGxhdGVWZXJzaW9uOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICByZWFkb25seSB0ZW1wbGF0ZVZlcnNpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlJPUzo6U3RhY2tHcm91cGAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NTdGFja0dyb3VwYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcm9zLXN0YWNrZ3JvdXBcbiAqL1xuZXhwb3J0IGNsYXNzIFN0YWNrR3JvdXAgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IFN0YWNrR3JvdXBQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RhY2tHcm91cElkOiB1bmRlZmluZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clN0YWNrR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFN0YWNrR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc1N0YWNrR3JvdXAgPSBuZXcgUm9zU3RhY2tHcm91cCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHBhcmFtZXRlcnM6IHByb3BzLnBhcmFtZXRlcnMsXG4gICAgICAgICAgICByZXNvdXJjZUdyb3VwSWQ6IHByb3BzLnJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgICAgIGR5bmFtaWNUZW1wbGF0ZUJvZHk6IHByb3BzLmR5bmFtaWNUZW1wbGF0ZUJvZHksXG4gICAgICAgICAgICBzdGFja0dyb3VwTmFtZTogcHJvcHMuc3RhY2tHcm91cE5hbWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZVZlcnNpb246IHByb3BzLnRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgICAgIGFkbWluaXN0cmF0aW9uUm9sZU5hbWU6IHByb3BzLmFkbWluaXN0cmF0aW9uUm9sZU5hbWUsXG4gICAgICAgICAgICB0ZW1wbGF0ZUJvZHk6IHByb3BzLnRlbXBsYXRlQm9keSxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBwcm9wcy50ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgIGF1dG9EZXBsb3ltZW50OiBwcm9wcy5hdXRvRGVwbG95bWVudCxcbiAgICAgICAgICAgIHBlcm1pc3Npb25Nb2RlbDogcHJvcHMucGVybWlzc2lvbk1vZGVsLFxuICAgICAgICAgICAgZXhlY3V0aW9uUm9sZU5hbWU6IHByb3BzLmV4ZWN1dGlvblJvbGVOYW1lLFxuICAgICAgICAgICAgdGVtcGxhdGVJZDogcHJvcHMudGVtcGxhdGVJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NTdGFja0dyb3VwO1xuICAgICAgICB0aGlzLmF0dHJTdGFja0dyb3VwSWQgPSByb3NTdGFja0dyb3VwLmF0dHJTdGFja0dyb3VwSWQ7XG4gICAgfVxufVxuIl19