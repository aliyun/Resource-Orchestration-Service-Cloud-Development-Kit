import * as ros from '@alicloud/ros-cdk-core';
import { RosEIPSegment } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEIPSegment as EIPSegmentProperty };

/**
 * Properties for defining a `ALIYUN::VPC::EIPSegment`
 */
export interface EIPSegmentProps {

    /**
     * Property eipMask: The mask of the contiguous EIP group. Valid values:
     * 28: 16 contiguous EIPs are allocated for one call.
     * 27: 32 contiguous EIPs are allocated for one call.
     * 26: 64 contiguous EIPs are allocated for one call.
     * 25: 128 contiguous EIPs are allocated for one call.
     * 24: 256 contiguous EIPs are allocated for one call.
     * Note The actual number of assigned EIPs may be less than the expected number because one,
     * three, or four EIPs may be reserved.
     */
    readonly eipMask: number | ros.IResolvable;

    /**
     * Property bandwidth: The maximum bandwidth of the contiguous EIPs. Unit: Mbit/s. Default value: 5.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property internetChargeType: The metering method of the contiguous EIPs. Valid values:
     * PayByBandwidth: Fees are charged based on bandwidth usage. This is the default value.
     * PayByTraffic: Fees are charged based on data transfer.
     * Note If the Netmode parameter is set to hybrid, InternetChargeType is set to PayByBandwidth.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property netmode: The network type. Valid values:
     * public: the Internet. This is the default value. After contiguous EIPs are associated with
     * cloud resources, the cloud resources can access the Internet by using the EIPs.
     * hybrid: the hybrid cloud. After contiguous EIPs are associated with cloud resources, the
     * cloud resources can access the hybrid cloud by using the EIPs.
     * Note This network type is available only to users who are added to the whitelist. To use
     * this network type, contact your customer manager.
     */
    readonly netmode?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the EIPs belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::EIPSegment`
 */
export class EIPSegment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute EipAddresses: List of EIP addresses. like [{"AllocationId": "eip-xxx", "IpAddress": "xx.xx.xx.xx"}]
     */
    public readonly attrEipAddresses: ros.IResolvable;

    /**
     * Attribute EipSegmentInstanceId: The ID of the contiguous EIP group.
     */
    public readonly attrEipSegmentInstanceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::EIPSegment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EIPSegmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosEIPSegment = new RosEIPSegment(this, id,  {
            eipMask: props.eipMask,
            resourceGroupId: props.resourceGroupId,
            netmode: props.netmode,
            bandwidth: props.bandwidth,
            internetChargeType: props.internetChargeType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIPSegment;
        this.attrEipAddresses = rosEIPSegment.attrEipAddresses;
        this.attrEipSegmentInstanceId = rosEIPSegment.attrEipSegmentInstanceId;
    }
}
