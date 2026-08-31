import * as ros from '@alicloud/ros-cdk-core';
import { RosRouterInterface } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouterInterface as RouterInterfaceProperty };

/**
 * Properties for defining a `RouterInterface`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
 */
export interface RouterInterfaceProps {

    /**
     * Property role: RouterInterface role. Now support 'InitiatingSide|AcceptingSide'.
     */
    readonly role: string | ros.IResolvable;

    /**
     * Property routerId: The router ID to create RouterInterface.
     */
    readonly routerId: string | ros.IResolvable;

    /**
     * Property accessPointId: Access point ID. If 'RouterType' is specified as 'VBR', the value is required.
     */
    readonly accessPointId?: string | ros.IResolvable;

    /**
     * Property autoPay: Specifies whether to enable automatic payment. Valid values:
     * *   false (default): The automatic payment is disabled. If you select this
     * option, you must go to the Order Center to complete the payment after an order is
     * generated.
     * *   true: The automatic payment is enabled. Payments are automatically complete
     * after an order is generated.
     * >  This parameter is required if InstanceChargeType is set to PrePaid.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether auto-renewal is enabled.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property description: Custom description of the RouterInterface, [2, 256] characters. Don't fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property fastLinkMode: Specifies whether the VBR-associated router interface is created in fast link mode. Fast link mode allows the router interfaces between VBR and VPC ends to be automatically connected after they are created.
     * This parameter is valid only when the value of **RouterType** is **VBR** and the value of **OppositeRouterType** is **VRouter**.
     * - When the value of the **FastLinkMode** parameter is **true**, the value of the **Role** parameter must be **InitiatingSide**, and the **AccessPointId**, **OppositeRouterType**, **OppsiteRouterId**, and **OppositeInterfaceOwnerId** parameters are required.
     */
    readonly fastLinkMode?: boolean | ros.IResolvable;

    /**
     * Property healthCheckSourceIp: Source IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. The source IP address must be in the VPC of the local VRouter and is not used. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckSourceIp?: string | ros.IResolvable;

    /**
     * Property healthCheckTargetIp: Target IP address of the packet for leased line HealthCheck in leased line disaster tolerance and ECMP scenarios. It is valid only for a VRouter RouterInterface with a peer on a VBR. Usually you can use the CPE IP address of the leased line user's client (that is, the PeerGatewayIP on the VBR of the peer RouterInterface), you can also specify another IP address of the leased line user's client as the HealthCheck target IP address. HealthCheckSourceIp and HealthCheckTargetIp parameters must be both specified or left unspecified.
     */
    readonly healthCheckTargetIp?: string | ros.IResolvable;

    /**
     * Property instanceChargeType: The billing method of the router interface.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property name: Custom name of the RouterInterface, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property oppositeAccessPointId: Access point ID of the connection peer RouterInterface. If 'OppositeRouterType' is specified as 'VBR', the value is required.
     */
    readonly oppositeAccessPointId?: string | ros.IResolvable;

    /**
     * Property oppositeInterfaceId: The ID of the peer router interface.
     */
    readonly oppositeInterfaceId?: string | ros.IResolvable;

    /**
     * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface. The default value is current user Id.
     */
    readonly oppositeInterfaceOwnerId?: string | ros.IResolvable;

    /**
     * Property oppositeRegionId: The region where the connection peer RouterInterface locates. The default value is region where stack is created.
     */
    readonly oppositeRegionId?: string | ros.IResolvable;

    /**
     * Property oppositeRouterId: The router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string | ros.IResolvable;

    /**
     * Property oppositeRouterType: Router type of the connection peer router. Now support 'VRouter|VBR'. If 'RouterType' is specified as 'VBR', the value must be 'VRouter'.
     */
    readonly oppositeRouterType?: string | ros.IResolvable;

    /**
     * Property period: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property routerType: The type of router that is associated with the router interface. Valid values:
     * *   VRouter
     * *   VBR
     */
    readonly routerType?: string | ros.IResolvable;

    /**
     * Property spec: The specification of the router interface and the corresponding bandwidth. Valid
     * values:
     * *   Mini.2: 2 Mbit\/s
     * *   Mini.5: 5 Mbit\/s
     * *   Small.1: 10 Mbit\/s
     * *   Small.2: 20 Mbit\/s
     * *   Small.5: 50 Mbit\/s
     * *   Middle.1: 100 Mbit\/s
     * *   Middle.2: 200 Mbit\/s
     * *   Middle.5: 500 Mbit\/s
     * *   Large.1: 1,000 Mbit\/s
     * *   Large.2: 2,000 Mbit\/s
     * *   Large.5: 5,000 Mbit\/s
     * *   Xlarge.1: 10,000 Mbit\/s
     * >  If Role is set to AcceptingSide, set Spec to Negative. This indicates that you
     * do not need to specify the specification when you create an acceptor router
     * interface.
     */
    readonly spec?: string | ros.IResolvable;
}

/**
 * Represents a `RouterInterface`.
 */
export interface IRouterInterface extends ros.IResource {
    readonly props: RouterInterfaceProps;

    /**
     * Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    readonly attrRouterInterfaceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::RouterInterface`The , which resource creates a router interface.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouterInterface`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-routerinterface
 */
export class RouterInterface extends ros.Resource implements IRouterInterface {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RouterInterfaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouterInterfaceId: The ID of created RouterInterface.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouterInterfaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRouterInterface = new RosRouterInterface(this, id,  {
            oppositeInterfaceId: props.oppositeInterfaceId,
            oppositeInterfaceOwnerId: props.oppositeInterfaceOwnerId,
            description: props.description,
            oppositeRouterId: props.oppositeRouterId,
            resourceGroupId: props.resourceGroupId,
            oppositeRegionId: props.oppositeRegionId,
            instanceChargeType: props.instanceChargeType === undefined || props.instanceChargeType === null ? 'PostPaid' : props.instanceChargeType,
            pricingCycle: props.pricingCycle,
            healthCheckSourceIp: props.healthCheckSourceIp,
            autoRenew: props.autoRenew,
            routerId: props.routerId,
            period: props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            name: props.name,
            role: props.role,
            oppositeRouterType: props.oppositeRouterType === undefined || props.oppositeRouterType === null ? 'VRouter' : props.oppositeRouterType,
            routerType: props.routerType === undefined || props.routerType === null ? 'VRouter' : props.routerType,
            accessPointId: props.accessPointId,
            fastLinkMode: props.fastLinkMode,
            oppositeAccessPointId: props.oppositeAccessPointId,
            spec: props.spec,
            healthCheckTargetIp: props.healthCheckTargetIp,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouterInterface;
        this.attrRouterInterfaceId = rosRouterInterface.attrRouterInterfaceId;
    }
}
