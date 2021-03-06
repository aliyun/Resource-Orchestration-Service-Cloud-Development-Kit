"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBInstanceParameterGroup = exports.DBInstanceParameterGroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rds_generated_1 = require("./rds.generated");
Object.defineProperty(exports, "DBInstanceParameterGroupProperty", { enumerable: true, get: function () { return rds_generated_1.RosDBInstanceParameterGroup; } });
/**
 * A ROS resource type:  `ALIYUN::RDS::DBInstanceParameterGroup`
 */
class DBInstanceParameterGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::RDS::DBInstanceParameterGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDBInstanceParameterGroup = new rds_generated_1.RosDBInstanceParameterGroup(this, id, {
            parameters: props.parameters,
            dbInstanceId: props.dbInstanceId,
            forcerestart: props.forcerestart === undefined || props.forcerestart === null ? 'false' : props.forcerestart,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceParameterGroup;
    }
}
exports.DBInstanceParameterGroup = DBInstanceParameterGroup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJpbnN0YW5jZXBhcmFtZXRlcmdyb3VwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGJpbnN0YW5jZXBhcmFtZXRlcmdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBOEQ7QUFFdEIsaUhBRi9CLDJDQUEyQixPQUVvQztBQXVCeEU7O0dBRUc7QUFDSCxNQUFhLHdCQUF5QixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBRXREOzs7T0FHRztJQUVIOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0MsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSwyQ0FBMkIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNFLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO1NBQy9HLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsMkJBQTJCLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBeEJELDREQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0RCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cCB9IGZyb20gJy4vcmRzLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cCBhcyBEQkluc3RhbmNlUGFyYW1ldGVyR3JvdXBQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6UkRTOjpEQkluc3RhbmNlUGFyYW1ldGVyR3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgREJJbnN0YW5jZVBhcmFtZXRlckdyb3VwUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGJJbnN0YW5jZUlkOiBEYXRhYmFzZSBJbnN0YW5jZUlkIHRvIHVwZGF0ZSBwcm9wZXJ0aWVzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRiSW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGFyYW1ldGVyczogUGFyYW1ldGVycyB0byB1cGRhdGUgZm9yIHNlbGVjdGVkIGRhdGFiYXNlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhcmFtZXRlcnM6IEFycmF5PFJvc0RCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cC5QYXJhbWV0ZXJzUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZm9yY2VyZXN0YXJ0OiB3aGV0aGVyIHJlc3RhcnQgZGF0YWJhc2UgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZm9yY2VyZXN0YXJ0Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIEEgUk9TIHJlc291cmNlIHR5cGU6ICBgQUxJWVVOOjpSRFM6OkRCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIERCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6UkRTOjpEQkluc3RhbmNlUGFyYW1ldGVyR3JvdXBgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc0RCSW5zdGFuY2VQYXJhbWV0ZXJHcm91cCA9IG5ldyBSb3NEQkluc3RhbmNlUGFyYW1ldGVyR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBwYXJhbWV0ZXJzOiBwcm9wcy5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgZGJJbnN0YW5jZUlkOiBwcm9wcy5kYkluc3RhbmNlSWQsXG4gICAgICAgICAgICBmb3JjZXJlc3RhcnQ6IHByb3BzLmZvcmNlcmVzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHByb3BzLmZvcmNlcmVzdGFydCA9PT0gbnVsbCA/ICdmYWxzZScgOiBwcm9wcy5mb3JjZXJlc3RhcnQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zREJJbnN0YW5jZVBhcmFtZXRlckdyb3VwO1xuICAgIH1cbn1cbiJdfQ==