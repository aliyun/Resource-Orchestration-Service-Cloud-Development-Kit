import * as ros from '@alicloud/ros-cdk-core';
import { RosRouterInterface } from './vpc.generated';
export { RosRouterInterface as RouterInterfaceProperty };
/**
 * Properties for defining a `ALIYUN::VPC::RouterInterface`
 */
export interface RouterInterfaceProps {
    /**
     * @Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'. If 'RouterType' is specified as 'VBR', the value must be 'InitiatingSide'.If 'OppositeRouterType' is specified as 'VBR', the value must be 'AcceptingSide'.
     */
    readonly role: string;
    /**
     * @Property routerId: The router ID to create RouterInterface.
     */
    readonly routerId: string;
    /**
     * @Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    readonly accessPointId?: string;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    readonly description?: string;
    /**
     * @Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckSourceIp?: string;
    /**
     * @Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckTargetIp?: string;
    /**
     * @Property instanceChargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go)
     */
    readonly instanceChargeType?: string;
    /**
     * @Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly name?: string;
    /**
     * @Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    readonly oppositeAccessPointId?: string;
    /**
     * @Property oppositeInterfaceId: The ID of the peer router interface.
     */
    readonly oppositeInterfaceId?: string;
    /**
     * @Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    readonly oppositeInterfaceOwnerId?: string;
    /**
     * @Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    readonly oppositeRegionId?: string;
    /**
     * @Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string;
    /**
     * @Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    readonly oppositeRouterType?: string;
    /**
     * @Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    readonly period?: number;
    /**
     * @Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string;
    /**
     * @Property routerType: Router type. Now support 'VRouter|VBR'
     */
    readonly routerType?: string;
    /**
     * @Property spec: RouterInterface specification. If 'Role' is specified as 'InitiatingSide', the value is required. If 'Role' is specified as 'AcceptingSide', the value is set as 'Negative' by default.
     */
    readonly spec?: string;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::RouterInterface`
 */
export declare class RouterInterface extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    readonly attrRouterInterfaceId: any;
    /**
     * Create a new `ALIYUN::VPC::RouterInterface`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouterInterfaceProps, enableResourcePropertyConstraint?: boolean);
}
