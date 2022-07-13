import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancerClone } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancerClone as LoadBalancerCloneProperty };

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancerClone`
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
     * Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
     * PayByCLCU: billed by usage.
     * If not specified, it is same with the source load balancer.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * Property loadBalancerSpec: The specification of the load balancer. If not specified, it is same with the source load balancer.
     * Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
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
     * Property vSwitchId: The new VSwitch ID to create load balancer instance. For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancerClone`
 */
export class LoadBalancerClone extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute LoadBalancerId: The id of load balance generated
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancerClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancerClone = new RosLoadBalancerClone(this, id,  {
            loadBalancerName: props.loadBalancerName,
            sourceLoadBalancerId: props.sourceLoadBalancerId,
            tagsPolicy: props.tagsPolicy === undefined || props.tagsPolicy === null ? 'empty' : props.tagsPolicy,
            resourceGroupId: props.resourceGroupId,
            instanceChargeType: props.instanceChargeType,
            vSwitchId: props.vSwitchId,
            backendServers: props.backendServers,
            tags: props.tags,
            loadBalancerSpec: props.loadBalancerSpec,
            backendServersPolicy: props.backendServersPolicy === undefined || props.backendServersPolicy === null ? 'clone' : props.backendServersPolicy,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancerClone;
        this.attrLoadBalancerId = rosLoadBalancerClone.attrLoadBalancerId;
    }
}
