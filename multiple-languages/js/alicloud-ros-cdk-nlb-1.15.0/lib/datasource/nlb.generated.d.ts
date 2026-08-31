import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosLoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancer
 */
export interface RosLoadBalancerProps {
    /**
     * @Property loadBalancerId: ID of the LoadBalancer.
     */
    readonly loadBalancerId?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NLB::LoadBalancer`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancer` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancer
 */
export declare class RosLoadBalancer extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NLB::LoadBalancer";
    /**
     * @Attribute AddressIpVersion: The protocol version.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * @Attribute AddressType: The IPv4 network type of the NLB instance.
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * @Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * @Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
     */
    readonly attrCps: ros.IResolvable;
    /**
     * @Attribute CreateTime: The time when the NLB instance was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
     */
    readonly attrCrossZoneEnabled: ros.IResolvable;
    /**
     * @Attribute DNSName: The domain name of the NLB instance.
     */
    readonly attrDnsName: ros.IResolvable;
    /**
     * @Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
     */
    readonly attrDeletionProtectionConfig: ros.IResolvable;
    /**
     * @Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
     */
    readonly attrIpv6AddressType: ros.IResolvable;
    /**
     * @Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
     */
    readonly attrLoadBalancerBillingConfig: ros.IResolvable;
    /**
     * @Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
     */
    readonly attrLoadBalancerBusinessStatus: ros.IResolvable;
    /**
     * @Attribute LoadBalancerId: ID of the LoadBalancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * @Attribute LoadBalancerName: The NLB instance name.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    /**
     * @Attribute LoadBalancerStatus: The NLB instance status.
     */
    readonly attrLoadBalancerStatus: ros.IResolvable;
    /**
     * @Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance. Set the value to network, which specifies NLB.
     */
    readonly attrLoadBalancerType: ros.IResolvable;
    /**
     * @Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    readonly attrModificationProtectionConfig: ros.IResolvable;
    /**
     * @Attribute OperationLocks: The information about the locked NLB instance.
     */
    readonly attrOperationLocks: ros.IResolvable;
    /**
     * @Attribute RegionId: The region ID of the NLB instance.
     */
    readonly attrRegionId: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * @Attribute VpcId: The VPC ID of the NLB instance.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneMappings: The list of zones and vSwitches in the zones.
     */
    readonly attrZoneMappings: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property loadBalancerId: ID of the LoadBalancer.
     */
    loadBalancerId: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLoadBalancerProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosLoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancers
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::NLB::LoadBalancers`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LoadBalancers` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancers
 */
export declare class RosLoadBalancers extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::NLB::LoadBalancers";
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
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
