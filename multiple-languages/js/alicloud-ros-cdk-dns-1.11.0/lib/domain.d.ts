import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './dns.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export interface DomainProps {
    /**
     * Property domainName: Domain name
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];
}
/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DnsServers: The DNS list for the domain name under resolution
     */
    readonly attrDnsServers: ros.IResolvable | string;
    /**
     * Attribute DomainId: Domain ID
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: Domain name
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute GroupName: The name of the domain name group
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    readonly attrPunyCode: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DNS::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute DnsServers: The DNS list for the domain name under resolution
     */
    readonly attrDnsServers: ros.IResolvable | string;
    /**
     * Attribute DomainId: Domain ID
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: Domain name
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: ros.IResolvable | string;
    /**
     * Attribute GroupName: The name of the domain name group
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    readonly attrPunyCode: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
