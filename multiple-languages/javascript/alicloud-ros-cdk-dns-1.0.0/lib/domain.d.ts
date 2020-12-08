import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './dns.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `ALIYUN::DNS::Domain`
 */
export interface DomainProps {
    /**
     * @Property domainName: Domain name
     */
    readonly domainName: string;
    /**
     * @Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string;
}
/**
 * A ROS resource type:  `ALIYUN::DNS::Domain`
 */
export declare class Domain extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute DnsServers: The DNS list for the domain name under resolution
     */
    readonly attrDnsServers: any;
    /**
     * @Attribute DomainId: Domain ID
     */
    readonly attrDomainId: any;
    /**
     * @Attribute DomainName: Domain name
     */
    readonly attrDomainName: any;
    /**
     * @Attribute GroupId: Domain name group ID
     */
    readonly attrGroupId: any;
    /**
     * @Attribute GroupName: The name of the domain name group
     */
    readonly attrGroupName: any;
    /**
     * @Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    readonly attrPunyCode: any;
    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
