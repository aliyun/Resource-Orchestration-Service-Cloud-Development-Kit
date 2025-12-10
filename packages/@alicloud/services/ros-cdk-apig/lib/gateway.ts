import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGateway as GatewayProperty };

/**
 * Properties for defining a `Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export interface GatewayProps {

    /**
     * Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName: string | ros.IResolvable;

    /**
     * Property networkAccessConfig: Network Access Configuration.
     */
    readonly networkAccessConfig: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;

    /**
     * Property paymentType: The payment type of the gateway. Valid values:
     * * PayAsYouGo
     * * Subscription
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * Property spec: Gateway instance specifications.
     */
    readonly spec: string | ros.IResolvable;

    /**
     * Property zoneConfig: Availability Zone Configuration.
     */
    readonly zoneConfig: RosGateway.ZoneConfigProperty | ros.IResolvable;

    /**
     * Property gatewayType: Describes the gateway type, which is categorized into the following two types:
     * * API: indicates an API gateway
     * * AI: Indicates an AI gateway.
     * Default value: API.
     */
    readonly gatewayType?: string | ros.IResolvable;

    /**
     * Property logConfig: Log Configuration.
     */
    readonly logConfig?: RosGateway.LogConfigProperty | ros.IResolvable;

    /**
     * Property period: The purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the purchase time of the gateway. This parameter is only valid when updating PaymentType from PayAsYouGo to Subscription.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of The tags of the Gateway..
     */
    readonly tags?: RosGateway.TagsProperty[];

    /**
     * Property vpc: The VPC associated with the Gateway.
     */
    readonly vpc?: RosGateway.VpcProperty | ros.IResolvable;

    /**
     * Property vSwitch: The virtual switch associated with the Gateway.
     */
    readonly vSwitch?: RosGateway.VSwitchProperty | ros.IResolvable;
}

/**
 * Represents a `Gateway`.
 */
export interface IGateway extends ros.IResource {
    readonly props: GatewayProps;

    /**
     * Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    readonly attrEnvironments: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute GatewayName: The name of the resource.
     */
    readonly attrGatewayName: ros.IResolvable | string;

    /**
     * Attribute GatewayType: The type of the gateway.
     */
    readonly attrGatewayType: ros.IResolvable | string;

    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the gateway.
     */
    readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    readonly attrSecurityGroup: ros.IResolvable | string;

    /**
     * Attribute Spec: Gateway instance specifications.
     */
    readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the Gateway.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Update the timestamp. Unit: milliseconds.
     */
    readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    readonly attrVSwitch: ros.IResolvable | string;

    /**
     * Attribute Version: The gateway version.
     */
    readonly attrVersion: ros.IResolvable | string;

    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    readonly attrVpc: ros.IResolvable | string;

    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    readonly attrZones: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export class Gateway extends ros.Resource implements IGateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    public readonly attrEnvironments: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Attribute GatewayName: The name of the resource.
     */
    public readonly attrGatewayName: ros.IResolvable | string;

    /**
     * Attribute GatewayType: The type of the gateway.
     */
    public readonly attrGatewayType: ros.IResolvable | string;

    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    public readonly attrLoadBalancers: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The payment type of the gateway.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    public readonly attrSecurityGroup: ros.IResolvable | string;

    /**
     * Attribute Spec: Gateway instance specifications.
     */
    public readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the Gateway.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: Update the timestamp. Unit: milliseconds.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    public readonly attrVSwitch: ros.IResolvable | string;

    /**
     * Attribute Version: The gateway version.
     */
    public readonly attrVersion: ros.IResolvable | string;

    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    public readonly attrVpc: ros.IResolvable | string;

    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    public readonly attrZones: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGateway = new RosGateway(this, id,  {
            networkAccessConfig: props.networkAccessConfig,
            resourceGroupId: props.resourceGroupId,
            vpc: props.vpc,
            period: props.period,
            gatewayType: props.gatewayType,
            vSwitch: props.vSwitch,
            zoneConfig: props.zoneConfig,
            paymentType: props.paymentType,
            gatewayName: props.gatewayName,
            spec: props.spec,
            tags: props.tags,
            periodUnit: props.periodUnit,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateway;
        this.attrCreateTime = rosGateway.attrCreateTime;
        this.attrEnvironments = rosGateway.attrEnvironments;
        this.attrExpireTime = rosGateway.attrExpireTime;
        this.attrGatewayId = rosGateway.attrGatewayId;
        this.attrGatewayName = rosGateway.attrGatewayName;
        this.attrGatewayType = rosGateway.attrGatewayType;
        this.attrLoadBalancers = rosGateway.attrLoadBalancers;
        this.attrPaymentType = rosGateway.attrPaymentType;
        this.attrResourceGroupId = rosGateway.attrResourceGroupId;
        this.attrSecurityGroup = rosGateway.attrSecurityGroup;
        this.attrSpec = rosGateway.attrSpec;
        this.attrTags = rosGateway.attrTags;
        this.attrUpdateTime = rosGateway.attrUpdateTime;
        this.attrVSwitch = rosGateway.attrVSwitch;
        this.attrVersion = rosGateway.attrVersion;
        this.attrVpc = rosGateway.attrVpc;
        this.attrZones = rosGateway.attrZones;
    }
}
