import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceConnection } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPeeringRouterInterfaceConnection as PeeringRouterInterfaceConnectionProperty };

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`
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
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
export class PeeringRouterInterfaceConnection extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    public readonly attrOppositeInterfaceId: ros.IResolvable;

    /**
     * Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPeeringRouterInterfaceConnection = new RosPeeringRouterInterfaceConnection(this, id,  {
            oppositeInterfaceId: props.oppositeInterfaceId,
            routerInterfaceId: props.routerInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPeeringRouterInterfaceConnection;
        this.attrOppositeInterfaceId = rosPeeringRouterInterfaceConnection.attrOppositeInterfaceId;
        this.attrRouterInterfaceId = rosPeeringRouterInterfaceConnection.attrRouterInterfaceId;
    }
}
