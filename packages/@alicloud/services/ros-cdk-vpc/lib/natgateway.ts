import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatGateway as NatGatewayProperty };

/**
 * Properties for defining a `ALIYUN::VPC::NatGateway`
 */
export interface NatGatewayProps {

    /**
     * Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string;

    /**
     * Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId: string;

    /**
     * Property autoPay: Specifies whether to enable automatic payment. Default is false.
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
    readonly description?: string;

    /**
     * Property duration: The subscription duration. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly duration?: number;

    /**
     * Property instanceChargeType: The billing method. The default value is PostPaid (which means pay-as-you-go).
     */
    readonly instanceChargeType?: string;

    /**
     * Property internetChargeType: The billing method for the NAT gateway. Valid values:
     * PayBySpec: billed on a pay-by-specification basis.
     * PayByLcu: billed on a pay-by-LCU basis.
     */
    readonly internetChargeType?: string;

    /**
     * Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string;

    /**
     * Property natType: The type of the NAT gateway. Valid values:
     * - Enhanced: enhanced NAT gateway.
     */
    readonly natType?: string;

    /**
     * Property pricingCycle: Price cycle of the resource. This property has no default value.
     */
    readonly pricingCycle?: string;

    /**
     * Property spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
     */
    readonly spec?: string;

    /**
     * Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];
}

/**
 * A ROS resource type:  `ALIYUN::VPC::NatGateway`
 */
export class NatGateway extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ForwardTableId: The forward table id.
     */
    public readonly attrForwardTableId: any;

    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    public readonly attrNatGatewayId: any;

    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    public readonly attrSNatTableId: any;

    /**
     * Create a new `ALIYUN::VPC::NatGateway`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNatGateway = new RosNatGateway(this, id,  {
            description: props.description,
            natGatewayName: props.natGatewayName,
            instanceChargeType: props.instanceChargeType ? props.instanceChargeType : 'PostPaid',
            pricingCycle: props.pricingCycle,
            vSwitchId: props.vSwitchId,
            duration: props.duration ? props.duration : 1,
            deletionProtection: props.deletionProtection ? props.deletionProtection : false,
            autoPay: props.autoPay ? props.autoPay : false,
            natType: props.natType ? props.natType : 'Enhanced',
            internetChargeType: props.internetChargeType,
            deletionForce: props.deletionForce ? props.deletionForce : false,
            vpcId: props.vpcId,
            spec: props.spec,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatGateway;
        this.attrForwardTableId = rosNatGateway.attrForwardTableId;
        this.attrNatGatewayId = rosNatGateway.attrNatGatewayId;
        this.attrSNatTableId = rosNatGateway.attrSNatTableId;
    }
}
