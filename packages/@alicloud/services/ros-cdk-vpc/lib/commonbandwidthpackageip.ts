import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackageIp } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommonBandwidthPackageIp as CommonBandwidthPackageIpProperty };

/**
 * Properties for defining a `CommonBandwidthPackageIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::CommonBandwidthPackageIp`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackageIp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackageip
 */
export class CommonBandwidthPackageIp extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CommonBandwidthPackageIpProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AllocationIds: All eip allocation ids of common bandwidth package.
     */
    public readonly attrAllocationIds: ros.IResolvable;

    /**
     * Attribute IpAddresses: All eip addresses of common bandwidth package.
     */
    public readonly attrIpAddresses: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackageIpProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCommonBandwidthPackageIp = new RosCommonBandwidthPackageIp(this, id,  {
            eips: props.eips,
            bandwidthPackageId: props.bandwidthPackageId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommonBandwidthPackageIp;
        this.attrAllocationIds = rosCommonBandwidthPackageIp.attrAllocationIds;
        this.attrIpAddresses = rosCommonBandwidthPackageIp.attrIpAddresses;
    }
}
