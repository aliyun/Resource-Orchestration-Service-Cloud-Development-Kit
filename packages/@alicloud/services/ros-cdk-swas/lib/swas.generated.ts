// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
export interface RosInstanceProps {

    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('planId', ros.requiredValidator)(properties.planId));
    errors.collect(ros.propertyValidator('planId', ros.validateString)(properties.planId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstance_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'Period': ros.numberToRosTemplate(properties.period),
      'PlanId': ros.stringToRosTemplate(properties.planId),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'DataDiskSize': ros.numberToRosTemplate(properties.dataDiskSize),
      'Tags': ros.listMapper(rosInstanceTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::Instance`, which is used to create a subscription simple application server.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instance";

    /**
     * @Attribute InnerIpAddress: The inner IP address of simple application server.
     */
    public readonly attrInnerIpAddress: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the simple application server.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute PublicIpAddress: The public IP address of simple application server.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    public planId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    public dataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstance.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInnerIpAddress = this.getAtt('InnerIpAddress');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrPublicIpAddress = this.getAtt('PublicIpAddress');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.period = props.period;
        this.planId = props.planId;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dataDiskSize = props.dataDiskSize;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            period: this.period,
            planId: this.planId,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dataDiskSize: this.dataDiskSize,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstance {
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
function RosInstance_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instance.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instance.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstanceTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstance_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
 */
export interface RosInstancesProps {

    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    readonly imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    readonly planId: string | ros.IResolvable;

    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    readonly amount?: number | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    readonly dataDiskSize?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstances.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoRenewPeriod', ros.validateNumber)(properties.autoRenewPeriod));
    errors.collect(ros.propertyValidator('planId', ros.requiredValidator)(properties.planId));
    errors.collect(ros.propertyValidator('planId', ros.validateString)(properties.planId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.amount && (typeof properties.amount) !== 'object') {
        errors.collect(ros.propertyValidator('amount', ros.validateRange)({
            data: properties.amount,
            min: 1,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('amount', ros.validateNumber)(properties.amount));
    errors.collect(ros.propertyValidator('imageId', ros.requiredValidator)(properties.imageId));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('dataDiskSize', ros.validateNumber)(properties.dataDiskSize));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstances_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'Period': ros.numberToRosTemplate(properties.period),
      'PlanId': ros.stringToRosTemplate(properties.planId),
      'Amount': ros.numberToRosTemplate(properties.amount),
      'AutoRenew': ros.booleanToRosTemplate(properties.autoRenew),
      'AutoRenewPeriod': ros.numberToRosTemplate(properties.autoRenewPeriod),
      'DataDiskSize': ros.numberToRosTemplate(properties.dataDiskSize),
      'Tags': ros.listMapper(rosInstancesTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::Instances`, which is used to create subscription simple application servers.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::Instances";

    /**
     * @Attribute InnerIpAddresses: The inner IP addresses of simple application servers.
     */
    public readonly attrInnerIpAddresses: ros.IResolvable;

    /**
     * @Attribute InstanceIds: The IDs of the simple application servers.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute PublicIpAddresses: The public IP addresses of simple application servers.
     */
    public readonly attrPublicIpAddresses: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property imageId: The image ID. You can call the ListImages operation to query the available images in the specified region.
     */
    public imageId: string | ros.IResolvable;

    /**
     * @Property period: The subscription period of the servers. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property planId: The plan ID. You can call the ListPlans operation to query all plans provided by Simple Application Server in the specified region.
     */
    public planId: string | ros.IResolvable;

    /**
     * @Property amount: The number of simple application servers that you want to create. Valid values: 1 to 20.
     * Default value: 1.
     */
    public amount: number | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values:
     * true
     * false
     * Default value: false.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenewPeriod: The auto-renewal period. This parameter is required only when you set AutoRenew to true. Unit: months. Valid values: 1, 3, 6, 12, 24, and 36.
     */
    public autoRenewPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property dataDiskSize: The size of the data disk that is attached to the server. Unit: GB. Valid values: 0 to 16380. The value must be an integral multiple of 20.
     * A value of 0 indicates that no data disk is attached.
     * If the disk included in the specified plan is a standard SSD, the data disk must be 20 GB or larger in size.
     * Default value: 0.
     */
    public dataDiskSize: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to swas. Max support 20 tags to add during create swas. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosInstances.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInnerIpAddresses = this.getAtt('InnerIpAddresses');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrPublicIpAddresses = this.getAtt('PublicIpAddresses');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.imageId = props.imageId;
        this.period = props.period;
        this.planId = props.planId;
        this.amount = props.amount;
        this.autoRenew = props.autoRenew;
        this.autoRenewPeriod = props.autoRenewPeriod;
        this.dataDiskSize = props.dataDiskSize;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            imageId: this.imageId,
            period: this.period,
            planId: this.planId,
            amount: this.amount,
            autoRenew: this.autoRenew,
            autoRenewPeriod: this.autoRenewPeriod,
            dataDiskSize: this.dataDiskSize,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosInstances {
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
function RosInstances_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instances.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::Instances.Tags` resource.
 */
// @ts-ignore TS6133
function rosInstancesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstances_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosRunCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
export interface RosRunCommandProps {

    /**
     * @Property commandContent: The plaintext content of the command to run.
     */
    readonly commandContent: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property name: The name of the command to run.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunShellScript: shell scripts for Linux instances
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
     * PlainText: The command content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    readonly contentEncoding?: string | ros.IResolvable;

    /**
     * @Property enableParameter: Specifies whether the command contains custom parameters.
     * Default value: false
     */
    readonly enableParameter?: boolean | ros.IResolvable;

    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
     * Number of custom parameters: 0 to 20.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property sync: Whether to run the command synchronously.
     */
    readonly sync?: boolean | ros.IResolvable;

    /**
     * @Property timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
     */
    readonly timeout?: number | ros.IResolvable;

    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    readonly windowsPasswordName?: string | ros.IResolvable;

    /**
     * @Property workingDir: The directory in which to run the command on the instance. Default value:
     * Linux instances: \/root
     * Windows instances: C:\ProgramData\aliyun\assist\$(version)
     */
    readonly workingDir?: string | ros.IResolvable;

    /**
     * @Property workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
     */
    readonly workingUser?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRunCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the result of the validation.
 */
function RosRunCommandPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('commandContent', ros.requiredValidator)(properties.commandContent));
    errors.collect(ros.propertyValidator('commandContent', ros.validateString)(properties.commandContent));
    errors.collect(ros.propertyValidator('workingDir', ros.validateString)(properties.workingDir));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["RunShellScript","RunBatScript","RunPowerShellScript"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    if(properties.workingUser && (Array.isArray(properties.workingUser) || (typeof properties.workingUser) === 'string')) {
        errors.collect(ros.propertyValidator('workingUser', ros.validateLength)({
            data: properties.workingUser.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('workingUser', ros.validateString)(properties.workingUser));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 10,
            max: 86400,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    if(properties.windowsPasswordName && (Array.isArray(properties.windowsPasswordName) || (typeof properties.windowsPasswordName) === 'string')) {
        errors.collect(ros.propertyValidator('windowsPasswordName', ros.validateLength)({
            data: properties.windowsPasswordName.length,
            min: undefined,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('windowsPasswordName', ros.validateString)(properties.windowsPasswordName));
    errors.collect(ros.propertyValidator('enableParameter', ros.validateBoolean)(properties.enableParameter));
    if(properties.contentEncoding && (typeof properties.contentEncoding) !== 'object') {
        errors.collect(ros.propertyValidator('contentEncoding', ros.validateAllowedValues)({
          data: properties.contentEncoding,
          allowedValues: ["PlainText","Base64"],
        }));
    }
    errors.collect(ros.propertyValidator('contentEncoding', ros.validateString)(properties.contentEncoding));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosRunCommandProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::SWAS::RunCommand` resource
 *
 * @param properties - the TypeScript properties of a `RosRunCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::SWAS::RunCommand` resource.
 */
// @ts-ignore TS6133
function rosRunCommandPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRunCommandPropsValidator(properties).assertSuccess();
    }
    return {
      'CommandContent': ros.stringToRosTemplate(properties.commandContent),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Name': ros.stringToRosTemplate(properties.name),
      'Type': ros.stringToRosTemplate(properties.type),
      'ContentEncoding': ros.stringToRosTemplate(properties.contentEncoding),
      'EnableParameter': ros.booleanToRosTemplate(properties.enableParameter),
      'Parameters': ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      'Sync': ros.booleanToRosTemplate(properties.sync),
      'Timeout': ros.numberToRosTemplate(properties.timeout),
      'WindowsPasswordName': ros.stringToRosTemplate(properties.windowsPasswordName),
      'WorkingDir': ros.stringToRosTemplate(properties.workingDir),
      'WorkingUser': ros.stringToRosTemplate(properties.workingUser),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::SWAS::RunCommand`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RunCommand` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-swas-runcommand
 */
export class RosRunCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::SWAS::RunCommand";

    /**
     * @Attribute InvokeId: The ID of the command execution.
     */
    public readonly attrInvokeId: ros.IResolvable;

    /**
     * @Attribute InvokeResult: The result of the command execution.
     */
    public readonly attrInvokeResult: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commandContent: The plaintext content of the command to run.
     */
    public commandContent: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the SWAS instance on which to run the command. The instance must be in 'Running' status.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property name: The name of the command to run.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property type: The language type of the O&M script. Valid values:
     * RunShellScript: shell scripts for Linux instances
     * RunBatScript: batch scripts for Windows instances
     * RunPowerShellScript: PowerShell scripts for Windows instances
     */
    public type: string | ros.IResolvable;

    /**
     * @Property contentEncoding: The encoding mode of command content (CommandContent). Valid values (case insensitive):
     * PlainText: The command content is not encoded, and transmitted in plaintext.
     * Base64: base64-encoded.
     * Default value: PlainText. If the specified value of this parameter is invalid, PlainText is used by default.
     */
    public contentEncoding: string | ros.IResolvable | undefined;

    /**
     * @Property enableParameter: Specifies whether the command contains custom parameters.
     * Default value: false
     */
    public enableParameter: boolean | ros.IResolvable | undefined;

    /**
     * @Property parameters: The key-value pairs of custom parameters passed in when the command contains custom parameters.
     * Number of custom parameters: 0 to 20.
     * The key cannot be an empty string. It can be up to 64 characters in length.
     * The value can be an empty string.
     * After the custom parameters and the original command content are Base64 encoded, the total size cannot exceed 16 KB.
     * The set of custom parameter names must be a subset of the parameter set that is defined when you created the command. You can use an empty string to represent the parameters that are not passed in.
     * Default value: null, indicating that this parameter is canceled and customer parameters are disabled.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property sync: Whether to run the command synchronously.
     */
    public sync: boolean | ros.IResolvable | undefined;

    /**
     * @Property timeout: The timeout period for command execution. Unit: seconds. Valid values: 10 to 86400. Default value: 60.
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @Property windowsPasswordName: The name of the password to use to run the command on Windows instances. The name can be up to 255 characters in length.
     * If you do not want to use the default System user to run the command on Windows instances, specify both **WindowsPasswordName** and **WorkingUser**. To mitigate the risk of password leaks, the password is stored in plaintext in Operation Orchestration Service (OOS) Parameter Store, and only the name of the password is passed in by using WindowsPasswordName.
     */
    public windowsPasswordName: string | ros.IResolvable | undefined;

    /**
     * @Property workingDir: The directory in which to run the command on the instance. Default value:
     * Linux instances: \/root
     * Windows instances: C:\ProgramData\aliyun\assist\$(version)
     */
    public workingDir: string | ros.IResolvable | undefined;

    /**
     * @Property workingUser: The user with which to run the command on the instance. Default value: 'root' for Linux instances, 'system' for Windows instances. You can specify other existing users to run the command to reduce security risks.
     */
    public workingUser: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRunCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRunCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInvokeId = this.getAtt('InvokeId');
        this.attrInvokeResult = this.getAtt('InvokeResult');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandContent = props.commandContent;
        this.instanceId = props.instanceId;
        this.name = props.name;
        this.type = props.type;
        this.contentEncoding = props.contentEncoding;
        this.enableParameter = props.enableParameter;
        this.parameters = props.parameters;
        this.sync = props.sync;
        this.timeout = props.timeout;
        this.windowsPasswordName = props.windowsPasswordName;
        this.workingDir = props.workingDir;
        this.workingUser = props.workingUser;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commandContent: this.commandContent,
            instanceId: this.instanceId,
            name: this.name,
            type: this.type,
            contentEncoding: this.contentEncoding,
            enableParameter: this.enableParameter,
            parameters: this.parameters,
            sync: this.sync,
            timeout: this.timeout,
            windowsPasswordName: this.windowsPasswordName,
            workingDir: this.workingDir,
            workingUser: this.workingUser,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRunCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
