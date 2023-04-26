import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGateway } from './vpc.generated';
export { RosNatGateway as NatGatewayProperty };
/**
 * Properties for defining a `ALIYUN::VPC::NatGateway`
 */
export interface NatGatewayProps {
    /**
     * Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property autoPay: Specifies whether to enable automatic payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property eipBindMode: The mode in which the EIP is associated with the NAT gateway. Valid values:MULTI_BINDED (default): the multi-EIP-to-ENI mode.
     * NAT: NAT mode. IPv4 gateways are supported.
     * Note If the EIP is associated with the NAT gateway in NAT mode,
     * the EIP occupies a private IP address of the vSwitch to which the NAT gateway belongs.
     * Make sure that the vSwitch has sufficient private IP addresses.
     * Otherwise, the EIP cannot be associated with the NAT gateway.
     * In NAT mode, a maximum number of 50 EIPs can be associated with each NAT gateway.
     */
    readonly eipBindMode?: string | ros.IResolvable;
    /**
     * Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string | ros.IResolvable;
    /**
     * Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    readonly natType?: string | ros.IResolvable;
    /**
     * Property networkType: The type of the created NAT gateway.
     * Internet: public network NAT gateway.
     * Intranet: VPC NAT gateway.
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNatGateway.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::VPC::NatGateway`
 */
export declare class NatGateway extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ForwardTableId: The forward table id.
     */
    readonly attrForwardTableId: ros.IResolvable;
    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable;
    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    readonly attrSNatTableId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayProps, enableResourcePropertyConstraint?: boolean);
}
