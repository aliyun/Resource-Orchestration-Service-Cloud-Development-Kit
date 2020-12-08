import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceConnection } from './vpc.generated';
export { RosPeeringRouterInterfaceConnection as PeeringRouterInterfaceConnectionProperty };
/**
 * Properties for defining a `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
export interface PeeringRouterInterfaceConnectionProps {
    /**
     * @Property oppositeInterfaceId: The Receiver RouterInterface ID to accept peer RouterInterface.
     */
    readonly oppositeInterfaceId: string;
    /**
     * @Property routerInterfaceId: The Initiator RouterInterface ID to connect peer RouterInterface.
     */
    readonly routerInterfaceId: string;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::PeeringRouterInterfaceConnection`
 */
export declare class PeeringRouterInterfaceConnection extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    readonly attrOppositeInterfaceId: any;
    /**
     * @Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    readonly attrRouterInterfaceId: any;
    /**
     * Create a new `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceConnectionProps, enableResourcePropertyConstraint?: boolean);
}
