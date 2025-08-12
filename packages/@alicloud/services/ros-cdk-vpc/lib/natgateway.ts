import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGateway } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatGateway as NatGatewayProperty };

/**
 * Properties for defining a `NatGateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
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
     * Property icmpReplyEnabled: Specifies whether to enable the ICMP non-retrieval feature. Default: True
     */
    readonly icmpReplyEnabled?: boolean | ros.IResolvable;

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
     * Property securityProtectionEnabled: Specifies whether to enable the firewall feature. Default: False
     */
    readonly securityProtectionEnabled?: boolean | ros.IResolvable;

    /**
     * Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosNatGateway.TagsProperty[];
}

/**
 * Represents a `NatGateway`.
 */
export interface INatGateway extends ros.IResource {
    readonly props: NatGatewayProps;

    /**
     * Attribute ForwardTableId: The forward table id.
     */
    readonly attrForwardTableId: ros.IResolvable | string;

    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    readonly attrNatGatewayId: ros.IResolvable | string;

    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    readonly attrSNatTableId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NatGateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natgateway
 */
export class NatGateway extends ros.Resource implements INatGateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NatGatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ForwardTableId: The forward table id.
     */
    public readonly attrForwardTableId: ros.IResolvable | string;

    /**
     * Attribute NatGatewayId: The Id of created NAT gateway.
     */
    public readonly attrNatGatewayId: ros.IResolvable | string;

    /**
     * Attribute SNatTableId: The SNAT table id.
     */
    public readonly attrSNatTableId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNatGateway = new RosNatGateway(this, id,  {
            description: props.description,
            natGatewayName: props.natGatewayName,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            eipBindMode: props.eipBindMode,
            vSwitchId: props.vSwitchId,
            securityProtectionEnabled: props.securityProtectionEnabled,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            natType: props.natType === undefined || props.natType === null ? 'Enhanced' : props.natType,
            internetChargeType: props.internetChargeType,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            vpcId: props.vpcId,
            networkType: props.networkType,
            icmpReplyEnabled: props.icmpReplyEnabled,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatGateway;
        this.attrForwardTableId = rosNatGateway.attrForwardTableId;
        this.attrNatGatewayId = rosNatGateway.attrNatGatewayId;
        this.attrSNatTableId = rosNatGateway.attrSNatTableId;
    }
}
