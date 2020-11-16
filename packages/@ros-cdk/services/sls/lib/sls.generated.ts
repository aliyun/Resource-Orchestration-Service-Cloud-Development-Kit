// Generated from the AliCloud ROS Resource Specification

import * as ros from '@ros-cdk/core';

/**
 * Properties for defining a `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export interface RosApplyConfigToMachineGroupProps {

    /**
     * @Property configName: Apply config to the config name
     */
    readonly configName?: string;

    /**
     * @Property groupName: Apply config to the group name
     */
    readonly groupName?: string;

    /**
     * @Property projectName: Apply config to the project name.
     */
    readonly projectName?: string;
}

/**
 * Determine whether the given properties match those of a `RosApplyConfigToMachineGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosApplyConfigToMachineGroupProps`
 *
 * @returns the result of the validation.
 */
function RosApplyConfigToMachineGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    errors.collect(ros.propertyValidator('configName', ros.validateString)(properties.configName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    return errors.wrap('supplied properties not correct for "RosApplyConfigToMachineGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::ApplyConfigToMachineGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosApplyConfigToMachineGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::ApplyConfigToMachineGroup` resource.
 */
// @ts-ignore TS6133
function rosApplyConfigToMachineGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosApplyConfigToMachineGroupPropsValidator(properties).assertSuccess();
    }
    return {
      ConfigName: ros.stringToRosTemplate(properties.configName),
      GroupName: ros.stringToRosTemplate(properties.groupName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::ApplyConfigToMachineGroup`
 */
export class RosApplyConfigToMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::ApplyConfigToMachineGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property configName: Apply config to the config name
     */
    public configName: string | undefined;

    /**
     * @Property groupName: Apply config to the group name
     */
    public groupName: string | undefined;

    /**
     * @Property projectName: Apply config to the project name.
     */
    public projectName: string | undefined;

    /**
     * Create a new `ALIYUN::SLS::ApplyConfigToMachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosApplyConfigToMachineGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosApplyConfigToMachineGroup.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.configName = props.configName;
        this.groupName = props.groupName;
        this.projectName = props.projectName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            configName: this.configName,
            groupName: this.groupName,
            projectName: this.projectName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosApplyConfigToMachineGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLS::Index`
 */
export interface RosIndexProps {

    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string;

    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    readonly keyIndices?: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    readonly logReduce?: boolean | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosIndexProps`
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the result of the validation.
 */
function RosIndexPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('keyIndices', ros.listValidator(RosIndex_KeyIndicesPropertyValidator))(properties.keyIndices));
    errors.collect(ros.propertyValidator('fullTextIndex', ros.requiredValidator)(properties.fullTextIndex));
    errors.collect(ros.propertyValidator('fullTextIndex', RosIndex_FullTextIndexPropertyValidator)(properties.fullTextIndex));
    errors.collect(ros.propertyValidator('logReduce', ros.validateBoolean)(properties.logReduce));
    return errors.wrap('supplied properties not correct for "RosIndexProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index` resource
 *
 * @param properties - the TypeScript properties of a `RosIndexProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index` resource.
 */
// @ts-ignore TS6133
function rosIndexPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosIndexPropsValidator(properties).assertSuccess();
    }
    return {
      FullTextIndex: rosIndexFullTextIndexPropertyToRosTemplate(properties.fullTextIndex),
      LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      KeyIndices: ros.listMapper(rosIndexKeyIndicesPropertyToRosTemplate)(properties.keyIndices),
      LogReduce: ros.booleanToRosTemplate(properties.logReduce),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Index`
 */
export class RosIndex extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Index";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property fullTextIndex: Full-text indexing configuration.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    public fullTextIndex: RosIndex.FullTextIndexProperty | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string;

    /**
     * @Property keyIndices: Key index configurations.
     * Full-text indexing and key indexing must have at least one enabled.
     */
    public keyIndices: Array<RosIndex.KeyIndicesProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property logReduce: Whether to enable log reduce. Default to false.
     */
    public logReduce: boolean | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::Index`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosIndexProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosIndex.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.fullTextIndex = props.fullTextIndex;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.keyIndices = props.keyIndices;
        this.logReduce = props.logReduce;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            fullTextIndex: this.fullTextIndex,
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            keyIndices: this.keyIndices,
            logReduce: this.logReduce,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosIndexPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface FullTextIndexProperty {
        /**
         * @Property delimiter: Delimiter. Default to (( , '";=()[]{}?@&<>/:\n\t\r )).
         */
        readonly delimiter?: string;
        /**
         * @Property includeChinese: Whether it contains Chinese. Default to false.
         */
        readonly includeChinese?: boolean | ros.IResolvable;
        /**
         * @Property caseSensitive: Whether it is case sensitive. Default to false.
         */
        readonly caseSensitive?: boolean | ros.IResolvable;
        /**
         * @Property enable: Whether to enable full-text indexing. Default to true.
         */
        readonly enable: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `FullTextIndexProperty`
 *
 * @param properties - the TypeScript properties of a `FullTextIndexProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_FullTextIndexPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('delimiter', ros.validateString)(properties.delimiter));
    errors.collect(ros.propertyValidator('includeChinese', ros.validateBoolean)(properties.includeChinese));
    errors.collect(ros.propertyValidator('caseSensitive', ros.validateBoolean)(properties.caseSensitive));
    errors.collect(ros.propertyValidator('enable', ros.requiredValidator)(properties.enable));
    errors.collect(ros.propertyValidator('enable', ros.validateBoolean)(properties.enable));
    return errors.wrap('supplied properties not correct for "FullTextIndexProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.FullTextIndex` resource
 *
 * @param properties - the TypeScript properties of a `FullTextIndexProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.FullTextIndex` resource.
 */
// @ts-ignore TS6133
function rosIndexFullTextIndexPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIndex_FullTextIndexPropertyValidator(properties).assertSuccess();
    return {
      Delimiter: ros.stringToRosTemplate(properties.delimiter),
      IncludeChinese: ros.booleanToRosTemplate(properties.includeChinese),
      CaseSensitive: ros.booleanToRosTemplate(properties.caseSensitive),
      Enable: ros.booleanToRosTemplate(properties.enable),
    };
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface JsonKeyIndicesProperty {
        /**
         * @Property type: Json key type. Allowed types: text, long, double. Default to text.
         */
        readonly type: string;
        /**
         * @Property alias: Json key alias.
         */
        readonly alias?: string;
        /**
         * @Property enableAnalytics: Whether this json key is enabled for statistics. Default to true.
         */
        readonly enableAnalytics?: boolean | ros.IResolvable;
        /**
         * @Property name: Json key name. It can be nested by dot(.), such as k1.k2.k3.
         */
        readonly name: string;
    }
}
/**
 * Determine whether the given properties match those of a `JsonKeyIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `JsonKeyIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_JsonKeyIndicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text","long","double"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    errors.collect(ros.propertyValidator('enableAnalytics', ros.validateBoolean)(properties.enableAnalytics));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "JsonKeyIndicesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.JsonKeyIndices` resource
 *
 * @param properties - the TypeScript properties of a `JsonKeyIndicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.JsonKeyIndices` resource.
 */
// @ts-ignore TS6133
function rosIndexJsonKeyIndicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIndex_JsonKeyIndicesPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Alias: ros.stringToRosTemplate(properties.alias),
      EnableAnalytics: ros.booleanToRosTemplate(properties.enableAnalytics),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosIndex {
    /**
     * @stability external
     */
    export interface KeyIndicesProperty {
        /**
         * @Property type: Key type. Allowed types: text, long, double, json. Default to text.
         */
        readonly type: string;
        /**
         * @Property jsonKeyIndices: Json key index configurations.
         */
        readonly jsonKeyIndices?: Array<RosIndex.JsonKeyIndicesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property delimiter: Delimiter. It takes effect when Type is text or json. Default to (( , '";=()[]{}?@&<>/:\n\t\r )).
         */
        readonly delimiter?: string;
        /**
         * @Property includeChinese: Whether it contains Chinese. It takes effect when Type is text or json. Default to false.
         */
        readonly includeChinese?: boolean | ros.IResolvable;
        /**
         * @Property alias: Key alias.
         */
        readonly alias?: string;
        /**
         * @Property enableAnalytics: Whether this key is enabled for statistics. Default to false for json type, else true.
         */
        readonly enableAnalytics?: boolean | ros.IResolvable;
        /**
         * @Property caseSensitive: Whether it is case sensitive. It takes effect when Type is text or json. Default to false.
         */
        readonly caseSensitive?: boolean | ros.IResolvable;
        /**
         * @Property name: Key name.
         */
        readonly name: string;
    }
}
/**
 * Determine whether the given properties match those of a `KeyIndicesProperty`
 *
 * @param properties - the TypeScript properties of a `KeyIndicesProperty`
 *
 * @returns the result of the validation.
 */
function RosIndex_KeyIndicesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["text","long","double","json"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('jsonKeyIndices', ros.listValidator(RosIndex_JsonKeyIndicesPropertyValidator))(properties.jsonKeyIndices));
    errors.collect(ros.propertyValidator('delimiter', ros.validateString)(properties.delimiter));
    errors.collect(ros.propertyValidator('includeChinese', ros.validateBoolean)(properties.includeChinese));
    errors.collect(ros.propertyValidator('alias', ros.validateString)(properties.alias));
    errors.collect(ros.propertyValidator('enableAnalytics', ros.validateBoolean)(properties.enableAnalytics));
    errors.collect(ros.propertyValidator('caseSensitive', ros.validateBoolean)(properties.caseSensitive));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "KeyIndicesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.KeyIndices` resource
 *
 * @param properties - the TypeScript properties of a `KeyIndicesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Index.KeyIndices` resource.
 */
// @ts-ignore TS6133
function rosIndexKeyIndicesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosIndex_KeyIndicesPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      JsonKeyIndices: ros.listMapper(rosIndexJsonKeyIndicesPropertyToRosTemplate)(properties.jsonKeyIndices),
      Delimiter: ros.stringToRosTemplate(properties.delimiter),
      IncludeChinese: ros.booleanToRosTemplate(properties.includeChinese),
      Alias: ros.stringToRosTemplate(properties.alias),
      EnableAnalytics: ros.booleanToRosTemplate(properties.enableAnalytics),
      CaseSensitive: ros.booleanToRosTemplate(properties.caseSensitive),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::Logstore`
 */
export interface RosLogstoreProps {

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string;

    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    readonly appendMeta?: boolean | ros.IResolvable;

    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    readonly autoSplit?: boolean | ros.IResolvable;

    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    readonly enableTracking?: boolean | ros.IResolvable;

    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    readonly maxSplitShard?: number;

    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    readonly preserveStorage?: boolean | ros.IResolvable;

    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    readonly shardCount?: number;

    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    readonly ttl?: number;
}

/**
 * Determine whether the given properties match those of a `RosLogstoreProps`
 *
 * @param properties - the TypeScript properties of a `RosLogstoreProps`
 *
 * @returns the result of the validation.
 */
function RosLogstorePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('preserveStorage', ros.validateBoolean)(properties.preserveStorage));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('appendMeta', ros.validateBoolean)(properties.appendMeta));
    if(properties.maxSplitShard && (typeof properties.maxSplitShard) !== 'object') {
        errors.collect(ros.propertyValidator('maxSplitShard', ros.validateRange)({
            data: properties.maxSplitShard,
            min: 1,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('maxSplitShard', ros.validateNumber)(properties.maxSplitShard));
    errors.collect(ros.propertyValidator('autoSplit', ros.validateBoolean)(properties.autoSplit));
    errors.collect(ros.propertyValidator('enableTracking', ros.validateBoolean)(properties.enableTracking));
    if(properties.ttl && (typeof properties.ttl) !== 'object') {
        errors.collect(ros.propertyValidator('ttl', ros.validateRange)({
            data: properties.ttl,
            min: 1,
            max: 3600,
          }));
    }
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    if(properties.shardCount && (typeof properties.shardCount) !== 'object') {
        errors.collect(ros.propertyValidator('shardCount', ros.validateRange)({
            data: properties.shardCount,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('shardCount', ros.validateNumber)(properties.shardCount));
    return errors.wrap('supplied properties not correct for "RosLogstoreProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore` resource
 *
 * @param properties - the TypeScript properties of a `RosLogstoreProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Logstore` resource.
 */
// @ts-ignore TS6133
function rosLogstorePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLogstorePropsValidator(properties).assertSuccess();
    }
    return {
      LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      AppendMeta: ros.booleanToRosTemplate(properties.appendMeta),
      AutoSplit: ros.booleanToRosTemplate(properties.autoSplit),
      EnableTracking: ros.booleanToRosTemplate(properties.enableTracking),
      MaxSplitShard: ros.numberToRosTemplate(properties.maxSplitShard),
      PreserveStorage: ros.booleanToRosTemplate(properties.preserveStorage),
      ShardCount: ros.numberToRosTemplate(properties.shardCount),
      TTL: ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Logstore`
 */
export class RosLogstore extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Logstore";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute LogstoreName: Logstore name.
     */
    public readonly attrLogstoreName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string;

    /**
     * @Property appendMeta: Whether to add client external network IP and log arrival time after receiving the log.
     * Default to false.
     */
    public appendMeta: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoSplit: Whether to automatically split the shard.
     * Default to false.
     */
    public autoSplit: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableTracking: Whether to enable WebTracking, which supports fast capture of various browsers and iOS/Android/APP access information.
     * Default to false.
     */
    public enableTracking: boolean | ros.IResolvable | undefined;

    /**
     * @Property maxSplitShard: The maximum number of shards when splitting automatically. Must be specified if AutoSplit is set to true.
     * Allowed Values: 1-64.
     */
    public maxSplitShard: number | undefined;

    /**
     * @Property preserveStorage: Whether to keep the log permanently.
     * If set to true, TTL will be ignored.
     * Default to false.
     */
    public preserveStorage: boolean | ros.IResolvable | undefined;

    /**
     * @Property shardCount: The number of Shards.
     * Allowed Values: 1-100, default to 2.
     */
    public shardCount: number | undefined;

    /**
     * @Property ttl: The lifecycle of log in the logstore in days.
     * Allowed Values: 1-3600, default to 30.
     */
    public ttl: number | undefined;

    /**
     * Create a new `ALIYUN::SLS::Logstore`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogstoreProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogstore.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstoreName = ros.Token.asString(this.getAtt('LogstoreName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.projectName = props.projectName;
        this.appendMeta = props.appendMeta;
        this.autoSplit = props.autoSplit;
        this.enableTracking = props.enableTracking;
        this.maxSplitShard = props.maxSplitShard;
        this.preserveStorage = props.preserveStorage;
        this.shardCount = props.shardCount;
        this.ttl = props.ttl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logstoreName: this.logstoreName,
            projectName: this.projectName,
            appendMeta: this.appendMeta,
            autoSplit: this.autoSplit,
            enableTracking: this.enableTracking,
            maxSplitShard: this.maxSplitShard,
            preserveStorage: this.preserveStorage,
            shardCount: this.shardCount,
            ttl: this.ttl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogstorePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLS::LogtailConfig`
 */
export interface RosLogtailConfigProps {

    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logstoreName: string;

    /**
     * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly logtailConfigName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly projectName: string;

    /**
     * @Property cloneFrom: Clone logtail config data from existing logtail config.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    readonly cloneFrom?: RosLogtailConfig.CloneFromProperty | ros.IResolvable;

    /**
     * @Property rawConfigData: The format is the same as the response of SLS API GetConfig.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     * configName, outputType, outputDetail in data will be ignored.For example:
     * {
     *     "configName": "test-logtail-config",
     *     "createTime": 1574843554,
     *     "inputDetail": {
     *         "acceptNoEnoughKeys": false,
     *         "adjustTimezone": false,
     *         "advanced": {
     *             "force_multiconfig": false
     *         },
     *         "autoExtend": true,
     *         "delayAlarmBytes": 0,
     *         "delaySkipBytes": 0,
     *         "discardNonUtf8": false,
     *         "discardUnmatch": false,
     *         "dockerExcludeEnv": {},
     *         "dockerExcludeLabel": {},
     *         "dockerFile": false,
     *         "dockerIncludeEnv": {},
     *         "dockerIncludeLabel": {},
     *         "enableRawLog": false,
     *         "enableTag": false,
     *         "fileEncoding": "utf8",
     *         "filePattern": "test.log*",
     *         "filterKey": [],
     *         "filterRegex": [],
     *         "key": [
     *             "time",
     *             "logger",
     *             "level",
     *             "request_id",
     *             "user_id",
     *             "region_id",
     *             "content"
     *         ],
     *         "localStorage": true,
     *         "logPath": "/var/log/test",
     *         "logTimezone": "",
     *         "logType": "delimiter_log",
     *         "maxDepth": 100,
     *         "maxSendRate": -1,
     *         "mergeType": "topic",
     *         "preserve": true,
     *         "preserveDepth": 1,
     *         "priority": 0,
     *         "quote": "\u0001",
     *         "sendRateExpire": 0,
     *         "sensitive_keys": [],
     *         "separator": ",,,",
     *         "shardHashKey": [],
     *         "tailExisted": false,
     *         "timeFormat": "",
     *         "timeKey": "",
     *         "topicFormat": "none"
     *     },
     *     "inputType": "file",
     *     "lastModifyTime": 1574843554,
     *     "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
     *     "outputDetail": {
     *         "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
     *         "logstoreName": "test-logstore",
     *         "region": "cn-hangzhou"
     *     },
     *     "outputType": "LogService"
     * }
     */
    readonly rawConfigData?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLogtailConfigProps`
 *
 * @param properties - the TypeScript properties of a `RosLogtailConfigProps`
 *
 * @returns the result of the validation.
 */
function RosLogtailConfigPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logtailConfigName', ros.requiredValidator)(properties.logtailConfigName));
    if(properties.logtailConfigName && (Array.isArray(properties.logtailConfigName) || (typeof properties.logtailConfigName) === 'string')) {
        errors.collect(ros.propertyValidator('logtailConfigName', ros.validateLength)({
            data: properties.logtailConfigName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logtailConfigName', ros.validateString)(properties.logtailConfigName));
    errors.collect(ros.propertyValidator('logstoreName', ros.requiredValidator)(properties.logstoreName));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.projectName && (typeof properties.projectName) !== 'object') {
        errors.collect(ros.propertyValidator('projectName', ros.validateAllowedPattern)({
          data: properties.projectName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('rawConfigData', ros.hashValidator(ros.validateAny))(properties.rawConfigData));
    errors.collect(ros.propertyValidator('cloneFrom', RosLogtailConfig_CloneFromPropertyValidator)(properties.cloneFrom));
    return errors.wrap('supplied properties not correct for "RosLogtailConfigProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig` resource
 *
 * @param properties - the TypeScript properties of a `RosLogtailConfigProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig` resource.
 */
// @ts-ignore TS6133
function rosLogtailConfigPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLogtailConfigPropsValidator(properties).assertSuccess();
    }
    return {
      LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
      LogtailConfigName: ros.stringToRosTemplate(properties.logtailConfigName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
      CloneFrom: rosLogtailConfigCloneFromPropertyToRosTemplate(properties.cloneFrom),
      RawConfigData: ros.hashMapper(ros.objectToRosTemplate)(properties.rawConfigData),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::LogtailConfig`
 */
export class RosLogtailConfig extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::LogtailConfig";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AppliedMachineGroups: Applied machine groups.
     */
    public readonly attrAppliedMachineGroups: any;

    /**
     * @Attribute Endpoint: Endpoint address.
     */
    public readonly attrEndpoint: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property logstoreName: Logstore name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logstoreName: string;

    /**
     * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public logtailConfigName: string;

    /**
     * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public projectName: string;

    /**
     * @Property cloneFrom: Clone logtail config data from existing logtail config.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     */
    public cloneFrom: RosLogtailConfig.CloneFromProperty | ros.IResolvable | undefined;

    /**
     * @Property rawConfigData: The format is the same as the response of SLS API GetConfig.
     * Either CloneFrom or RawConfigData must be specified. If CloneFrom and RawConfigData are both specified, logtail config data will be merged from both with RawConfigData first.
     * configName, outputType, outputDetail in data will be ignored.For example:
     * {
     *     "configName": "test-logtail-config",
     *     "createTime": 1574843554,
     *     "inputDetail": {
     *         "acceptNoEnoughKeys": false,
     *         "adjustTimezone": false,
     *         "advanced": {
     *             "force_multiconfig": false
     *         },
     *         "autoExtend": true,
     *         "delayAlarmBytes": 0,
     *         "delaySkipBytes": 0,
     *         "discardNonUtf8": false,
     *         "discardUnmatch": false,
     *         "dockerExcludeEnv": {},
     *         "dockerExcludeLabel": {},
     *         "dockerFile": false,
     *         "dockerIncludeEnv": {},
     *         "dockerIncludeLabel": {},
     *         "enableRawLog": false,
     *         "enableTag": false,
     *         "fileEncoding": "utf8",
     *         "filePattern": "test.log*",
     *         "filterKey": [],
     *         "filterRegex": [],
     *         "key": [
     *             "time",
     *             "logger",
     *             "level",
     *             "request_id",
     *             "user_id",
     *             "region_id",
     *             "content"
     *         ],
     *         "localStorage": true,
     *         "logPath": "/var/log/test",
     *         "logTimezone": "",
     *         "logType": "delimiter_log",
     *         "maxDepth": 100,
     *         "maxSendRate": -1,
     *         "mergeType": "topic",
     *         "preserve": true,
     *         "preserveDepth": 1,
     *         "priority": 0,
     *         "quote": "\u0001",
     *         "sendRateExpire": 0,
     *         "sensitive_keys": [],
     *         "separator": ",,,",
     *         "shardHashKey": [],
     *         "tailExisted": false,
     *         "timeFormat": "",
     *         "timeKey": "",
     *         "topicFormat": "none"
     *     },
     *     "inputType": "file",
     *     "lastModifyTime": 1574843554,
     *     "logSample": "2019-11-27 10:48:23,160,,,MAIN,,,INFO,,,98DCC51D-BE5D-49C7-B3FD-37B2BAEFB296,,,123456789,,,cn-hangzhou,,,this is a simple test.",
     *     "outputDetail": {
     *         "endpoint": "cn-hangzhou-intranet.log.aliyuncs.com",
     *         "logstoreName": "test-logstore",
     *         "region": "cn-hangzhou"
     *     },
     *     "outputType": "LogService"
     * }
     */
    public rawConfigData: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::SLS::LogtailConfig`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogtailConfigProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogtailConfig.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppliedMachineGroups = ros.Token.asString(this.getAtt('AppliedMachineGroups'));
        this.attrEndpoint = ros.Token.asString(this.getAtt('Endpoint'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.logstoreName = props.logstoreName;
        this.logtailConfigName = props.logtailConfigName;
        this.projectName = props.projectName;
        this.cloneFrom = props.cloneFrom;
        this.rawConfigData = props.rawConfigData;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            logstoreName: this.logstoreName,
            logtailConfigName: this.logtailConfigName,
            projectName: this.projectName,
            cloneFrom: this.cloneFrom,
            rawConfigData: this.rawConfigData,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogtailConfigPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosLogtailConfig {
    /**
     * @stability external
     */
    export interface CloneFromProperty {
        /**
         * @Property logtailConfigName: Logtail config name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
         */
        readonly logtailConfigName: string;
        /**
         * @Property projectName: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
         */
        readonly projectName: string;
    }
}
/**
 * Determine whether the given properties match those of a `CloneFromProperty`
 *
 * @param properties - the TypeScript properties of a `CloneFromProperty`
 *
 * @returns the result of the validation.
 */
function RosLogtailConfig_CloneFromPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('logtailConfigName', ros.requiredValidator)(properties.logtailConfigName));
    if(properties.logtailConfigName && (Array.isArray(properties.logtailConfigName) || (typeof properties.logtailConfigName) === 'string')) {
        errors.collect(ros.propertyValidator('logtailConfigName', ros.validateLength)({
            data: properties.logtailConfigName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('logtailConfigName', ros.validateString)(properties.logtailConfigName));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 63,
          }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    return errors.wrap('supplied properties not correct for "CloneFromProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig.CloneFrom` resource
 *
 * @param properties - the TypeScript properties of a `CloneFromProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::LogtailConfig.CloneFrom` resource.
 */
// @ts-ignore TS6133
function rosLogtailConfigCloneFromPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosLogtailConfig_CloneFromPropertyValidator(properties).assertSuccess();
    return {
      LogtailConfigName: ros.stringToRosTemplate(properties.logtailConfigName),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * Properties for defining a `ALIYUN::SLS::MachineGroup`
 */
export interface RosMachineGroupProps {

    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    readonly groupAttribute?: string;

    /**
     * @Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly groupName?: string;

    /**
     * @Property groupType: MachineGroup type, the value is empty or Armory
     */
    readonly groupType?: string;

    /**
     * @Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    readonly machineIdentifyType?: string;

    /**
     * @Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    readonly machineList?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property projectName: MachineGroup created in project.
     */
    readonly projectName?: string;
}

/**
 * Determine whether the given properties match those of a `RosMachineGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosMachineGroupProps`
 *
 * @returns the result of the validation.
 */
function RosMachineGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('machineList', ros.listValidator(ros.validateAny))(properties.machineList));
    errors.collect(ros.propertyValidator('groupName', ros.validateString)(properties.groupName));
    if(properties.groupType && (typeof properties.groupType) !== 'object') {
        errors.collect(ros.propertyValidator('groupType', ros.validateAllowedValues)({
          data: properties.groupType,
          allowedValues: ["","Armory"],
        }));
    }
    errors.collect(ros.propertyValidator('groupType', ros.validateString)(properties.groupType));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.machineIdentifyType && (typeof properties.machineIdentifyType) !== 'object') {
        errors.collect(ros.propertyValidator('machineIdentifyType', ros.validateAllowedValues)({
          data: properties.machineIdentifyType,
          allowedValues: ["ip","userdefined"],
        }));
    }
    errors.collect(ros.propertyValidator('machineIdentifyType', ros.validateString)(properties.machineIdentifyType));
    errors.collect(ros.propertyValidator('groupAttribute', ros.validateString)(properties.groupAttribute));
    return errors.wrap('supplied properties not correct for "RosMachineGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::MachineGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosMachineGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::MachineGroup` resource.
 */
// @ts-ignore TS6133
function rosMachineGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosMachineGroupPropsValidator(properties).assertSuccess();
    }
    return {
      GroupAttribute: ros.stringToRosTemplate(properties.groupAttribute),
      GroupName: ros.stringToRosTemplate(properties.groupName),
      GroupType: ros.stringToRosTemplate(properties.groupType),
      MachineIdentifyType: ros.stringToRosTemplate(properties.machineIdentifyType),
      MachineList: ros.listMapper(ros.objectToRosTemplate)(properties.machineList),
      ProjectName: ros.stringToRosTemplate(properties.projectName),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::MachineGroup`
 */
export class RosMachineGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::MachineGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute GroupName: GroupName of SLS.
     */
    public readonly attrGroupName: any;

    /**
     * @Attribute ProjectName: ProjectName of SLS.
     */
    public readonly attrProjectName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property groupAttribute: Group attribute, default is null. The object value is groupToic and externalName
     */
    public groupAttribute: string | undefined;

    /**
     * @Property groupName: Display name of the group name, the Project only. [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    public groupName: string | undefined;

    /**
     * @Property groupType: MachineGroup type, the value is empty or Armory
     */
    public groupType: string | undefined;

    /**
     * @Property machineIdentifyType: Machine indentify type, the value is 'ip' or 'userdefined'
     */
    public machineIdentifyType: string | undefined;

    /**
     * @Property machineList: The machine tag, the value is ip or userdefined-id.
     */
    public machineList: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property projectName: MachineGroup created in project.
     */
    public projectName: string | undefined;

    /**
     * Create a new `ALIYUN::SLS::MachineGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMachineGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosMachineGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrGroupName = ros.Token.asString(this.getAtt('GroupName'));
        this.attrProjectName = ros.Token.asString(this.getAtt('ProjectName'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.groupAttribute = props.groupAttribute;
        this.groupName = props.groupName;
        this.groupType = props.groupType;
        this.machineIdentifyType = props.machineIdentifyType;
        this.machineList = props.machineList;
        this.projectName = props.projectName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            groupAttribute: this.groupAttribute,
            groupName: this.groupName,
            groupType: this.groupType,
            machineIdentifyType: this.machineIdentifyType,
            machineList: this.machineList,
            projectName: this.projectName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosMachineGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::SLS::Project`
 */
export interface RosProjectProps {

    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    readonly name: string;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    readonly description?: string;
}

/**
 * Determine whether the given properties match those of a `RosProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the result of the validation.
 */
function RosProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 64,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (Array.isArray(properties.name) || (typeof properties.name) === 'string')) {
        errors.collect(ros.propertyValidator('name', ros.validateLength)({
            data: properties.name.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SLS::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SLS::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::SLS::Project`
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SLS::Project";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: Project name.
     */
    public readonly attrName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: Project name:
     * 1. Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
     * 2. Must start and end with lowercase letters and numbers.
     * 3. The name length is 3-63 characters.
     */
    public name: string;

    /**
     * @Property description: Project description: <>'"\ is not supported, up to 64 characters.
     */
    public description: string | undefined;

    /**
     * Create a new `ALIYUN::SLS::Project`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = ros.Token.asString(this.getAtt('Name'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
