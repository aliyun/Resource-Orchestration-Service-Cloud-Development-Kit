import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './dns.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `ALIYUN::DNS::Domain`
 */
export interface DomainProps {

    /**
     * Property domainName: Domain name
     */
    readonly domainName: string;

    /**
     * Property groupId: Domain name grouping, the default is the "default grouping" GroupId
     */
    readonly groupId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::DNS::Domain`
 */
export class Domain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DnsServers: The DNS list for the domain name under resolution
     */
    public readonly attrDnsServers: any;

    /**
     * Attribute DomainId: Domain ID
     */
    public readonly attrDomainId: any;

    /**
     * Attribute DomainName: Domain name
     */
    public readonly attrDomainName: any;

    /**
     * Attribute GroupId: Domain name group ID
     */
    public readonly attrGroupId: any;

    /**
     * Attribute GroupName: The name of the domain name group
     */
    public readonly attrGroupName: any;

    /**
     * Attribute PunyCode: punycode returned only for a Chinese domain name
     */
    public readonly attrPunyCode: any;

    /**
     * Create a new `ALIYUN::DNS::Domain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomain = new RosDomain(this, id,  {
            domainName: props.domainName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrDnsServers = rosDomain.attrDnsServers;
        this.attrDomainId = rosDomain.attrDomainId;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrGroupId = rosDomain.attrGroupId;
        this.attrGroupName = rosDomain.attrGroupName;
        this.attrPunyCode = rosDomain.attrPunyCode;
    }
}
