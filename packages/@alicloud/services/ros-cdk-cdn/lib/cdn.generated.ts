// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CDN::Domain`
 */
export interface RosDomainProps {

    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    readonly cdnType: string | ros.IResolvable;

    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property checkUrl: The validation of the origin.
     */
    readonly checkUrl?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    readonly scope?: string | ros.IResolvable;

    /**
     * @Property sources: The list of origin URLs.
     */
    readonly sources?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDomain.TagsProperty[];

    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    readonly topLevelDomain?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('checkUrl', ros.validateString)(properties.checkUrl));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('scope', ros.validateString)(properties.scope));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('cdnType', ros.requiredValidator)(properties.cdnType));
    if(properties.cdnType && (typeof properties.cdnType) !== 'object') {
        errors.collect(ros.propertyValidator('cdnType', ros.validateAllowedValues)({
          data: properties.cdnType,
          allowedValues: ["video","download","web","liveStream"],
        }));
    }
    errors.collect(ros.propertyValidator('cdnType', ros.validateString)(properties.cdnType));
    errors.collect(ros.propertyValidator('topLevelDomain', ros.validateString)(properties.topLevelDomain));
    errors.collect(ros.propertyValidator('sources', ros.validateString)(properties.sources));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDomain_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDomainProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      CdnType: ros.stringToRosTemplate(properties.cdnType),
      DomainName: ros.stringToRosTemplate(properties.domainName),
      CheckUrl: ros.stringToRosTemplate(properties.checkUrl),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Scope: ros.stringToRosTemplate(properties.scope),
      Sources: ros.stringToRosTemplate(properties.sources),
      Tags: ros.listMapper(rosDomainTagsPropertyToRosTemplate)(properties.tags),
      TopLevelDomain: ros.stringToRosTemplate(properties.topLevelDomain),
    };
}

/**
 * A ROS template type:  `ALIYUN::CDN::Domain`
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::Domain";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Cname: The CNAME generated for the CDN domain.You must add a CNAME record with your DNS provider to map the CDN domain name to the CNAME.
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * @Attribute DomainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public readonly attrDomainName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cdnType: The business type. Valid values: web, download, video, livestream, and httpsdelivery. web: acceleration of images and small files download. download: acceleration of large file downloads. video: live streaming acceleration. httpsdelivery: SSL acceleration for HTTPS.
     */
    public cdnType: string | ros.IResolvable;

    /**
     * @Property domainName: The CDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property checkUrl: The validation of the origin.
     */
    public checkUrl: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group. If this is left blank, the system automatically fills in the ID of the default resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property scope: Valid values: domestic, overseas, and global. Default value: domestic. The setting is supported for users outside mainland China, users in mainland China of level 3 or above.
     */
    public scope: string | ros.IResolvable | undefined;

    /**
     * @Property sources: The list of origin URLs.
     */
    public sources: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDomain.TagsProperty[] | undefined;

    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    public topLevelDomain: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CDN::Domain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCname = this.getAtt('Cname');
        this.attrDomainName = this.getAtt('DomainName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cdnType = props.cdnType;
        this.domainName = props.domainName;
        this.checkUrl = props.checkUrl;
        this.resourceGroupId = props.resourceGroupId;
        this.scope = props.scope;
        this.sources = props.sources;
        this.tags = props.tags;
        this.topLevelDomain = props.topLevelDomain;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cdnType: this.cdnType,
            domainName: this.domainName,
            checkUrl: this.checkUrl,
            resourceGroupId: this.resourceGroupId,
            scope: this.scope,
            sources: this.sources,
            tags: this.tags,
            topLevelDomain: this.topLevelDomain,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDomain {
    /**
     * @stability external
     */
    export interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain.Tags` resource.
 */
// @ts-ignore TS6133
function rosDomainTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::CDN::DomainConfig`
 */
export interface RosDomainConfigProps {

    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string | ros.IResolvable;

    /**
     * @Property functions: function list, please refer to the CDN documentation for details.
     */
    readonly functions: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDomainConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosDomainConfigProps`
 *
 * @returns the result of the validation.
 */
function RosDomainConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functions', ros.requiredValidator)(properties.functions));
    errors.collect(ros.propertyValidator('functions', ros.validateString)(properties.functions));
    errors.collect(ros.propertyValidator('domainNames', ros.requiredValidator)(properties.domainNames));
    errors.collect(ros.propertyValidator('domainNames', ros.validateString)(properties.domainNames));
    return errors.wrap('supplied properties not correct for "RosDomainConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig` resource.
 */
// @ts-ignore TS6133
function rosDomainConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainConfigPropsValidator(properties).assertSuccess();
    }
    return {
      DomainNames: ros.stringToRosTemplate(properties.domainNames),
      Functions: ros.stringToRosTemplate(properties.functions),
    };
}

/**
 * A ROS template type:  `ALIYUN::CDN::DomainConfig`
 */
export class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DomainConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    public domainNames: string | ros.IResolvable;

    /**
     * @Property functions: function list, please refer to the CDN documentation for details.
     */
    public functions: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CDN::DomainConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainNames = props.domainNames;
        this.functions = props.functions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainNames: this.domainNames,
            functions: this.functions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
