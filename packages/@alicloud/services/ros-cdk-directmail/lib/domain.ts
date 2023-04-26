import * as ros from '@alicloud/ros-cdk-core';
import { RosDomain } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Domain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CnameAuthStatus: Cname auth status.
     */
    public readonly attrCnameAuthStatus: ros.IResolvable;

    /**
     * Attribute CnameConfirmStatus: Cname confirm status.
     */
    public readonly attrCnameConfirmStatus: ros.IResolvable;

    /**
     * Attribute CnameRecord: Cname record.
     */
    public readonly attrCnameRecord: ros.IResolvable;

    /**
     * Attribute CreateTime: The creation time of the domain.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute DefaultDomain: Default domain.
     */
    public readonly attrDefaultDomain: ros.IResolvable;

    /**
     * Attribute DnsMx: DNS MX.
     */
    public readonly attrDnsMx: ros.IResolvable;

    /**
     * Attribute DnsSpf: DNS SPF.
     */
    public readonly attrDnsSpf: ros.IResolvable;

    /**
     * Attribute DnsTxt: DNS txt.
     */
    public readonly attrDnsTxt: ros.IResolvable;

    /**
     * Attribute DomainId: The ID of the domain.
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * Attribute DomainName: The name of the domain.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * Attribute DomainType: The type of the domain.
     */
    public readonly attrDomainType: ros.IResolvable;

    /**
     * Attribute IcpStatus: ICP status.
     */
    public readonly attrIcpStatus: ros.IResolvable;

    /**
     * Attribute MxAuthStatus: MX auth status.
     */
    public readonly attrMxAuthStatus: ros.IResolvable;

    /**
     * Attribute MxRecord: MX Record.
     */
    public readonly attrMxRecord: ros.IResolvable;

    /**
     * Attribute SpfAuthStatus: SPF auth status.
     */
    public readonly attrSpfAuthStatus: ros.IResolvable;

    /**
     * Attribute SpfRecord: SPF record.
     */
    public readonly attrSpfRecord: ros.IResolvable;

    /**
     * Attribute TlDomainName: TL domain name.
     */
    public readonly attrTlDomainName: ros.IResolvable;

    /**
     * Attribute TracefRecord: Tracef Record.
     */
    public readonly attrTracefRecord: ros.IResolvable;

    /**
     * Create a new `ALIYUN::DirectMail::Domain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
