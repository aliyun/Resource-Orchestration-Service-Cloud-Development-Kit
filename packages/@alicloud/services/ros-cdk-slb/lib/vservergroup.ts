import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroup } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVServerGroup as VServerGroupProperty };

/**
 * Properties for defining a `VServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::VServerGroup`, which is used to create a vServer group and attach backend servers to a Server Load Balancer (SLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export class VServerGroup extends ros.Resource {

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    public readonly attrVServerGroupId: ros.IResolvable;

    /**
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
        this.attrLoadBalancerId = rosVServerGroup.attrLoadBalancerId;
        this.attrVServerGroupId = rosVServerGroup.attrVServerGroupId;
    }
}
