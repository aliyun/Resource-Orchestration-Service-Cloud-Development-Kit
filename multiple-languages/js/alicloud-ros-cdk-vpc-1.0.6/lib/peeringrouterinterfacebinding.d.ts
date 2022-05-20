import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceBinding } from './vpc.generated';
export { RosPeeringRouterInterfaceBinding as PeeringRouterInterfaceBindingProperty };
/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceBinding`
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
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceBinding`
 */
export declare class PeeringRouterInterfaceBinding extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute RouterInterfaceId: The RouterInterface ID.
     */
    readonly attrRouterInterfaceId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceBindingProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=peeringrouterinterfacebinding.d.ts.map