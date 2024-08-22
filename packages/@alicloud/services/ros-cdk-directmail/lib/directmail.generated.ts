// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DirectMail::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DirectMail::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DirectMail::Domain`, which is used to create a domain name in Direct Mail.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DirectMail::Domain";

    /**
     * @Attribute CnameAuthStatus: Cname auth status.
     */
    public readonly attrCnameAuthStatus: ros.IResolvable;

    /**
     * @Attribute CnameConfirmStatus: Cname confirm status.
     */
    public readonly attrCnameConfirmStatus: ros.IResolvable;

    /**
     * @Attribute CnameRecord: Cname record.
     */
    public readonly attrCnameRecord: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the domain.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DefaultDomain: Default domain.
     */
    public readonly attrDefaultDomain: ros.IResolvable;

    /**
     * @Attribute DnsMx: DNS MX.
     */
    public readonly attrDnsMx: ros.IResolvable;

    /**
     * @Attribute DnsSpf: DNS SPF.
     */
    public readonly attrDnsSpf: ros.IResolvable;

    /**
     * @Attribute DnsTxt: DNS txt.
     */
    public readonly attrDnsTxt: ros.IResolvable;

    /**
     * @Attribute DomainId: The ID of the domain.
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * @Attribute DomainName: The name of the domain.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute DomainType: The type of the domain.
     */
    public readonly attrDomainType: ros.IResolvable;

    /**
     * @Attribute IcpStatus: ICP status.
     */
    public readonly attrIcpStatus: ros.IResolvable;

    /**
     * @Attribute MxAuthStatus: MX auth status.
     */
    public readonly attrMxAuthStatus: ros.IResolvable;

    /**
     * @Attribute MxRecord: MX Record.
     */
    public readonly attrMxRecord: ros.IResolvable;

    /**
     * @Attribute SpfAuthStatus: SPF auth status.
     */
    public readonly attrSpfAuthStatus: ros.IResolvable;

    /**
     * @Attribute SpfRecord: SPF record.
     */
    public readonly attrSpfRecord: ros.IResolvable;

    /**
     * @Attribute TlDomainName: TL domain name.
     */
    public readonly attrTlDomainName: ros.IResolvable;

    /**
     * @Attribute TracefRecord: Tracef Record.
     */
    public readonly attrTracefRecord: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The name of the domain.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCnameAuthStatus = this.getAtt('CnameAuthStatus');
        this.attrCnameConfirmStatus = this.getAtt('CnameConfirmStatus');
        this.attrCnameRecord = this.getAtt('CnameRecord');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDefaultDomain = this.getAtt('DefaultDomain');
        this.attrDnsMx = this.getAtt('DnsMx');
        this.attrDnsSpf = this.getAtt('DnsSpf');
        this.attrDnsTxt = this.getAtt('DnsTxt');
        this.attrDomainId = this.getAtt('DomainId');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrDomainType = this.getAtt('DomainType');
        this.attrIcpStatus = this.getAtt('IcpStatus');
        this.attrMxAuthStatus = this.getAtt('MxAuthStatus');
        this.attrMxRecord = this.getAtt('MxRecord');
        this.attrSpfAuthStatus = this.getAtt('SpfAuthStatus');
        this.attrSpfRecord = this.getAtt('SpfRecord');
        this.attrTlDomainName = this.getAtt('TlDomainName');
        this.attrTracefRecord = this.getAtt('TracefRecord');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosIpfilterProps`
 *
 * @param properties - the TypeScript properties of a `RosIpfilterProps`
 *
 * @returns the result of the validation.
 */
function RosIpfilterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipAddress', ros.requiredValidator)(properties.ipAddress));
    errors.collect(ros.propertyValidator('ipAddress', ros.validateString)(properties.ipAddress));
    return errors.wrap('supplied properties not correct for "RosIpfilterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DirectMail::Ipfilter` resource
 *
 * @param properties - the TypeScript properties of a `RosIpfilterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DirectMail::Ipfilter` resource.
 */
// @ts-ignore TS6133
function rosIpfilterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpfilterPropsValidator(properties).assertSuccess();
    }
    return {
      'IpAddress': ros.stringToRosTemplate(properties.ipAddress),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DirectMail::Ipfilter`, which is used to add an IP filter.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-directmail-ipfilter
 */
export class RosIpfilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DirectMail::Ipfilter";

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute IpAddress: The whitelist IP address.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute IpfilterId: The ID of the IP filter.
     */
    public readonly attrIpfilterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipAddress: The whitelist IP address.
     */
    public ipAddress: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpfilterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpfilter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrIpAddress = this.getAtt('IpAddress');
        this.attrIpfilterId = this.getAtt('IpfilterId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.ipAddress = props.ipAddress;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipAddress: this.ipAddress,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpfilterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
