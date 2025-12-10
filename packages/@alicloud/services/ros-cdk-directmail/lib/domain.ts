import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomain as DomainProperty };

/**
 * Properties for defining a `Domain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export interface DomainProps {

    /**
     * Property domainName: The name of the domain.
     */
    readonly domainName: string | ros.IResolvable;
}

/**
 * Represents a `Domain`.
 */
export interface IDomain extends ros.IResource {
    readonly props: DomainProps;

    /**
     * Attribute CnameAuthStatus: Cname auth status.
     */
    readonly attrCnameAuthStatus: ros.IResolvable | string;

    /**
     * Attribute CnameConfirmStatus: Cname confirm status.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable | string;

    /**
     * Attribute CnameRecord: Cname record.
     */
    readonly attrCnameRecord: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the domain.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DefaultDomain: Default domain.
     */
    readonly attrDefaultDomain: ros.IResolvable | string;

    /**
     * Attribute DnsMx: DNS MX.
     */
    readonly attrDnsMx: ros.IResolvable | string;

    /**
     * Attribute DnsSpf: DNS SPF.
     */
    readonly attrDnsSpf: ros.IResolvable | string;

    /**
     * Attribute DnsTxt: DNS txt.
     */
    readonly attrDnsTxt: ros.IResolvable | string;

    /**
     * Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable | string;

    /**
     * Attribute DomainName: The name of the domain.
     */
    readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute DomainType: The type of the domain.
     */
    readonly attrDomainType: ros.IResolvable | string;

    /**
     * Attribute IcpStatus: ICP status.
     */
    readonly attrIcpStatus: ros.IResolvable | string;

    /**
     * Attribute MxAuthStatus: MX auth status.
     */
    readonly attrMxAuthStatus: ros.IResolvable | string;

    /**
     * Attribute MxRecord: MX Record.
     */
    readonly attrMxRecord: ros.IResolvable | string;

    /**
     * Attribute SpfAuthStatus: SPF auth status.
     */
    readonly attrSpfAuthStatus: ros.IResolvable | string;

    /**
     * Attribute SpfRecord: SPF record.
     */
    readonly attrSpfRecord: ros.IResolvable | string;

    /**
     * Attribute TlDomainName: TL domain name.
     */
    readonly attrTlDomainName: ros.IResolvable | string;

    /**
     * Attribute TracefRecord: Tracef Record.
     */
    readonly attrTracefRecord: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DirectMail::Domain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export class Domain extends ros.Resource implements IDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CnameAuthStatus: Cname auth status.
     */
    public readonly attrCnameAuthStatus: ros.IResolvable | string;

    /**
     * Attribute CnameConfirmStatus: Cname confirm status.
     */
    public readonly attrCnameConfirmStatus: ros.IResolvable | string;

    /**
     * Attribute CnameRecord: Cname record.
     */
    public readonly attrCnameRecord: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the domain.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DefaultDomain: Default domain.
     */
    public readonly attrDefaultDomain: ros.IResolvable | string;

    /**
     * Attribute DnsMx: DNS MX.
     */
    public readonly attrDnsMx: ros.IResolvable | string;

    /**
     * Attribute DnsSpf: DNS SPF.
     */
    public readonly attrDnsSpf: ros.IResolvable | string;

    /**
     * Attribute DnsTxt: DNS txt.
     */
    public readonly attrDnsTxt: ros.IResolvable | string;

    /**
     * Attribute DomainId: The ID of the domain.
     */
    public readonly attrDomainId: ros.IResolvable | string;

    /**
     * Attribute DomainName: The name of the domain.
     */
    public readonly attrDomainName: ros.IResolvable | string;

    /**
     * Attribute DomainType: The type of the domain.
     */
    public readonly attrDomainType: ros.IResolvable | string;

    /**
     * Attribute IcpStatus: ICP status.
     */
    public readonly attrIcpStatus: ros.IResolvable | string;

    /**
     * Attribute MxAuthStatus: MX auth status.
     */
    public readonly attrMxAuthStatus: ros.IResolvable | string;

    /**
     * Attribute MxRecord: MX Record.
     */
    public readonly attrMxRecord: ros.IResolvable | string;

    /**
     * Attribute SpfAuthStatus: SPF auth status.
     */
    public readonly attrSpfAuthStatus: ros.IResolvable | string;

    /**
     * Attribute SpfRecord: SPF record.
     */
    public readonly attrSpfRecord: ros.IResolvable | string;

    /**
     * Attribute TlDomainName: TL domain name.
     */
    public readonly attrTlDomainName: ros.IResolvable | string;

    /**
     * Attribute TracefRecord: Tracef Record.
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
            domainName: props.domainName,
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
