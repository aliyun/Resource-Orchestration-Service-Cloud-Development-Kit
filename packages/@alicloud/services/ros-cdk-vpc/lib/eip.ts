import * as ros from '@alicloud/ros-cdk-core';
import { RosEIP } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEIP as EIPProperty };

/**
 * Properties for defining a `ALIYUN::VPC::EIP`
 */
export interface EIPProps {

    /**
     * Property autoPay: Automatic Payment. Default is false.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property bandwidth: Bandwidth for the output network. Default is 5MB.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property isp: The line type. You can set this parameter only when you create a pay-as-you-go EIP. Valid values:
     * BGP: BGP (Multi-ISP) lines. Up to 89 high-quality BGP lines are available worldwide. Direct connections with multiple Internet Service Providers (ISPs), including Telecom, Unicom, Mobile, Railcom, Netcom, CERNET, China Broadcast Network, Dr. Peng, and Founder, can be established in all regions in mainland China.
     * BGP_PRO: BGP (Multi-ISP) Pro lines. BGP (Multi-ISP) Pro lines optimize data transmission to China and improve connection quality for international services. Compared with traditional BGP (Multi-ISP) lines, BGP (Multi-ISP) Pro lines can be used to establish direct connections without using international ISP services. Therefore, BGP (Multi-ISP) Pro lines reduce network latency.
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string | ros.IResolvable;

    /**
     * Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. 
     *   While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosEIP.TagsProperty[];
}

/**
 * A ROS resource type:  `ALIYUN::VPC::EIP`
 */
export class Eip extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AllocationId: ID that Aliyun assigns to represent the allocation of the address for use with VPC. Returned only for VPC elastic IP addresses.
     */
    public readonly attrAllocationId: ros.IResolvable;

    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    public readonly attrEipAddress: ros.IResolvable;

    /**
     * Attribute Isp: The line type.
     */
    public readonly attrIsp: ros.IResolvable;

    /**
     * Attribute OrderId: Order ID of prepaid EIP instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::EIP`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EIPProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosEIP = new RosEIP(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'Postpaid' : props.instanceChargeType,
            pricingCycle: props.pricingCycle === undefined || props.pricingCycle === null ? 'Month' : props.pricingCycle,
            isp: props.isp,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            autoPay: props.autoPay === undefined || props.autoPay === null ? false : props.autoPay,
            name: props.name,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'PayByBandwidth' : props.internetChargeType,
            netmode: props.netmode,
            bandwidth: props.bandwidth === undefined || props.bandwidth === null ? 5 : props.bandwidth,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIP;
        this.attrAllocationId = rosEIP.attrAllocationId;
        this.attrEipAddress = rosEIP.attrEipAddress;
        this.attrIsp = rosEIP.attrIsp;
        this.attrOrderId = rosEIP.attrOrderId;
    }
}
