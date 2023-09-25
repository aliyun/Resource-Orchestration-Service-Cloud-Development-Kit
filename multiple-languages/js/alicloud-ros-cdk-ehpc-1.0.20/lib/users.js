"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = exports.UsersProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ehpc_generated_1 = require("./ehpc.generated");
Object.defineProperty(exports, "UsersProperty", { enumerable: true, get: function () { return ehpc_generated_1.RosUsers; } });
/**
 * A ROS resource type:  `ALIYUN::EHPC::Users`
 */
class Users extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::EHPC::Users`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosUsers = new ehpc_generated_1.RosUsers(this, id, {
            clusterId: props.clusterId,
            users: props.users,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosUsers;
    }
}
exports.Users = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2Vycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMscURBQTRDO0FBRXZCLDhGQUZaLHlCQUFRLE9BRWlCO0FBa0JsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRW5DOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1RyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sUUFBUSxHQUFHLElBQUkseUJBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDckIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztDQUNKO0FBdkJELHNCQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1VzZXJzIH0gZnJvbSAnLi9laHBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc1VzZXJzIGFzIFVzZXJzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkVIUEM6OlVzZXJzYFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlcklkOiBUaGUgY2x1c3RlciBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHVzZXJzOiBUaGUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXJzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHVzZXJzOiBBcnJheTxSb3NVc2Vycy5Vc2Vyc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUhQQzo6VXNlcnNgXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VycyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6RUhQQzo6VXNlcnNgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFVzZXJzUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zVXNlcnMgPSBuZXcgUm9zVXNlcnModGhpcywgaWQsICB7XG4gICAgICAgICAgICBjbHVzdGVySWQ6IHByb3BzLmNsdXN0ZXJJZCxcbiAgICAgICAgICAgIHVzZXJzOiBwcm9wcy51c2VycyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NVc2VycztcbiAgICB9XG59XG4iXX0=