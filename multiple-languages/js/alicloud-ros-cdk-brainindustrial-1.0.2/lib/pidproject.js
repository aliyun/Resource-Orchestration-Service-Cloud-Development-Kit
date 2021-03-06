"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PidProject = exports.PidProjectProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const brainindustrial_generated_1 = require("./brainindustrial.generated");
Object.defineProperty(exports, "PidProjectProperty", { enumerable: true, get: function () { return brainindustrial_generated_1.RosPidProject; } });
/**
 * A ROS resource type:  `ALIYUN::BrainIndustrial::PidProject`
 */
class PidProject extends ros.Resource {
    /**
     * Create a new `ALIYUN::BrainIndustrial::PidProject`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosPidProject = new brainindustrial_generated_1.RosPidProject(this, id, {
            pidProjectDesc: props.pidProjectDesc,
            pidProjectName: props.pidProjectName,
            pidOrganizationId: props.pidOrganizationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPidProject;
        this.attrPidOrganizationId = rosPidProject.attrPidOrganizationId;
        this.attrPidProjectDesc = rosPidProject.attrPidProjectDesc;
        this.attrPidProjectId = rosPidProject.attrPidProjectId;
        this.attrPidProjectName = rosPidProject.attrPidProjectName;
    }
}
exports.PidProject = PidProject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlkcHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBpZHByb2plY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLDJFQUE0RDtBQUVsQyxtR0FGakIseUNBQWEsT0FFc0I7QUF1QjVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUEyQnhDOzs7Ozs7T0FNRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLE1BQU0sYUFBYSxHQUFHLElBQUkseUNBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtTQUM3QyxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0lBQy9ELENBQUM7Q0FDSjtBQWhERCxnQ0FnREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NQaWRQcm9qZWN0IH0gZnJvbSAnLi9icmFpbmluZHVzdHJpYWwuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUGlkUHJvamVjdCBhcyBQaWRQcm9qZWN0UHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBTElZVU46OkJyYWluSW5kdXN0cmlhbDo6UGlkUHJvamVjdGBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaWRQcm9qZWN0UHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGlkT3JnYW5pemF0aW9uSWQ6IFBpZE9yZ2FuaXphdGlvbklkXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGlkT3JnYW5pemF0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBpZFByb2plY3ROYW1lOiBQaWRQcm9qZWN0TmFtZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBpZFByb2plY3ROYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwaWRQcm9qZWN0RGVzYzogUGlkUHJvamVjdERlc2NcbiAgICAgKi9cbiAgICByZWFkb25seSBwaWRQcm9qZWN0RGVzYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6QnJhaW5JbmR1c3RyaWFsOjpQaWRQcm9qZWN0YFxuICovXG5leHBvcnQgY2xhc3MgUGlkUHJvamVjdCBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGlkT3JnYW5pemF0aW9uSWQ6IFBpZE9yZ2FuaXphdGlvbklkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQaWRPcmdhbml6YXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBpZFByb2plY3REZXNjOiBQaWRQcm9qZWN0RGVzY1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGlkUHJvamVjdERlc2M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQaWRQcm9qZWN0SWQ6IFBpZFByb2plY3RJZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGlkUHJvamVjdElkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGlkUHJvamVjdE5hbWU6IFBpZFByb2plY3ROYW1lXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQaWRQcm9qZWN0TmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkJyYWluSW5kdXN0cmlhbDo6UGlkUHJvamVjdGAuXG4gICAgICpcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUGlkUHJvamVjdFByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuXG4gICAgICAgIGNvbnN0IHJvc1BpZFByb2plY3QgPSBuZXcgUm9zUGlkUHJvamVjdCh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIHBpZFByb2plY3REZXNjOiBwcm9wcy5waWRQcm9qZWN0RGVzYyxcbiAgICAgICAgICAgIHBpZFByb2plY3ROYW1lOiBwcm9wcy5waWRQcm9qZWN0TmFtZSxcbiAgICAgICAgICAgIHBpZE9yZ2FuaXphdGlvbklkOiBwcm9wcy5waWRPcmdhbml6YXRpb25JZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQaWRQcm9qZWN0O1xuICAgICAgICB0aGlzLmF0dHJQaWRPcmdhbml6YXRpb25JZCA9IHJvc1BpZFByb2plY3QuYXR0clBpZE9yZ2FuaXphdGlvbklkO1xuICAgICAgICB0aGlzLmF0dHJQaWRQcm9qZWN0RGVzYyA9IHJvc1BpZFByb2plY3QuYXR0clBpZFByb2plY3REZXNjO1xuICAgICAgICB0aGlzLmF0dHJQaWRQcm9qZWN0SWQgPSByb3NQaWRQcm9qZWN0LmF0dHJQaWRQcm9qZWN0SWQ7XG4gICAgICAgIHRoaXMuYXR0clBpZFByb2plY3ROYW1lID0gcm9zUGlkUHJvamVjdC5hdHRyUGlkUHJvamVjdE5hbWU7XG4gICAgfVxufVxuIl19