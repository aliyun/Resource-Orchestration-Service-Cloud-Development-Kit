import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './directmail.generated';
export { RosDomain as DomainProperty };
/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domain
 */
export interface DomainProps {
    /**
     * Property domainId: The ID of the domain name.
     */
    readonly domainId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;
    /**
     * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    readonly attrCnameAuthStatus: ros.IResolvable | string;
    /**
     * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable | string;
    /**
     * Attribute CnameRecord: Customized part of CNAME host record.
     */
    readonly attrCnameRecord: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DefaultDomain: Is it the default domain name.
     */
    readonly attrDefaultDomain: ros.IResolvable | string;
    /**
     * Attribute DnsMx: MX record value resolved through public DNS.
     */
    readonly attrDnsMx: ros.IResolvable | string;
    /**
     * Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    readonly attrDnsSpf: ros.IResolvable | string;
    /**
     * Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    readonly attrDnsTxt: ros.IResolvable | string;
    /**
     * Attribute DomainId: The ID of the domain name.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: The domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    readonly attrDomainType: ros.IResolvable | string;
    /**
     * Attribute IcpStatus: The status of ICP filing.
     */
    readonly attrIcpStatus: ros.IResolvable | string;
    /**
     * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    readonly attrMxAuthStatus: ros.IResolvable | string;
    /**
     * Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    readonly attrMxRecord: ros.IResolvable | string;
    /**
     * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    readonly attrSpfAuthStatus: ros.IResolvable | string;
    /**
     * Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    readonly attrSpfRecord: ros.IResolvable | string;
    /**
     * Attribute TlDomainName: The primary domain name.
     */
    readonly attrTlDomainName: ros.IResolvable | string;
    /**
     * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    readonly attrTracefRecord: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Domain`, which is used to query the information about a domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domain
 */
export declare class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    readonly attrCnameAuthStatus: ros.IResolvable | string;
    /**
     * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable | string;
    /**
     * Attribute CnameRecord: Customized part of CNAME host record.
     */
    readonly attrCnameRecord: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DefaultDomain: Is it the default domain name.
     */
    readonly attrDefaultDomain: ros.IResolvable | string;
    /**
     * Attribute DnsMx: MX record value resolved through public DNS.
     */
    readonly attrDnsMx: ros.IResolvable | string;
    /**
     * Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    readonly attrDnsSpf: ros.IResolvable | string;
    /**
     * Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    readonly attrDnsTxt: ros.IResolvable | string;
    /**
     * Attribute DomainId: The ID of the domain name.
     */
    readonly attrDomainId: ros.IResolvable | string;
    /**
     * Attribute DomainName: The domain name.
     */
    readonly attrDomainName: ros.IResolvable | string;
    /**
     * Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    readonly attrDomainType: ros.IResolvable | string;
    /**
     * Attribute IcpStatus: The status of ICP filing.
     */
    readonly attrIcpStatus: ros.IResolvable | string;
    /**
     * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    readonly attrMxAuthStatus: ros.IResolvable | string;
    /**
     * Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    readonly attrMxRecord: ros.IResolvable | string;
    /**
     * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    readonly attrSpfAuthStatus: ros.IResolvable | string;
    /**
     * Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    readonly attrSpfRecord: ros.IResolvable | string;
    /**
     * Attribute TlDomainName: The primary domain name.
     */
    readonly attrTlDomainName: ros.IResolvable | string;
    /**
     * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    readonly attrTracefRecord: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint?: boolean);
}
