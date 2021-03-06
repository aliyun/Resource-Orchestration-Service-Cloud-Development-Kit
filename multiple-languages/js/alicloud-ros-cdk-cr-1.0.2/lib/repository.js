"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = exports.RepositoryProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cr_generated_1 = require("./cr.generated");
Object.defineProperty(exports, "RepositoryProperty", { enumerable: true, get: function () { return cr_generated_1.RosRepository; } });
/**
 * A ROS resource type:  `ALIYUN::CR::Repository`
 */
class Repository extends ros.Resource {
    /**
     * Create a new `ALIYUN::CR::Repository`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosRepository = new cr_generated_1.RosRepository(this, id, {
            repoNamespace: props.repoNamespace,
            repoType: props.repoType,
            repoName: props.repoName,
            summary: props.summary,
            detail: props.detail,
            repoSource: props.repoSource,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRepository;
        this.attrRepoId = rosRepository.attrRepoId;
    }
}
exports.Repository = Repository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3NpdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUErQztBQUVyQixtR0FGakIsNEJBQWEsT0FFc0I7QUFzQzVDOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFZeEM7Ozs7OztPQU1HO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFakIsTUFBTSxhQUFhLEdBQUcsSUFBSSw0QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDO0lBQy9DLENBQUM7Q0FDSjtBQWpDRCxnQ0FpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSZXBvc2l0b3J5IH0gZnJvbSAnLi9jci5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSZXBvc2l0b3J5IGFzIFJlcG9zaXRvcnlQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEFMSVlVTjo6Q1I6OlJlcG9zaXRvcnlgXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVwb3NpdG9yeVByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlcG9OYW1lOiB0aGUgbmFtZSBvZiB0aGUgcmVwb1xuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9OYW1lOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXBvTmFtZXNwYWNlOiB0aGUgbmFtZXNwYWNlIHRoZSByZXBvIGJlbG9uZ3MgdG9cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBvTmFtZXNwYWNlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByZXBvVHlwZTogcmVwb3NpdG9yeSB2aXNpYmlsaXR5LCBwdWJsaWMgb3IgcHJpdmF0ZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlcG9UeXBlOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzdW1tYXJ5OiBkZXNjcmlwdGlvbiBvciBzb21ldGhpbmcgYWxpa2VcbiAgICAgKi9cbiAgICByZWFkb25seSBzdW1tYXJ5OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXRhaWw6IGRldGFpbGVkIGNvbmZpZ3VyYXRpb24gaW4gbWFya2Rvd24gZm9ybWF0XG4gICAgICovXG4gICAgcmVhZG9ubHkgZGV0YWlsPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcmVwb1NvdXJjZTogQ29kZSBTb3VyY2UgbWVzc2FnZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByZXBvU291cmNlPzogUm9zUmVwb3NpdG9yeS5SZXBvU291cmNlUHJvcGVydHkgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogQSBST1MgcmVzb3VyY2UgdHlwZTogIGBBTElZVU46OkNSOjpSZXBvc2l0b3J5YFxuICovXG5leHBvcnQgY2xhc3MgUmVwb3NpdG9yeSBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG5cbiAgICAvKipcbiAgICAgKiBBIGZhY3RvcnkgbWV0aG9kIHRoYXQgY3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiB0aGlzIGNsYXNzIGZyb20gYW4gb2JqZWN0XG4gICAgICogY29udGFpbmluZyB0aGUgcHJvcGVydGllcyBvZiB0aGlzIFJPUyByZXNvdXJjZSwgd2hpY2ggd2lsbCBiZSBhc3NpZ25lZCB0byBST1MgcmVzb3VyY2UuXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVwb0lkOiBUaGUgcmVwbyBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUmVwb0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgYEFMSVlVTjo6Q1I6OlJlcG9zaXRvcnlgLlxuICAgICAqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJlcG9zaXRvcnlQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NSZXBvc2l0b3J5ID0gbmV3IFJvc1JlcG9zaXRvcnkodGhpcywgaWQsICB7XG4gICAgICAgICAgICByZXBvTmFtZXNwYWNlOiBwcm9wcy5yZXBvTmFtZXNwYWNlLFxuICAgICAgICAgICAgcmVwb1R5cGU6IHByb3BzLnJlcG9UeXBlLFxuICAgICAgICAgICAgcmVwb05hbWU6IHByb3BzLnJlcG9OYW1lLFxuICAgICAgICAgICAgc3VtbWFyeTogcHJvcHMuc3VtbWFyeSxcbiAgICAgICAgICAgIGRldGFpbDogcHJvcHMuZGV0YWlsLFxuICAgICAgICAgICAgcmVwb1NvdXJjZTogcHJvcHMucmVwb1NvdXJjZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NSZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLmF0dHJSZXBvSWQgPSByb3NSZXBvc2l0b3J5LmF0dHJSZXBvSWQ7XG4gICAgfVxufVxuIl19