import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceBinding } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPeeringRouterInterfaceBinding as PeeringRouterInterfaceBindingProperty };

/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export interface PeeringRouterInterfaceBindingProps {

    /**
     * Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    readonly oppositeInterfaceId: string;

    /**
     * Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    readonly routerInterfaceId: string;

    /**
     * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    readonly oppositeInterfaceOwnerId?: string;

    /**
     * Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export class PeeringRouterInterfaceBinding extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute RouterInterfaceId: The RouterInterface ID.
     */
    public readonly attrRouterInterfaceId: any;

    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceBindingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPeeringRouterInterfaceBinding = new RosPeeringRouterInterfaceBinding(this, id,  {
            oppositeInterfaceId: props.oppositeInterfaceId,
            oppositeInterfaceOwnerId: props.oppositeInterfaceOwnerId,
            oppositeRouterId: props.oppositeRouterId,
            routerInterfaceId: props.routerInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPeeringRouterInterfaceBinding;
        this.attrRouterInterfaceId = rosPeeringRouterInterfaceBinding.attrRouterInterfaceId;
    }
}
