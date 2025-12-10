import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::DirectMail::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domain
 */
export class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    public readonly attrCnameAuthStatus: ros.IResolvable | string;

    /**
     * Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    public readonly attrCnameConfirmStatus: ros.IResolvable | string;

    /**
     * Attribute CnameRecord: Customized part of CNAME host record.
     */
    public readonly attrCnameRecord: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DefaultDomain: Is it the default domain name.
     */
    public readonly attrDefaultDomain: ros.IResolvable | string;

    /**
     * Attribute DnsMx: MX record value resolved through public DNS.
     */
    public readonly attrDnsMx: ros.IResolvable | string;

    /**
     * Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    public readonly attrDnsSpf: ros.IResolvable | string;

    /**
     * Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    public readonly attrDnsTxt: ros.IResolvable | string;

    /**
     * Attribute DomainId: The ID of the domain name.
     */
    public readonly attrDomainId: ros.IResolvable | string;

    /**
     * Attribute DomainName: The domain name.
     */
    public readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    public readonly attrDomainType: ros.IResolvable | string;

    /**
     * Attribute IcpStatus: The status of ICP filing.
     */
    public readonly attrIcpStatus: ros.IResolvable | string;

    /**
     * Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    public readonly attrMxAuthStatus: ros.IResolvable | string;

    /**
     * Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    public readonly attrMxRecord: ros.IResolvable | string;

    /**
     * Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    public readonly attrSpfAuthStatus: ros.IResolvable | string;

    /**
     * Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    public readonly attrSpfRecord: ros.IResolvable | string;

    /**
     * Attribute TlDomainName: The primary domain name.
     */
    public readonly attrTlDomainName: ros.IResolvable | string;

    /**
     * Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    public readonly attrTracefRecord: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomain = new RosDomain(this, id,  {
            domainId: props.domainId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomain;
        this.attrCnameAuthStatus = rosDomain.attrCnameAuthStatus;
        this.attrCnameConfirmStatus = rosDomain.attrCnameConfirmStatus;
        this.attrCnameRecord = rosDomain.attrCnameRecord;
        this.attrCreateTime = rosDomain.attrCreateTime;
        this.attrDefaultDomain = rosDomain.attrDefaultDomain;
        this.attrDnsMx = rosDomain.attrDnsMx;
        this.attrDnsSpf = rosDomain.attrDnsSpf;
        this.attrDnsTxt = rosDomain.attrDnsTxt;
        this.attrDomainId = rosDomain.attrDomainId;
        this.attrDomainName = rosDomain.attrDomainName;
        this.attrDomainType = rosDomain.attrDomainType;
        this.attrIcpStatus = rosDomain.attrIcpStatus;
        this.attrMxAuthStatus = rosDomain.attrMxAuthStatus;
        this.attrMxRecord = rosDomain.attrMxRecord;
        this.attrSpfAuthStatus = rosDomain.attrSpfAuthStatus;
        this.attrSpfRecord = rosDomain.attrSpfRecord;
        this.attrTlDomainName = rosDomain.attrTlDomainName;
        this.attrTracefRecord = rosDomain.attrTracefRecord;
    }
}
