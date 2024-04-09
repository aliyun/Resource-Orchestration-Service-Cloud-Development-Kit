"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnyCluster = exports.AnyClusterProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cs_generated_1 = require("./cs.generated");
Object.defineProperty(exports, "AnyClusterProperty", { enumerable: true, get: function () { return cs_generated_1.RosAnyCluster; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CS::AnyCluster`, which is used to create an ACK cluster of a specific type.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAnyCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-anycluster
 */
class AnyCluster extends ros.Resource {
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
        const rosAnyCluster = new cs_generated_1.RosAnyCluster(this, id, {
            clusterConfig: props.clusterConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAnyCluster;
        this.attrApiServerSlbId = rosAnyCluster.attrApiServerSlbId;
        this.attrClusterId = rosAnyCluster.attrClusterId;
        this.attrDefaultUserKubeConfig = rosAnyCluster.attrDefaultUserKubeConfig;
        this.attrIngressSlbId = rosAnyCluster.attrIngressSlbId;
        this.attrNodes = rosAnyCluster.attrNodes;
        this.attrPrivateUserKubConfig = rosAnyCluster.attrPrivateUserKubConfig;
        this.attrScalingConfigurationId = rosAnyCluster.attrScalingConfigurationId;
        this.attrScalingGroupId = rosAnyCluster.attrScalingGroupId;
        this.attrScalingRuleId = rosAnyCluster.attrScalingRuleId;
        this.attrTaskId = rosAnyCluster.attrTaskId;
        this.attrWorkerRamRoleName = rosAnyCluster.attrWorkerRamRoleName;
    }
}
exports.AnyCluster = AnyCluster;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW55Y2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFueWNsdXN0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLGlEQUErQztBQUVyQixtR0FGakIsNEJBQWEsT0FFc0I7QUFjNUM7Ozs7R0FJRztBQUNILE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNkR4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSw0QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDO1FBQ2pELElBQUksQ0FBQyx5QkFBeUIsR0FBRyxhQUFhLENBQUMseUJBQXlCLENBQUM7UUFDekUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUM7UUFDekMsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RSxJQUFJLENBQUMsMEJBQTBCLEdBQUcsYUFBYSxDQUFDLDBCQUEwQixDQUFDO1FBQzNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztRQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDM0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztJQUNyRSxDQUFDO0NBQ0o7QUF6RkQsZ0NBeUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQW55Q2x1c3RlciB9IGZyb20gJy4vY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zQW55Q2x1c3RlciBhcyBBbnlDbHVzdGVyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBBbnlDbHVzdGVyYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLWNzLWFueWNsdXN0ZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBbnlDbHVzdGVyUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY2x1c3RlckNvbmZpZzogQ2x1c3RlciBjb25maWcuXG4gICAgICovXG4gICAgcmVhZG9ubHkgY2x1c3RlckNvbmZpZzogeyBba2V5OiBzdHJpbmddOiAoYW55IHwgcm9zLklSZXNvbHZhYmxlKSB9IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpDUzo6QW55Q2x1c3RlcmAsIHdoaWNoIGlzIHVzZWQgdG8gY3JlYXRlIGFuIEFDSyBjbHVzdGVyIG9mIGEgc3BlY2lmaWMgdHlwZS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0FueUNsdXN0ZXJgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1jcy1hbnljbHVzdGVyXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnlDbHVzdGVyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBBbnlDbHVzdGVyUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFQSVNlcnZlclNMQklkOiBUaGUgaWQgb2YgQVBJIHNlcnZlciBTTEJcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFwaVNlcnZlclNsYklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQ2x1c3RlcklkOiBDbHVzdGVyIGluc3RhbmNlIElELlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ2x1c3RlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVmYXVsdFVzZXJLdWJlQ29uZmlnOiBEZWZhdWx0IHVzZXIga3ViZXJuZXRlcyBjb25maWcgd2hpY2ggaXMgdXNlZCBmb3IgY29uZmlndXJpbmcgY2x1c3RlciBjcmVkZW50aWFscy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlZmF1bHRVc2VyS3ViZUNvbmZpZzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluZ3Jlc3NTTEJJZDogVGhlIGlkIG9mIGluZ3Jlc3MgU0xCXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbmdyZXNzU2xiSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOb2RlczogVGhlIGxpc3Qgb2YgY2x1c3RlciBub2Rlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ck5vZGVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHJpdmF0ZVVzZXJLdWJDb25maWc6IFByaXZhdGUgdXNlciBrdWJlcm5ldGVzIGNvbmZpZyB3aGljaCBpcyB1c2VkIGZvciBjb25maWd1cmluZyBjbHVzdGVyIGNyZWRlbnRpYWxzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHJpdmF0ZVVzZXJLdWJDb25maWc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTY2FsaW5nQ29uZmlndXJhdGlvbklkOiBTY2FsaW5nIGNvbmZpZ3VyYXRpb24gaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTY2FsaW5nR3JvdXBJZDogU2NhbGluZyBncm91cCBpZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2NhbGluZ0dyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTY2FsaW5nUnVsZUlkOiBTY2FsaW5nIHJ1bGUgaWRcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNjYWxpbmdSdWxlSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUYXNrSWQ6IFRhc2sgSUQuIEF1dG9tYXRpY2FsbHkgYXNzaWduZWQgYnkgdGhlIHN5c3RlbSwgdGhlIHVzZXIgcXVlcmllcyB0aGUgdGFzayBzdGF0dXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJUYXNrSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBXb3JrZXJSYW1Sb2xlTmFtZTogV29ya2VyIHJhbSByb2xlIG5hbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJXb3JrZXJSYW1Sb2xlTmFtZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IEFueUNsdXN0ZXJQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0FueUNsdXN0ZXIgPSBuZXcgUm9zQW55Q2x1c3Rlcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGNsdXN0ZXJDb25maWc6IHByb3BzLmNsdXN0ZXJDb25maWcsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zQW55Q2x1c3RlcjtcbiAgICAgICAgdGhpcy5hdHRyQXBpU2VydmVyU2xiSWQgPSByb3NBbnlDbHVzdGVyLmF0dHJBcGlTZXJ2ZXJTbGJJZDtcbiAgICAgICAgdGhpcy5hdHRyQ2x1c3RlcklkID0gcm9zQW55Q2x1c3Rlci5hdHRyQ2x1c3RlcklkO1xuICAgICAgICB0aGlzLmF0dHJEZWZhdWx0VXNlckt1YmVDb25maWcgPSByb3NBbnlDbHVzdGVyLmF0dHJEZWZhdWx0VXNlckt1YmVDb25maWc7XG4gICAgICAgIHRoaXMuYXR0ckluZ3Jlc3NTbGJJZCA9IHJvc0FueUNsdXN0ZXIuYXR0ckluZ3Jlc3NTbGJJZDtcbiAgICAgICAgdGhpcy5hdHRyTm9kZXMgPSByb3NBbnlDbHVzdGVyLmF0dHJOb2RlcztcbiAgICAgICAgdGhpcy5hdHRyUHJpdmF0ZVVzZXJLdWJDb25maWcgPSByb3NBbnlDbHVzdGVyLmF0dHJQcml2YXRlVXNlckt1YkNvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyU2NhbGluZ0NvbmZpZ3VyYXRpb25JZCA9IHJvc0FueUNsdXN0ZXIuYXR0clNjYWxpbmdDb25maWd1cmF0aW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdHcm91cElkID0gcm9zQW55Q2x1c3Rlci5hdHRyU2NhbGluZ0dyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0clNjYWxpbmdSdWxlSWQgPSByb3NBbnlDbHVzdGVyLmF0dHJTY2FsaW5nUnVsZUlkO1xuICAgICAgICB0aGlzLmF0dHJUYXNrSWQgPSByb3NBbnlDbHVzdGVyLmF0dHJUYXNrSWQ7XG4gICAgICAgIHRoaXMuYXR0cldvcmtlclJhbVJvbGVOYW1lID0gcm9zQW55Q2x1c3Rlci5hdHRyV29ya2VyUmFtUm9sZU5hbWU7XG4gICAgfVxufVxuIl19