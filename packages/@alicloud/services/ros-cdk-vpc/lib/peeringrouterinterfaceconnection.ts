import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceConnection } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPeeringRouterInterfaceConnection as PeeringRouterInterfaceConnectionProperty };

/**
 * Properties for defining a `PeeringRouterInterfaceConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
export interface PeeringRouterInterfaceConnectionProps {

    /**
     * Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    readonly oppositeInterfaceId: string | ros.IResolvable;

    /**
     * Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    readonly routerInterfaceId: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceConnection`, which is used to initiate a router interface connection.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPeeringRouterInterfaceConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
export class PeeringRouterInterfaceConnection extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PeeringRouterInterfaceConnectionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    public readonly attrOppositeInterfaceId: ros.IResolvable;

    /**
     * Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPeeringRouterInterfaceConnection = new RosPeeringRouterInterfaceConnection(this, id,  {
            oppositeInterfaceId: props.oppositeInterfaceId,
            routerInterfaceId: props.routerInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPeeringRouterInterfaceConnection;
        this.attrOppositeInterfaceId = rosPeeringRouterInterfaceConnection.attrOppositeInterfaceId;
        this.attrRouterInterfaceId = rosPeeringRouterInterfaceConnection.attrRouterInterfaceId;
    }
}
