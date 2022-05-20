import * as ros from '@alicloud/ros-cdk-core';
import { RosDhcpOptionsSet } from './vpc.generated';
export { RosDhcpOptionsSet as DhcpOptionsSetProperty };
/**
 * Properties for defining a `ALIYUN::VPC::DhcpOptionsSet`
 */
export interface DhcpOptionsSetProps {
    /**
     * Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:// or https://.
     */
    readonly dhcpOptionsSetDescription?: string | ros.IResolvable;
    /**
     * Property dhcpOptionsSetName: The name of the DHCP options set.
     * The name must be 2 to 128 characters in length and can contain letters, Chinese characters, digits, underscores (_), and hyphens (-). It must start with a letter or a Chinese character.
     */
    readonly dhcpOptionsSetName?: string | ros.IResolvable;
    /**
     * Property domainName: The root domain, for example, example.com.
     * After a DHCP options set is associated with a Virtual Private Cloud (VPC) network, the root domain in the DHCP options set is automatically synchronized to the ECS instances in the VPC network.
     */
    readonly domainName?: string | ros.IResolvable;
    /**
     * Property domainNameServers: The DNS server IP addresses. Note Before you specify any DNS server IP address, all ECS instances in the associated VPC network use the IP addresses of the Alibaba Cloud DNS servers, which are 100.100.2.136 and 100.100.2.138.
     */
    readonly domainNameServers?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::DhcpOptionsSet`
 */
export declare class DhcpOptionsSet extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::DhcpOptionsSet`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DhcpOptionsSetProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=dhcpoptionsset.d.ts.map