"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aggregator = exports.AggregatorProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const config_generated_1 = require("./config.generated");
Object.defineProperty(exports, "AggregatorProperty", { enumerable: true, get: function () { return config_generated_1.RosAggregator; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::Config::Aggregator`, which is used to create an account group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAggregator`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
 */
class Aggregator extends ros.Resource {
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
        const rosAggregator = new config_generated_1.RosAggregator(this, id, {
            aggregatorName: props.aggregatorName,
            description: props.description,
            aggregatorAccounts: props.aggregatorAccounts,
            folderId: props.folderId,
            aggregatorType: props.aggregatorType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAggregator;
        this.attrAggregatorId = rosAggregator.attrAggregatorId;
    }
}
exports.Aggregator = Aggregator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFnZ3JlZ2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHlEQUFtRDtBQUV6QixtR0FGakIsZ0NBQWEsT0FFc0I7QUFnRDVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVd4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSxnQ0FBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1lBQ3BDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7U0FDdkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztJQUMzRCxDQUFDO0NBQ0o7QUFqQ0QsZ0NBaUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQWdncmVnYXRvciB9IGZyb20gJy4vY29uZmlnLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0FnZ3JlZ2F0b3IgYXMgQWdncmVnYXRvclByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQWdncmVnYXRvcmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jb25maWctYWdncmVnYXRvclxuICovXG5leHBvcnQgaW50ZXJmYWNlIEFnZ3JlZ2F0b3JQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZ2dyZWdhdG9yTmFtZTogVGhlIG5hbWUgb2YgYWdncmVnYXRvci5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZ2dyZWdhdG9yTmFtZTogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGVzY3JpcHRpb246IFRoZSBkZXNjcmlwdGlvbiBvZiBhZ2dyZWdhdG9yLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhZ2dyZWdhdG9yQWNjb3VudHM6IFRoZSBtZW1iZXIgYWNjb3VudCBpbiBhZ2dyZWdhdG9yLldoZW4gdGhlIEFnZ3JlZ2F0b3JUeXBlIGlzIFJELCB0aGlzIHBhcmFtZXRlciBjYW4gYmUgZW1wdHksIHdoaWNoIG1lYW5zIHRoYXQgYWxsIGFjY291bnRzIGluIHRoZSByZXNvdXJjZSBkaXJlY3Rvcnkgd2lsbCBiZSBhZGRlZCB0byB0aGUgZ2xvYmFsIGFjY291bnQgZ3JvdXAuV2hlbiB0aGUgQWdncmVnYXRvclR5cGUgaXMgRk9MREVSLCB0aGlzIHBhcmFtZXRlciBjYW4gYmUgZW1wdHksd2hpY2ggbWVhbnMgdGhhdCBhbGwgYWNjb3VudHMgaW4gdGhlIHJlc291cmNlIGZvbGRlciB3aWxsIGJlIGFkZGVkIHRvIHRoZSBnbG9iYWwgYWNjb3VudCBncm91cC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhZ2dyZWdhdG9yQWNjb3VudHM/OiBBcnJheTxSb3NBZ2dyZWdhdG9yLkFnZ3JlZ2F0b3JBY2NvdW50c1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFnZ3JlZ2F0b3JUeXBlOiBBY2NvdW50IGdyb3VwIHR5cGUuIFZhbHVlOlxuICAgICAqIFJEOiBHbG9iYWwgYWNjb3VudCBncm91cC5cbiAgICAgKiBDVVNUT006IEN1c3RvbSBhY2NvdW50IGdyb3VwIChkZWZhdWx0IHZhbHVlKS5cbiAgICAgKiBGT0xERVI6IEZvbGRlciBhY2NvdW50IGdyb3VwLiBNdXN0IHNldCBGb2xkZXJJZCBpZiB0aGUgQWdncmVnYXRvclR5cGUgaXMgRk9MREVSLiBQbGVhc2UgcmVmZXIgdG8gTGlzdEFjY291bnRzIGZvciBhY2Nlc3NpbmcgRm9sZGVySWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWdncmVnYXRvclR5cGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBmb2xkZXJJZDogVGhlIGZvbGRlciBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBmb2xkZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgYEFnZ3JlZ2F0b3JgLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBZ2dyZWdhdG9yIGV4dGVuZHMgcm9zLklSZXNvdXJjZSB7XG4gICAgcmVhZG9ubHkgcHJvcHM6IEFnZ3JlZ2F0b3JQcm9wcztcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBZ2dyZWdhdG9ySWQ6IFRoZSBJRCBvZiB0aGUgYWdncmVnYXRvci5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdHRyQWdncmVnYXRvcklkOiByb3MuSVJlc29sdmFibGUgfCBzdHJpbmc7XG59XG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDb25maWc6OkFnZ3JlZ2F0b3JgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBhY2NvdW50IGdyb3VwLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zQWdncmVnYXRvcmBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNvbmZpZy1hZ2dyZWdhdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBBZ2dyZWdhdG9yIGV4dGVuZHMgcm9zLlJlc291cmNlIGltcGxlbWVudHMgSUFnZ3JlZ2F0b3Ige1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwdWJsaWMgcmVhZG9ubHkgcHJvcHM6IEFnZ3JlZ2F0b3JQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWdncmVnYXRvcklkOiBUaGUgSUQgb2YgdGhlIGFnZ3JlZ2F0b3IuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBZ2dyZWdhdG9ySWQ6IHJvcy5JUmVzb2x2YWJsZSB8IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBBZ2dyZWdhdG9yUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NBZ2dyZWdhdG9yID0gbmV3IFJvc0FnZ3JlZ2F0b3IodGhpcywgaWQsICB7XG4gICAgICAgICAgICBhZ2dyZWdhdG9yTmFtZTogcHJvcHMuYWdncmVnYXRvck5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBhZ2dyZWdhdG9yQWNjb3VudHM6IHByb3BzLmFnZ3JlZ2F0b3JBY2NvdW50cyxcbiAgICAgICAgICAgIGZvbGRlcklkOiBwcm9wcy5mb2xkZXJJZCxcbiAgICAgICAgICAgIGFnZ3JlZ2F0b3JUeXBlOiBwcm9wcy5hZ2dyZWdhdG9yVHlwZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NBZ2dyZWdhdG9yO1xuICAgICAgICB0aGlzLmF0dHJBZ2dyZWdhdG9ySWQgPSByb3NBZ2dyZWdhdG9yLmF0dHJBZ2dyZWdhdG9ySWQ7XG4gICAgfVxufVxuIl19