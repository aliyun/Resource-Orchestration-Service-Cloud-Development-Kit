import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './nlb.generated';
export { RosLoadBalancer as LoadBalancerProperty };
/**
 * Properties for defining a `LoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
 */
export interface LoadBalancerProps {
    /**
     * Property addressType: The type of IP address that the NLB instance uses to provide services. Valid values:
     * Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
     * Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property bandwidthPackageId: Attach common bandwidth package to load balancer.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;
    /**
     * Property crossZoneEnabled: Whether enable cross zone. Default: true
     */
    readonly crossZoneEnabled?: boolean | ros.IResolvable;
    /**
     * Property deletionProtectionConfig: The configuration of the deletion protection feature.
     */
    readonly deletionProtectionConfig?: RosLoadBalancer.DeletionProtectionConfigProperty | ros.IResolvable;
    /**
     * Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig?: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;
    /**
     * Property loadBalancerName: The name of the NLB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * Property loadBalancerType: The type of the NLB instance.
     */
    readonly loadBalancerType?: string | ros.IResolvable;
    /**
     * Property modificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    readonly modificationProtectionConfig?: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
    /**
     * Property trafficAffinityEnabled: Whether enable traffic affinity. Default: false
     */
    readonly trafficAffinityEnabled?: boolean | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::NLB::LoadBalancer`, which is used to create a Network Load Balancer (NLB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
 */
export declare class LoadBalancer extends ros.Resource {
    /**
     * Attribute AddressIpVersion: The version of IP address that the NLB instance uses to provide services.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * Attribute AddressType: The type of IP address that the NLB instance uses to provide services.
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    readonly attrDnsName: ros.IResolvable;
    /**
     * Attribute LoadBalancerId: The ID of the NLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * Attribute LoadBalancerType: The type of the NLB instance.
     */
    readonly attrLoadBalancerType: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    readonly attrZoneMappings: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint?: boolean);
}
