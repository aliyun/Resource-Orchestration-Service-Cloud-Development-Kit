import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domain
 */
export interface RosDomainProps {
    /**
     * @Property domainId: The ID of the domain name.
     */
    readonly domainId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domain
 */
export declare class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Domain";
    /**
     * @Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    readonly attrCnameAuthStatus: ros.IResolvable;
    /**
     * @Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    readonly attrCnameConfirmStatus: ros.IResolvable;
    /**
     * @Attribute CnameRecord: Customized part of CNAME host record.
     */
    readonly attrCnameRecord: ros.IResolvable;
    /**
     * @Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute DefaultDomain: Is it the default domain name.
     */
    readonly attrDefaultDomain: ros.IResolvable;
    /**
     * @Attribute DnsMx: MX record value resolved through public DNS.
     */
    readonly attrDnsMx: ros.IResolvable;
    /**
     * @Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    readonly attrDnsSpf: ros.IResolvable;
    /**
     * @Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    readonly attrDnsTxt: ros.IResolvable;
    /**
     * @Attribute DomainId: The ID of the domain name.
     */
    readonly attrDomainId: ros.IResolvable;
    /**
     * @Attribute DomainName: The domain name.
     */
    readonly attrDomainName: ros.IResolvable;
    /**
     * @Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    readonly attrDomainType: ros.IResolvable;
    /**
     * @Attribute IcpStatus: The status of ICP filing.
     */
    readonly attrIcpStatus: ros.IResolvable;
    /**
     * @Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    readonly attrMxAuthStatus: ros.IResolvable;
    /**
     * @Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    readonly attrMxRecord: ros.IResolvable;
    /**
     * @Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    readonly attrSpfAuthStatus: ros.IResolvable;
    /**
     * @Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    readonly attrSpfRecord: ros.IResolvable;
    /**
     * @Attribute TlDomainName: The primary domain name.
     */
    readonly attrTlDomainName: ros.IResolvable;
    /**
     * @Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    readonly attrTracefRecord: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property domainId: The ID of the domain name.
     */
    domainId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
 * Properties for defining a `RosDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export interface RosDomainsProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Domains`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export declare class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Domains";
    /**
     * @Attribute DomainIds: The list of domain IDs.
     */
    readonly attrDomainIds: ros.IResolvable;
    /**
     * @Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
 */
export interface RosIpfilterProps {
    /**
     * @Property ipfilterId: The ID of the resource.
     */
    readonly ipfilterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Ipfilter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
 */
export declare class RosIpfilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Ipfilter";
    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute IpAddress: The IP address of the resource.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * @Attribute IpfilterId: The ID of the resource.
     */
    readonly attrIpfilterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property ipfilterId: The ID of the resource.
     */
    ipfilterId: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
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
/**
 * Properties for defining a `RosIpfilters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export interface RosIpfiltersProps {
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Ipfilters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export declare class RosIpfilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Ipfilters";
    /**
     * @Attribute IpfilterIds: The list of ip filter IDs.
     */
    readonly attrIpfilterIds: ros.IResolvable;
    /**
     * @Attribute Ipfilters: The list of ip filters.
     */
    readonly attrIpfilters: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpfiltersProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
