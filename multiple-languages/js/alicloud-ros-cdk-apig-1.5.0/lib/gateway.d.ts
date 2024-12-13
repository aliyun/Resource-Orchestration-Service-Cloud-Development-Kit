import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './apig.generated';
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
export declare class Gateway extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation timestamp. Unit: milliseconds.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Environments: The list of environments associated with the Gateway.
     */
    readonly attrEnvironments: ros.IResolvable;
    /**
     * Attribute ExpireTime: Package year and package month expiration timestamp. Unit: milliseconds.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * Attribute GatewayId: The ID of the Gateway.
     */
    readonly attrGatewayId: ros.IResolvable;
    /**
     * Attribute GatewayName: The name of the resource.
     */
    readonly attrGatewayName: ros.IResolvable;
    /**
     * Attribute LoadBalancers: The list of Gateway ingress addresses.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the gateway.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute SecurityGroup: The Security Group of the Gateway.
     */
    readonly attrSecurityGroup: ros.IResolvable;
    /**
     * Attribute Spec: Gateway instance specifications.
     */
    readonly attrSpec: ros.IResolvable;
    /**
     * Attribute UpdateTime: Update the timestamp. Unit: milliseconds.
     */
    readonly attrUpdateTime: ros.IResolvable;
    /**
     * Attribute VSwitch: The virtual switch associated with the Gateway.
     */
    readonly attrVSwitch: ros.IResolvable;
    /**
     * Attribute Version: The gateway version.
     */
    readonly attrVersion: ros.IResolvable;
    /**
     * Attribute Vpc: The VPC associated with the Gateway.
     */
    readonly attrVpc: ros.IResolvable;
    /**
     * Attribute Zones: The List of zones associated with the Gateway.
     */
    readonly attrZones: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint?: boolean);
}