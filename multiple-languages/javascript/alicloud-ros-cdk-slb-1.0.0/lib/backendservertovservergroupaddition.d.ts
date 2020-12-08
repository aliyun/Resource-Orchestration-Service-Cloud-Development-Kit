import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerToVServerGroupAddition } from './slb.generated';
export { RosBackendServerToVServerGroupAddition as BackendServerToVServerGroupAdditionProperty };
/**
 * Properties for defining a `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export interface BackendServerToVServerGroupAdditionProps {
    /**
     * @Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string;
}
/**
 * A ROS resource type:  `ALIYUN::SLB::BackendServerToVServerGroupAddition`
 */
export declare class BackendServerToVServerGroupAddition extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute VServerGroupId: The ID of virtual server group.
     */
    readonly attrVServerGroupId: any;
    /**
     * Create a new `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerToVServerGroupAdditionProps, enableResourcePropertyConstraint?: boolean);
}
