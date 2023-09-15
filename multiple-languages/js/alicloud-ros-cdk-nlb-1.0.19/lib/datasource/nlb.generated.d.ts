import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::NLB::LoadBalancers`
 */
export interface RosLoadBalancersProps {
    /**
     * @Property addressIpVersion: IP version.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    readonly addressType?: string | ros.IResolvable;
    /**
     * @Property ipv6AddressType: IPv6 address type of network load balancing
     */
    readonly ipv6AddressType?: string | ros.IResolvable;
    /**
     * @Property loadBalancerBussinessStatus: Service status of application load balancing
     */
    readonly loadBalancerBussinessStatus?: string | ros.IResolvable;
    /**
     * @Property loadBalancerIds: IDs of the load balancer instance.
     */
    readonly loadBalancerIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property loadBalancerNames: Names of the load balancing instance.
     */
    readonly loadBalancerNames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property loadBalancerStatus: The status of SLB.
     */
    readonly loadBalancerStatus?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of Nlb.
     */
    readonly tags?: RosLoadBalancers.TagsProperty[];
    /**
     * @Property vpcIds: VPC IDs
     */
    readonly vpcIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::NLB::LoadBalancers`
 */
export declare class RosLoadBalancers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NLB::LoadBalancers";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    readonly attrLoadBalancerIds: ros.IResolvable;
    /**
     * @Attribute LoadBalancers: The list of load balancers.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property addressIpVersion: IP version.
     */
    addressIpVersion: string | ros.IResolvable | undefined;
    /**
     * @Property addressType: The address type of the load balancing instance.
     */
    addressType: string | ros.IResolvable | undefined;
    /**
     * @Property ipv6AddressType: IPv6 address type of network load balancing
     */
    ipv6AddressType: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerBussinessStatus: Service status of application load balancing
     */
    loadBalancerBussinessStatus: string | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerIds: IDs of the load balancer instance.
     */
    loadBalancerIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerNames: Names of the load balancing instance.
     */
    loadBalancerNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property loadBalancerStatus: The status of SLB.
     */
    loadBalancerStatus: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of Nlb.
     */
    tags: RosLoadBalancers.TagsProperty[] | undefined;
    /**
     * @Property vpcIds: VPC IDs
     */
    vpcIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property zoneId: ID of the ready-to-use zone of the load balancing instance.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::NLB::LoadBalancers`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosLoadBalancers {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
