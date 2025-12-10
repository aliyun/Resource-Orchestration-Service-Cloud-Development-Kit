import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './gwlb.generated';
export { RosLoadBalancer as LoadBalancerProperty };
/**
 * Properties for defining a `LoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
export interface LoadBalancerProps {
    /**
     * Property vpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property zoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property addressIpVersion: The protocol version. Value:
     * - Ipv4: Ipv4 type.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property loadBalancerName: The name of the Gateway Load Balancer instance.
     * It must be 2 to 128 English or Chinese characters in length. It must start with a letter or a Chinese character and can contain digits, half-width periods (.), underscores (_), and dashes (-).
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags of load balancer.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
}
/**
 * Represents a `LoadBalancer`.
 */
export interface ILoadBalancer extends ros.IResource {
    readonly props: LoadBalancerProps;
    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: The business status of Gateway Load Balancing.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of **yyyy-MM-ddTHH:mm:ssZ**.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The list of tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    readonly attrZoneMappings: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GWLB::LoadBalancer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-loadbalancer
 */
export declare class LoadBalancer extends ros.Resource implements ILoadBalancer {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: The business status of Gateway Load Balancing.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The resource creation time, in Greenwich Mean Time, in the format of **yyyy-MM-ddTHH:mm:ssZ**.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the Gateway Load Balancer instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerName: The name of the Gateway Load Balancer instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The list of tags.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC which the Gateway Load Balancer instance belongs.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneMappings: The List of zones and vSwitches mapped. You must add at least one zone and a maximum of 20 zones. If the current region supports two or more zones, we recommend that you add two or more zones.
     */
    readonly attrZoneMappings: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint?: boolean);
}
