// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
 */
export interface RosDomainProps {

    /**
     * @Property domainName: The DCDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property sources: The list of origin URLs.
     */
    readonly sources: Array<RosDomain.SourcesProperty | ros.IResolvable> | ros.IResolvable;

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
    if(properties.scope && (typeof properties.scope) !== 'object') {
        errors.collect(ros.propertyValidator('scope', ros.validateAllowedValues)({
          data: properties.scope,
          allowedValues: ["domestic","overseas","global"],
        }));
    }
    errors.collect(ros.propertyValidator('scope', ros.validateString)(properties.scope));
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('topLevelDomain', ros.validateString)(properties.topLevelDomain));
    errors.collect(ros.propertyValidator('sources', ros.requiredValidator)(properties.sources));
    if(properties.sources && (Array.isArray(properties.sources) || (typeof properties.sources) === 'string')) {
        errors.collect(ros.propertyValidator('sources', ros.validateLength)({
            data: properties.sources.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('sources', ros.listValidator(RosDomain_SourcesPropertyValidator))(properties.sources));
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DCDN::Domain` resource
 *
 * @param properties - the TypeScript properties of a `RosDomainProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DCDN::Domain` resource.
 */
// @ts-ignore TS6133
function rosDomainPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDomainPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'Sources': ros.listMapper(rosDomainSourcesPropertyToRosTemplate)(properties.sources),
      'CheckUrl': ros.stringToRosTemplate(properties.checkUrl),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Scope': ros.stringToRosTemplate(properties.scope),
      'Tags': ros.listMapper(rosDomainTagsPropertyToRosTemplate)(properties.tags),
      'TopLevelDomain': ros.stringToRosTemplate(properties.topLevelDomain),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DCDN::Domain`, which is used to add a Dynamic Route for CDN (DCDN) domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dcdn-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DCDN::Domain";

    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable;

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
     * @Property domainName: The DCDN domain name. Wildcard domain names that start with periods (.) are supported. For example, .a.com.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property sources: The list of origin URLs.
     */
    public sources: Array<RosDomain.SourcesProperty | ros.IResolvable> | ros.IResolvable;

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
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosDomain.TagsProperty[] | undefined;

    /**
     * @Property topLevelDomain: The top-level domain, which can only be configured by users on the whitelist.
     */
    public topLevelDomain: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomain.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrArn = this.getAtt('Arn');
        this.attrCname = this.getAtt('Cname');
        this.attrDomainName = this.getAtt('DomainName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.sources = props.sources;
        this.checkUrl = props.checkUrl;
        this.resourceGroupId = props.resourceGroupId;
        this.scope = props.scope;
        this.tags = props.tags;
        this.topLevelDomain = props.topLevelDomain;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            sources: this.sources,
            checkUrl: this.checkUrl,
            resourceGroupId: this.resourceGroupId,
            scope: this.scope,
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
    export interface SourcesProperty {
        /**
         * @Property type: The type of the origin server. Valid values:
     * ipaddr: the IP address
     * domain: the domain name
     * oss: the endpoint of an Object Storage Service (OSS) bucket
     * fc_domain: the domain name of Function Compute
         */
        readonly type: string | ros.IResolvable;
        /**
         * @Property content: The address of the origin server. You can specify an IP address or a domain name.
         */
        readonly content: string | ros.IResolvable;
        /**
         * @Property priority: The priority of the origin server if multiple origin servers are specified. Default value: 20. Valid values:
     * 20: the primary origin server
     * 30: the secondary origin server
         */
        readonly priority?: string | ros.IResolvable;
        /**
         * @Property port: The port. Valid values:
     * 80: the default port
     * 443: the HTTPS port
     * A custom port
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the origin server if multiple origin servers are specified. Valid values: 0 to 100. Default value: 10.
         */
        readonly weight?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SourcesProperty`
 *
 * @param properties - the TypeScript properties of a `SourcesProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_SourcesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["ipaddr","domain","oss","fc_domain"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateAllowedValues)({
          data: properties.priority,
          allowedValues: ["20","30"],
        }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateString)(properties.priority));
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('weight', ros.validateString)(properties.weight));
    return errors.wrap('supplied properties not correct for "SourcesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DCDN::Domain.Sources` resource
 *
 * @param properties - the TypeScript properties of a `SourcesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DCDN::Domain.Sources` resource.
 */
// @ts-ignore TS6133
function rosDomainSourcesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_SourcesPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Content': ros.stringToRosTemplate(properties.content),
      'Priority': ros.stringToRosTemplate(properties.priority),
      'Port': ros.numberToRosTemplate(properties.port),
      'Weight': ros.stringToRosTemplate(properties.weight),
    };
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
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DCDN::Domain.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DCDN::Domain.Tags` resource.
 */
// @ts-ignore TS6133
function rosDomainTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
