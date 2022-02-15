// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export interface RosInstanceEndpointAclPolicyProps {

    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    readonly entry: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property comment: The description of the entry.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property endpointType: The type of the endpoint.
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    readonly moduleName?: string | ros.IResolvable;

    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    readonly regionId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosInstanceEndpointAclPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceEndpointAclPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosInstanceEndpointAclPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('entry', ros.requiredValidator)(properties.entry));
    errors.collect(ros.propertyValidator('entry', ros.validateString)(properties.entry));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('moduleName', ros.validateString)(properties.moduleName));
    errors.collect(ros.propertyValidator('endpointType', ros.validateString)(properties.endpointType));
    errors.collect(ros.propertyValidator('regionId', ros.validateString)(properties.regionId));
    return errors.wrap('supplied properties not correct for "RosInstanceEndpointAclPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceEndpointAclPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceEndpointAclPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::InstanceEndpointAclPolicy` resource.
 */
// @ts-ignore TS6133
function rosInstanceEndpointAclPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstanceEndpointAclPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      Entry: ros.stringToRosTemplate(properties.entry),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      Comment: ros.stringToRosTemplate(properties.comment),
      EndpointType: ros.stringToRosTemplate(properties.endpointType),
      ModuleName: ros.stringToRosTemplate(properties.moduleName),
      RegionId: ros.stringToRosTemplate(properties.regionId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CR::InstanceEndpointAclPolicy`
 */
export class RosInstanceEndpointAclPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::InstanceEndpointAclPolicy";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Entry: The IP address range that is allowed to access the instance.
     */
    public readonly attrEntry: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property entry: The IP address range that is allowed to access the instance.
     */
    public entry: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property comment: The description of the entry.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property endpointType: The type of the endpoint.
     */
    public endpointType: string | ros.IResolvable | undefined;

    /**
     * @Property moduleName: The name of the module in the instance for which a whitelist is configured. Valid
     * values: Registry and Chart.
     */
    public moduleName: string | ros.IResolvable | undefined;

    /**
     * @Property regionId: Region ID of instance. Default is current region.
     */
    public regionId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CR::InstanceEndpointAclPolicy`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceEndpointAclPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstanceEndpointAclPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEntry = this.getAtt('Entry');
        this.attrInstanceId = this.getAtt('InstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.entry = props.entry;
        this.instanceId = props.instanceId;
        this.comment = props.comment;
        this.endpointType = props.endpointType;
        this.moduleName = props.moduleName;
        this.regionId = props.regionId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            entry: this.entry,
            instanceId: this.instanceId,
            comment: this.comment,
            endpointType: this.endpointType,
            moduleName: this.moduleName,
            regionId: this.regionId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstanceEndpointAclPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CR::Namespace`
 */
export interface RosNamespaceProps {

    /**
     * @Property namespace: The name of the namespace.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    readonly autoCreate?: boolean | ros.IResolvable;

    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    readonly defaultVisibility?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('autoCreate', ros.validateBoolean)(properties.autoCreate));
    if(properties.defaultVisibility && (typeof properties.defaultVisibility) !== 'object') {
        errors.collect(ros.propertyValidator('defaultVisibility', ros.validateAllowedValues)({
          data: properties.defaultVisibility,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('defaultVisibility', ros.validateString)(properties.defaultVisibility));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    if(properties.namespace && (Array.isArray(properties.namespace) || (typeof properties.namespace) === 'string')) {
        errors.collect(ros.propertyValidator('namespace', ros.validateLength)({
            data: properties.namespace.length,
            min: 2,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    return errors.wrap('supplied properties not correct for "RosNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Namespace` resource
 *
 * @param properties - the TypeScript properties of a `RosNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Namespace` resource.
 */
// @ts-ignore TS6133
function rosNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      Namespace: ros.stringToRosTemplate(properties.namespace),
      AutoCreate: ros.booleanToRosTemplate(properties.autoCreate),
      DefaultVisibility: ros.stringToRosTemplate(properties.defaultVisibility),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::CR::Namespace`
 */
export class RosNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Namespace";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which namespace belongs to.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Namespace: The namespace.
     */
    public readonly attrNamespace: ros.IResolvable;

    /**
     * @Attribute NamespaceId: The namespace ID.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property namespace: The name of the namespace.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property autoCreate: Specifies whether to automatically create an image repository.
     */
    public autoCreate: boolean | ros.IResolvable | undefined;

    /**
     * @Property defaultVisibility: The default type of the repository that is automatically created. Valid values: PUBLIC, PRIVATE.
     */
    public defaultVisibility: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which namespace belongs to. If not provided, will use personal edition instance as default.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CR::Namespace`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrNamespace = this.getAtt('Namespace');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.namespace = props.namespace;
        this.autoCreate = props.autoCreate;
        this.defaultVisibility = props.defaultVisibility;
        this.instanceId = props.instanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            namespace: this.namespace,
            autoCreate: this.autoCreate,
            defaultVisibility: this.defaultVisibility,
            instanceId: this.instanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::CR::Repository`
 */
export interface RosRepositoryProps {

    /**
     * @Property repoName: The name of the repository.
     */
    readonly repoName: string | ros.IResolvable;

    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    readonly repoNamespace: string | ros.IResolvable;

    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    readonly repoType: string | ros.IResolvable;

    /**
     * @Property summary: The summary of the repository.
     */
    readonly summary: string | ros.IResolvable;

    /**
     * @Property detail: The description of the repository.
     */
    readonly detail?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property repoSource: Code Source message.
     */
    readonly repoSource?: RosRepository.RepoSourceProperty | ros.IResolvable;

    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    readonly tagImmutability?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRepositoryProps`
 *
 * @param properties - the TypeScript properties of a `RosRepositoryProps`
 *
 * @returns the result of the validation.
 */
function RosRepositoryPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('tagImmutability', ros.validateBoolean)(properties.tagImmutability));
    errors.collect(ros.propertyValidator('repoNamespace', ros.requiredValidator)(properties.repoNamespace));
    if(properties.repoNamespace && (Array.isArray(properties.repoNamespace) || (typeof properties.repoNamespace) === 'string')) {
        errors.collect(ros.propertyValidator('repoNamespace', ros.validateLength)({
            data: properties.repoNamespace.length,
            min: 2,
            max: 30,
          }));
    }
    errors.collect(ros.propertyValidator('repoNamespace', ros.validateString)(properties.repoNamespace));
    errors.collect(ros.propertyValidator('repoType', ros.requiredValidator)(properties.repoType));
    if(properties.repoType && (typeof properties.repoType) !== 'object') {
        errors.collect(ros.propertyValidator('repoType', ros.validateAllowedValues)({
          data: properties.repoType,
          allowedValues: ["PUBLIC","PRIVATE"],
        }));
    }
    errors.collect(ros.propertyValidator('repoType', ros.validateString)(properties.repoType));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('repoName', ros.requiredValidator)(properties.repoName));
    if(properties.repoName && (Array.isArray(properties.repoName) || (typeof properties.repoName) === 'string')) {
        errors.collect(ros.propertyValidator('repoName', ros.validateLength)({
            data: properties.repoName.length,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('repoName', ros.validateString)(properties.repoName));
    errors.collect(ros.propertyValidator('summary', ros.requiredValidator)(properties.summary));
    if(properties.summary && (Array.isArray(properties.summary) || (typeof properties.summary) === 'string')) {
        errors.collect(ros.propertyValidator('summary', ros.validateLength)({
            data: properties.summary.length,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('summary', ros.validateString)(properties.summary));
    if(properties.detail && (Array.isArray(properties.detail) || (typeof properties.detail) === 'string')) {
        errors.collect(ros.propertyValidator('detail', ros.validateLength)({
            data: properties.detail.length,
            min: undefined,
            max: 2000,
          }));
    }
    errors.collect(ros.propertyValidator('detail', ros.validateString)(properties.detail));
    errors.collect(ros.propertyValidator('repoSource', RosRepository_RepoSourcePropertyValidator)(properties.repoSource));
    return errors.wrap('supplied properties not correct for "RosRepositoryProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository` resource
 *
 * @param properties - the TypeScript properties of a `RosRepositoryProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository` resource.
 */
// @ts-ignore TS6133
function rosRepositoryPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRepositoryPropsValidator(properties).assertSuccess();
    }
    return {
      RepoName: ros.stringToRosTemplate(properties.repoName),
      RepoNamespace: ros.stringToRosTemplate(properties.repoNamespace),
      RepoType: ros.stringToRosTemplate(properties.repoType),
      Summary: ros.stringToRosTemplate(properties.summary),
      Detail: ros.stringToRosTemplate(properties.detail),
      InstanceId: ros.stringToRosTemplate(properties.instanceId),
      RepoSource: rosRepositoryRepoSourcePropertyToRosTemplate(properties.repoSource),
      TagImmutability: ros.booleanToRosTemplate(properties.tagImmutability),
    };
}

/**
 * A ROS template type:  `ALIYUN::CR::Repository`
 */
export class RosRepository extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::Repository";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute InstanceId: The ID of the enterprise edition instance which repository belongs to.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute RepoId: The repository ID.
     */
    public readonly attrRepoId: ros.IResolvable;

    /**
     * @Attribute RepoName: The name of the repository.
     */
    public readonly attrRepoName: ros.IResolvable;

    /**
     * @Attribute RepoNamespace: The name of the namespace to which the repository belongs.
     */
    public readonly attrRepoNamespace: ros.IResolvable;

    /**
     * @Attribute RepoType: The type of the repository.
     */
    public readonly attrRepoType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property repoName: The name of the repository.
     */
    public repoName: string | ros.IResolvable;

    /**
     * @Property repoNamespace: The name of the namespace to which the repository belongs.
     */
    public repoNamespace: string | ros.IResolvable;

    /**
     * @Property repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
     */
    public repoType: string | ros.IResolvable;

    /**
     * @Property summary: The summary of the repository.
     */
    public summary: string | ros.IResolvable;

    /**
     * @Property detail: The description of the repository.
     */
    public detail: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property repoSource: Code Source message.
     */
    public repoSource: RosRepository.RepoSourceProperty | ros.IResolvable | undefined;

    /**
     * @Property tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
     */
    public tagImmutability: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::CR::Repository`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRepositoryProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRepository.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrRepoId = this.getAtt('RepoId');
        this.attrRepoName = this.getAtt('RepoName');
        this.attrRepoNamespace = this.getAtt('RepoNamespace');
        this.attrRepoType = this.getAtt('RepoType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.repoName = props.repoName;
        this.repoNamespace = props.repoNamespace;
        this.repoType = props.repoType;
        this.summary = props.summary;
        this.detail = props.detail;
        this.instanceId = props.instanceId;
        this.repoSource = props.repoSource;
        this.tagImmutability = props.tagImmutability;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            repoName: this.repoName,
            repoNamespace: this.repoNamespace,
            repoType: this.repoType,
            summary: this.summary,
            detail: this.detail,
            instanceId: this.instanceId,
            repoSource: this.repoSource,
            tagImmutability: this.tagImmutability,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRepositoryPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRepository {
    /**
     * @stability external
     */
    export interface RepoSourceProperty {
        /**
         * @Property isAutoBuild: Whether to enable automatic construction
         */
        readonly isAutoBuild: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoName: Source code warehouse name
         */
        readonly sourceRepoName: string | ros.IResolvable;
        /**
         * @Property sourceRepoNamespace: Source code repository namespace
         */
        readonly sourceRepoNamespace: string | ros.IResolvable;
        /**
         * @Property isOversea: Whether to enable overseas construction
         */
        readonly isOversea: boolean | ros.IResolvable;
        /**
         * @Property sourceRepoType: code source type. Allow values: 
     * CODE, GITHUB, GITLAB, BITBUCKET. Enterprise Edition additional support CODEUP and GITEE
         */
        readonly sourceRepoType: string | ros.IResolvable;
        /**
         * @Property isDisableCache: Whether to disable Cache at build time
         */
        readonly isDisableCache: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RepoSourceProperty`
 *
 * @param properties - the TypeScript properties of a `RepoSourceProperty`
 *
 * @returns the result of the validation.
 */
function RosRepository_RepoSourcePropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isAutoBuild', ros.requiredValidator)(properties.isAutoBuild));
    errors.collect(ros.propertyValidator('isAutoBuild', ros.validateBoolean)(properties.isAutoBuild));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.requiredValidator)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoName', ros.validateString)(properties.sourceRepoName));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.requiredValidator)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('sourceRepoNamespace', ros.validateString)(properties.sourceRepoNamespace));
    errors.collect(ros.propertyValidator('isOversea', ros.requiredValidator)(properties.isOversea));
    errors.collect(ros.propertyValidator('isOversea', ros.validateBoolean)(properties.isOversea));
    errors.collect(ros.propertyValidator('sourceRepoType', ros.requiredValidator)(properties.sourceRepoType));
    if(properties.sourceRepoType && (typeof properties.sourceRepoType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceRepoType', ros.validateAllowedValues)({
          data: properties.sourceRepoType,
          allowedValues: ["CODE","GITHUB","GITLAB","BITBUCKET","CODEUP","GITEE"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceRepoType', ros.validateString)(properties.sourceRepoType));
    errors.collect(ros.propertyValidator('isDisableCache', ros.requiredValidator)(properties.isDisableCache));
    errors.collect(ros.propertyValidator('isDisableCache', ros.validateBoolean)(properties.isDisableCache));
    return errors.wrap('supplied properties not correct for "RepoSourceProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository.RepoSource` resource
 *
 * @param properties - the TypeScript properties of a `RepoSourceProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::Repository.RepoSource` resource.
 */
// @ts-ignore TS6133
function rosRepositoryRepoSourcePropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRepository_RepoSourcePropertyValidator(properties).assertSuccess();
    return {
      IsAutoBuild: ros.booleanToRosTemplate(properties.isAutoBuild),
      SourceRepoName: ros.stringToRosTemplate(properties.sourceRepoName),
      SourceRepoNamespace: ros.stringToRosTemplate(properties.sourceRepoNamespace),
      IsOversea: ros.booleanToRosTemplate(properties.isOversea),
      SourceRepoType: ros.stringToRosTemplate(properties.sourceRepoType),
      IsDisableCache: ros.booleanToRosTemplate(properties.isDisableCache),
    };
}

/**
 * Properties for defining a `ALIYUN::CR::UserInfo`
 */
export interface RosUserInfoProps {

    /**
     * @Property user: User info. If user exists, will update user info.
     */
    readonly user: RosUserInfo.UserProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosUserInfoProps`
 *
 * @param properties - the TypeScript properties of a `RosUserInfoProps`
 *
 * @returns the result of the validation.
 */
function RosUserInfoPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('user', ros.requiredValidator)(properties.user));
    errors.collect(ros.propertyValidator('user', RosUserInfo_UserPropertyValidator)(properties.user));
    return errors.wrap('supplied properties not correct for "RosUserInfoProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo` resource
 *
 * @param properties - the TypeScript properties of a `RosUserInfoProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo` resource.
 */
// @ts-ignore TS6133
function rosUserInfoPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserInfoPropsValidator(properties).assertSuccess();
    }
    return {
      User: rosUserInfoUserPropertyToRosTemplate(properties.user),
    };
}

/**
 * A ROS template type:  `ALIYUN::CR::UserInfo`
 */
export class RosUserInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CR::UserInfo";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LoginName: Login name.
     */
    public readonly attrLoginName: ros.IResolvable;

    /**
     * @Attribute UserId: User ID.
     */
    public readonly attrUserId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property user: User info. If user exists, will update user info.
     */
    public user: RosUserInfo.UserProperty | ros.IResolvable;

    /**
     * Create a new `ALIYUN::CR::UserInfo`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserInfoProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserInfo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLoginName = this.getAtt('LoginName');
        this.attrUserId = this.getAtt('UserId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.user = props.user;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            user: this.user,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserInfoPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUserInfo {
    /**
     * @stability external
     */
    export interface UserProperty {
        /**
         * @Property password: Password.
         */
        readonly password: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `UserProperty`
 *
 * @param properties - the TypeScript properties of a `UserProperty`
 *
 * @returns the result of the validation.
 */
function RosUserInfo_UserPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('password', ros.requiredValidator)(properties.password));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "UserProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo.User` resource
 *
 * @param properties - the TypeScript properties of a `UserProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CR::UserInfo.User` resource.
 */
// @ts-ignore TS6133
function rosUserInfoUserPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUserInfo_UserPropertyValidator(properties).assertSuccess();
    return {
      Password: ros.stringToRosTemplate(properties.password),
    };
}
