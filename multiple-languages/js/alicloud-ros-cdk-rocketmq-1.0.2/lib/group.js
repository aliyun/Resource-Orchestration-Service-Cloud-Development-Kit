"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Group = exports.GroupProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const rocketmq_generated_1 = require("./rocketmq.generated");
Object.defineProperty(exports, "GroupProperty", { enumerable: true, get: function () { return rocketmq_generated_1.RosGroup; } });
/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Group`
 */
class Group extends ros.Resource {
    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosGroup = new rocketmq_generated_1.RosGroup(this, id, {
            groupType: props.groupType,
            instanceId: props.instanceId,
            remark: props.remark,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGroup;
        this.attrGroupId = rosGroup.attrGroupId;
        this.attrGroupType = rosGroup.attrGroupType;
        this.attrInstanceId = rosGroup.attrInstanceId;
    }
}
exports.Group = Group;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm91cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsNkRBQWdEO0FBRTNCLDhGQUZaLDZCQUFRLE9BRWlCO0FBaUNsQzs7R0FFRztBQUNILE1BQWEsS0FBTSxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBc0JuQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQWlCLEVBQUUsbUNBQTJDLElBQUk7UUFDNUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLFFBQVEsR0FBRyxJQUFJLDZCQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDekIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQztRQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUM7SUFDbEQsQ0FBQztDQUNKO0FBM0NELHNCQTJDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0dyb3VwIH0gZnJvbSAnLi9yb2NrZXRtcS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NHcm91cCBhcyBHcm91cFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpST0NLRVRNUTo6R3JvdXBgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR3JvdXBQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cElkOiBUaGUgZ3JvdXAgSUQgb2YgdGhlIGNvbnN1bXB0aW9uIGNsdXN0ZXIuIFdoZW4gY3JlYXRpbmcgYSBncm91cCBJRCwgcGF5IGF0dGVudGlvbiB0byB0aGUgZm9sbG93aW5nIGFzcGVjdHM6XG4gICAgICogQSBncm91cCBJRCBzdGFydHMgd2l0aFwiR0lEX1wiIG9yIFwiR0lELVwiLCBhbmQgY29udGFpbnMgbGV0dGVycywgbnVtYmVycywgaHlwaGVucyAoLSksIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogQSBncm91cCBJRCByYW5nZXMgZnJvbSA3IHRvIDY0IGJ5dGVzLlxuICAgICAqIE9uY2UgYSBncm91cCBJRCBpcyBjcmVhdGVkLCBpdCBjYW5ub3QgYmUgZWRpdGVkIGFueW1vcmUuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBncm91cFR5cGU6IEdyb3VwIElEIHNwZWNpZnkgdGhlIGNyZWF0aW9uIG9mIGFwcGxpY2FibGUgYWdyZWVtZW50cy4gR3JvdXAgSUQgVENQIHByb3RvY29sIGFuZCB0aGUgSFRUUCBwcm90b2NvbCBjYW4gbm90IGJlIHNoYXJlZCwgdGhlIG5lZWQgdG8gY3JlYXRlIHNlcGFyYXRlbHkuIFZhbHVlIGFzIGZvbGxvd3M6XG4gICAgICogdGNwOiBEZWZhdWx0LCBpbmRpY2F0ZXMgR3JvdXAgSUQgaXMgY3JlYXRlZCBvbmx5IGZvciB0aGUgVENQIHByb3RvY29sIG1lc3NhZ2luZy5cbiAgICAgKiBodHRwOiByZXByZXNlbnRzIHRoZSBHcm91cCBJRCB3YXMgY3JlYXRlZCBvbmx5IGZvciB0aGUgSFRUUCBwcm90b2NvbCBtZXNzYWdpbmcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZ3JvdXBUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVtYXJrOiBUaGUgcmVtYXJrcyBvbiB0aGUgcmVxdWVzdC5cbiAgICAgKi9cbiAgICByZWFkb25seSByZW1hcms/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OlJPQ0tFVE1ROjpHcm91cGBcbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VwIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcblxuICAgIC8qKlxuICAgICAqIEEgZmFjdG9yeSBtZXRob2QgdGhhdCBjcmVhdGVzIGEgbmV3IGluc3RhbmNlIG9mIHRoaXMgY2xhc3MgZnJvbSBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIHRoZSBwcm9wZXJ0aWVzIG9mIHRoaXMgUk9TIHJlc291cmNlLCB3aGljaCB3aWxsIGJlIGFzc2lnbmVkIHRvIFJPUyByZXNvdXJjZS5cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBHcm91cElkOiBHcm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdyb3VwVHlwZTogR3JvdXAgVHlwZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JvdXBUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogSW5zdGFuY2UgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpST0NLRVRNUTo6R3JvdXBgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEdyb3VwUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zR3JvdXAgPSBuZXcgUm9zR3JvdXAodGhpcywgaWQsICB7XG4gICAgICAgICAgICBncm91cFR5cGU6IHByb3BzLmdyb3VwVHlwZSxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICByZW1hcms6IHByb3BzLnJlbWFyayxcbiAgICAgICAgICAgIGdyb3VwSWQ6IHByb3BzLmdyb3VwSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zR3JvdXA7XG4gICAgICAgIHRoaXMuYXR0ckdyb3VwSWQgPSByb3NHcm91cC5hdHRyR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyR3JvdXBUeXBlID0gcm9zR3JvdXAuYXR0ckdyb3VwVHlwZTtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZCA9IHJvc0dyb3VwLmF0dHJJbnN0YW5jZUlkO1xuICAgIH1cbn1cbiJdfQ==