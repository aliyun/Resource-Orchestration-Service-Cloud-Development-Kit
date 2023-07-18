import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancers } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancers as LoadBalancersProperty };

/**
 * Properties for defining a `DATASOURCE::NLB::LoadBalancers`
 */
export interface LoadBalancersProps {

    /**
     * Property addressIpVersion: IP version.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * Property ipv6AddressType: IPv6 address type of network load balancing
     */
    readonly ipv6AddressType?: string | ros.IResolvable;

    /**
     * Property loadBalancerBussinessStatus: Service status of application load balancing
     */
    readonly loadBalancerBussinessStatus?: string | ros.IResolvable;

    /**
     * Property loadBalancerIds: IDs of the load balancer instance.
     */
    readonly loadBalancerIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property loadBalancerNames: Names of the load balancing instance.
     */
    readonly loadBalancerNames?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property loadBalancerStatus: The status of SLB.
     */
    readonly loadBalancerStatus?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of Nlb.
     */
    readonly tags?: RosLoadBalancers.TagsProperty[];

    /**
     * Property vpcIds: VPC IDs
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::NLB::LoadBalancers`
 */
export class LoadBalancers extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    public readonly attrLoadBalancerIds: ros.IResolvable;

    /**
     * Attribute LoadBalancers: The list of load balancers.
     */
    public readonly attrLoadBalancers: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::NLB::LoadBalancers`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancers = new RosLoadBalancers(this, id,  {
            loadBalancerNames: props.loadBalancerNames,
            addressIpVersion: props.addressIpVersion,
            loadBalancerBussinessStatus: props.loadBalancerBussinessStatus,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            vpcIds: props.vpcIds,
            loadBalancerIds: props.loadBalancerIds,
            addressType: props.addressType,
            loadBalancerStatus: props.loadBalancerStatus,
            tags: props.tags,
            ipv6AddressType: props.ipv6AddressType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancers;
        this.attrLoadBalancerIds = rosLoadBalancers.attrLoadBalancerIds;
        this.attrLoadBalancers = rosLoadBalancers.attrLoadBalancers;
    }
}
