import * as ros from '@alicloud/ros-cdk-core';
import { RosDhcpOptionsSet } from './vpc.generated';
export { RosDhcpOptionsSet as DhcpOptionsSetProperty };
/**
 * Properties for defining a `DhcpOptionsSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
export interface DhcpOptionsSetProps {
    /**
     * Property dhcpOptionsSetDescription: The description of the DHCP options set.
     * The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::DhcpOptionsSet`, which is used to create Dynamic Host Configuration Protocol (DHCP) options sets.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDhcpOptionsSet`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-dhcpoptionsset
 */
export declare class DhcpOptionsSet extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DhcpOptionsSetProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP options set that is created.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DhcpOptionsSetProps, enableResourcePropertyConstraint?: boolean);
}
