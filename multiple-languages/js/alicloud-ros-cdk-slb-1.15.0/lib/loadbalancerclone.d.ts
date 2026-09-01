import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerClone } from './slb.generated';
export { RosLoadBalancerClone as LoadBalancerCloneProperty };
/**
 * Properties for defining a `LoadBalancerClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
 */
export interface LoadBalancerCloneProps {
    /**
     * Property sourceLoadBalancerId: Source load balancer id to clone
     */
    readonly sourceLoadBalancerId: string | ros.IResolvable;
    /**
     * Property backendServers: The list of ECS instance, which will attached to load balancer.
     */
    readonly backendServers?: Array<RosLoadBalancerClone.BackendServersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property backendServersPolicy: Solution for handle the backend server and weights. If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
     */
    readonly backendServersPolicy?: string | ros.IResolvable;
    /**
     * Property instanceChargeType: The resource metering method for the CLB instance. Valid value:
     * - PayByCLCU: pay-by-data-transfer
     * > As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
     * no longer available for purchase. For more details, see [](t2857909.xdita#).
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property loadBalancerName: The CLB instance name.
     * The name must be 1 to 80 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     * If you do not specify this parameter, the system automatically assigns a name to
     * the CLB instance.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - slb.s1.small
     * - slb.s2.small
     * - slb.s2.medium
     * - slb.s3.small
     * - slb.s3.medium
     * - slb.s3.large
     * > * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
     * do not need to specify this parameter.
     * >
     * > * As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
     * are no longer available for purchase. For more details, see [](t2857909.xdita#).
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancerClone.TagsProperty[];
    /**
     * Property tagsPolicy: Solution for handle the tags. If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
     * Default is 'empty'.
     */
    readonly tagsPolicy?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.
     * If you want to deploy the CLB instance in a VPC, this parameter is required. If
     * this parameter is specified, AddessType is set to intranet by default.
     * > The vSwitch must be in the primary zone.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * Represents a `LoadBalancerClone`.
 */
export interface ILoadBalancerClone extends ros.IResource {
    readonly props: LoadBalancerCloneProps;
    /**
     * Attribute LoadBalancerId: The id of load balance generated
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::LoadBalancerClone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancerClone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
 */
export declare class LoadBalancerClone extends ros.Resource implements ILoadBalancerClone {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LoadBalancerCloneProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute LoadBalancerId: The id of load balance generated
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerCloneProps, enableResourcePropertyConstraint?: boolean);
}
