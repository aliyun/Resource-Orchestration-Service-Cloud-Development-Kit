import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export interface RosDomainProps {
    /**
     * @Property domainName: The name of the domain.
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DirectMail::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DirectMail::Domain";
    /**
     * @Attribute CnameAuthStatus: Cname auth status.
     */
    readonly attrCnameAuthStatus: ros.IResolvable;
    /**
     * @Attribute CnameConfirmStatus: Cname confirm status.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable;
    /**
     * @Attribute CnameRecord: Cname record.
     */
    readonly attrCnameRecord: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the domain.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DefaultDomain: Default domain.
     */
    readonly attrDefaultDomain: ros.IResolvable;
    /**
     * @Attribute DnsMx: DNS MX.
     */
    readonly attrDnsMx: ros.IResolvable;
    /**
     * @Attribute DnsSpf: DNS SPF.
     */
    readonly attrDnsSpf: ros.IResolvable;
    /**
     * @Attribute DnsTxt: DNS txt.
     */
    readonly attrDnsTxt: ros.IResolvable;
    /**
     * @Attribute DomainId: The ID of the domain.
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * @Attribute DomainName: The name of the domain.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute DomainType: The type of the domain.
     */
    readonly attrDomainType: ros.IResolvable;
    /**
     * @Attribute IcpStatus: ICP status.
     */
    readonly attrIcpStatus: ros.IResolvable;
    /**
     * @Attribute MxAuthStatus: MX auth status.
     */
    readonly attrMxAuthStatus: ros.IResolvable;
    /**
     * @Attribute MxRecord: MX Record.
     */
    readonly attrMxRecord: ros.IResolvable;
    /**
     * @Attribute SpfAuthStatus: SPF auth status.
     */
    readonly attrSpfAuthStatus: ros.IResolvable;
    /**
     * @Attribute SpfRecord: SPF record.
     */
    readonly attrSpfRecord: ros.IResolvable;
    /**
     * @Attribute TlDomainName: TL domain name.
     */
    readonly attrTlDomainName: ros.IResolvable;
    /**
     * @Attribute TracefRecord: Tracef Record.
     */
    readonly attrTracefRecord: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainName: The name of the domain.
     */
    domainName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosIpfilter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
 */
export interface RosIpfilterProps {
    /**
     * @Property ipAddress: The whitelist IP address.
     */
    readonly ipAddress: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DirectMail::Ipfilter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
 */
export declare class RosIpfilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DirectMail::Ipfilter";
    /**
     * @Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute IpAddress: The whitelist IP address.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute IpfilterId: The ID of the IP filter.
     */
    readonly attrIpfilterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipAddress: The whitelist IP address.
     */
    ipAddress: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpfilterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
