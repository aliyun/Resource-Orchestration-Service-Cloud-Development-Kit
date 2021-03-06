"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorGroup = exports.MonitorGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "MonitorGroupProperty", { enumerable: true, get: function () { return cms_generated_1.RosMonitorGroup; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::MonitorGroup`
 */
class MonitorGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::MonitorGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosMonitorGroup = new cms_generated_1.RosMonitorGroup(this, id, {
            groupName: props.groupName,
            contactGroups: props.contactGroups,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosMonitorGroup;
        this.attrGroupId = rosMonitorGroup.attrGroupId;
    }
}
exports.MonitorGroup = MonitorGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uaXRvcmdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9uaXRvcmdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBbUJoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTFDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7U0FDckMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxlQUFlLENBQUMsV0FBVyxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQTdCRCxvQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NNb25pdG9yR3JvdXAgfSBmcm9tICcuL2Ntcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NNb25pdG9yR3JvdXAgYXMgTW9uaXRvckdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1vbml0b3JHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFwcGxpY2F0aW9uIGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdyb3VwTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY29udGFjdEdyb3VwczogVGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuIEFsZXJ0IG5vdGlmaWNhdGlvbnMgZm9yIHRoZSBhcHBsaWNhdGlvbiBncm91cCBhcmUgc2VudCB0b1xuICAgICAqIHRoZSBzcGVjaWZpZWQgYWxlcnQgY29udGFjdCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjb250YWN0R3JvdXBzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDTVM6Ok1vbml0b3JHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIE1vbml0b3JHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR3JvdXBJZDogQXBwbGljYXRpb24gZ3JvdXAgSUQgZ2VuZXJhdGVkIGFmdGVyIHRoZSBncm91cCBpcyBjcmVhdGVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkNNUzo6TW9uaXRvckdyb3VwYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBNb25pdG9yR3JvdXBQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NNb25pdG9yR3JvdXAgPSBuZXcgUm9zTW9uaXRvckdyb3VwKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZ3JvdXBOYW1lOiBwcm9wcy5ncm91cE5hbWUsXG4gICAgICAgICAgICBjb250YWN0R3JvdXBzOiBwcm9wcy5jb250YWN0R3JvdXBzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc01vbml0b3JHcm91cDtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBJZCA9IHJvc01vbml0b3JHcm91cC5hdHRyR3JvdXBJZDtcbiAgICB9XG59XG4iXX0=