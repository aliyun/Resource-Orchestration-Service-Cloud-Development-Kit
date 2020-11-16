import * as ros from '@ros-cdk/core';
import { RosNatGateway } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatGateway as NatGatewayProperty };

/**
 * Properties for defining a `ALIYUN::ECS::NatGateway`
 */
export interface NatGatewayProps {

    /**
     * @Property vpcId: The VPC id to create NAT gateway.
     */
    readonly vpcId: string;

    /**
     * @Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property description: Description of the NAT gateway, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;

    /**
     * @Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly natGatewayName?: string;

    /**
     * @Property spec: NAT gateway specification. Now support 'Small|Middle|Large|XLarge.1'
     */
    readonly spec?: string;

    /**
     * @Property tags: Tags to attach to natgateway. Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * @Property vSwitchId: The VSwitch id to create NAT gateway.
     */
    readonly vSwitchId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::NatGateway`
 */
export class NatGateway extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute BandwidthPackageIds: The bandwidth package ids of created NAT gateway.
     */
    public readonly attrBandwidthPackageIds: any;

    /**
     * @Attribute BandwidthPackageIps: The allocated public IPs.
     */
    public readonly attrBandwidthPackageIps: any;

    /**
     * @Attribute ForwardTableId: The forward table id.
     */
    public readonly attrForwardTableId: any;

    /**
     * @Attribute NatGatewayId: The Id of created NAT gateway.
     */
    public readonly attrNatGatewayId: any;

    /**
     * @Attribute SNatTableId: The SNAT table id.
     */
    public readonly attrSNatTableId: any;

    /**
     * Create a new `ALIYUN::ECS::NatGateway`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNatGateway = new RosNatGateway(this, id,  {
            description: props.description,
            deletionForce: props.deletionForce ? props.deletionForce : false,
            vpcId: props.vpcId,
            natGatewayName: props.natGatewayName,
            vSwitchId: props.vSwitchId,
            deletionProtection: props.deletionProtection ? props.deletionProtection : false,
            spec: props.spec,
            tags: ros.tagFactory(props.tags),
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatGateway;
        this.attrBandwidthPackageIds = rosNatGateway.attrBandwidthPackageIds;
        this.attrBandwidthPackageIps = rosNatGateway.attrBandwidthPackageIps;
        this.attrForwardTableId = rosNatGateway.attrForwardTableId;
        this.attrNatGatewayId = rosNatGateway.attrNatGatewayId;
        this.attrSNatTableId = rosNatGateway.attrSNatTableId;
    }
}
