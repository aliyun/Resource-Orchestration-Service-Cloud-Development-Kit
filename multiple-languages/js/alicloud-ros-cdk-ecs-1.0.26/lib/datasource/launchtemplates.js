"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LaunchTemplates = exports.LaunchTemplatesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "LaunchTemplatesProperty", { enumerable: true, get: function () { return ecs_generated_1.RosLaunchTemplates; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::LaunchTemplates`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLaunchTemplates`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
class LaunchTemplates extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosLaunchTemplates = new ecs_generated_1.RosLaunchTemplates(this, id, {
            launchTemplateName: props.launchTemplateName,
            launchTemplateId: props.launchTemplateId,
            templateResourceGroupId: props.templateResourceGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLaunchTemplates;
        this.attrLaunchTemplateIds = rosLaunchTemplates.attrLaunchTemplateIds;
        this.attrLaunchTemplates = rosLaunchTemplates.attrLaunchTemplates;
    }
}
exports.LaunchTemplates = LaunchTemplates;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF1bmNodGVtcGxhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGF1bmNodGVtcGxhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQXdCdEQ7Ozs7R0FJRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCN0M7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBOEIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQzNILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyx1QkFBdUI7U0FDekQsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQztRQUNuQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLENBQUM7UUFDdEUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDO0lBQ3RFLENBQUM7Q0FDSjtBQXJDRCwwQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NMYXVuY2hUZW1wbGF0ZXMgfSBmcm9tICcuL2Vjcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NMYXVuY2hUZW1wbGF0ZXMgYXMgTGF1bmNoVGVtcGxhdGVzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBMYXVuY2hUZW1wbGF0ZXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWVjcy1sYXVuY2h0ZW1wbGF0ZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMYXVuY2hUZW1wbGF0ZXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsYXVuY2hUZW1wbGF0ZUlkOiBUaGUgSUQgb2YgdGhlIGxhdW5jaCB0ZW1wbGF0ZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGF1bmNoVGVtcGxhdGVOYW1lOiBUaGUgbmFtZSBvZiB0aGUgbGF1bmNoIHRlbXBsYXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGxhdW5jaFRlbXBsYXRlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRlbXBsYXRlUmVzb3VyY2VHcm91cElkOiBUaGUgSUQgb2YgdGhlIGVudGVycHJpc2UgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIHRlbXBsYXRlIGlzIGxhdW5jaGVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHRlbXBsYXRlUmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6RUNTOjpMYXVuY2hUZW1wbGF0ZXNgLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zTGF1bmNoVGVtcGxhdGVzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWVjcy1sYXVuY2h0ZW1wbGF0ZXNcbiAqL1xuZXhwb3J0IGNsYXNzIExhdW5jaFRlbXBsYXRlcyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogTGF1bmNoVGVtcGxhdGVzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIExhdW5jaFRlbXBsYXRlSWRzOiBUaGUgbGlzdCBvZiBsYXVuY2ggdGVtcGxhdGUgSURzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTGF1bmNoVGVtcGxhdGVJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBMYXVuY2hUZW1wbGF0ZXM6IFRoZSBsaXN0IG9mIGxhdW5jaCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJMYXVuY2hUZW1wbGF0ZXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBMYXVuY2hUZW1wbGF0ZXNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zTGF1bmNoVGVtcGxhdGVzID0gbmV3IFJvc0xhdW5jaFRlbXBsYXRlcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGxhdW5jaFRlbXBsYXRlTmFtZTogcHJvcHMubGF1bmNoVGVtcGxhdGVOYW1lLFxuICAgICAgICAgICAgbGF1bmNoVGVtcGxhdGVJZDogcHJvcHMubGF1bmNoVGVtcGxhdGVJZCxcbiAgICAgICAgICAgIHRlbXBsYXRlUmVzb3VyY2VHcm91cElkOiBwcm9wcy50ZW1wbGF0ZVJlc291cmNlR3JvdXBJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NMYXVuY2hUZW1wbGF0ZXM7XG4gICAgICAgIHRoaXMuYXR0ckxhdW5jaFRlbXBsYXRlSWRzID0gcm9zTGF1bmNoVGVtcGxhdGVzLmF0dHJMYXVuY2hUZW1wbGF0ZUlkcztcbiAgICAgICAgdGhpcy5hdHRyTGF1bmNoVGVtcGxhdGVzID0gcm9zTGF1bmNoVGVtcGxhdGVzLmF0dHJMYXVuY2hUZW1wbGF0ZXM7XG4gICAgfVxufVxuIl19