"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactGroup = exports.ContactGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cms_generated_1 = require("./cms.generated");
Object.defineProperty(exports, "ContactGroupProperty", { enumerable: true, get: function () { return cms_generated_1.RosContactGroup; } });
/**
 * A ROS resource type:  `ALIYUN::CMS::ContactGroup`
 */
class ContactGroup extends ros.Resource {
    /**
     * Create a new `ALIYUN::CMS::ContactGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosContactGroup = new cms_generated_1.RosContactGroup(this, id, {
            describe: props.describe,
            contactGroupName: props.contactGroupName,
            contactNames: props.contactNames,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosContactGroup;
        this.attrContactGroupName = rosContactGroup.attrContactGroupName;
    }
}
exports.ContactGroup = ContactGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdGdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdGdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBdUJoRDs7R0FFRztBQUNILE1BQWEsWUFBYSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBWTFDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBd0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNuSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtTQUNuQyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQztRQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsZUFBZSxDQUFDLG9CQUFvQixDQUFDO0lBQ3JFLENBQUM7Q0FDSjtBQTlCRCxvQ0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NDb250YWN0R3JvdXAgfSBmcm9tICcuL2Ntcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NDb250YWN0R3JvdXAgYXMgQ29udGFjdEdyb3VwUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkNNUzo6Q29udGFjdEdyb3VwYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3RHcm91cFByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhY3RHcm91cE5hbWU6IFRoZSBuYW1lIG9mIHRoZSBhbGVydCBjb250YWN0IGdyb3VwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGNvbnRhY3RHcm91cE5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGNvbnRhY3ROYW1lczogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY29udGFjdE5hbWVzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpYmU6IFRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgYWxlcnQgY29udGFjdCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZXNjcmliZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpDTVM6OkNvbnRhY3RHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ29udGFjdEdyb3VwTmFtZTogVGhlIG5hbWUgb2YgdGhlIGFsZXJ0IGNvbnRhY3QgZ3JvdXAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDb250YWN0R3JvdXBOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q01TOjpDb250YWN0R3JvdXBgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IENvbnRhY3RHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0NvbnRhY3RHcm91cCA9IG5ldyBSb3NDb250YWN0R3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBkZXNjcmliZTogcHJvcHMuZGVzY3JpYmUsXG4gICAgICAgICAgICBjb250YWN0R3JvdXBOYW1lOiBwcm9wcy5jb250YWN0R3JvdXBOYW1lLFxuICAgICAgICAgICAgY29udGFjdE5hbWVzOiBwcm9wcy5jb250YWN0TmFtZXMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQ29udGFjdEdyb3VwO1xuICAgICAgICB0aGlzLmF0dHJDb250YWN0R3JvdXBOYW1lID0gcm9zQ29udGFjdEdyb3VwLmF0dHJDb250YWN0R3JvdXBOYW1lO1xuICAgIH1cbn1cbiJdfQ==