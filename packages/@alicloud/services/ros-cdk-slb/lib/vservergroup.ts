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

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVServerGroup.TagsProperty[];
}

/**
 * Represents a `VServerGroup`.
 */
export interface IVServerGroup extends ros.IResource {
    readonly props: VServerGroupProps;

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    readonly attrVServerGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::VServerGroup`, which is used to create a server group and attach backend servers to a Server Load Balancer (SLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export class VServerGroup extends ros.Resource implements IVServerGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackendServers: Backend server list in this VServerGroup.
     */
    public readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balancer.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupId: The id of VServerGroup created.
     */
    public readonly attrVServerGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVServerGroup = new RosVServerGroup(this, id,  {
            vServerGroupName: props.vServerGroupName,
            loadBalancerId: props.loadBalancerId,
            backendServers: props.backendServers,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroup;
        this.attrBackendServers = rosVServerGroup.attrBackendServers;
        this.attrLoadBalancerId = rosVServerGroup.attrLoadBalancerId;
        this.attrVServerGroupId = rosVServerGroup.attrVServerGroupId;
    }
}
