import * as ros from '@alicloud/ros-cdk-core';
import { RosPeeringRouterInterfaceConnection } from './vpc.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::PeeringRouterInterfaceConnection`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPeeringRouterInterfaceConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-peeringrouterinterfaceconnection
 */
export declare class PeeringRouterInterfaceConnection extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: PeeringRouterInterfaceConnectionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute OppositeInterfaceId: The receiver RouterInterface ID.
     */
    readonly attrOppositeInterfaceId: ros.IResolvable;
    /**
     * Attribute RouterInterfaceId: The initiator RouterInterface ID.
     */
    readonly attrRouterInterfaceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PeeringRouterInterfaceConnectionProps, enableResourcePropertyConstraint?: boolean);
}
