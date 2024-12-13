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
     * Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName?: string | ros.IResolvable;

    /**
     * Property logConfig: Log Configuration.
     */
    readonly logConfig?: RosGateway.LogConfigProperty | ros.IResolvable;

    /**
     * Property networkAccessConfig: Network Access Configuration.
     */
    readonly networkAccessConfig?: RosGateway.NetworkAccessConfigProperty | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-gateway
 */
export class Gateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    public readonly attrEnvironments: ros.IResolvable;

    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    public readonly attrGatewayId: ros.IResolvable;

    /**
     * Attribute GatewayName: The name of the resource.
     */
    public readonly attrGatewayName: ros.IResolvable;

    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    /**
     * Attribute PaymentType: The payment type of the gateway.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    public readonly attrSecurityGroup: ros.IResolvable;

    /**
     * Attribute Spec: Gateway instance specifications.
     */
    public readonly attrSpec: ros.IResolvable;

    /**
     * Attribute UpdateTime: Update the timestamp. Unit: milliseconds.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    public readonly attrVSwitch: ros.IResolvable;

    /**
     * Attribute Version: The gateway version.
     */
    public readonly attrVersion: ros.IResolvable;

    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    public readonly attrVpc: ros.IResolvable;

    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    public readonly attrZones: ros.IResolvable;

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
            vSwitch: props.vSwitch,
            zoneConfig: props.zoneConfig,
            vpc: props.vpc,
            paymentType: props.paymentType,
            gatewayName: props.gatewayName,
            spec: props.spec,
            logConfig: props.logConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateway;
        this.attrCreateTime = rosGateway.attrCreateTime;
        this.attrEnvironments = rosGateway.attrEnvironments;
        this.attrExpireTime = rosGateway.attrExpireTime;
        this.attrGatewayId = rosGateway.attrGatewayId;
        this.attrGatewayName = rosGateway.attrGatewayName;
        this.attrLoadBalancers = rosGateway.attrLoadBalancers;
        this.attrPaymentType = rosGateway.attrPaymentType;
        this.attrSecurityGroup = rosGateway.attrSecurityGroup;
        this.attrSpec = rosGateway.attrSpec;
        this.attrUpdateTime = rosGateway.attrUpdateTime;
        this.attrVSwitch = rosGateway.attrVSwitch;
        this.attrVersion = rosGateway.attrVersion;
        this.attrVpc = rosGateway.attrVpc;
        this.attrZones = rosGateway.attrZones;
    }
}
