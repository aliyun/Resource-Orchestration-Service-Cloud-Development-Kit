// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
 */
export interface RosDomainProps {

    /**
     * @Property domainName: The accelerated domain name.
     */
    readonly domainName: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CDN::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CDN::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDN::Domain`, which is used to query the information about an accelerated domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDN::Domain";

    /**
     * @Attribute CdnType: The workload type of the accelerated domain name.
     */
    public readonly attrCdnType: ros.IResolvable;

    /**
     * @Attribute CertificateConfig: Certificate configuration.
     */
    public readonly attrCertificateConfig: ros.IResolvable;

    /**
     * @Attribute Cname: The CNAME that is assigned to the accelerated domain name.
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * @Attribute DomainName: The accelerated domain name.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Scope: The acceleration region.
     */
    public readonly attrScope: ros.IResolvable;

    /**
     * @Attribute Sources: The information about the origin server.
     */
    public readonly attrSources: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The accelerated domain name.
     */
    public domainName: string | ros.IResolvable;

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
        this.attrCdnType = this.getAtt('CdnType');
        this.attrCertificateConfig = this.getAtt('CertificateConfig');
        this.attrCname = this.getAtt('Cname');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrScope = this.getAtt('Scope');
        this.attrSources = this.getAtt('Sources');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export interface RosDomainsProps {

    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;

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
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::CDN::Domains` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::CDN::Domains` resource.
 */
// @ts-ignore TS6133
function rosDomainsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainsPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::CDN::Domains`, which is used to query the basic information about created accelerated domain names.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domains` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export class RosDomains extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::CDN::Domains";

    /**
     * @Attribute DomainNames: The list of domain names.
     */
    public readonly attrDomainNames: ros.IResolvable;

    /**
     * @Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    public domainName: string | ros.IResolvable;

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
        this.attrDomainNames = this.getAtt('DomainNames');
        this.attrDomains = this.getAtt('Domains');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
