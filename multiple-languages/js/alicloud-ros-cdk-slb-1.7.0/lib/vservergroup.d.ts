import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroup } from './slb.generated';
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
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::VServerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
 */
export declare class VServerGroup extends ros.Resource implements IVServerGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupProps, enableResourcePropertyConstraint?: boolean);
}
