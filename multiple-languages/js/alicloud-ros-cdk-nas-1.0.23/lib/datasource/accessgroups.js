"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessGroups = exports.AccessGroupsProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const nas_generated_1 = require("./nas.generated");
Object.defineProperty(exports, "AccessGroupsProperty", { enumerable: true, get: function () { return nas_generated_1.RosAccessGroups; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::AccessGroups`, which is used to query the details of permission groups.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-accessgroups
 */
class AccessGroups extends ros.Resource {
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
        const rosAccessGroups = new nas_generated_1.RosAccessGroups(this, id, {
            accessGroupName: props.accessGroupName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessGroups;
        this.attrAccessGroupNames = rosAccessGroups.attrAccessGroupNames;
        this.attrAccessGroups = rosAccessGroups.attrAccessGroups;
    }
}
exports.AccessGroups = AccessGroups;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzZ3JvdXBzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzZ3JvdXBzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBY2hEOzs7O0dBSUc7QUFDSCxNQUFhLFlBQWEsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCMUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsUUFBMkIsRUFBRSxFQUFFLG1DQUEyQyxJQUFJO1FBQ3hILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxlQUFlLEdBQUcsSUFBSSwrQkFBZSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDbkQsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1NBQ3pDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxlQUFlLENBQUMsb0JBQW9CLENBQUM7UUFDakUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFuQ0Qsb0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWNjZXNzR3JvdXBzIH0gZnJvbSAnLi9uYXMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQWNjZXNzR3JvdXBzIGFzIEFjY2Vzc0dyb3Vwc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQWNjZXNzR3JvdXBzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1uYXMtYWNjZXNzZ3JvdXBzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzR3JvdXBzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZXNzR3JvdXBOYW1lOiBUaGUgbmFtZSBvZiB0aGUgcGVybWlzc2lvbiBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2Nlc3NHcm91cE5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpOQVM6OkFjY2Vzc0dyb3Vwc2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGRldGFpbHMgb2YgcGVybWlzc2lvbiBncm91cHMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NBY2Nlc3NHcm91cHNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtbmFzLWFjY2Vzc2dyb3Vwc1xuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzR3JvdXBzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBY2Nlc3NHcm91cHNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjZXNzR3JvdXBOYW1lczogVGhlIGxpc3Qgb2YgYWNjZXNzIGdyb3VwIG5hbWVzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWNjZXNzR3JvdXBOYW1lczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFjY2Vzc0dyb3VwczogVGhlIGxpc3Qgb2YgYWNjZXNzIGdyb3Vwcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY2Vzc0dyb3Vwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFjY2Vzc0dyb3Vwc1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NBY2Nlc3NHcm91cHMgPSBuZXcgUm9zQWNjZXNzR3JvdXBzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgYWNjZXNzR3JvdXBOYW1lOiBwcm9wcy5hY2Nlc3NHcm91cE5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQWNjZXNzR3JvdXBzO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NHcm91cE5hbWVzID0gcm9zQWNjZXNzR3JvdXBzLmF0dHJBY2Nlc3NHcm91cE5hbWVzO1xuICAgICAgICB0aGlzLmF0dHJBY2Nlc3NHcm91cHMgPSByb3NBY2Nlc3NHcm91cHMuYXR0ckFjY2Vzc0dyb3VwcztcbiAgICB9XG59XG4iXX0=