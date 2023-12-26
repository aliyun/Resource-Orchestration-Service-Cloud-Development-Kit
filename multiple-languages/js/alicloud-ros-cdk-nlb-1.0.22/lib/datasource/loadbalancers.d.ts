import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancers } from './nlb.generated';
export { RosLoadBalancers as LoadBalancersProperty };
/**
 * Properties for defining a `LoadBalancers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancers
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NLB::LoadBalancers`ALIYUN::NLPAUTOML::Dataset is used to create a dataset.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancers
 */
export declare class LoadBalancers extends ros.Resource {
    /**
     * Attribute LoadBalancerIds: The list of load balancer IDs.
     */
    readonly attrLoadBalancerIds: ros.IResolvable;
    /**
     * Attribute LoadBalancers: The list of load balancers.
     */
    readonly attrLoadBalancers: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: LoadBalancersProps, enableResourcePropertyConstraint?: boolean);
}
