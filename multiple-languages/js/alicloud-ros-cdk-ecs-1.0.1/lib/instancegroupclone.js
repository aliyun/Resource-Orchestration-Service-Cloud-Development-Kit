"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstanceGroupClone = exports.InstanceGroupCloneProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ecs_generated_1 = require("./ecs.generated");
Object.defineProperty(exports, "InstanceGroupCloneProperty", { enumerable: true, get: function () { return ecs_generated_1.RosInstanceGroupClone; } });
/**
 * A ROS resource type:  `ALIYUN::ECS::InstanceGroupClone`
 */
class InstanceGroupClone extends ros.Resource {
    /**
     * Create a new `ALIYUN::ECS::InstanceGroupClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosInstanceGroupClone = new ecs_generated_1.RosInstanceGroupClone(this, id, {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            diskMappings: props.diskMappings,
            systemDiskDescription: props.systemDiskDescription,
            autoRenew: props.autoRenew ? props.autoRenew : 'False',
            ipv6Addresses: props.ipv6Addresses,
            sourceInstanceId: props.sourceInstanceId,
            maxAmount: props.maxAmount,
            systemDiskAutoSnapshotPolicyId: props.systemDiskAutoSnapshotPolicyId,
            ramRoleName: props.ramRoleName,
            ipv6AddressCount: props.ipv6AddressCount,
            imageId: props.imageId,
            spotPriceLimit: props.spotPriceLimit,
            systemDiskDiskName: props.systemDiskDiskName,
            tags: props.tags,
            spotStrategy: props.spotStrategy,
            passwordInherit: props.passwordInherit,
            password: props.password,
            autoRenewPeriod: props.autoRenewPeriod ? props.autoRenewPeriod : 1,
            backendServerWeight: props.backendServerWeight ? props.backendServerWeight : 100,
            keyPairName: props.keyPairName,
            launchTemplateName: props.launchTemplateName,
            zoneId: props.zoneId,
            hpcClusterId: props.hpcClusterId,
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            launchTemplateId: props.launchTemplateId,
            deletionProtection: props.deletionProtection,
            securityGroupIds: props.securityGroupIds,
            loadBalancerIdToAttach: props.loadBalancerIdToAttach,
            systemDiskCategory: props.systemDiskCategory ? props.systemDiskCategory : 'cloud_efficiency',
            eniMappings: props.eniMappings,
            instanceName: props.instanceName,
            deploymentSetId: props.deploymentSetId,
            internetMaxBandwidthOut: props.internetMaxBandwidthOut,
            internetMaxBandwidthIn: props.internetMaxBandwidthIn ? props.internetMaxBandwidthIn : 200,
            launchTemplateVersion: props.launchTemplateVersion,
            periodUnit: props.periodUnit ? props.periodUnit : 'Month',
            autoReleaseTime: props.autoReleaseTime,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstanceGroupClone;
        this.attrHostNames = rosInstanceGroupClone.attrHostNames;
        this.attrInnerIps = rosInstanceGroupClone.attrInnerIps;
        this.attrInstanceIds = rosInstanceGroupClone.attrInstanceIds;
        this.attrOrderId = rosInstanceGroupClone.attrOrderId;
        this.attrPrivateIps = rosInstanceGroupClone.attrPrivateIps;
        this.attrPublicIps = rosInstanceGroupClone.attrPublicIps;
        this.attrZoneIds = rosInstanceGroupClone.attrZoneIds;
    }
}
exports.InstanceGroupClone = InstanceGroupClone;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zdGFuY2Vncm91cGNsb25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zdGFuY2Vncm91cGNsb25lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBd0Q7QUFFdEIsMkdBRnpCLHFDQUFxQixPQUU4QjtBQTRONUQ7O0dBRUc7QUFDSCxNQUFhLGtCQUFtQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMENoRDs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQThCLEVBQUUsbUNBQTJDLElBQUk7UUFDekgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLHFCQUFxQixHQUFHLElBQUkscUNBQXFCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMvRCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxxQkFBcUIsRUFBRSxLQUFLLENBQUMscUJBQXFCO1lBQ2xELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPO1lBQ3RELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQiw4QkFBOEIsRUFBRSxLQUFLLENBQUMsOEJBQThCO1lBQ3BFLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO1lBQ3hDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7WUFDcEMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQjtZQUM1QyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7WUFDaEIsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1lBQ2hDLGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7WUFDeEIsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDaEYsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxrQkFBa0I7WUFDNUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLGdCQUFnQjtZQUN4QyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCO1lBQzVDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQjtZQUNwRCxrQkFBa0IsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsa0JBQWtCO1lBQzVGLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztZQUM5QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyx1QkFBdUI7WUFDdEQsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDekYscUJBQXFCLEVBQUUsS0FBSyxDQUFDLHFCQUFxQjtZQUNsRCxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTztZQUN6RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7U0FDekMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFlBQVksQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUNyRCxJQUFJLENBQUMsY0FBYyxHQUFHLHFCQUFxQixDQUFDLGNBQWMsQ0FBQztRQUMzRCxJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsV0FBVyxHQUFHLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztJQUN6RCxDQUFDO0NBQ0o7QUF0R0QsZ0RBc0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSW5zdGFuY2VHcm91cENsb25lIH0gZnJvbSAnLi9lY3MuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSW5zdGFuY2VHcm91cENsb25lIGFzIEluc3RhbmNlR3JvdXBDbG9uZVByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpFQ1M6Okluc3RhbmNlR3JvdXBDbG9uZWBcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbnN0YW5jZUdyb3VwQ2xvbmVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBtYXhBbW91bnQ6IE1heCBudW1iZXIgb2YgaW5zdGFuY2VzIHRvIGNyZWF0ZSwgc2hvdWxkIGJlIGJpZ2dlciB0aGFuICdNaW5BbW91bnQnIGFuZCBzbWFsbGVyIHRoYW4gMTAwMC5cbiAgICAgKi9cbiAgICByZWFkb25seSBtYXhBbW91bnQ6IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNvdXJjZUluc3RhbmNlSWQ6IFNvdXJjZSBlY3MgaW5zdGFuY2UgdXNlZCB0byBjb3B5IHByb3BlcnRpZXMgdG8gY2xvbmUgbmV3IGVjcyBpbnN0YW5jZS4gSXQgd2lsbCBjb3B5IHRoZSBJbnN0YW5jZVR5cGUsIEltYWdlSWQsIEludGVybmV0Q2hhcmdlVHlwZSwgSW50ZXJuZXRNYXhCYW5kd2lkdGhJbiwgSW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQgYW5kIHRoZSBzeXN0ZW0gZGlzayBhbmQgZGF0YSBkaXNrIGNvbmZpZ3VyYXRpb25zLiBJZiB0aGUgaW5zdGFuY2UgbmV0d29yayBpcyBWUEMsIGl0IHdpbGwgYWxzbyBjbG9uZSB0aGUgcmVsYXRpdmUgcHJvcGVydGllcy4gSWYgc3BlY2lmaWVkIGluc3RhbmNlIHdpdGggbW9yZSB0aGFuIG9uZSBzZWN1cml0eSBncm91cCwgaXQgd2lsbCB1c2UgdGhlIGZpcnN0IHNlY3VyaXR5IGdyb3VwIHRvIGNyZWF0ZSBpbnN0YW5jZS4geW91IGNhbiBhbHNvIHNwZWNpZnkgdGhlIFNlY3VyaXR5R3JvdXBJZCB0byBvdmVycmlkZSBpdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzb3VyY2VJbnN0YW5jZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVsZWFzZVRpbWU6IEF1dG8gcmVsZWFzZSB0aW1lIGZvciBjcmVhdGVkIGluc3RhbmNlLCBGb2xsb3cgSVNPODYwMSBzdGFuZGFyZCB1c2luZyBVVEMgdGltZS4gZm9ybWF0IGlzICd5eXl5LU1NLWRkVEhIOm1tOnNzWicuIE5vdCBiaWdnZXIgdGhhbiAzIHllYXJzIGZyb20gdGhpcyBkYXkgb253YXJkc1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZWxlYXNlVGltZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGF1dG9SZW5ldzogV2hldGhlciByZW5ldyB0aGUgZmVlIGF1dG9tYXRpY2FsbHk/IFdoZW4gdGhlIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUHJlUGFpZCwgaXQgd2lsbCB0YWtlIGVmZmVjdC4gUmFuZ2Ugb2YgdmFsdWU6VHJ1ZTogYXV0b21hdGljIHJlbmV3YWwuRmFsc2U6IG5vIGF1dG9tYXRpYyByZW5ld2FsLiBEZWZhdWx0IHZhbHVlIGlzIEZhbHNlLk9sZCBpbnN0YW5jZXMgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhdXRvUmVuZXc/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXdQZXJpb2Q6IFRoZSB0aW1lIHBlcmlvZCBvZiBhdXRvIHJlbmV3LiBXaGVuIHRoZSBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFByZVBhaWQsIGl0IHdpbGwgdGFrZSBlZmZlY3QuSXQgY291bGQgYmUgMSwgMiwgMywgNiwgMTIuIERlZmF1bHQgdmFsdWUgaXMgMS5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgYXV0b1JlbmV3UGVyaW9kPzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYmFja2VuZFNlcnZlcldlaWdodDogVGhlIHdlaWdodCBvZiBiYWNrZW5kIHNlcnZlciBvZiBsb2FkIGJhbGFuY2VyLiBGcm9tIDAgdG8gMTAwLCAwIG1lYW5zIG9mZmxpbmUuIERlZmF1bHQgaXMgMTAwLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGJhY2tlbmRTZXJ2ZXJXZWlnaHQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvblByb3RlY3Rpb246IFdoZXRoZXIgYW4gaW5zdGFuY2UgY2FuIGJlIHJlbGVhc2VkIG1hbnVhbGx5IHRocm91Z2ggdGhlIGNvbnNvbGUgb3IgQVBJLCBkZWxldGlvbiBwcm90ZWN0aW9uIG9ubHkgc3VwcG9ydCBwb3N0UGFpZCBpbnN0YW5jZVxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlbGV0aW9uUHJvdGVjdGlvbj86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZXBsb3ltZW50U2V0SWQ6IERlcGxveW1lbnQgc2V0IElELiBUaGUgY2hhbmdlIG9mIHRoZSBwcm9wZXJ0eSBkb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlcGxveW1lbnRTZXRJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgaW5zdGFuY2UsIFsyLCAyNTZdIGNoYXJhY3RlcnMuIERvIG5vdCBmaWxsIG9yIGVtcHR5LCB0aGUgZGVmYXVsdCBpcyBlbXB0eS4gT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGRlc2NyaXB0aW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgZGlza01hcHBpbmdzOiBEaXNrIG1hcHBpbmdzIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMTYgZGlza3MuXG4gICAgICogSWYgdGhlIGltYWdlIGNvbnRhaW5zIGEgZGF0YSBkaXNrLCB5b3UgY2FuIHNwZWNpZnkgb3RoZXIgcGFyYW1ldGVycyBvZiB0aGUgZGF0YSBkaXNrIHZpYSB0aGUgc2FtZSB2YWx1ZSBvZiBwYXJhbWV0ZXIgXCJEZXZpY2VcIi4gSWYgcGFyYW1ldGVyIFwiQ2F0ZWdvcnlcIiBpcyBub3Qgc3BlY2lmaWVkLCBpdCB3aWxsIGJlIGNsb3VkX2VmZmljaWVuY3kgaW5zdGVhZCBvZiBcIkNhdGVnb3J5XCIgb2YgZGF0YSBkaXNrIGluIHRoZSBpbWFnZS5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGlza01hcHBpbmdzPzogQXJyYXk8Um9zSW5zdGFuY2VHcm91cENsb25lLkRpc2tNYXBwaW5nc1Byb3BlcnR5IHwgcm9zLklSZXNvbHZhYmxlPiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGVuaU1hcHBpbmdzOiBOZXR3b3JrSW50ZXJmYWNlIHRvIGF0dGFjaCB0byBpbnN0YW5jZS4gTWF4IHN1cHBvcnQgMSBFTkkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgZW5pTWFwcGluZ3M/OiBBcnJheTxSb3NJbnN0YW5jZUdyb3VwQ2xvbmUuRW5pTWFwcGluZ3NQcm9wZXJ0eSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBocGNDbHVzdGVySWQ6IFRoZSBIUEMgY2x1c3RlciBJRCB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy5UaGUgY2hhbmdlIG9mIHRoZSBwcm9wZXJ0eSBkb2VzIG5vdCBhZmZlY3QgZXhpc3RpbmcgaW5zdGFuY2VzLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhwY0NsdXN0ZXJJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlSWQ6IEltYWdlIElEIHRvIGNyZWF0ZSBlY3MgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW1hZ2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlTmFtZTogRGlzcGxheSBuYW1lIG9mIHRoZSBpbnN0YW5jZSwgWzIsIDEyOF0gRW5nbGlzaCBvciBDaGluZXNlIGNoYXJhY3RlcnMsIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBvciBDaGluZXNlIGluIHNpemUsIGNhbiBjb250YWluIG51bWJlcnMsICdfJyBvciAnLicsICctJy4gXG4gICAgICogU3VwcG9ydCB0byB1c2UgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBzZXQgdGhlIGRpZmZlcmVudCBpbnN0YW5jZSBuYW1lIGZvciBlYWNoIEVDUyBpbnN0YW5jZS4gSW5zdGFuY2VOYW1lIGNvdWxkIGJlIHNwZWNpZmllZCBhcyAnbmFtZV9wcmVmaXhbYmVnaW5fbnVtYmVyLGJpdHNdbmFtZV9zdWZmaXgnLCBzdWNoIGFzICd0ZXN0aW5zdGFuY2VbMTIzLDRddGFpbCcuIElmIHlvdSBjcmVhdGVzIDMgaW5zdGFuY2VzIHdpdGggdGhlIGluc3RhbmNlIG5hbWUgJ3Rlc3RpbnN0YW5jZVsxMjMsNF10YWlsJywgYWxsIHRoZSBpbnN0YW5jZXMnIG5hbWVzIGFyZSB0ZXN0aW5zdGFuY2UwMTIzdGFpbCwgdGVzdGluc3RhbmNlMDEyNHRhaWwsIHRlc3RpbnN0YW5jZTAxMjV0YWlsLiBcbiAgICAgKiBUaGUgJ25hbWVfcHJlZml4W2JlZ2luX251bWJlcixiaXRzXW5hbWVfc3VmZml4JyBzaG91bGQgZm9sbG93IHRob3NlIHJ1bGVzOiBcbiAgICAgKiAxLiAnbmFtZV9wcmVmaXgnIGlzIHJlcXVpcmVkLiBcbiAgICAgKiAyLiAnbmFtZV9zdWZmaXgnIGlzIG9wdGlvbmFsLiBcbiAgICAgKiAzLiBUaGUgbmFtZSByZWd1bGFyIGV4cHJlc3Npb24gY2FuJ3QgaW5jbHVkZSBhbnkgc3BhY2VzLiBcbiAgICAgKiA0LiBUaGUgJ2JpdHMnIG11c3QgYmUgaW4gcmFuZ2UgWzEsIDZdLiBcbiAgICAgKiA1LiBUaGUgJ2JlZ2luX251bWJlcicgbXVzdCBiZSBpbiByYW5nZSBbMCwgOTk5OTk5XS4gXG4gICAgICogNi4gWW91IGNvdWxkIG9ubHkgc3BlY2lmeSAnYmVnaW5fbnVtYmVyJy4gVGhlICdiaXRzJyB3aWxsIGJlIHNldCBhcyA2IGJ5IGRlZmF1bHQuIFxuICAgICAqIDcuIFlvdSBhbHNvIGNvdWxkIG9ubHkgc3BlY2lmeSB0aGUgW10gb3IgWyxdLiBUaGUgJ2JlZ2luX251bWJlcicgd2lsbCBiZSBzZXQgYXMgMCBieSBkZWZhdWx0LCB0aGUgJ2JpdHMnIHdpbGwgYmUgc2V0IGFzIDYgYnkgZGVmYXVsdC4gXG4gICAgICogOC4gSWYgdGhlIGJpdHMgb2YgJ2JlZ2luX251bWJlcicgaXMgbGVzcyB0aGFuIHRoZSAnYml0cycgeW91IHNwZWNpZmllZCwgbGlrZSBbMTIzNCwxXSwgdGhlICdiaXRzJyB3aWxsIGJlIHNldCBhcyA2IGJ5IGRlZmF1bHQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhJbjogTWF4IGludGVybmV0IG91dCBiYW5kIHdpZHRoIHNldHRpbmcsIHVuaXQgaW4gTWJwcyhNZWdhIGJpdCBwZXIgc2Vjb25kKS4gVGhlIHJhbmdlIGlzIFsxLDIwMF0sIGRlZmF1bHQgaXMgMjAwIE1icHMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhJbj86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGludGVybmV0TWF4QmFuZHdpZHRoT3V0OiBTZXQgaW50ZXJuZXQgb3V0cHV0IGJhbmR3aWR0aCBvZiBpbnN0YW5jZS4gVW5pdCBpcyBNYnBzKE1lZ2EgYml0IHBlciBzZWNvbmQpLiBSYW5nZSBpcyBbMCwyMDBdLiBEZWZhdWx0IGlzIDEuV2hpbGUgdGhlIHByb3BlcnR5IGlzIG5vdCAwLCBwdWJsaWMgaXAgd2lsbCBiZSBhc3NpZ25lZCBmb3IgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBpcHY2QWRkcmVzc0NvdW50OiBTcGVjaWZpZXMgdGhlIG51bWJlciBvZiByYW5kb21seSBnZW5lcmF0ZWQgSVB2NiBhZGRyZXNzZXMgZm9yIHRoZSBlbGFzdGljIE5JQy5cbiAgICAgKiBOb3RlIFlvdSBjYW5ub3Qgc3BlY2lmeSB0aGUgcGFyYW1ldGVycyBJcHY2QWRkcmVzc2VzIGFuZCBJcHY2QWRkcmVzc0NvdW50IGF0IHRoZSBzYW1lIHRpbWUuXG4gICAgICogVGhlIGNoYW5nZSBvZiB0aGUgcHJvcGVydHkgZG9lcyBub3QgYWZmZWN0IGV4aXN0aW5nIGluc3RhbmNlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHY2QWRkcmVzc0NvdW50PzogbnVtYmVyIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXB2NkFkZHJlc3NlczogU3BlY2lmeSBvbmUgb3IgbW9yZSBJUHY2IGFkZHJlc3NlcyBmb3IgdGhlIGVsYXN0aWMgTklDLiBDdXJyZW50bHksIHRoZSBtYXhpbXVtIGxpc3Qgc2l6ZSBpcyAxLiBFeGFtcGxlIHZhbHVlOiAyMDAxOmRiODoxMjM0OjFhMDA6OioqKiAuXG4gICAgICogTm90ZSBZb3UgY2Fubm90IHNwZWNpZnkgdGhlIHBhcmFtZXRlcnMgSXB2NkFkZHJlc3NlcyBhbmQgSXB2NkFkZHJlc3NDb3VudCBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqIFRoZSBjaGFuZ2Ugb2YgdGhlIHByb3BlcnR5IGRvZXMgbm90IGFmZmVjdCBleGlzdGluZyBpbnN0YW5jZXMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXB2NkFkZHJlc3Nlcz86IEFycmF5PGFueSB8IHJvcy5JUmVzb2x2YWJsZT4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBrZXlQYWlyTmFtZTogU1NIIGtleSBwYWlyIG5hbWUuT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGtleVBhaXJOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbGF1bmNoVGVtcGxhdGVJZDogSUQgb2YgbGF1bmNoIHRlbXBsYXRlLiBMYXVuY2ggdGVtcGxhdGUgaWQgb3IgbmFtZSBtdXN0IGJlIHNwZWNpZmllZCB0byB1c2UgbGF1bmNoIHRlbXBsYXRlXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGxhdW5jaFRlbXBsYXRlTmFtZTogTmFtZSBvZiBsYXVuY2ggdGVtcGxhdGUuIExhdW5jaCB0ZW1wbGF0ZSBpZCBvciBuYW1lIG11c3QgYmUgc3BlY2lmaWVkIHRvIHVzZSBsYXVuY2ggdGVtcGxhdGVcbiAgICAgKi9cbiAgICByZWFkb25seSBsYXVuY2hUZW1wbGF0ZU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBsYXVuY2hUZW1wbGF0ZVZlcnNpb246IFZlcnNpb24gb2YgbGF1bmNoIHRlbXBsYXRlLiBEZWZhdWx0IHZlcnNpb24gaXMgdXNlZCBpZiB2ZXJzaW9uIGlzIG5vdCBzcGVjaWZpZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbGF1bmNoVGVtcGxhdGVWZXJzaW9uPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbG9hZEJhbGFuY2VySWRUb0F0dGFjaDogQWZ0ZXIgdGhlIGluc3RhbmNlIGlzIGNyZWF0ZWQuIEF1dG9tYXRpYyBhdHRhY2ggaXQgdG8gdGhlIGxvYWQgYmFsYW5jZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbG9hZEJhbGFuY2VySWRUb0F0dGFjaD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHBhc3N3b3JkOiBQYXNzd29yZCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZS4gTXVzdCBjb250YWluIGF0IGxlYXN0IDMgdHlwZXMgb2Ygc3BlY2lhbCBjaGFyYWN0ZXIsIGxvd2VyIGNoYXJhY3RlciwgdXBwZXIgY2hhcmFjdGVyLCBudW1iZXIuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGFzc3dvcmQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXNzd29yZEluaGVyaXQ6IFNwZWNpZmllcyB3aGV0aGVyIHRvIHVzZSB0aGUgcGFzc3dvcmQgcHJlc2V0IGluIHRoZSBpbWFnZS4gVG8gdXNlIHRoZSBQYXNzd29yZEluaGVyaXQgcGFyYW1ldGVyLCB0aGUgUGFzc3dvcmQgcGFyYW1ldGVyIG11c3QgYmUgZW1wdHkgYW5kIHlvdSBtdXN0IG1ha2Ugc3VyZSB0aGF0IHRoZSBzZWxlY3RlZCBpbWFnZSBoYXMgYSBwYXNzd29yZCBjb25maWd1cmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBhc3N3b3JkSW5oZXJpdD86IGJvb2xlYW4gfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2Q6IFByZXBhaWQgdGltZSBwZXJpb2QuIFVuaXQgaXMgbW9udGgsIGl0IGNvdWxkIGJlIGZyb20gMSB0byA5IG9yIDEyLCAyNCwgMzYsIDQ4LCA2MC4gRGVmYXVsdCB2YWx1ZSBpcyAxLk9sZCBpbnN0YW5jZXMgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwZXJpb2Q/OiBudW1iZXIgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwZXJpb2RVbml0OiBVbml0IG9mIHByZXBhaWQgdGltZSBwZXJpb2QsIGl0IGNvdWxkIGJlIFdlZWsvTW9udGguIERlZmF1bHQgdmFsdWUgaXMgTW9udGguT2xkIGluc3RhbmNlcyB3aWxsIG5vdCBiZSBjaGFuZ2VkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZFVuaXQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByYW1Sb2xlTmFtZTogSW5zdGFuY2UgUkFNIHJvbGUgbmFtZS4gVGhlIG5hbWUgaXMgcHJvdmlkZWQgYW5kIG1haW50YWluZWQgYnkgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgYW5kIGNhbiBiZSBxdWVyaWVkIHVzaW5nIExpc3RSb2xlcy4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSBSQU0gQVBJIENyZWF0ZVJvbGUgYW5kIExpc3RSb2xlcy5cbiAgICAgKi9cbiAgICByZWFkb25seSByYW1Sb2xlTmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHJlc291cmNlR3JvdXBJZDogUmVzb3VyY2UgZ3JvdXAgaWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgcmVzb3VyY2VHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkOiBTZWN1cml0eSBncm91cCB0byBjcmVhdGUgZWNzIGluc3RhbmNlLiBGb3IgY2xhc3NpYyBpbnN0YW5jZSBuZWVkIHRoZSBzZWN1cml0eSBncm91cCBub3QgYmVsb25nIHRvIFZQQywgZm9yIFZQQyBpbnN0YW5jZSwgcGxlYXNlIG1ha2Ugc3VyZSB0aGUgc2VjdXJpdHkgZ3JvdXAgYmVsb25nIHRvIHNwZWNpZmllZCBWUEMuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc2VjdXJpdHlHcm91cElkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc2VjdXJpdHlHcm91cElkczogVGhlIElEcyBvZiBzZWN1cml0eSBncm91cHMgTiB0byB3aGljaCB0aGUgaW5zdGFuY2UgYmVsb25ncy4gVGhlIHZhbGlkIHZhbHVlcyBvZiBOIGFyZSBiYXNlZCBvbiB0aGUgbWF4aW11bSBudW1iZXIgb2Ygc2VjdXJpdHkgZ3JvdXBzIHRvIHdoaWNoIGFuIGluc3RhbmNlIGNhbiBiZWxvbmcuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgU2VjdXJpdHkgZ3JvdXAgbGltaXRzLk5vdGU6IFlvdSBjYW5ub3Qgc3BlY2lmeSBib3RoIFNlY3VyaXR5R3JvdXBJZCBhbmQgU2VjdXJpdHlHcm91cElkcyBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNlY3VyaXR5R3JvdXBJZHM/OiBBcnJheTxhbnkgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3BvdFByaWNlTGltaXQ6IFRoZSBob3VybHkgcHJpY2UgdGhyZXNob2xkIG9mIGEgaW5zdGFuY2UsIGFuZCBpdCB0YWtlcyBlZmZlY3Qgb25seSB3aGVuIHBhcmFtZXRlciBJbnN0YW5jZUNoYXJnZVR5cGUgaXMgUG9zdFBhaWQuIFRocmVlIGRlY2ltYWxzIGlzIGFsbG93ZWQgYXQgbW9zdC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzcG90UHJpY2VMaW1pdD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHNwb3RTdHJhdGVneTogVGhlIHNwb3Qgc3RyYXRlZ3kgb2YgYSBQYXktQXMtWW91LUdvIGluc3RhbmNlLCBhbmQgaXQgdGFrZXMgZWZmZWN0IG9ubHkgd2hlbiBwYXJhbWV0ZXIgSW5zdGFuY2VDaGFyZ2VUeXBlIGlzIFBvc3RQYWlkLiBWYWx1ZSByYW5nZTogXCJOb1Nwb3Q6IEEgcmVndWxhciBQYXktQXMtWW91LUdvIGluc3RhbmNlXCIsIFwiU3BvdFdpdGhQcmljZUxpbWl0OiBBIHByaWNlIHRocmVzaG9sZCBmb3IgYSBzcG90IGluc3RhbmNlLCBcIlwiU3BvdEFzUHJpY2VHbzogQSBwcmljZSB0aGF0IGlzIGJhc2VkIG9uIHRoZSBoaWdoZXN0IFBheS1Bcy1Zb3UtR28gaW5zdGFuY2UuIFwiRGVmYXVsdCB2YWx1ZTogTm9TcG90LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHNwb3RTdHJhdGVneT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZDogQXV0byBzbmFwc2hvdCBwb2xpY3kgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0F1dG9TbmFwc2hvdFBvbGljeUlkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0NhdGVnb3J5OiBDYXRlZ29yeSBvZiBzeXN0ZW0gZGlzay4gRGVmYXVsdCBpcyBjbG91ZF9lZmZpY2llbmN5LiBzdXBwb3J0IGNsb3VkfGNsb3VkX2VmZmljaWVuY3l8Y2xvdWRfc3NkfGNsb3VkX2Vzc2R8ZXBoZW1lcmFsX3NzZC5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0NhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgc3lzdGVtRGlza0Rlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiBjcmVhdGVkIHN5c3RlbSBkaXNrLk9sZCBpbnN0YW5jZXMgd2lsbCBub3QgYmUgY2hhbmdlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBzeXN0ZW1EaXNrRGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBzeXN0ZW1EaXNrRGlza05hbWU6IE5hbWUgb2YgY3JlYXRlZCBzeXN0ZW0gZGlzay5PbGQgaW5zdGFuY2VzIHdpbGwgbm90IGJlIGNoYW5nZWQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgc3lzdGVtRGlza0Rpc2tOYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgdGFnczogVGFncyB0byBhdHRhY2ggdG8gaW5zdGFuY2UuIE1heCBzdXBwb3J0IDIwIHRhZ3MgdG8gYWRkIGR1cmluZyBjcmVhdGUgaW5zdGFuY2UuIEVhY2ggdGFnIHdpdGggdHdvIHByb3BlcnRpZXMgS2V5IGFuZCBWYWx1ZSwgYW5kIEtleSBpcyByZXF1aXJlZC5cbiAgICAgKi9cbiAgICByZWFkb25seSB0YWdzPzogUm9zSW5zdGFuY2VHcm91cENsb25lLlRhZ3NQcm9wZXJ0eVtdO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBUaGUgSUQgb2YgdGhlIHpvbmUgdG8gd2hpY2ggdGhlIGluc3RhbmNlIGJlbG9uZ3MuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBcbiAgICAgKiBjYWxsIHRoZSBEZXNjcmliZVpvbmVzIG9wZXJhdGlvbiB0byBxdWVyeSB0aGUgbW9zdCByZWNlbnQgem9uZSBsaXN0LiBcbiAgICAgKiBEZWZhdWx0IHZhbHVlIGlzIGVtcHR5LCB3aGljaCBtZWFucyByYW5kb20gc2VsZWN0aW9uLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHpvbmVJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6RUNTOjpJbnN0YW5jZUdyb3VwQ2xvbmVgXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnN0YW5jZUdyb3VwQ2xvbmUgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3ROYW1lczogSG9zdCBuYW1lcyBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdE5hbWVzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5uZXJJcHM6IElubmVyIElQIGFkZHJlc3MgbGlzdCBvZiB0aGUgc3BlY2lmaWVkIGluc3RhbmNlLiBPbmx5IGZvciBjbGFzc2ljYWwgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJbm5lcklwczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEluc3RhbmNlSWRzOiBUaGUgaW5zdGFuY2UgaWQgbGlzdCBvZiBjcmVhdGVkIGVjcyBpbnN0YW5jZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBPcmRlcklkOiBUaGUgb3JkZXIgaWQgbGlzdCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyT3JkZXJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFByaXZhdGVJcHM6IFByaXZhdGUgSVAgYWRkcmVzcyBsaXN0IG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLiBPbmx5IGZvciBWUEMgaW5zdGFuY2UuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJQcml2YXRlSXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUHVibGljSXBzOiBQdWJsaWMgSVAgYWRkcmVzcyBsaXN0IG9mIGNyZWF0ZWQgZWNzIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUHVibGljSXBzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZUlkczogWm9uZSBpZCBvZiBjcmVhdGVkIGluc3RhbmNlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyWm9uZUlkczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IGBBTElZVU46OkVDUzo6SW5zdGFuY2VHcm91cENsb25lYC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBJbnN0YW5jZUdyb3VwQ2xvbmVQcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBjb25zdCByb3NJbnN0YW5jZUdyb3VwQ2xvbmUgPSBuZXcgUm9zSW5zdGFuY2VHcm91cENsb25lKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcmVzb3VyY2VHcm91cElkOiBwcm9wcy5yZXNvdXJjZUdyb3VwSWQsXG4gICAgICAgICAgICBkaXNrTWFwcGluZ3M6IHByb3BzLmRpc2tNYXBwaW5ncyxcbiAgICAgICAgICAgIHN5c3RlbURpc2tEZXNjcmlwdGlvbjogcHJvcHMuc3lzdGVtRGlza0Rlc2NyaXB0aW9uLFxuICAgICAgICAgICAgYXV0b1JlbmV3OiBwcm9wcy5hdXRvUmVuZXcgPyBwcm9wcy5hdXRvUmVuZXcgOiAnRmFsc2UnLFxuICAgICAgICAgICAgaXB2NkFkZHJlc3NlczogcHJvcHMuaXB2NkFkZHJlc3NlcyxcbiAgICAgICAgICAgIHNvdXJjZUluc3RhbmNlSWQ6IHByb3BzLnNvdXJjZUluc3RhbmNlSWQsXG4gICAgICAgICAgICBtYXhBbW91bnQ6IHByb3BzLm1heEFtb3VudCxcbiAgICAgICAgICAgIHN5c3RlbURpc2tBdXRvU25hcHNob3RQb2xpY3lJZDogcHJvcHMuc3lzdGVtRGlza0F1dG9TbmFwc2hvdFBvbGljeUlkLFxuICAgICAgICAgICAgcmFtUm9sZU5hbWU6IHByb3BzLnJhbVJvbGVOYW1lLFxuICAgICAgICAgICAgaXB2NkFkZHJlc3NDb3VudDogcHJvcHMuaXB2NkFkZHJlc3NDb3VudCxcbiAgICAgICAgICAgIGltYWdlSWQ6IHByb3BzLmltYWdlSWQsXG4gICAgICAgICAgICBzcG90UHJpY2VMaW1pdDogcHJvcHMuc3BvdFByaWNlTGltaXQsXG4gICAgICAgICAgICBzeXN0ZW1EaXNrRGlza05hbWU6IHByb3BzLnN5c3RlbURpc2tEaXNrTmFtZSxcbiAgICAgICAgICAgIHRhZ3M6IHByb3BzLnRhZ3MsXG4gICAgICAgICAgICBzcG90U3RyYXRlZ3k6IHByb3BzLnNwb3RTdHJhdGVneSxcbiAgICAgICAgICAgIHBhc3N3b3JkSW5oZXJpdDogcHJvcHMucGFzc3dvcmRJbmhlcml0LFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHByb3BzLnBhc3N3b3JkLFxuICAgICAgICAgICAgYXV0b1JlbmV3UGVyaW9kOiBwcm9wcy5hdXRvUmVuZXdQZXJpb2QgPyBwcm9wcy5hdXRvUmVuZXdQZXJpb2QgOiAxLFxuICAgICAgICAgICAgYmFja2VuZFNlcnZlcldlaWdodDogcHJvcHMuYmFja2VuZFNlcnZlcldlaWdodCA/IHByb3BzLmJhY2tlbmRTZXJ2ZXJXZWlnaHQgOiAxMDAsXG4gICAgICAgICAgICBrZXlQYWlyTmFtZTogcHJvcHMua2V5UGFpck5hbWUsXG4gICAgICAgICAgICBsYXVuY2hUZW1wbGF0ZU5hbWU6IHByb3BzLmxhdW5jaFRlbXBsYXRlTmFtZSxcbiAgICAgICAgICAgIHpvbmVJZDogcHJvcHMuem9uZUlkLFxuICAgICAgICAgICAgaHBjQ2x1c3RlcklkOiBwcm9wcy5ocGNDbHVzdGVySWQsXG4gICAgICAgICAgICBzZWN1cml0eUdyb3VwSWQ6IHByb3BzLnNlY3VyaXR5R3JvdXBJZCxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kID8gcHJvcHMucGVyaW9kIDogMSxcbiAgICAgICAgICAgIGxhdW5jaFRlbXBsYXRlSWQ6IHByb3BzLmxhdW5jaFRlbXBsYXRlSWQsXG4gICAgICAgICAgICBkZWxldGlvblByb3RlY3Rpb246IHByb3BzLmRlbGV0aW9uUHJvdGVjdGlvbixcbiAgICAgICAgICAgIHNlY3VyaXR5R3JvdXBJZHM6IHByb3BzLnNlY3VyaXR5R3JvdXBJZHMsXG4gICAgICAgICAgICBsb2FkQmFsYW5jZXJJZFRvQXR0YWNoOiBwcm9wcy5sb2FkQmFsYW5jZXJJZFRvQXR0YWNoLFxuICAgICAgICAgICAgc3lzdGVtRGlza0NhdGVnb3J5OiBwcm9wcy5zeXN0ZW1EaXNrQ2F0ZWdvcnkgPyBwcm9wcy5zeXN0ZW1EaXNrQ2F0ZWdvcnkgOiAnY2xvdWRfZWZmaWNpZW5jeScsXG4gICAgICAgICAgICBlbmlNYXBwaW5nczogcHJvcHMuZW5pTWFwcGluZ3MsXG4gICAgICAgICAgICBpbnN0YW5jZU5hbWU6IHByb3BzLmluc3RhbmNlTmFtZSxcbiAgICAgICAgICAgIGRlcGxveW1lbnRTZXRJZDogcHJvcHMuZGVwbG95bWVudFNldElkLFxuICAgICAgICAgICAgaW50ZXJuZXRNYXhCYW5kd2lkdGhPdXQ6IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoT3V0LFxuICAgICAgICAgICAgaW50ZXJuZXRNYXhCYW5kd2lkdGhJbjogcHJvcHMuaW50ZXJuZXRNYXhCYW5kd2lkdGhJbiA/IHByb3BzLmludGVybmV0TWF4QmFuZHdpZHRoSW4gOiAyMDAsXG4gICAgICAgICAgICBsYXVuY2hUZW1wbGF0ZVZlcnNpb246IHByb3BzLmxhdW5jaFRlbXBsYXRlVmVyc2lvbixcbiAgICAgICAgICAgIHBlcmlvZFVuaXQ6IHByb3BzLnBlcmlvZFVuaXQgPyBwcm9wcy5wZXJpb2RVbml0IDogJ01vbnRoJyxcbiAgICAgICAgICAgIGF1dG9SZWxlYXNlVGltZTogcHJvcHMuYXV0b1JlbGVhc2VUaW1lLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0luc3RhbmNlR3JvdXBDbG9uZTtcbiAgICAgICAgdGhpcy5hdHRySG9zdE5hbWVzID0gcm9zSW5zdGFuY2VHcm91cENsb25lLmF0dHJIb3N0TmFtZXM7XG4gICAgICAgIHRoaXMuYXR0cklubmVySXBzID0gcm9zSW5zdGFuY2VHcm91cENsb25lLmF0dHJJbm5lcklwcztcbiAgICAgICAgdGhpcy5hdHRySW5zdGFuY2VJZHMgPSByb3NJbnN0YW5jZUdyb3VwQ2xvbmUuYXR0ckluc3RhbmNlSWRzO1xuICAgICAgICB0aGlzLmF0dHJPcmRlcklkID0gcm9zSW5zdGFuY2VHcm91cENsb25lLmF0dHJPcmRlcklkO1xuICAgICAgICB0aGlzLmF0dHJQcml2YXRlSXBzID0gcm9zSW5zdGFuY2VHcm91cENsb25lLmF0dHJQcml2YXRlSXBzO1xuICAgICAgICB0aGlzLmF0dHJQdWJsaWNJcHMgPSByb3NJbnN0YW5jZUdyb3VwQ2xvbmUuYXR0clB1YmxpY0lwcztcbiAgICAgICAgdGhpcy5hdHRyWm9uZUlkcyA9IHJvc0luc3RhbmNlR3JvdXBDbG9uZS5hdHRyWm9uZUlkcztcbiAgICB9XG59XG4iXX0=