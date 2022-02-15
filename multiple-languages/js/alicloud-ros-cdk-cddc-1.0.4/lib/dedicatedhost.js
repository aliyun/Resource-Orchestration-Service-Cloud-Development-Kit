"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DedicatedHost = exports.DedicatedHostProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const cddc_generated_1 = require("./cddc.generated");
Object.defineProperty(exports, "DedicatedHostProperty", { enumerable: true, get: function () { return cddc_generated_1.RosDedicatedHost; } });
/**
 * A ROS resource type:  `ALIYUN::CDDC::DedicatedHost`
 */
class DedicatedHost extends ros.Resource {
    /**
     * Create a new `ALIYUN::CDDC::DedicatedHost`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        const rosDedicatedHost = new cddc_generated_1.RosDedicatedHost(this, id, {
            hostClass: props.hostClass,
            osPassword: props.osPassword,
            zoneId: props.zoneId,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew,
            vSwitchId: props.vSwitchId,
            usedTime: props.usedTime,
            imageCategory: props.imageCategory,
            period: props.period,
            paymentType: props.paymentType,
            hostName: props.hostName,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHost;
        this.attrAutoRenew = rosDedicatedHost.attrAutoRenew;
        this.attrCpuAllocationRatio = rosDedicatedHost.attrCpuAllocationRatio;
        this.attrCpuUsed = rosDedicatedHost.attrCpuUsed;
        this.attrDedicatedHostGroupId = rosDedicatedHost.attrDedicatedHostGroupId;
        this.attrDedicatedHostId = rosDedicatedHost.attrDedicatedHostId;
        this.attrDiskAllocationRatio = rosDedicatedHost.attrDiskAllocationRatio;
        this.attrEcsClassCode = rosDedicatedHost.attrEcsClassCode;
        this.attrHostClass = rosDedicatedHost.attrHostClass;
        this.attrHostCpu = rosDedicatedHost.attrHostCpu;
        this.attrHostMem = rosDedicatedHost.attrHostMem;
        this.attrHostName = rosDedicatedHost.attrHostName;
        this.attrHostStorage = rosDedicatedHost.attrHostStorage;
        this.attrHostType = rosDedicatedHost.attrHostType;
        this.attrImageCategory = rosDedicatedHost.attrImageCategory;
        this.attrIpAddress = rosDedicatedHost.attrIpAddress;
        this.attrMemAllocationRatio = rosDedicatedHost.attrMemAllocationRatio;
        this.attrMemoryUsed = rosDedicatedHost.attrMemoryUsed;
        this.attrOpenPermission = rosDedicatedHost.attrOpenPermission;
        this.attrPaymentType = rosDedicatedHost.attrPaymentType;
        this.attrStorageUsed = rosDedicatedHost.attrStorageUsed;
        this.attrVSwitchId = rosDedicatedHost.attrVSwitchId;
        this.attrVpcId = rosDedicatedHost.attrVpcId;
        this.attrZoneId = rosDedicatedHost.attrZoneId;
    }
}
exports.DedicatedHost = DedicatedHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkaWNhdGVkaG9zdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlZGljYXRlZGhvc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLHFEQUFvRDtBQUV2QixzR0FGcEIsaUNBQWdCLE9BRXlCO0FBb0VsRDs7R0FFRztBQUNILE1BQWEsYUFBYyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBMEgzQzs7Ozs7O09BTUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXlCLEVBQUUsbUNBQTJDLElBQUk7UUFDcEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVqQixNQUFNLGdCQUFnQixHQUFHLElBQUksaUNBQWdCLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUNyRCxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVM7WUFDMUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1lBQ3hCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtZQUN4QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7U0FDbkIsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7UUFDdEUsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFDaEQsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDO1FBQzFFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxnQkFBZ0IsQ0FBQyxtQkFBbUIsQ0FBQztRQUNoRSxJQUFJLENBQUMsdUJBQXVCLEdBQUcsZ0JBQWdCLENBQUMsdUJBQXVCLENBQUM7UUFDeEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzFELElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO1FBQ2hELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ2xELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxHQUFHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztRQUNwRCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUM7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDO1FBQzlELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxDQUFDO1FBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1FBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO0lBQ2xELENBQUM7Q0FDSjtBQTNLRCxzQ0EyS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NEZWRpY2F0ZWRIb3N0IH0gZnJvbSAnLi9jZGRjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0RlZGljYXRlZEhvc3QgYXMgRGVkaWNhdGVkSG9zdFByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQUxJWVVOOjpDRERDOjpEZWRpY2F0ZWRIb3N0YFxuICovXG5leHBvcnQgaW50ZXJmYWNlIERlZGljYXRlZEhvc3RQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWRpY2F0ZWRIb3N0R3JvdXBJZDogRGVkaWNhdGVkIEhvc3QgR3JvdXAgSURcbiAgICAgKi9cbiAgICByZWFkb25seSBkZWRpY2F0ZWRIb3N0R3JvdXBJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaG9zdENsYXNzOiBIb3N0IENsYXNzXG4gICAgICovXG4gICAgcmVhZG9ubHkgaG9zdENsYXNzOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwYXltZW50VHlwZTogUGF5bWVudCBUeXBlXG4gICAgICovXG4gICAgcmVhZG9ubHkgcGF5bWVudFR5cGU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZTd2l0Y2hJZDogVlN3aXRjaCBJRFxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZTd2l0Y2hJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgem9uZUlkOiBab25lIElEXG4gICAgICovXG4gICAgcmVhZG9ubHkgem9uZUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhdXRvUmVuZXc6IFdoZXRoZXIgQXV0byBSZW5ld1xuICAgICAqL1xuICAgIHJlYWRvbmx5IGF1dG9SZW5ldz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGhvc3ROYW1lOiBIb3N0IE5hbWVcbiAgICAgKi9cbiAgICByZWFkb25seSBob3N0TmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGltYWdlQ2F0ZWdvcnk6IEhvc3QgSW1hZ2UgQ2F0ZWdvcnlcbiAgICAgKi9cbiAgICByZWFkb25seSBpbWFnZUNhdGVnb3J5Pzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgb3NQYXNzd29yZDpcbiAgICAgKi9cbiAgICByZWFkb25seSBvc1Bhc3N3b3JkPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgcGVyaW9kOlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHBlcmlvZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHRhZ3M6IFRoZSB0YWcgb2YgdGhlIHJlc291cmNlXG4gICAgICovXG4gICAgcmVhZG9ubHkgdGFncz86IFJvc0RlZGljYXRlZEhvc3QuVGFnc1Byb3BlcnR5W107XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB1c2VkVGltZTpcbiAgICAgKi9cbiAgICByZWFkb25seSB1c2VkVGltZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBBIFJPUyByZXNvdXJjZSB0eXBlOiAgYEFMSVlVTjo6Q0REQzo6RGVkaWNhdGVkSG9zdGBcbiAqL1xuZXhwb3J0IGNsYXNzIERlZGljYXRlZEhvc3QgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuXG4gICAgLyoqXG4gICAgICogQSBmYWN0b3J5IG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcyBmcm9tIGFuIG9iamVjdFxuICAgICAqIGNvbnRhaW5pbmcgdGhlIHByb3BlcnRpZXMgb2YgdGhpcyBST1MgcmVzb3VyY2UsIHdoaWNoIHdpbGwgYmUgYXNzaWduZWQgdG8gUk9TIHJlc291cmNlLlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEF1dG9SZW5ldzogV2hldGhlciBBdXRvIFJlbmV3XG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJBdXRvUmVuZXc6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcHVBbGxvY2F0aW9uUmF0aW86IENQVSBBbGxvY2F0aW9uIFJhdGlvXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDcHVBbGxvY2F0aW9uUmF0aW86IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDcHVVc2VkOiBDUFUgVXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3B1VXNlZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlZGljYXRlZEhvc3RHcm91cElkOiBEZWRpY2F0ZWQgSG9zdCBHcm91cCBJRFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGVkaWNhdGVkSG9zdEdyb3VwSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBEZWRpY2F0ZWRIb3N0SWQ6IFRoZSBmaXJzdCBJRCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlZGljYXRlZEhvc3RJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERpc2tBbGxvY2F0aW9uUmF0aW86IERpc2sgQWxsb2NhdGlvbiBSYXRpb1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyRGlza0FsbG9jYXRpb25SYXRpbzogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVjc0NsYXNzQ29kZTogRUNTIENsYXNzIENvZGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckVjc0NsYXNzQ29kZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3RDbGFzczogSG9zdCBDbGFzc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdENsYXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9zdENwdTogSG9zdCBDUFVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvc3RDcHU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIb3N0TWVtOiBIb3N0IE1lbW9yeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdE1lbTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEhvc3ROYW1lOiBIb3N0IE5hbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvc3ROYW1lOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSG9zdFN0b3JhZ2U6IEhvc3QgU3RvcmFnZVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySG9zdFN0b3JhZ2U6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBIb3N0VHlwZTogSG9zdCBTdG9yYWdlIFR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckhvc3RUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW1hZ2VDYXRlZ29yeTogSG9zdCBJbWFnZSBDYXRlZ29yeVxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW1hZ2VDYXRlZ29yeTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIElwQWRkcmVzczogSG9zdCBJUCBBZGRyZXNzXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJJcEFkZHJlc3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNZW1BbGxvY2F0aW9uUmF0aW86IE1lbW9yeSBBbGxvY2F0aW9uIFJhdGlvXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNZW1BbGxvY2F0aW9uUmF0aW86IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBNZW1vcnlVc2VkOiBIb3N0IE1lbW9yeSBVc2VkXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJNZW1vcnlVc2VkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgT3BlblBlcm1pc3Npb246IFdoZXRoZXIgT3BlbiBPUyBQZXJtaXNzaW9uXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJPcGVuUGVybWlzc2lvbjogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFBheW1lbnRUeXBlOiBQYXltZW50IFR5cGVcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clBheW1lbnRUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgU3RvcmFnZVVzZWQ6IFN0b3JhZ2UgVXNlZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyU3RvcmFnZVVzZWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU3dpdGNoSWQ6IFZTd2l0Y2ggSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTd2l0Y2hJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFZwY0lkOiBWUEMgSURcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgWm9uZUlkOiBab25lIElEXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJab25lSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBgQUxJWVVOOjpDRERDOjpEZWRpY2F0ZWRIb3N0YC5cbiAgICAgKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEZWRpY2F0ZWRIb3N0UHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG5cbiAgICAgICAgY29uc3Qgcm9zRGVkaWNhdGVkSG9zdCA9IG5ldyBSb3NEZWRpY2F0ZWRIb3N0KHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgaG9zdENsYXNzOiBwcm9wcy5ob3N0Q2xhc3MsXG4gICAgICAgICAgICBvc1Bhc3N3b3JkOiBwcm9wcy5vc1Bhc3N3b3JkLFxuICAgICAgICAgICAgem9uZUlkOiBwcm9wcy56b25lSWQsXG4gICAgICAgICAgICBkZWRpY2F0ZWRIb3N0R3JvdXBJZDogcHJvcHMuZGVkaWNhdGVkSG9zdEdyb3VwSWQsXG4gICAgICAgICAgICBhdXRvUmVuZXc6IHByb3BzLmF1dG9SZW5ldyxcbiAgICAgICAgICAgIHZTd2l0Y2hJZDogcHJvcHMudlN3aXRjaElkLFxuICAgICAgICAgICAgdXNlZFRpbWU6IHByb3BzLnVzZWRUaW1lLFxuICAgICAgICAgICAgaW1hZ2VDYXRlZ29yeTogcHJvcHMuaW1hZ2VDYXRlZ29yeSxcbiAgICAgICAgICAgIHBlcmlvZDogcHJvcHMucGVyaW9kLFxuICAgICAgICAgICAgcGF5bWVudFR5cGU6IHByb3BzLnBheW1lbnRUeXBlLFxuICAgICAgICAgICAgaG9zdE5hbWU6IHByb3BzLmhvc3ROYW1lLFxuICAgICAgICAgICAgdGFnczogcHJvcHMudGFncyxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NEZWRpY2F0ZWRIb3N0O1xuICAgICAgICB0aGlzLmF0dHJBdXRvUmVuZXcgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJBdXRvUmVuZXc7XG4gICAgICAgIHRoaXMuYXR0ckNwdUFsbG9jYXRpb25SYXRpbyA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckNwdUFsbG9jYXRpb25SYXRpbztcbiAgICAgICAgdGhpcy5hdHRyQ3B1VXNlZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckNwdVVzZWQ7XG4gICAgICAgIHRoaXMuYXR0ckRlZGljYXRlZEhvc3RHcm91cElkID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyRGVkaWNhdGVkSG9zdEdyb3VwSWQ7XG4gICAgICAgIHRoaXMuYXR0ckRlZGljYXRlZEhvc3RJZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckRlZGljYXRlZEhvc3RJZDtcbiAgICAgICAgdGhpcy5hdHRyRGlza0FsbG9jYXRpb25SYXRpbyA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckRpc2tBbGxvY2F0aW9uUmF0aW87XG4gICAgICAgIHRoaXMuYXR0ckVjc0NsYXNzQ29kZSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckVjc0NsYXNzQ29kZTtcbiAgICAgICAgdGhpcy5hdHRySG9zdENsYXNzID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySG9zdENsYXNzO1xuICAgICAgICB0aGlzLmF0dHJIb3N0Q3B1ID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySG9zdENwdTtcbiAgICAgICAgdGhpcy5hdHRySG9zdE1lbSA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ckhvc3RNZW07XG4gICAgICAgIHRoaXMuYXR0ckhvc3ROYW1lID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySG9zdE5hbWU7XG4gICAgICAgIHRoaXMuYXR0ckhvc3RTdG9yYWdlID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySG9zdFN0b3JhZ2U7XG4gICAgICAgIHRoaXMuYXR0ckhvc3RUeXBlID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRySG9zdFR5cGU7XG4gICAgICAgIHRoaXMuYXR0ckltYWdlQ2F0ZWdvcnkgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJJbWFnZUNhdGVnb3J5O1xuICAgICAgICB0aGlzLmF0dHJJcEFkZHJlc3MgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJJcEFkZHJlc3M7XG4gICAgICAgIHRoaXMuYXR0ck1lbUFsbG9jYXRpb25SYXRpbyA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ck1lbUFsbG9jYXRpb25SYXRpbztcbiAgICAgICAgdGhpcy5hdHRyTWVtb3J5VXNlZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0ck1lbW9yeVVzZWQ7XG4gICAgICAgIHRoaXMuYXR0ck9wZW5QZXJtaXNzaW9uID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyT3BlblBlcm1pc3Npb247XG4gICAgICAgIHRoaXMuYXR0clBheW1lbnRUeXBlID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyUGF5bWVudFR5cGU7XG4gICAgICAgIHRoaXMuYXR0clN0b3JhZ2VVc2VkID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyU3RvcmFnZVVzZWQ7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZCA9IHJvc0RlZGljYXRlZEhvc3QuYXR0clZTd2l0Y2hJZDtcbiAgICAgICAgdGhpcy5hdHRyVnBjSWQgPSByb3NEZWRpY2F0ZWRIb3N0LmF0dHJWcGNJZDtcbiAgICAgICAgdGhpcy5hdHRyWm9uZUlkID0gcm9zRGVkaWNhdGVkSG9zdC5hdHRyWm9uZUlkO1xuICAgIH1cbn1cbiJdfQ==