// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosDeliverTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
export interface RosDeliverTaskProps {

    /**
     * @Property deliver: The deliver of the CDN deliver task.
     */
    readonly deliver: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property name: The name of the CDN deliver task.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property reports: The reports of the CDN deliver task.
     */
    readonly reports: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property schedule: The schedule of the CDN deliver task.
     */
    readonly schedule: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property domainNames: The domain name of the CDN deliver task.
     */
    readonly domainNames?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDeliverTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosDeliverTaskProps`
 *
 * @returns the result of the validation.
 */
function RosDeliverTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deliver', ros.requiredValidator)(properties.deliver));
    errors.collect(ros.propertyValidator('deliver', ros.hashValidator(ros.validateAny))(properties.deliver));
    errors.collect(ros.propertyValidator('schedule', ros.requiredValidator)(properties.schedule));
    errors.collect(ros.propertyValidator('schedule', ros.hashValidator(ros.validateAny))(properties.schedule));
    errors.collect(ros.propertyValidator('reports', ros.requiredValidator)(properties.reports));
    errors.collect(ros.propertyValidator('reports', ros.listValidator(ros.validateAny))(properties.reports));
    if(properties.domainNames && (Array.isArray(properties.domainNames) || (typeof properties.domainNames) === 'string')) {
        errors.collect(ros.propertyValidator('domainNames', ros.validateLength)({
            data: properties.domainNames.length,
            min: 1,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('domainNames', ros.listValidator(ros.validateString))(properties.domainNames));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosDeliverTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::DeliverTask` resource
 *
 * @param properties - the TypeScript properties of a `RosDeliverTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::DeliverTask` resource.
 */
// @ts-ignore TS6133
function rosDeliverTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeliverTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'Deliver': ros.hashMapper(ros.objectToRosTemplate)(properties.deliver),
      'Name': ros.stringToRosTemplate(properties.name),
      'Reports': ros.listMapper(ros.objectToRosTemplate)(properties.reports),
      'Schedule': ros.hashMapper(ros.objectToRosTemplate)(properties.schedule),
      'DomainNames': ros.listMapper(ros.stringToRosTemplate)(properties.domainNames),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::DeliverTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeliverTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-delivertask
 */
export class RosDeliverTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DeliverTask";

    /**
     * @Attribute DeliverId: The deliver ID of the CDN deliver task.
     */
    public readonly attrDeliverId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deliver: The deliver of the CDN deliver task.
     */
    public deliver: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property name: The name of the CDN deliver task.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property reports: The reports of the CDN deliver task.
     */
    public reports: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property schedule: The schedule of the CDN deliver task.
     */
    public schedule: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property domainNames: The domain name of the CDN deliver task.
     */
    public domainNames: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeliverTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeliverTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeliverId = this.getAtt('DeliverId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deliver = props.deliver;
        this.name = props.name;
        this.reports = props.reports;
        this.schedule = props.schedule;
        this.domainNames = props.domainNames;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deliver: this.deliver,
            name: this.name,
            reports: this.reports,
            schedule: this.schedule,
            domainNames: this.domainNames,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeliverTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
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
     * @Property originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
     */
    readonly originServers?: Array<RosDomain.OriginServersProperty | ros.IResolvable> | ros.IResolvable;

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
    if(properties.originServers && (Array.isArray(properties.originServers) || (typeof properties.originServers) === 'string')) {
        errors.collect(ros.propertyValidator('originServers', ros.validateLength)({
            data: properties.originServers.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('originServers', ros.listValidator(RosDomain_OriginServersPropertyValidator))(properties.originServers));
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
      'CdnType': ros.stringToRosTemplate(properties.cdnType),
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'CheckUrl': ros.stringToRosTemplate(properties.checkUrl),
      'OriginServers': ros.listMapper(rosDomainOriginServersPropertyToRosTemplate)(properties.originServers),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Scope': ros.stringToRosTemplate(properties.scope),
      'Sources': ros.stringToRosTemplate(properties.sources),
      'Tags': ros.listMapper(rosDomainTagsPropertyToRosTemplate)(properties.tags),
      'TopLevelDomain': ros.stringToRosTemplate(properties.topLevelDomain),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::Domain`, which is used to add an accelerated domain name.
 * @Note This class does not contain additional functions, so it is recommended to use the `Domain` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domain
 */
export class RosDomain extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::Domain";

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
     * @Property originServers: The list of origin URLs. It has the same function as Sources, but has a higher priority than it.
     */
    public originServers: Array<RosDomain.OriginServersProperty | ros.IResolvable> | ros.IResolvable | undefined;

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
        this.cdnType = props.cdnType;
        this.domainName = props.domainName;
        this.checkUrl = props.checkUrl;
        this.originServers = props.originServers;
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
            originServers: this.originServers,
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
    export interface OriginServersProperty {
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
 * Determine whether the given properties match those of a `OriginServersProperty`
 *
 * @param properties - the TypeScript properties of a `OriginServersProperty`
 *
 * @returns the result of the validation.
 */
function RosDomain_OriginServersPropertyValidator(properties: any): ros.ValidationResult {
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
    return errors.wrap('supplied properties not correct for "OriginServersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain.OriginServers` resource
 *
 * @param properties - the TypeScript properties of a `OriginServersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::Domain.OriginServers` resource.
 */
// @ts-ignore TS6133
function rosDomainOriginServersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomain_OriginServersPropertyValidator(properties).assertSuccess();
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
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDomainConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export interface RosDomainConfigProps {

    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    readonly domainNames: string | ros.IResolvable;

    /**
     * @Property functionList: Function list. This property is required.
     */
    readonly functionList?: Array<RosDomainConfig.FunctionListProperty | ros.IResolvable> | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('functionList', ros.listValidator(RosDomainConfig_FunctionListPropertyValidator))(properties.functionList));
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
      'DomainNames': ros.stringToRosTemplate(properties.domainNames),
      'FunctionList': ros.listMapper(rosDomainConfigFunctionListPropertyToRosTemplate)(properties.functionList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::DomainConfig`, which is used to configure multiple domain names at a time.
 * @Note This class does not contain additional functions, so it is recommended to use the `DomainConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-domainconfig
 */
export class RosDomainConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::DomainConfig";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainNames: Your accelerated domain name, separated by commas in English.
     */
    public domainNames: string | ros.IResolvable;

    /**
     * @Property functionList: Function list. This property is required.
     */
    public functionList: Array<RosDomainConfig.FunctionListProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDomainConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDomainConfig.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainNames = props.domainNames;
        this.functionList = props.functionList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainNames: this.domainNames,
            functionList: this.functionList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDomainConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDomainConfig {
    /**
     * @stability external
     */
    export interface FunctionArgsProperty {
        /**
         * @Property argValue: Arg value.
         */
        readonly argValue: string | ros.IResolvable;
        /**
         * @Property argName: Arg name.
         */
        readonly argName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FunctionArgsProperty`
 *
 * @param properties - the TypeScript properties of a `FunctionArgsProperty`
 *
 * @returns the result of the validation.
 */
function RosDomainConfig_FunctionArgsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('argValue', ros.requiredValidator)(properties.argValue));
    errors.collect(ros.propertyValidator('argValue', ros.validateString)(properties.argValue));
    errors.collect(ros.propertyValidator('argName', ros.requiredValidator)(properties.argName));
    errors.collect(ros.propertyValidator('argName', ros.validateString)(properties.argName));
    return errors.wrap('supplied properties not correct for "FunctionArgsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig.FunctionArgs` resource
 *
 * @param properties - the TypeScript properties of a `FunctionArgsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig.FunctionArgs` resource.
 */
// @ts-ignore TS6133
function rosDomainConfigFunctionArgsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomainConfig_FunctionArgsPropertyValidator(properties).assertSuccess();
    return {
      'ArgValue': ros.stringToRosTemplate(properties.argValue),
      'ArgName': ros.stringToRosTemplate(properties.argName),
    };
}

export namespace RosDomainConfig {
    /**
     * @stability external
     */
    export interface FunctionListProperty {
        /**
         * @Property parentId: Rule condition ID.
         */
        readonly parentId?: string | ros.IResolvable;
        /**
         * @Property functionName: Function name.
         */
        readonly functionName: string | ros.IResolvable;
        /**
         * @Property functionArgs: Function args.
         */
        readonly functionArgs: Array<RosDomainConfig.FunctionArgsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FunctionListProperty`
 *
 * @param properties - the TypeScript properties of a `FunctionListProperty`
 *
 * @returns the result of the validation.
 */
function RosDomainConfig_FunctionListPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parentId', ros.validateString)(properties.parentId));
    errors.collect(ros.propertyValidator('functionName', ros.requiredValidator)(properties.functionName));
    errors.collect(ros.propertyValidator('functionName', ros.validateString)(properties.functionName));
    errors.collect(ros.propertyValidator('functionArgs', ros.requiredValidator)(properties.functionArgs));
    errors.collect(ros.propertyValidator('functionArgs', ros.listValidator(RosDomainConfig_FunctionArgsPropertyValidator))(properties.functionArgs));
    return errors.wrap('supplied properties not correct for "FunctionListProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig.FunctionList` resource
 *
 * @param properties - the TypeScript properties of a `FunctionListProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::DomainConfig.FunctionList` resource.
 */
// @ts-ignore TS6133
function rosDomainConfigFunctionListPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDomainConfig_FunctionListPropertyValidator(properties).assertSuccess();
    return {
      'ParentId': ros.stringToRosTemplate(properties.parentId),
      'FunctionName': ros.stringToRosTemplate(properties.functionName),
      'FunctionArgs': ros.listMapper(rosDomainConfigFunctionArgsPropertyToRosTemplate)(properties.functionArgs),
    };
}

/**
 * Properties for defining a `RosFcTrigger`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
export interface RosFcTriggerProps {

    /**
     * @Property eventMetaName: The event meta name.
     */
    readonly eventMetaName: string | ros.IResolvable;

    /**
     * @Property eventMetaVersion: The event meta version.
     */
    readonly eventMetaVersion: string | ros.IResolvable;

    /**
     * @Property notes: The notes.
     */
    readonly notes: string | ros.IResolvable;

    /**
     * @Property roleArn: The role ARN.
     */
    readonly roleArn: string | ros.IResolvable;

    /**
     * @Property sourceArn: The source ARN.
     */
    readonly sourceArn: string | ros.IResolvable;

    /**
     * @Property triggerArn: The trigger ARN.
     */
    readonly triggerArn: string | ros.IResolvable;

    /**
     * @Property functionArn: The function ARN.
     */
    readonly functionArn?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosFcTriggerProps`
 *
 * @param properties - the TypeScript properties of a `RosFcTriggerProps`
 *
 * @returns the result of the validation.
 */
function RosFcTriggerPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('functionArn', ros.validateString)(properties.functionArn));
    errors.collect(ros.propertyValidator('triggerArn', ros.requiredValidator)(properties.triggerArn));
    errors.collect(ros.propertyValidator('triggerArn', ros.validateString)(properties.triggerArn));
    errors.collect(ros.propertyValidator('eventMetaName', ros.requiredValidator)(properties.eventMetaName));
    errors.collect(ros.propertyValidator('eventMetaName', ros.validateString)(properties.eventMetaName));
    errors.collect(ros.propertyValidator('sourceArn', ros.requiredValidator)(properties.sourceArn));
    errors.collect(ros.propertyValidator('sourceArn', ros.validateString)(properties.sourceArn));
    errors.collect(ros.propertyValidator('eventMetaVersion', ros.requiredValidator)(properties.eventMetaVersion));
    errors.collect(ros.propertyValidator('eventMetaVersion', ros.validateString)(properties.eventMetaVersion));
    errors.collect(ros.propertyValidator('roleArn', ros.requiredValidator)(properties.roleArn));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    errors.collect(ros.propertyValidator('notes', ros.requiredValidator)(properties.notes));
    errors.collect(ros.propertyValidator('notes', ros.validateString)(properties.notes));
    return errors.wrap('supplied properties not correct for "RosFcTriggerProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::FcTrigger` resource
 *
 * @param properties - the TypeScript properties of a `RosFcTriggerProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::FcTrigger` resource.
 */
// @ts-ignore TS6133
function rosFcTriggerPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosFcTriggerPropsValidator(properties).assertSuccess();
    }
    return {
      'EventMetaName': ros.stringToRosTemplate(properties.eventMetaName),
      'EventMetaVersion': ros.stringToRosTemplate(properties.eventMetaVersion),
      'Notes': ros.stringToRosTemplate(properties.notes),
      'RoleARN': ros.stringToRosTemplate(properties.roleArn),
      'SourceARN': ros.stringToRosTemplate(properties.sourceArn),
      'TriggerARN': ros.stringToRosTemplate(properties.triggerArn),
      'FunctionARN': ros.stringToRosTemplate(properties.functionArn),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::FcTrigger`.
 * @Note This class does not contain additional functions, so it is recommended to use the `FcTrigger` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
 */
export class RosFcTrigger extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::FcTrigger";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property eventMetaName: The event meta name.
     */
    public eventMetaName: string | ros.IResolvable;

    /**
     * @Property eventMetaVersion: The event meta version.
     */
    public eventMetaVersion: string | ros.IResolvable;

    /**
     * @Property notes: The notes.
     */
    public notes: string | ros.IResolvable;

    /**
     * @Property roleArn: The role ARN.
     */
    public roleArn: string | ros.IResolvable;

    /**
     * @Property sourceArn: The source ARN.
     */
    public sourceArn: string | ros.IResolvable;

    /**
     * @Property triggerArn: The trigger ARN.
     */
    public triggerArn: string | ros.IResolvable;

    /**
     * @Property functionArn: The function ARN.
     */
    public functionArn: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosFcTriggerProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosFcTrigger.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.eventMetaName = props.eventMetaName;
        this.eventMetaVersion = props.eventMetaVersion;
        this.notes = props.notes;
        this.roleArn = props.roleArn;
        this.sourceArn = props.sourceArn;
        this.triggerArn = props.triggerArn;
        this.functionArn = props.functionArn;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            eventMetaName: this.eventMetaName,
            eventMetaVersion: this.eventMetaVersion,
            notes: this.notes,
            roleArn: this.roleArn,
            sourceArn: this.sourceArn,
            triggerArn: this.triggerArn,
            functionArn: this.functionArn,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosFcTriggerPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosStagingConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
export interface RosStagingConfigProps {

    /**
     * @Property domainName: The domain name of the CDN.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * @Property functions: The functions of the staging config.
     */
    readonly functions: Array<{ [key: string]: any }> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosStagingConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosStagingConfigProps`
 *
 * @returns the result of the validation.
 */
function RosStagingConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.requiredValidator)(properties.domainName));
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('functions', ros.requiredValidator)(properties.functions));
    errors.collect(ros.propertyValidator('functions', ros.listValidator(ros.validateAnyDict))(properties.functions));
    return errors.wrap('supplied properties not correct for "RosStagingConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::StagingConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosStagingConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::StagingConfig` resource.
 */
// @ts-ignore TS6133
function rosStagingConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosStagingConfigPropsValidator(properties).assertSuccess();
    }
    return {
      'DomainName': ros.stringToRosTemplate(properties.domainName),
      'Functions': ros.listMapper(ros.anyDictToRosTemplate)(properties.functions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::StagingConfig`.
 * @Note This class does not contain additional functions, so it is recommended to use the `StagingConfig` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-stagingconfig
 */
export class RosStagingConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::StagingConfig";

    /**
     * @Attribute ConfigId: The config id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute FunctionName: The function name.
     */
    public readonly attrFunctionName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property domainName: The domain name of the CDN.
     */
    public domainName: string | ros.IResolvable;

    /**
     * @Property functions: The functions of the staging config.
     */
    public functions: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosStagingConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosStagingConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrFunctionName = this.getAtt('FunctionName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.domainName = props.domainName;
        this.functions = props.functions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            domainName: this.domainName,
            functions: this.functions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosStagingConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSubTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
export interface RosSubTaskProps {

    /**
     * @Property reportIds: The report IDs.
     * The value can be up to 128 bytes in length.
     */
    readonly reportIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property domainName: The domain name.
     */
    readonly domainName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSubTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosSubTaskProps`
 *
 * @returns the result of the validation.
 */
function RosSubTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('domainName', ros.validateString)(properties.domainName));
    errors.collect(ros.propertyValidator('reportIds', ros.requiredValidator)(properties.reportIds));
    if(properties.reportIds && (Array.isArray(properties.reportIds) || (typeof properties.reportIds) === 'string')) {
        errors.collect(ros.propertyValidator('reportIds', ros.validateLength)({
            data: properties.reportIds.length,
            min: 1,
            max: 12,
          }));
    }
    errors.collect(ros.propertyValidator('reportIds', ros.listValidator(ros.validateString))(properties.reportIds));
    return errors.wrap('supplied properties not correct for "RosSubTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CDN::SubTask` resource
 *
 * @param properties - the TypeScript properties of a `RosSubTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CDN::SubTask` resource.
 */
// @ts-ignore TS6133
function rosSubTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSubTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'ReportIds': ros.listMapper(ros.stringToRosTemplate)(properties.reportIds),
      'DomainName': ros.stringToRosTemplate(properties.domainName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CDN::SubTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SubTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-subtask
 */
export class RosSubTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CDN::SubTask";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property reportIds: The report IDs.
     * The value can be up to 128 bytes in length.
     */
    public reportIds: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property domainName: The domain name.
     */
    public domainName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSubTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSubTask.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.reportIds = props.reportIds;
        this.domainName = props.domainName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            reportIds: this.reportIds,
            domainName: this.domainName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSubTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
