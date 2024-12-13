"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prometheus = exports.PrometheusProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const arms_generated_1 = require("./arms.generated");
Object.defineProperty(exports, "PrometheusProperty", { enumerable: true, get: function () { return arms_generated_1.RosPrometheus; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::Prometheus`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPrometheus`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-prometheus
 */
class Prometheus extends ros.Resource {
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
        const rosPrometheus = new arms_generated_1.RosPrometheus(this, id, {
            clusterId: props.clusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrometheus;
        this.attrClusterId = rosPrometheus.attrClusterId;
        this.attrClusterType = rosPrometheus.attrClusterType;
        this.attrGrafanaInstanceId = rosPrometheus.attrGrafanaInstanceId;
        this.attrPaymentType = rosPrometheus.attrPaymentType;
        this.attrPrometheusName = rosPrometheus.attrPrometheusName;
        this.attrResourceGroupId = rosPrometheus.attrResourceGroupId;
        this.attrSecurityGroupId = rosPrometheus.attrSecurityGroupId;
        this.attrSubClustersJson = rosPrometheus.attrSubClustersJson;
        this.attrTags = rosPrometheus.attrTags;
        this.attrUserId = rosPrometheus.attrUserId;
        this.attrVSwitchId = rosPrometheus.attrVSwitchId;
        this.attrVpcId = rosPrometheus.attrVpcId;
    }
}
exports.Prometheus = Prometheus;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbWV0aGV1cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb21ldGhldXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFpRDtBQUV2QixtR0FGakIsOEJBQWEsT0FFc0I7QUFzQjVDOzs7O0dBSUc7QUFDSCxNQUFhLFVBQVcsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWtFeEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUNqSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQy9DLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWMsS0FBSyxTQUFTLElBQUksS0FBSyxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWM7U0FDdkgsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsYUFBYSxDQUFDLHFCQUFxQixDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNyRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLGtCQUFrQixDQUFDO1FBQzNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsYUFBYSxDQUFDLG1CQUFtQixDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0NBQ0o7QUFoR0QsZ0NBZ0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zUHJvbWV0aGV1cyB9IGZyb20gJy4vYXJtcy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NQcm9tZXRoZXVzIGFzIFByb21ldGhldXNQcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFByb21ldGhldXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWFybXMtcHJvbWV0aGV1c1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb21ldGhldXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBjbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgUHJvbWV0aGV1cyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjbHVzdGVySWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlZnJlc2hPcHRpb25zOiBUaGUgcmVmcmVzaCBzdHJhdGVneSBmb3IgdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIC0gTmV2ZXI6IE5ldmVyIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiAtIEFsd2F5czogQWx3YXlzIHJlZnJlc2ggdGhlIGRhdGFzb3VyY2UgcmVzb3VyY2Ugd2hlbiB0aGUgc3RhY2sgaXMgdXBkYXRlZC5cbiAgICAgKiBEZWZhdWx0IGlzIE5ldmVyLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHJlZnJlc2hPcHRpb25zPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6QVJNUzo6UHJvbWV0aGV1c2AuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NQcm9tZXRoZXVzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWFybXMtcHJvbWV0aGV1c1xuICovXG5leHBvcnQgY2xhc3MgUHJvbWV0aGV1cyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogUHJvbWV0aGV1c1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDbHVzdGVySWQ6IFRoZSBJRCBvZiB0aGUgUHJvbWV0aGV1cyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckNsdXN0ZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENsdXN0ZXJUeXBlOiBUaGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDbHVzdGVyVHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEdyYWZhbmFJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIEdyYWZhbmEgd29ya3NwYWNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR3JhZmFuYUluc3RhbmNlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQYXltZW50VHlwZTogVGhlIGJpbGxpbmcgbWV0aG9kLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUGF5bWVudFR5cGU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBQcm9tZXRoZXVzTmFtZTogVGhlIG5hbWUgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJvbWV0aGV1c05hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSZXNvdXJjZUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgcmVzb3VyY2UgZ3JvdXAgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSZXNvdXJjZUdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTZWN1cml0eUdyb3VwSWQ6IFRoZSBJRCBvZiB0aGUgc2VjdXJpdHkgZ3JvdXAuIFRoaXMgcGFyYW1ldGVyIGlzIHJldHVybmVkIG9ubHkgZm9yIFByb21ldGhldXMgaW5zdGFuY2VzIGZvciBFQ1MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTZWN1cml0eUdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTdWJDbHVzdGVyc0pzb246IFRoZSBjaGlsZCBpbnN0YW5jZXMgb2YgdGhlIFByb21ldGhldXMgaW5zdGFuY2UgZm9yIEdsb2JhbFZpZXcuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTdWJDbHVzdGVyc0pzb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYWdzOiBUaGUgdGFncyBvZiB0aGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYWdzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVXNlcklkOiBUaGUgdXNlciBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clVzZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZTd2l0Y2hJZDogVGhlIHZTd2l0Y2ggSUQuIFRoaXMgcGFyYW1ldGVyIGlzIHJldHVybmVkIG9ubHkgZm9yIFByb21ldGhldXMgaW5zdGFuY2VzIGZvciBFQ1MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJWU3dpdGNoSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVGhlIFZQQyBJRC4gVGhpcyBwYXJhbWV0ZXIgaXMgcmV0dXJuZWQgb25seSBmb3IgUHJvbWV0aGV1cyBpbnN0YW5jZXMgZm9yIEVDUy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUHJvbWV0aGV1c1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zUHJvbWV0aGV1cyA9IG5ldyBSb3NQcm9tZXRoZXVzKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgY2x1c3RlcklkOiBwcm9wcy5jbHVzdGVySWQsXG4gICAgICAgICAgICByZWZyZXNoT3B0aW9uczogcHJvcHMucmVmcmVzaE9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBwcm9wcy5yZWZyZXNoT3B0aW9ucyA9PT0gbnVsbCA/ICdOZXZlcicgOiBwcm9wcy5yZWZyZXNoT3B0aW9ucyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NQcm9tZXRoZXVzO1xuICAgICAgICB0aGlzLmF0dHJDbHVzdGVySWQgPSByb3NQcm9tZXRoZXVzLmF0dHJDbHVzdGVySWQ7XG4gICAgICAgIHRoaXMuYXR0ckNsdXN0ZXJUeXBlID0gcm9zUHJvbWV0aGV1cy5hdHRyQ2x1c3RlclR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckdyYWZhbmFJbnN0YW5jZUlkID0gcm9zUHJvbWV0aGV1cy5hdHRyR3JhZmFuYUluc3RhbmNlSWQ7XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zUHJvbWV0aGV1cy5hdHRyUGF5bWVudFR5cGU7XG4gICAgICAgIHRoaXMuYXR0clByb21ldGhldXNOYW1lID0gcm9zUHJvbWV0aGV1cy5hdHRyUHJvbWV0aGV1c05hbWU7XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHJvc1Byb21ldGhldXMuYXR0clJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyU2VjdXJpdHlHcm91cElkID0gcm9zUHJvbWV0aGV1cy5hdHRyU2VjdXJpdHlHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTdWJDbHVzdGVyc0pzb24gPSByb3NQcm9tZXRoZXVzLmF0dHJTdWJDbHVzdGVyc0pzb247XG4gICAgICAgIHRoaXMuYXR0clRhZ3MgPSByb3NQcm9tZXRoZXVzLmF0dHJUYWdzO1xuICAgICAgICB0aGlzLmF0dHJVc2VySWQgPSByb3NQcm9tZXRoZXVzLmF0dHJVc2VySWQ7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZCA9IHJvc1Byb21ldGhldXMuYXR0clZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NQcm9tZXRoZXVzLmF0dHJWcGNJZDtcbiAgICB9XG59XG4iXX0=