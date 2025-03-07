"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RamRoleAttachment = exports.RamRoleAttachmentProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "RamRoleAttachmentProperty", { enumerable: true, get: function () { return ecs_generated_1.RosRamRoleAttachment; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::RamRoleAttachment`, which is used to attach an instance Resource Access Management (RAM) role to Elastic Compute Service (ECS) instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRamRoleAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-ramroleattachment
 */
class RamRoleAttachment extends ros.Resource {
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
        const rosRamRoleAttachment = new ecs_generated_1.RosRamRoleAttachment(this, id, {
            policy: props.policy,
            ramRoleName: props.ramRoleName,
            instanceIds: props.instanceIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRamRoleAttachment;
        this.attrInstanceIds = rosRamRoleAttachment.attrInstanceIds;
        this.attrRamRoleName = rosRamRoleAttachment.attrRamRoleName;
    }
}
exports.RamRoleAttachment = RamRoleAttachment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFtcm9sZWF0dGFjaG1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyYW1yb2xlYXR0YWNobWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUF5QzFEOzs7O0dBSUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0IvQzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE2QixFQUFFLG1DQUEyQyxJQUFJO1FBQ3hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLG9DQUFvQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDN0QsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDakMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztRQUM1RCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFvQixDQUFDLGVBQWUsQ0FBQztJQUNoRSxDQUFDO0NBQ0o7QUFyQ0QsOENBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUmFtUm9sZUF0dGFjaG1lbnQgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSYW1Sb2xlQXR0YWNobWVudCBhcyBSYW1Sb2xlQXR0YWNobWVudFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgUmFtUm9sZUF0dGFjaG1lbnRgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tZWNzLXJhbXJvbGVhdHRhY2htZW50XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmFtUm9sZUF0dGFjaG1lbnRQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkczogVGhlIGluc3RhbmNlIGlkIHRoYXQgbmVlZHMgdG8gYmUgZ3JhbnRlZCB0aGUgcmFtIHJvbGUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZHM6IEFycmF5PHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByYW1Sb2xlTmFtZTogVGhlIHJhbSByb2xlIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmFtUm9sZU5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBvbGljeTogV2hlbiBncmFudGluZyB0aGUgaW5zdGFuY2UgUkFNIHJvbGUgdG8gb25lIG9yIG1vcmUgRUNTIGluc3RhbmNlcywgeW91IGNhbiBzcGVjaWZ5IGFuIGFkZGl0aW9uYWwgcGVybWlzc2lvbiBwb2xpY3kgdG8gZnVydGhlciBsaW1pdCB0aGUgcGVybWlzc2lvbnMgb2YgdGhlIFJBTSByb2xlLlxuICAgICAqIFRoZSBsZW5ndGggaXMgMX4xMDI0IGNoYXJhY3RlcnMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcG9saWN5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBgUmFtUm9sZUF0dGFjaG1lbnRgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElSYW1Sb2xlQXR0YWNobWVudCBleHRlbmRzIHJvcy5JUmVzb3VyY2Uge1xuICAgIHJlYWRvbmx5IHByb3BzOiBSYW1Sb2xlQXR0YWNobWVudFByb3BzO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWRzOiBUaGUgbGlzdCBvZiBlY3MgaW5zdGFuY2UgaWRcbiAgICAgKi9cbiAgICByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZSB8IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSYW1Sb2xlTmFtZTogVGhlIHJhbSByb2xlIG5hbWUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXR0clJhbVJvbGVOYW1lOiByb3MuSVJlc29sdmFibGUgfCBzdHJpbmc7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFQ1M6OlJhbVJvbGVBdHRhY2htZW50YCwgd2hpY2ggaXMgdXNlZCB0byBhdHRhY2ggYW4gaW5zdGFuY2UgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgcm9sZSB0byBFbGFzdGljIENvbXB1dGUgU2VydmljZSAoRUNTKSBpbnN0YW5jZXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NSYW1Sb2xlQXR0YWNobWVudGBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWVjcy1yYW1yb2xlYXR0YWNobWVudFxuICovXG5leHBvcnQgY2xhc3MgUmFtUm9sZUF0dGFjaG1lbnQgZXh0ZW5kcyByb3MuUmVzb3VyY2UgaW1wbGVtZW50cyBJUmFtUm9sZUF0dGFjaG1lbnQge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJvcHM6IFJhbVJvbGVBdHRhY2htZW50UHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWRzOiBUaGUgbGlzdCBvZiBlY3MgaW5zdGFuY2UgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWRzOiByb3MuSVJlc29sdmFibGUgfCBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmFtUm9sZU5hbWU6IFRoZSByYW0gcm9sZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmFtUm9sZU5hbWU6IHJvcy5JUmVzb2x2YWJsZSB8IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSYW1Sb2xlQXR0YWNobWVudFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zUmFtUm9sZUF0dGFjaG1lbnQgPSBuZXcgUm9zUmFtUm9sZUF0dGFjaG1lbnQodGhpcywgaWQsICB7XG4gICAgICAgICAgICBwb2xpY3k6IHByb3BzLnBvbGljeSxcbiAgICAgICAgICAgIHJhbVJvbGVOYW1lOiBwcm9wcy5yYW1Sb2xlTmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlSWRzOiBwcm9wcy5pbnN0YW5jZUlkcyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSYW1Sb2xlQXR0YWNobWVudDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZHMgPSByb3NSYW1Sb2xlQXR0YWNobWVudC5hdHRySW5zdGFuY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0clJhbVJvbGVOYW1lID0gcm9zUmFtUm9sZUF0dGFjaG1lbnQuYXR0clJhbVJvbGVOYW1lO1xuICAgIH1cbn1cbiJdfQ==