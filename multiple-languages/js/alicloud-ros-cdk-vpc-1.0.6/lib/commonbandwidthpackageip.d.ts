import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackageIp } from './vpc.generated';
export { RosCommonBandwidthPackageIp as CommonBandwidthPackageIpProperty };
/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
export interface CommonBandwidthPackageIpProps {
    /**
     * Property bandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
    /**
     * Property eips: List of eip associated with the Internet Shared Bandwidth instance.
     */
    readonly eips: Array<RosCommonBandwidthPackageIp.EipsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::CommonBandwidthPackageIp`
 */
export declare class CommonBandwidthPackageIp extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AllocationIds: All eip allocation ids of common bandwidth package.
     */
    readonly attrAllocationIds: ros.IResolvable;
    /**
     * Attribute IpAddresses: All eip addresses of common bandwidth package.
     */
    readonly attrIpAddresses: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackageIp`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackageIpProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=commonbandwidthpackageip.d.ts.map