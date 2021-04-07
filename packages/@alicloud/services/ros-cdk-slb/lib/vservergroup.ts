import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroup } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVServerGroup as VServerGroupProperty };

/**
 * Properties for defining a `ALIYUN::SLB::VServerGroup`
 */
export interface VServerGroupProps {

    /**
     * Property loadBalancerId: The id of load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property vServerGroupName: Display name of the VServerGroup.
     */
    readonly vServerGroupName: string | ros.IResolvable;

    /**
     * Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers?: Array<RosVServerGroup.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::VServerGroup`
 */
export class VServerGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::VServerGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVServerGroup = new RosVServerGroup(this, id,  {
            vServerGroupName: props.vServerGroupName,
            loadBalancerId: props.loadBalancerId,
            backendServers: props.backendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroup;
        this.attrBackendServers = rosVServerGroup.attrBackendServers;
        this.attrVServerGroupId = rosVServerGroup.attrVServerGroupId;
    }
}
