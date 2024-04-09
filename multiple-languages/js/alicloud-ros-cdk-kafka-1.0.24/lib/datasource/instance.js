"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Instance = exports.InstanceProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const kafka_generated_1 = require("./kafka.generated");
Object.defineProperty(exports, "InstanceProperty", { enumerable: true, get: function () { return kafka_generated_1.RosInstance; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::KAFKA::Instance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-instance
 */
class Instance extends ros.Resource {
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
        const rosInstance = new kafka_generated_1.RosInstance(this, id, {
            instanceId: props.instanceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrAllConfig = rosInstance.attrAllConfig;
        this.attrAllowedList = rosInstance.attrAllowedList;
        this.attrCreateTime = rosInstance.attrCreateTime;
        this.attrDeployType = rosInstance.attrDeployType;
        this.attrDiskSize = rosInstance.attrDiskSize;
        this.attrDiskType = rosInstance.attrDiskType;
        this.attrDomainEndpoint = rosInstance.attrDomainEndpoint;
        this.attrEipMax = rosInstance.attrEipMax;
        this.attrEndPoint = rosInstance.attrEndPoint;
        this.attrExpiredTime = rosInstance.attrExpiredTime;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceName = rosInstance.attrInstanceName;
        this.attrIoMax = rosInstance.attrIoMax;
        this.attrIoMaxSpec = rosInstance.attrIoMaxSpec;
        this.attrMsgRetain = rosInstance.attrMsgRetain;
        this.attrPaymentType = rosInstance.attrPaymentType;
        this.attrResourceGroupId = rosInstance.attrResourceGroupId;
        this.attrSaslDomainEndpoint = rosInstance.attrSaslDomainEndpoint;
        this.attrServiceVersion = rosInstance.attrServiceVersion;
        this.attrSpecType = rosInstance.attrSpecType;
        this.attrSslDomainEndpoint = rosInstance.attrSslDomainEndpoint;
        this.attrSslEndPoint = rosInstance.attrSslEndPoint;
        this.attrTags = rosInstance.attrTags;
        this.attrTopicNumLimit = rosInstance.attrTopicNumLimit;
        this.attrVSwitchId = rosInstance.attrVSwitchId;
        this.attrVpcId = rosInstance.attrVpcId;
        this.attrZoneId = rosInstance.attrZoneId;
    }
}
exports.Instance = Instance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsdURBQWdEO0FBRXhCLGlHQUZmLDZCQUFXLE9BRW9CO0FBY3hDOzs7O0dBSUc7QUFDSCxNQUFhLFFBQVMsU0FBUSxHQUFHLENBQUMsUUFBUTtJQTZJdEM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBb0IsRUFBRSxtQ0FBMkMsSUFBSTtRQUMvRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksNkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtTQUMvQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxDQUFDLFlBQVksQ0FBQztRQUM3QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLENBQUMsZUFBZSxDQUFDO1FBQ25ELElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLGNBQWMsQ0FBQztRQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDO1FBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUNuRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsV0FBVyxDQUFDLG1CQUFtQixDQUFDO1FBQzNELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLENBQUMsc0JBQXNCLENBQUM7UUFDakUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQyxZQUFZLENBQUM7UUFDN0MsSUFBSSxDQUFDLHFCQUFxQixHQUFHLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsZUFBZSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUM7UUFDbkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsaUJBQWlCLENBQUM7UUFDdkQsSUFBSSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBQy9DLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDN0MsQ0FBQztDQUNKO0FBekxELDRCQXlMQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0luc3RhbmNlIH0gZnJvbSAnLi9rYWZrYS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NJbnN0YW5jZSBhcyBJbnN0YW5jZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSW5zdGFuY2VgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLWthZmthLWluc3RhbmNlXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFuY2VQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OktBRktBOjpJbnN0YW5jZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NJbnN0YW5jZWBmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS1rYWZrYS1pbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgSW5zdGFuY2UgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IEluc3RhbmNlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEFsbENvbmZpZzogVGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbiBvZiB0aGUgZGVwbG95ZWQgbWVzc2FnZSBxdWV1ZSBLYWZrYSB2ZXJzaW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQWxsQ29uZmlnOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWxsb3dlZExpc3Q6IFdoaXRlIGxpc3QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBbGxvd2VkTGlzdDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IENyZWF0aW9uIHRpbWUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcmVhdGVUaW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGVwbG95VHlwZTogRGVwbG95bWVudCBtZXRob2QuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJEZXBsb3lUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGlza1NpemU6IERpc2sgc2l6ZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpc2tTaXplOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRGlza1R5cGU6IERpc2sgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRpc2tUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRG9tYWluRW5kcG9pbnQ6IFRoZSBkb21haW4gbmFtZSBhY2Nlc3MgcG9pbnQgb2YgdGhlIGRlZmF1bHQgYWNjZXNzIHBvaW50LiBUaGUgS2Fma2EgaW5zdGFuY2Ugc3VwcG9ydHMgZG9tYWluIG5hbWUgYWNjZXNzIHBvaW50cyBhbmQgSVAgYWNjZXNzIHBvaW50cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRvbWFpbkVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgRWlwTWF4OiBQZWFrIHB1YmxpYyBuZXR3b3JrIHRyYWZmaWMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFaXBNYXg6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFbmRQb2ludDogQWNjZXNzIHBvaW50LlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRW5kUG9pbnQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBFeHBpcmVkVGltZTogRXhwaXJhdGlvbiB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRXhwaXJlZFRpbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJbnN0YW5jZUlkOiBUaGUgSUQgb2YgdGhlIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlTmFtZTogTm90ZSBuYW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VOYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW9NYXg6IFBlYWsgZmxvdy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklvTWF4OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW9NYXhTcGVjOiBGbG93IHNwZWNpZmljYXRpb25zIChyZWNvbW1lbmRlZCkuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJb01heFNwZWM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNc2dSZXRhaW46IE1lc3NhZ2Ugc2F2ZSB0aW1lLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTXNnUmV0YWluOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUGF5bWVudFR5cGU6IFRoZSBwYXltZW4gdHlwZSBvZiB0aGUgcmVzb3VyY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQYXltZW50VHlwZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJlc291cmNlR3JvdXBJZDogVGhlIElEIG9mIHRoZSByZXNvdXJjZSBncm91cC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNhc2xEb21haW5FbmRwb2ludDogVGhlIGRvbWFpbiBuYW1lIGFjY2VzcyBwb2ludCBvZiB0aGUgU0FTTCBhY2Nlc3MgcG9pbnQuIFRoZSBLYWZrYSBpbnN0YW5jZSBzdXBwb3J0cyBkb21haW4gbmFtZSBhY2Nlc3MgcG9pbnRzIGFuZCBJUCBhY2Nlc3MgcG9pbnRzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2FzbERvbWFpbkVuZHBvaW50OiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU2VydmljZVZlcnNpb246IFRoZSB2ZXJzaW9uIG9mIHRoZSBLYWZrYSB2ZXJzaW9uIG9mIHRoZSBkZXBsb3llZCBNZXNzYWdlIFF1ZXVlLiBUaGUgdmFsdWUgaXMgMC4xMC4yIG9yIDIuMi4wLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU2VydmljZVZlcnNpb246IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBTcGVjVHlwZTogSW5zdGFuY2UgdHlwZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clNwZWNUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3NsRG9tYWluRW5kcG9pbnQ6IFRoZSBkb21haW4gbmFtZSBvZiB0aGUgU1NMIGFjY2VzcyBwb2ludC4gVGhlIEthZmthIGluc3RhbmNlIHN1cHBvcnRzIGRvbWFpbiBuYW1lIGFjY2VzcyBwb2ludHMgYW5kIElQIGFjY2VzcyBwb2ludHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTc2xEb21haW5FbmRwb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFNzbEVuZFBvaW50OiBFeHRlcm5hbCBhY2Nlc3MgcG9pbnQuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJTc2xFbmRQb2ludDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFRhZ3M6IFRoZSB0YWcgb2YgdGhlIGthZmthIGNvbnNvbGUsIHdoaWNoIGlzIHVzZWQgdG8gZ3JvdXAgaW5zdGFuY2UsdG9waWMsIGFuZCBjb25zdW1wdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBUb3BpY051bUxpbWl0OiBNYXhpbXVtIG51bWJlciBvZiB0b3BpYyBjcmVhdGlvbi5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRvcGljTnVtTGltaXQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IFN3aXRjaCBpZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTd2l0Y2hJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBWcGNJZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZUlkOiBUaGUgSUQgb2YgdGhlIHpvbmUgaW4gd2hpY2ggdGhlIGluc3RhbmNlIGlzIGRlcGxveWVkLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSW5zdGFuY2VQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0luc3RhbmNlID0gbmV3IFJvc0luc3RhbmNlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaW5zdGFuY2VJZDogcHJvcHMuaW5zdGFuY2VJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5hdHRyQWxsQ29uZmlnID0gcm9zSW5zdGFuY2UuYXR0ckFsbENvbmZpZztcbiAgICAgICAgdGhpcy5hdHRyQWxsb3dlZExpc3QgPSByb3NJbnN0YW5jZS5hdHRyQWxsb3dlZExpc3Q7XG4gICAgICAgIHRoaXMuYXR0ckNyZWF0ZVRpbWUgPSByb3NJbnN0YW5jZS5hdHRyQ3JlYXRlVGltZTtcbiAgICAgICAgdGhpcy5hdHRyRGVwbG95VHlwZSA9IHJvc0luc3RhbmNlLmF0dHJEZXBsb3lUeXBlO1xuICAgICAgICB0aGlzLmF0dHJEaXNrU2l6ZSA9IHJvc0luc3RhbmNlLmF0dHJEaXNrU2l6ZTtcbiAgICAgICAgdGhpcy5hdHRyRGlza1R5cGUgPSByb3NJbnN0YW5jZS5hdHRyRGlza1R5cGU7XG4gICAgICAgIHRoaXMuYXR0ckRvbWFpbkVuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0ckRvbWFpbkVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJFaXBNYXggPSByb3NJbnN0YW5jZS5hdHRyRWlwTWF4O1xuICAgICAgICB0aGlzLmF0dHJFbmRQb2ludCA9IHJvc0luc3RhbmNlLmF0dHJFbmRQb2ludDtcbiAgICAgICAgdGhpcy5hdHRyRXhwaXJlZFRpbWUgPSByb3NJbnN0YW5jZS5hdHRyRXhwaXJlZFRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NJbnN0YW5jZS5hdHRySW5zdGFuY2VJZDtcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VOYW1lID0gcm9zSW5zdGFuY2UuYXR0ckluc3RhbmNlTmFtZTtcbiAgICAgICAgdGhpcy5hdHRySW9NYXggPSByb3NJbnN0YW5jZS5hdHRySW9NYXg7XG4gICAgICAgIHRoaXMuYXR0cklvTWF4U3BlYyA9IHJvc0luc3RhbmNlLmF0dHJJb01heFNwZWM7XG4gICAgICAgIHRoaXMuYXR0ck1zZ1JldGFpbiA9IHJvc0luc3RhbmNlLmF0dHJNc2dSZXRhaW47XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zSW5zdGFuY2UuYXR0clBheW1lbnRUeXBlO1xuICAgICAgICB0aGlzLmF0dHJSZXNvdXJjZUdyb3VwSWQgPSByb3NJbnN0YW5jZS5hdHRyUmVzb3VyY2VHcm91cElkO1xuICAgICAgICB0aGlzLmF0dHJTYXNsRG9tYWluRW5kcG9pbnQgPSByb3NJbnN0YW5jZS5hdHRyU2FzbERvbWFpbkVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJTZXJ2aWNlVmVyc2lvbiA9IHJvc0luc3RhbmNlLmF0dHJTZXJ2aWNlVmVyc2lvbjtcbiAgICAgICAgdGhpcy5hdHRyU3BlY1R5cGUgPSByb3NJbnN0YW5jZS5hdHRyU3BlY1R5cGU7XG4gICAgICAgIHRoaXMuYXR0clNzbERvbWFpbkVuZHBvaW50ID0gcm9zSW5zdGFuY2UuYXR0clNzbERvbWFpbkVuZHBvaW50O1xuICAgICAgICB0aGlzLmF0dHJTc2xFbmRQb2ludCA9IHJvc0luc3RhbmNlLmF0dHJTc2xFbmRQb2ludDtcbiAgICAgICAgdGhpcy5hdHRyVGFncyA9IHJvc0luc3RhbmNlLmF0dHJUYWdzO1xuICAgICAgICB0aGlzLmF0dHJUb3BpY051bUxpbWl0ID0gcm9zSW5zdGFuY2UuYXR0clRvcGljTnVtTGltaXQ7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZCA9IHJvc0luc3RhbmNlLmF0dHJWU3dpdGNoSWQ7XG4gICAgICAgIHRoaXMuYXR0clZwY0lkID0gcm9zSW5zdGFuY2UuYXR0clZwY0lkO1xuICAgICAgICB0aGlzLmF0dHJab25lSWQgPSByb3NJbnN0YW5jZS5hdHRyWm9uZUlkO1xuICAgIH1cbn1cbiJdfQ==