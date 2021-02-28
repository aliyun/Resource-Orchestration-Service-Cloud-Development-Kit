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
    readonly bandwidth?: number;

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property description: Optional. The description of the EIP. The description must be 2 to 256 characters in length. It must start with a letter. It cannot start with http://  or https://.
     */
    readonly description?: string;

    /**
     * Property instanceChargeType: The resource charge type. Default value is Postpaid
     */
    readonly instanceChargeType?: string;

    /**
     * Property internetChargeType: The network charge type. Support 'PayByBandwidth' and 'PayByTraffic' only. Default is PayByBandwidth. PayByTraffic will charge by hour, PayByBandwidth will charge by day.
     */
    readonly internetChargeType?: string;

    /**
     * Property isp: ISP tag for finance cloud region. only for cn-hangzhou and cn-qingdao region), if you are not finance cloud user, this value will be ignore.
     */
    readonly isp?: string;

    /**
     * Property name: The name of the EIP. The name must be 2 to 128 characters in length. It must start with a letter. It can contain numbers, periods (.), underscores (_), and hyphens (-). It cannot start with http://  or https://
     */
    readonly name?: string;

    /**
     * Property netmode: The network type. Valid value: public (public network).
     */
    readonly netmode?: string;

    /**
     * Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number;

    /**
     * Property pricingCycle: Price cycle of the resource. This property has no default value. If ChargeType is specified as Postpaid, this value will be ignore.
     */
    readonly pricingCycle?: string;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * Property tags: Tags to attach to eip. Max support 20 tags to add during create eip. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
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
    public readonly attrAllocationId: any;

    /**
     * Attribute EipAddress: IP address of created EIP.
     */
    public readonly attrEipAddress: any;

    /**
     * Attribute OrderId: Order ID of prepaid EIP instance.
     */
    public readonly attrOrderId: any;

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
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'Postpaid',
            pricingCycle: props.pricingCycle ? props.pricingCycle : 'Month',
            isp: props.isp,
            period: props.period ? props.period : 1,
            deletionProtection: props.deletionProtection ? props.deletionProtection : false,
            autoPay: props.autoPay ? props.autoPay : false,
            name: props.name,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'PayByBandwidth',
            netmode: props.netmode,
            bandwidth: props.bandwidth ? props.bandwidth : 5,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIP;
        this.attrAllocationId = rosEIP.attrAllocationId;
        this.attrEipAddress = rosEIP.attrEipAddress;
        this.attrOrderId = rosEIP.attrOrderId;
    }
}
