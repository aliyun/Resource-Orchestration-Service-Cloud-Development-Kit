import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerToVServerGroupAddition } from './slb.generated';
export { RosBackendServerToVServerGroupAddition as BackendServerToVServerGroupAdditionProperty };
/**
 * Properties for defining a `BackendServerToVServerGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
export interface BackendServerToVServerGroupAdditionProps {
    /**
     * Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::BackendServerToVServerGroupAddition`, which is used to add backend servers to an existing server group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackendServerToVServerGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
export declare class BackendServerToVServerGroupAddition extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BackendServerToVServerGroupAdditionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VServerGroupId: The ID of virtual server group.
     */
    readonly attrVServerGroupId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerToVServerGroupAdditionProps, enableResourcePropertyConstraint?: boolean);
}
