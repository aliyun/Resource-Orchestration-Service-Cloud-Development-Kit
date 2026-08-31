// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDomainProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the result of the validation.
 */
function RosDomainPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainId', ros.requiredValidator)(properties.domainId));
    errors.collect(ros.propertyValidator('domainId', ros.validateString)(properties.domainId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainId': ros.stringToRosTemplate(properties.domainId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Domain`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Domain";

    /**
     * @Attribute CnameAuthStatus: Whether the host record of CNAME has been changed.
     */
    public readonly attrCnameAuthStatus: ros.IResolvable;

    /**
     * @Attribute CnameConfirmStatus: Whether the host record of CNAME has been changed.
     */
    public readonly attrCnameConfirmStatus: ros.IResolvable;

    /**
     * @Attribute CnameRecord: Customized part of CNAME host record.
     */
    public readonly attrCnameRecord: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time of the resource.The time when the DNS record was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DefaultDomain: Is it the default domain name.
     */
    public readonly attrDefaultDomain: ros.IResolvable;

    /**
     * @Attribute DnsMx: MX record value resolved through public DNS.
     */
    public readonly attrDnsMx: ros.IResolvable;

    /**
     * @Attribute DnsSpf: SPF record value resolved through public DNS.
     */
    public readonly attrDnsSpf: ros.IResolvable;

    /**
     * @Attribute DnsTxt: TXT record value resolved through public DNS.
     */
    public readonly attrDnsTxt: ros.IResolvable;

    /**
     * @Attribute DomainId: The ID of the domain name.
     */
    public readonly attrDomainId: ros.IResolvable;

    /**
     * @Attribute DomainName: The domain name.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute DomainType: TXT records provided by the Direct Mail console.
     */
    public readonly attrDomainType: ros.IResolvable;

    /**
     * @Attribute IcpStatus: The status of ICP filing.
     */
    public readonly attrIcpStatus: ros.IResolvable;

    /**
     * @Attribute MxAuthStatus: Indicates whether the MX record is successfully verified.
     */
    public readonly attrMxAuthStatus: ros.IResolvable;

    /**
     * @Attribute MxRecord: MX records provided by the Direct Mail console.
     */
    public readonly attrMxRecord: ros.IResolvable;

    /**
     * @Attribute SpfAuthStatus: Indicates whether the SPF record is successfully verified.
     */
    public readonly attrSpfAuthStatus: ros.IResolvable;

    /**
     * @Attribute SpfRecord: Spf records provided by the Direct Mail console.
     */
    public readonly attrSpfRecord: ros.IResolvable;

    /**
     * @Attribute TlDomainName: The primary domain name.
     */
    public readonly attrTlDomainName: ros.IResolvable;

    /**
     * @Attribute TracefRecord: The CNAME verification record provided by the Direct Mail console.
     */
    public readonly attrTracefRecord: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainId: The ID of the domain name.
     */
    public domainId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

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
        this.domainId = props.domainId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainId: this.domainId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDomainsProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the result of the validation.
 */
function RosDomainsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDomainsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Domains` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Domains` resource.
 */
// @ts-ignore TS6133
function rosDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainsPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Domains`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
 */
export class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Domains";

    /**
     * @Attribute DomainIds: The list of domain IDs.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * @Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomains.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDomainIds = this.getAtt('DomainIds');
        this.attrDomains = this.getAtt('Domains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosIpfilterProps`
 *
 * @param properties - the TypeScript properties of a `RosIpfilterProps`
 *
 * @returns the result of the validation.
 */
function RosIpfilterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ipfilterId', ros.requiredValidator)(properties.ipfilterId));
    errors.collect(ros.propertyValidator('ipfilterId', ros.validateString)(properties.ipfilterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosIpfilterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Ipfilter` resource
 *
 * @param properties - the TypeScript properties of a `RosIpfilterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Ipfilter` resource.
 */
// @ts-ignore TS6133
function rosIpfilterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpfilterPropsValidator(properties).assertSuccess();
    }
    return {
      'IpfilterId': ros.stringToRosTemplate(properties.ipfilterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Ipfilter`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilter` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilter
 */
export class RosIpfilter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Ipfilter";

    /**
     * @Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute IpAddress: The IP address of the resource.
     */
    public readonly attrIpAddress: ros.IResolvable;

    /**
     * @Attribute IpfilterId: The ID of the resource.
     */
    public readonly attrIpfilterId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property ipfilterId: The ID of the resource.
     */
    public ipfilterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

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
        this.ipfilterId = props.ipfilterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            ipfilterId: this.ipfilterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpfilterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosIpfiltersProps`
 *
 * @param properties - the TypeScript properties of a `RosIpfiltersProps`
 *
 * @returns the result of the validation.
 */
function RosIpfiltersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosIpfiltersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Ipfilters` resource
 *
 * @param properties - the TypeScript properties of a `RosIpfiltersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::DirectMail::Ipfilters` resource.
 */
// @ts-ignore TS6133
function rosIpfiltersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIpfiltersPropsValidator(properties).assertSuccess();
    }
    return {
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::DirectMail::Ipfilters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Ipfilters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-ipfilters
 */
export class RosIpfilters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::DirectMail::Ipfilters";

    /**
     * @Attribute IpfilterIds: The list of ip filter IDs.
     */
    public readonly attrIpfilterIds: ros.IResolvable;

    /**
     * @Attribute Ipfilters: The list of ip filters.
     */
    public readonly attrIpfilters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIpfiltersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIpfilters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrIpfilterIds = this.getAtt('IpfilterIds');
        this.attrIpfilters = this.getAtt('Ipfilters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIpfiltersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
