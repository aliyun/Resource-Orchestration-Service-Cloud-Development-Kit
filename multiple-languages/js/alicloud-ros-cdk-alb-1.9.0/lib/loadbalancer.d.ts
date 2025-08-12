import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './alb.generated';
export { RosLoadBalancer as LoadBalancerProperty };
/**
 * Properties for defining a `LoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-loadbalancer
 */
export interface LoadBalancerProps {
    /**
     * Property addressType: The type of IP address that the ALB instance uses to provide services. Valid values:
     * Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
     * Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
     */
    readonly addressType: string | ros.IResolvable;
    /**
     * Property loadBalancerBillingConfig: The configuration of the billing method.
     */
    readonly loadBalancerBillingConfig: RosLoadBalancer.LoadBalancerBillingConfigProperty | ros.IResolvable;
    /**
     * Property loadBalancerEdition: The edition of the ALB instance. Different editions have different limits and billing methods. Valid values:
     * Basic: Basic Edition
     * Standard: Standard Edition
     * StandardWithWaf: Standard Edition with WAF
     */
    readonly loadBalancerEdition: string | ros.IResolvable;
    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property zoneMappings: The zones and the vSwitches in the zones. You must specify at least two zones.
     */
    readonly zoneMappings: Array<RosLoadBalancer.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property accessLogConfig:
     */
    readonly accessLogConfig?: RosLoadBalancer.AccessLogConfigProperty | ros.IResolvable;
    /**
     * Property addressAllocatedMode: The mode in which IP addresses are assigned. Valid values:
     * Fixed: The ALB instance uses a static IP address.
     * Dynamic: An IP address is dynamically assigned to the ALB instance in each zone. This is the default value.
     */
    readonly addressAllocatedMode?: string | ros.IResolvable;
    /**
     * Property addressIpVersion: The protocol version. Valid values:
     * IPv4: IPv4
     * DualStack: dual stack
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property bandwidthPackageId: Attach common bandwidth package to load balancer. It only takes effect when AddressType=Internet.
     */
    readonly bandwidthPackageId?: string | ros.IResolvable;
    /**
     * Property deletionProtectionEnabled: Specifies whether to enable deletion protection. Default value: false.
     */
    readonly deletionProtectionEnabled?: boolean | ros.IResolvable;
    /**
     * Property ipv6AddressType: The type of IPv6 address that the ALB instance uses to provide services. Valid values:
     * Internet: The ALB instance uses a public IPv6 address. The domain name of the ALB instance is resolved to the public IPv6 address.
     * Intranet: The ALB instance uses a private IPv6 address. The domain name of the ALB instance is resolved to the private IP address.
     */
    readonly ipv6AddressType?: string | ros.IResolvable;
    /**
     * Property loadBalancerName: The name of the ALB instance.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * Property modificationProtectionConfig: The configuration of modification protection.
     */
    readonly modificationProtectionConfig?: RosLoadBalancer.ModificationProtectionConfigProperty | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property securityGroupIds: The IDs of the security group to which the ALB instance join.
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
}
/**
 * Represents a `LoadBalancer`.
 */
export interface ILoadBalancer extends ros.IResource {
    readonly props: LoadBalancerProps;
    /**
     * Attribute AddressType: The type of IP address that the ALB instance uses to provide services.
     */
    readonly attrAddressType: ros.IResolvable | string;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DNSName: The domain name of the ALB instance.
     */
    readonly attrDnsName: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerEdition: The edition of the ALB instance.
     */
    readonly attrLoadBalancerEdition: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the ALB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    readonly attrZoneMappings: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::LoadBalancer`, which is used to create an Application Load Balancer (ALB) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-loadbalancer
 */
export declare class LoadBalancer extends ros.Resource implements ILoadBalancer {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddressType: The type of IP address that the ALB instance uses to provide services.
     */
    readonly attrAddressType: ros.IResolvable | string;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DNSName: The domain name of the ALB instance.
     */
    readonly attrDnsName: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerEdition: The edition of the ALB instance.
     */
    readonly attrLoadBalancerEdition: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the ALB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute ZoneMappings: The zones, vSwitches and addresses which are mapped to the zones.
     */
    readonly attrZoneMappings: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint?: boolean);
}
