import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceBinding } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPeeringRouterInterfaceBinding as PeeringRouterInterfaceBindingProperty };

/**
 * Properties for defining a `PeeringRouterInterfaceBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
 */
export interface PeeringRouterInterfaceBindingProps {

    /**
     * Property oppositeInterfaceId: The connection peer RouterInterface ID.
     */
    readonly oppositeInterfaceId: string | ros.IResolvable;

    /**
     * Property routerInterfaceId: The RouterInterface is set the parameters of the connection peer RouterInterface.
     */
    readonly routerInterfaceId: string | ros.IResolvable;

    /**
     * Property oppositeInterfaceOwnerId: Owner account ID of the connection peer RouterInterface.
     */
    readonly oppositeInterfaceOwnerId?: string | ros.IResolvable;

    /**
     * Property oppositeRouterId: Router ID of the connection peer RouterInterface.
     */
    readonly oppositeRouterId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPeeringRouterInterfaceBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfacebinding
 */
export class PeeringRouterInterfaceBinding extends ros.Resource {

    /**
     * Attribute RouterInterfaceId: The RouterInterface ID.
     */
    public readonly attrRouterInterfaceId: ros.IResolvable;

    /**
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
