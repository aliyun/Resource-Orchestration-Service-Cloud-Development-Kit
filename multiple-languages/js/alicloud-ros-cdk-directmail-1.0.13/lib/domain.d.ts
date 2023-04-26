import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './directmail.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `ALIYUN::DirectMail::Domain`
 */
export interface DomainProps {
    /**
     * Property domainName: The name of the domain.
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::DirectMail::Domain`
 */
export declare class Domain extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CnameAuthStatus: Cname auth status.
     */
    readonly attrCnameAuthStatus: ros.IResolvable;
    /**
     * Attribute CnameConfirmStatus: Cname confirm status.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable;
    /**
     * Attribute CnameRecord: Cname record.
     */
    readonly attrCnameRecord: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the domain.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DefaultDomain: Default domain.
     */
    readonly attrDefaultDomain: ros.IResolvable;
    /**
     * Attribute DnsMx: DNS MX.
     */
    readonly attrDnsMx: ros.IResolvable;
    /**
     * Attribute DnsSpf: DNS SPF.
     */
    readonly attrDnsSpf: ros.IResolvable;
    /**
     * Attribute DnsTxt: DNS txt.
     */
    readonly attrDnsTxt: ros.IResolvable;
    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * Attribute DomainName: The name of the domain.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * Attribute DomainType: The type of the domain.
     */
    readonly attrDomainType: ros.IResolvable;
    /**
     * Attribute IcpStatus: ICP status.
     */
    readonly attrIcpStatus: ros.IResolvable;
    /**
     * Attribute MxAuthStatus: MX auth status.
     */
    readonly attrMxAuthStatus: ros.IResolvable;
    /**
     * Attribute MxRecord: MX Record.
     */
    readonly attrMxRecord: ros.IResolvable;
    /**
     * Attribute SpfAuthStatus: SPF auth status.
     */
    readonly attrSpfAuthStatus: ros.IResolvable;
    /**
     * Attribute SpfRecord: SPF record.
     */
    readonly attrSpfRecord: ros.IResolvable;
    /**
     * Attribute TlDomainName: TL domain name.
     */
    readonly attrTlDomainName: ros.IResolvable;
    /**
     * Attribute TracefRecord: Tracef Record.
     */
    readonly attrTracefRecord: ros.IResolvable;
    /**
     * Create a new `ALIYUN::DirectMail::Domain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
