// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosActivation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
 */
export interface RosActivationProps {

    /**
     * @Property activationId: Activation code ID.
     */
    readonly activationId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosActivationProps`
 *
 * @param properties - the TypeScript properties of a `RosActivationProps`
 *
 * @returns the result of the validation.
 */
function RosActivationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('activationId', ros.requiredValidator)(properties.activationId));
    errors.collect(ros.propertyValidator('activationId', ros.validateString)(properties.activationId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosActivationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Activation` resource
 *
 * @param properties - the TypeScript properties of a `RosActivationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Activation` resource.
 */
// @ts-ignore TS6133
function rosActivationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosActivationPropsValidator(properties).assertSuccess();
    }
    return {
      'ActivationId': ros.stringToRosTemplate(properties.activationId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Activation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Activation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activation
 */
export class RosActivation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Activation";

    /**
     * @Attribute ActivationId: Activation code ID.
     */
    public readonly attrActivationId: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the activation code was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DeregisteredCount: The number of instances that have been logged out.
     */
    public readonly attrDeregisteredCount: ros.IResolvable;

    /**
     * @Attribute Description: The description of the activation code.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Disabled: Indicates whether the activation code is disabled.
     */
    public readonly attrDisabled: ros.IResolvable;

    /**
     * @Attribute InstanceCount: The maximum number of times that the activation code can be used to register managed instances.
     */
    public readonly attrInstanceCount: ros.IResolvable;

    /**
     * @Attribute InstanceName: The default prefix of the instance name.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute IpAddressRange: The IP address of the host that allows the activation code to be used.
     */
    public readonly attrIpAddressRange: ros.IResolvable;

    /**
     * @Attribute RegisteredCount: The number of instances that were registered.
     */
    public readonly attrRegisteredCount: ros.IResolvable;

    /**
     * @Attribute TimeToLiveInHours: The validity period of the activation code. Unit: hours.
     */
    public readonly attrTimeToLiveInHours: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property activationId: Activation code ID.
     */
    public activationId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosActivationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosActivation.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActivationId = this.getAtt('ActivationId');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDeregisteredCount = this.getAtt('DeregisteredCount');
        this.attrDescription = this.getAtt('Description');
        this.attrDisabled = this.getAtt('Disabled');
        this.attrInstanceCount = this.getAtt('InstanceCount');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrIpAddressRange = this.getAtt('IpAddressRange');
        this.attrRegisteredCount = this.getAtt('RegisteredCount');
        this.attrTimeToLiveInHours = this.getAtt('TimeToLiveInHours');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.activationId = props.activationId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            activationId: this.activationId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosActivationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosActivations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export interface RosActivationsProps {

    /**
     * @Property activationId: Activation code ID.
     */
    readonly activationId?: string | ros.IResolvable;

    /**
     * @Property instanceName: The default prefix of the instance name.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosActivationsProps`
 *
 * @param properties - the TypeScript properties of a `RosActivationsProps`
 *
 * @returns the result of the validation.
 */
function RosActivationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    errors.collect(ros.propertyValidator('activationId', ros.validateString)(properties.activationId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosActivationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Activations` resource
 *
 * @param properties - the TypeScript properties of a `RosActivationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Activations` resource.
 */
// @ts-ignore TS6133
function rosActivationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosActivationsPropsValidator(properties).assertSuccess();
    }
    return {
      'ActivationId': ros.stringToRosTemplate(properties.activationId),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Activations`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Activations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-activations
 */
export class RosActivations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Activations";

    /**
     * @Attribute ActivationIds: The list of activation IDs.
     */
    public readonly attrActivationIds: ros.IResolvable;

    /**
     * @Attribute Activations: The list of activations.
     */
    public readonly attrActivations: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property activationId: Activation code ID.
     */
    public activationId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The default prefix of the instance name.
     */
    public instanceName: string | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosActivationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosActivations.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActivationIds = this.getAtt('ActivationIds');
        this.attrActivations = this.getAtt('Activations');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.activationId = props.activationId;
        this.instanceName = props.instanceName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            activationId: this.activationId,
            instanceName: this.instanceName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosActivationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosAutoSnapshotPolicies`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export interface RosAutoSnapshotPoliciesProps {

    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of snapshotpolicy.
     */
    readonly tags?: RosAutoSnapshotPolicies.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosAutoSnapshotPoliciesProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPoliciesProps`
 *
 * @returns the result of the validation.
 */
function RosAutoSnapshotPoliciesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosAutoSnapshotPolicies_TagsPropertyValidator))(properties.tags));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAutoSnapshotPoliciesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::AutoSnapshotPolicies` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPoliciesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::AutoSnapshotPolicies` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPoliciesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoSnapshotPoliciesPropsValidator(properties).assertSuccess();
    }
    return {
      'AutoSnapshotPolicyId': ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosAutoSnapshotPoliciesTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicies`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoSnapshotPolicies` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicies
 */
export class RosAutoSnapshotPolicies extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::AutoSnapshotPolicies";

    /**
     * @Attribute AutoSnapshotPolicies: The list of auto snapshot policies.
     */
    public readonly attrAutoSnapshotPolicies: ros.IResolvable;

    /**
     * @Attribute AutoSnapshotPolicyIds: The list of auto snapshot policy ids.
     */
    public readonly attrAutoSnapshotPolicyIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy.
     */
    public autoSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the automatic snapshot policy belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of snapshotpolicy.
     */
    public tags: RosAutoSnapshotPolicies.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPoliciesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoSnapshotPolicies.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoSnapshotPolicies = this.getAtt('AutoSnapshotPolicies');
        this.attrAutoSnapshotPolicyIds = this.getAtt('AutoSnapshotPolicyIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoSnapshotPolicyId = props.autoSnapshotPolicyId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoSnapshotPolicyId: this.autoSnapshotPolicyId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoSnapshotPoliciesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosAutoSnapshotPolicies {
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
function RosAutoSnapshotPolicies_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::AutoSnapshotPolicies.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::AutoSnapshotPolicies.Tags` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPoliciesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosAutoSnapshotPolicies_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosAutoSnapshotPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
export interface RosAutoSnapshotPolicyProps {

    /**
     * @Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
     */
    readonly autoSnapshotPolicyId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAutoSnapshotPolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPolicyProps`
 *
 * @returns the result of the validation.
 */
function RosAutoSnapshotPolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.requiredValidator)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosAutoSnapshotPolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::AutoSnapshotPolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosAutoSnapshotPolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::AutoSnapshotPolicy` resource.
 */
// @ts-ignore TS6133
function rosAutoSnapshotPolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAutoSnapshotPolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'AutoSnapshotPolicyId': ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::AutoSnapshotPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AutoSnapshotPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-autosnapshotpolicy
 */
export class RosAutoSnapshotPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::AutoSnapshotPolicy";

    /**
     * @Attribute AutoSnapshotPolicyName: Name of the automatic snapshot policy.
     */
    public readonly attrAutoSnapshotPolicyName: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the automatic snapshot policy was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DiskNums: Number of cloud disks with this policy enabled.
     */
    public readonly attrDiskNums: ros.IResolvable;

    /**
     * @Attribute RepeatWeekdays: The days of the week on which to create automatic snapshots. Valid values: 1 to 7, which correspond to the days of the week. 1 indicates Monday. One or more days can be specified.
     */
    public readonly attrRepeatWeekdays: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute RetentionDays: The retention period of the automatic snapshot. Unit: days. Valid values:
- -1: The automatic snapshot is retained until it is deleted.
- 1 to 65536: The automatic snapshot is retained for the specified number of days.
     */
    public readonly attrRetentionDays: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the automatic snapshot policy.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TimePoints: The time when the automatic snapshot policy was created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrTimePoints: ros.IResolvable;

    /**
     * @Attribute VolumeNums: The number of extended volumes to which the automatic snapshot policy is applied.
     */
    public readonly attrVolumeNums: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property autoSnapshotPolicyId: The name of the automatic snapshot policy.
     */
    public autoSnapshotPolicyId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosAutoSnapshotPolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAutoSnapshotPolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoSnapshotPolicyName = this.getAtt('AutoSnapshotPolicyName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDiskNums = this.getAtt('DiskNums');
        this.attrRepeatWeekdays = this.getAtt('RepeatWeekdays');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRetentionDays = this.getAtt('RetentionDays');
        this.attrTags = this.getAtt('Tags');
        this.attrTimePoints = this.getAtt('TimePoints');
        this.attrVolumeNums = this.getAtt('VolumeNums');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.autoSnapshotPolicyId = props.autoSnapshotPolicyId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            autoSnapshotPolicyId: this.autoSnapshotPolicyId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAutoSnapshotPolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCommand`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export interface RosCommandProps {

    /**
     * @Property commandId: Command ID.
     */
    readonly commandId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommandProps`
 *
 * @param properties - the TypeScript properties of a `RosCommandProps`
 *
 * @returns the result of the validation.
 */
function RosCommandPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('commandId', ros.requiredValidator)(properties.commandId));
    errors.collect(ros.propertyValidator('commandId', ros.validateString)(properties.commandId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCommandProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Command` resource
 *
 * @param properties - the TypeScript properties of a `RosCommandProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Command` resource.
 */
// @ts-ignore TS6133
function rosCommandPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommandPropsValidator(properties).assertSuccess();
    }
    return {
      'CommandId': ros.stringToRosTemplate(properties.commandId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Command`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Command` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-command
 */
export class RosCommand extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Command";

    /**
     * @Attribute CommandContent: Command content, encoded in Base64 and transmitted.
     */
    public readonly attrCommandContent: ros.IResolvable;

    /**
     * @Attribute CommandId: Command ID.
     */
    public readonly attrCommandId: ros.IResolvable;

    /**
     * @Attribute CommandName: Command name.
     */
    public readonly attrCommandName: ros.IResolvable;

    /**
     * @Attribute CreateTime: Command creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: Command description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute EnableParameter: Whether to use parameters.
     */
    public readonly attrEnableParameter: ros.IResolvable;

    /**
     * @Attribute ParameterNames: Parameter name.
     */
    public readonly attrParameterNames: ros.IResolvable;

    /**
     * @Attribute Tags: The label information of the command.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Timeout: Timeout.
     */
    public readonly attrTimeout: ros.IResolvable;

    /**
     * @Attribute Type: Command type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute WorkingDir: Execution path.
     */
    public readonly attrWorkingDir: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commandId: Command ID.
     */
    public commandId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosCommandProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommand.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandContent = this.getAtt('CommandContent');
        this.attrCommandId = this.getAtt('CommandId');
        this.attrCommandName = this.getAtt('CommandName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrEnableParameter = this.getAtt('EnableParameter');
        this.attrParameterNames = this.getAtt('ParameterNames');
        this.attrTags = this.getAtt('Tags');
        this.attrTimeout = this.getAtt('Timeout');
        this.attrType = this.getAtt('Type');
        this.attrWorkingDir = this.getAtt('WorkingDir');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandId = props.commandId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commandId: this.commandId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommandPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCommands`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
 */
export interface RosCommandsProps {

    /**
     * @Property commandId: The ID of the command.
     */
    readonly commandId?: string | ros.IResolvable;

    /**
     * @Property commandName: The name of the command. Partial command names are not supported.
     */
    readonly commandName?: string | ros.IResolvable;

    /**
     * @Property description: Command description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property type: The command type. Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    readonly type?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCommandsProps`
 *
 * @param properties - the TypeScript properties of a `RosCommandsProps`
 *
 * @returns the result of the validation.
 */
function RosCommandsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["RunBatScript","RunPowerShellScript","RunShellScript"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('commandId', ros.validateString)(properties.commandId));
    errors.collect(ros.propertyValidator('commandName', ros.validateString)(properties.commandName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosCommandsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Commands` resource
 *
 * @param properties - the TypeScript properties of a `RosCommandsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Commands` resource.
 */
// @ts-ignore TS6133
function rosCommandsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCommandsPropsValidator(properties).assertSuccess();
    }
    return {
      'CommandId': ros.stringToRosTemplate(properties.commandId),
      'CommandName': ros.stringToRosTemplate(properties.commandName),
      'Description': ros.stringToRosTemplate(properties.description),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Type': ros.stringToRosTemplate(properties.type),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Commands`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Commands` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-commands
 */
export class RosCommands extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Commands";

    /**
     * @Attribute CommandIds: The list of command IDs.
     */
    public readonly attrCommandIds: ros.IResolvable;

    /**
     * @Attribute Commands: The list of commands.
     */
    public readonly attrCommands: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commandId: The ID of the command.
     */
    public commandId: string | ros.IResolvable | undefined;

    /**
     * @Property commandName: The name of the command. Partial command names are not supported.
     */
    public commandName: string | ros.IResolvable | undefined;

    /**
     * @Property description: Command description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property type: The command type. Valid values:
     * RunBatScript: batch command, applicable to Windows instances
     * RunPowerShellScript: PowerShell command, applicable to Windows instances
     * RunShellScript: shell command, applicable to Linux instances
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCommandsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCommands.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCommandIds = this.getAtt('CommandIds');
        this.attrCommands = this.getAtt('Commands');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commandId = props.commandId;
        this.commandName = props.commandName;
        this.description = props.description;
        this.refreshOptions = props.refreshOptions;
        this.type = props.type;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commandId: this.commandId,
            commandName: this.commandName,
            description: this.description,
            refreshOptions: this.refreshOptions,
            type: this.type,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCommandsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDedicatedHostCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export interface RosDedicatedHostClusterProps {

    /**
     * @Property dedicatedHostClusterId: Dedicated host cluster id.
     */
    readonly dedicatedHostClusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostClusterProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostClusterId', ros.requiredValidator)(properties.dedicatedHostClusterId));
    errors.collect(ros.propertyValidator('dedicatedHostClusterId', ros.validateString)(properties.dedicatedHostClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHostCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHostCluster` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedHostClusterId': ros.stringToRosTemplate(properties.dedicatedHostClusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DedicatedHostCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export class RosDedicatedHostCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DedicatedHostCluster";

    /**
     * @Attribute DedicatedHostClusterId: Dedicated host cluster id.
     */
    public readonly attrDedicatedHostClusterId: ros.IResolvable;

    /**
     * @Attribute DedicatedHostClusterName: The name of the dedicated host cluster.
     */
    public readonly attrDedicatedHostClusterName: ros.IResolvable;

    /**
     * @Attribute Description: The description of the dedicated host cluster.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the dedicated host cluster.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID of the dedicated host cluster.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostClusterId: Dedicated host cluster id.
     */
    public dedicatedHostClusterId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHostCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostClusterId = this.getAtt('DedicatedHostClusterId');
        this.attrDedicatedHostClusterName = this.getAtt('DedicatedHostClusterName');
        this.attrDescription = this.getAtt('Description');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostClusterId = props.dedicatedHostClusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostClusterId: this.dedicatedHostClusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDedicatedHostClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
export interface RosDedicatedHostClustersProps {

    /**
     * @Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    readonly dedicatedHostClusterName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs. 
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the dedicated host cluster. 
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostClustersProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostClusterName', ros.validateString)(properties.dedicatedHostClusterName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHostClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHostClusters` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedHostClusterName': ros.stringToRosTemplate(properties.dedicatedHostClusterName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DedicatedHostClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHostClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostclusters
 */
export class RosDedicatedHostClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DedicatedHostClusters";

    /**
     * @Attribute DedicatedHostClusterIds: The list of dedicated host cluster IDs.
     */
    public readonly attrDedicatedHostClusterIds: ros.IResolvable;

    /**
     * @Attribute DedicatedHostClusters: The list of dedicated host clusters.
     */
    public readonly attrDedicatedHostClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostClusterName: The name of the dedicated host cluster.
     */
    public dedicatedHostClusterName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host cluster belongs. 
     * If this parameter is specified to query resources,
     * up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the dedicated host cluster. 
     * You can call the DescribeZones operation to query the most recent zone list.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHostClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostClusterIds = this.getAtt('DedicatedHostClusterIds');
        this.attrDedicatedHostClusters = this.getAtt('DedicatedHostClusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostClusterName = props.dedicatedHostClusterName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostClusterName: this.dedicatedHostClusterName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDedicatedHosts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
export interface RosDedicatedHostsProps {

    /**
     * @Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    readonly dedicatedHostClusterId?: string | ros.IResolvable;

    /**
     * @Property dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
     */
    readonly dedicatedHostIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dedicatedHostName: The name of the dedicated host.
     */
    readonly dedicatedHostName?: string | ros.IResolvable;

    /**
     * @Property dedicatedHostType: The type of the dedicated host.
     */
    readonly dedicatedHostType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property status: The service status of the dedicated host. Valid values:
     * Available: The dedicated host is running normally.
     * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
     *  PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
     * Default value: Available.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of ddh.
     */
    readonly tags?: RosDedicatedHosts.TagsProperty[];

    /**
     * @Property zoneId: The zone ID of the dedicated host.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDedicatedHostsProps`
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostsProps`
 *
 * @returns the result of the validation.
 */
function RosDedicatedHostsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('dedicatedHostName', ros.validateString)(properties.dedicatedHostName));
    errors.collect(ros.propertyValidator('dedicatedHostType', ros.validateString)(properties.dedicatedHostType));
    if(properties.dedicatedHostIds && (Array.isArray(properties.dedicatedHostIds) || (typeof properties.dedicatedHostIds) === 'string')) {
        errors.collect(ros.propertyValidator('dedicatedHostIds', ros.validateLength)({
            data: properties.dedicatedHostIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('dedicatedHostIds', ros.listValidator(ros.validateString))(properties.dedicatedHostIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDedicatedHosts_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('dedicatedHostClusterId', ros.validateString)(properties.dedicatedHostClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDedicatedHostsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHosts` resource
 *
 * @param properties - the TypeScript properties of a `RosDedicatedHostsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHosts` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDedicatedHostsPropsValidator(properties).assertSuccess();
    }
    return {
      'DedicatedHostClusterId': ros.stringToRosTemplate(properties.dedicatedHostClusterId),
      'DedicatedHostIds': ros.listMapper(ros.stringToRosTemplate)(properties.dedicatedHostIds),
      'DedicatedHostName': ros.stringToRosTemplate(properties.dedicatedHostName),
      'DedicatedHostType': ros.stringToRosTemplate(properties.dedicatedHostType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Status': ros.stringToRosTemplate(properties.status),
      'Tags': ros.listMapper(rosDedicatedHostsTagsPropertyToRosTemplate)(properties.tags),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DedicatedHosts`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DedicatedHosts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhosts
 */
export class RosDedicatedHosts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DedicatedHosts";

    /**
     * @Attribute DedicatedHostIds: The list of dedicated host ids.
     */
    public readonly attrDedicatedHostIds: ros.IResolvable;

    /**
     * @Attribute DedicatedHosts: The list of dedicated hosts.
     */
    public readonly attrDedicatedHosts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dedicatedHostClusterId: The ID of the dedicated host cluster.
     */
    public dedicatedHostClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostIds: The IDs of the dedicated hosts. You can specify up to 100 dedicated host IDs.
     */
    public dedicatedHostIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostName: The name of the dedicated host.
     */
    public dedicatedHostName: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostType: The type of the dedicated host.
     */
    public dedicatedHostType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the dedicated host belongs.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The service status of the dedicated host. Valid values:
     * Available: The dedicated host is running normally.
     * UnderAssessment: The dedicated host is at risk, which may cause issues to ECS instances on the dedicated host.
     *  PermanentFailure: A permanent failure exists and the dedicated host is unavailable.
     * Default value: Available.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of ddh.
     */
    public tags: RosDedicatedHosts.TagsProperty[] | undefined;

    /**
     * @Property zoneId: The zone ID of the dedicated host.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDedicatedHostsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDedicatedHosts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDedicatedHostIds = this.getAtt('DedicatedHostIds');
        this.attrDedicatedHosts = this.getAtt('DedicatedHosts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dedicatedHostClusterId = props.dedicatedHostClusterId;
        this.dedicatedHostIds = props.dedicatedHostIds;
        this.dedicatedHostName = props.dedicatedHostName;
        this.dedicatedHostType = props.dedicatedHostType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.status = props.status;
        this.tags = props.tags;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dedicatedHostClusterId: this.dedicatedHostClusterId,
            dedicatedHostIds: this.dedicatedHostIds,
            dedicatedHostName: this.dedicatedHostName,
            dedicatedHostType: this.dedicatedHostType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            status: this.status,
            tags: this.tags,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDedicatedHostsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDedicatedHosts {
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
function RosDedicatedHosts_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHosts.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DedicatedHosts.Tags` resource.
 */
// @ts-ignore TS6133
function rosDedicatedHostsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDedicatedHosts_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosDeploymentSet`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
 */
export interface RosDeploymentSetProps {

    /**
     * @Property deploymentSetId: The ID of deployment set.
     */
    readonly deploymentSetId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDeploymentSetProps`
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetProps`
 *
 * @returns the result of the validation.
 */
function RosDeploymentSetPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('deploymentSetId', ros.requiredValidator)(properties.deploymentSetId));
    errors.collect(ros.propertyValidator('deploymentSetId', ros.validateString)(properties.deploymentSetId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDeploymentSetProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DeploymentSet` resource
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DeploymentSet` resource.
 */
// @ts-ignore TS6133
function rosDeploymentSetPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeploymentSetPropsValidator(properties).assertSuccess();
    }
    return {
      'DeploymentSetId': ros.stringToRosTemplate(properties.deploymentSetId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DeploymentSet`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeploymentSet` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentset
 */
export class RosDeploymentSet extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DeploymentSet";

    /**
     * @Attribute CreateTime: The time when the deployment set was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DeploymentSetId: The ID of deployment set.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    /**
     * @Attribute DeploymentSetName: The name of the deployment set.
     */
    public readonly attrDeploymentSetName: ros.IResolvable;

    /**
     * @Attribute Granularity: The deployment granularity.
     */
    public readonly attrGranularity: ros.IResolvable;

    /**
     * @Attribute GroupCount: The number of deployment set groups in the deployment set.
     */
    public readonly attrGroupCount: ros.IResolvable;

    /**
     * @Attribute InstanceAmount: The number of instances in the deployment set.
     */
    public readonly attrInstanceAmount: ros.IResolvable;

    /**
     * @Attribute InstanceIds: The IDs of the instances in the deployment set.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Strategy: The deployment strategy.
     */
    public readonly attrStrategy: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deploymentSetId: The ID of deployment set.
     */
    public deploymentSetId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDeploymentSetProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeploymentSet.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDeploymentSetId = this.getAtt('DeploymentSetId');
        this.attrDeploymentSetName = this.getAtt('DeploymentSetName');
        this.attrGranularity = this.getAtt('Granularity');
        this.attrGroupCount = this.getAtt('GroupCount');
        this.attrInstanceAmount = this.getAtt('InstanceAmount');
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrStrategy = this.getAtt('Strategy');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deploymentSetId = props.deploymentSetId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deploymentSetId: this.deploymentSetId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeploymentSetPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDeploymentSets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
 */
export interface RosDeploymentSetsProps {

    /**
     * @Property deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
     */
    readonly deploymentSetIds?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property deploymentSetName: The name of the deployment set.
     */
    readonly deploymentSetName?: string | ros.IResolvable;

    /**
     * @Property domain: The deployment domain.
     */
    readonly domain?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property strategy: The deployment strategy. Valid values:
     * Availability: high availability strategy.
     *  AvailabilityGroup: high availability group strategy.
     */
    readonly strategy?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDeploymentSetsProps`
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetsProps`
 *
 * @returns the result of the validation.
 */
function RosDeploymentSetsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.deploymentSetIds && (Array.isArray(properties.deploymentSetIds) || (typeof properties.deploymentSetIds) === 'string')) {
        errors.collect(ros.propertyValidator('deploymentSetIds', ros.validateLength)({
            data: properties.deploymentSetIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('deploymentSetIds', ros.listValidator(ros.validateAny))(properties.deploymentSetIds));
    errors.collect(ros.propertyValidator('strategy', ros.validateString)(properties.strategy));
    errors.collect(ros.propertyValidator('deploymentSetName', ros.validateString)(properties.deploymentSetName));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDeploymentSetsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DeploymentSets` resource
 *
 * @param properties - the TypeScript properties of a `RosDeploymentSetsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DeploymentSets` resource.
 */
// @ts-ignore TS6133
function rosDeploymentSetsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDeploymentSetsPropsValidator(properties).assertSuccess();
    }
    return {
      'DeploymentSetIds': ros.listMapper(ros.objectToRosTemplate)(properties.deploymentSetIds),
      'DeploymentSetName': ros.stringToRosTemplate(properties.deploymentSetName),
      'Domain': ros.stringToRosTemplate(properties.domain),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Strategy': ros.stringToRosTemplate(properties.strategy),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DeploymentSets`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DeploymentSets` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-deploymentsets
 */
export class RosDeploymentSets extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DeploymentSets";

    /**
     * @Attribute DeploymentSetIds: the list of deployment set ids
     */
    public readonly attrDeploymentSetIds: ros.IResolvable;

    /**
     * @Attribute DeploymentSets: The list of deployment sets.
     */
    public readonly attrDeploymentSets: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property deploymentSetIds: he IDs of deployment sets. The value can be a JSON array that consists of up to 100 deployment set IDs in the format of ["ds-xxxxxxxxx", "ds-yyyyyyyyy", … "ds-zzzzzzzzz"]. Separate multiple deployment set IDs with commas (,).
     */
    public deploymentSetIds: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property deploymentSetName: The name of the deployment set.
     */
    public deploymentSetName: string | ros.IResolvable | undefined;

    /**
     * @Property domain: The deployment domain.
     */
    public domain: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property strategy: The deployment strategy. Valid values:
     * Availability: high availability strategy.
     *  AvailabilityGroup: high availability group strategy.
     */
    public strategy: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDeploymentSetsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDeploymentSets.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDeploymentSetIds = this.getAtt('DeploymentSetIds');
        this.attrDeploymentSets = this.getAtt('DeploymentSets');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.deploymentSetIds = props.deploymentSetIds;
        this.deploymentSetName = props.deploymentSetName;
        this.domain = props.domain;
        this.refreshOptions = props.refreshOptions;
        this.strategy = props.strategy;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            deploymentSetIds: this.deploymentSetIds,
            deploymentSetName: this.deploymentSetName,
            domain: this.domain,
            refreshOptions: this.refreshOptions,
            strategy: this.strategy,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDeploymentSetsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDisk`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export interface RosDiskProps {

    /**
     * @Property diskId: The disk id.
     */
    readonly diskId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the result of the validation.
 */
function RosDiskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('diskId', ros.requiredValidator)(properties.diskId));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosDiskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disk` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disk` resource.
 */
// @ts-ignore TS6133
function rosDiskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskPropsValidator(properties).assertSuccess();
    }
    return {
      'DiskId': ros.stringToRosTemplate(properties.diskId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Disk`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disk` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disk
 */
export class RosDisk extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Disk";

    /**
     * @Attribute AttachedTime: The attached time.
     */
    public readonly attrAttachedTime: ros.IResolvable;

    /**
     * @Attribute AutoSnapshotPolicyId: Automatic snapshot policy ID.
     */
    public readonly attrAutoSnapshotPolicyId: ros.IResolvable;

    /**
     * @Attribute BurstingEnabled: Does the data disk turn on Burst (performance Burst).
     */
    public readonly attrBurstingEnabled: ros.IResolvable;

    /**
     * @Attribute Category: Disk type.
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute CreateTime: The creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DeleteAutoSnapshot: Whether to delete automatic snapshots at the same time.
     */
    public readonly attrDeleteAutoSnapshot: ros.IResolvable;

    /**
     * @Attribute DeleteWithInstance: Whether to release with the instance.
     */
    public readonly attrDeleteWithInstance: ros.IResolvable;

    /**
     * @Attribute Description: The description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DetachedTime: Unloading time.
     */
    public readonly attrDetachedTime: ros.IResolvable;

    /**
     * @Attribute Device: Cloud disk or the device name of the mounted instance on the site.
     */
    public readonly attrDevice: ros.IResolvable;

    /**
     * @Attribute DiskId: The disk id.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * @Attribute DiskName: The disk name.
     */
    public readonly attrDiskName: ros.IResolvable;

    /**
     * @Attribute EnableAutoSnapshot: Whether the disk implements an automatic snapshot policy.
     */
    public readonly attrEnableAutoSnapshot: ros.IResolvable;

    /**
     * @Attribute EnableAutomatedSnapshotPolicy: Whether the disk implements an automatic snapshot policy.
     */
    public readonly attrEnableAutomatedSnapshotPolicy: ros.IResolvable;

    /**
     * @Attribute Encrypted: Whether the disk is encrypted.
     */
    public readonly attrEncrypted: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: The expiration time of a monthly disk.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute ImageId: The image id.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute InstanceId: The instance id.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute Iops: Number of read/write (I/O) operations per second.
     */
    public readonly attrIops: ros.IResolvable;

    /**
     * @Attribute IopsRead: Number of reads per second.
     */
    public readonly attrIopsRead: ros.IResolvable;

    /**
     * @Attribute IopsWrite: Number of writes per second.
     */
    public readonly attrIopsWrite: ros.IResolvable;

    /**
     * @Attribute KmsKeyId: The KMS keyId.
     */
    public readonly attrKmsKeyId: ros.IResolvable;

    /**
     * @Attribute MountInstanceNum: Number of instances mounted on shared storage.
     */
    public readonly attrMountInstanceNum: ros.IResolvable;

    /**
     * @Attribute MountInstances: Disk mount instances.
     */
    public readonly attrMountInstances: ros.IResolvable;

    /**
     * @Attribute MultiAttach: Whether to enable the multi-Mount feature.
     */
    public readonly attrMultiAttach: ros.IResolvable;

    /**
     * @Attribute OperationLocks: Resource locking information.
     */
    public readonly attrOperationLocks: ros.IResolvable;

    /**
     * @Attribute PaymentType: Payment method for disk.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PerformanceLevel: Performance levels of ESSD cloud disk.
     */
    public readonly attrPerformanceLevel: ros.IResolvable;

    /**
     * @Attribute Portable: Whether the disk is unmountable.
     */
    public readonly attrPortable: ros.IResolvable;

    /**
     * @Attribute ProductCode: The product logo of the cloud market.
     */
    public readonly attrProductCode: ros.IResolvable;

    /**
     * @Attribute ProvisionedIops: The preconfigured read and write IOPS of the ESSD AutoPL cloud disk. Possible values: 0 ~ min{50,000, 1000 * capacity-baseline performance}.
     */
    public readonly attrProvisionedIops: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Size: Disk size.
     */
    public readonly attrSize: ros.IResolvable;

    /**
     * @Attribute SnapshotId: The source snapshot id.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    /**
     * @Attribute StorageClusterId: The ID of the dedicated block storage cluster. If you need to create a cloud disk in the specified dedicated block storage cluster, specify this parameter.
     */
    public readonly attrStorageClusterId: ros.IResolvable;

    /**
     * @Attribute StorageSetId: The ID of the Save set.
     */
    public readonly attrStorageSetId: ros.IResolvable;

    /**
     * @Attribute StorageSetPartitionNumber: Number of Save set partitions. Value range: greater than or equal to 2. The maximum value cannot exceed the equity quota limit displayed after calling.
     */
    public readonly attrStorageSetPartitionNumber: ros.IResolvable;

    /**
     * @Attribute Tags: The tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute ZoneId: ID of the free zone to which the disk belongs.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property diskId: The disk id.
     */
    public diskId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosDiskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDisk.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAttachedTime = this.getAtt('AttachedTime');
        this.attrAutoSnapshotPolicyId = this.getAtt('AutoSnapshotPolicyId');
        this.attrBurstingEnabled = this.getAtt('BurstingEnabled');
        this.attrCategory = this.getAtt('Category');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDeleteAutoSnapshot = this.getAtt('DeleteAutoSnapshot');
        this.attrDeleteWithInstance = this.getAtt('DeleteWithInstance');
        this.attrDescription = this.getAtt('Description');
        this.attrDetachedTime = this.getAtt('DetachedTime');
        this.attrDevice = this.getAtt('Device');
        this.attrDiskId = this.getAtt('DiskId');
        this.attrDiskName = this.getAtt('DiskName');
        this.attrEnableAutoSnapshot = this.getAtt('EnableAutoSnapshot');
        this.attrEnableAutomatedSnapshotPolicy = this.getAtt('EnableAutomatedSnapshotPolicy');
        this.attrEncrypted = this.getAtt('Encrypted');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrImageId = this.getAtt('ImageId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrIops = this.getAtt('Iops');
        this.attrIopsRead = this.getAtt('IopsRead');
        this.attrIopsWrite = this.getAtt('IopsWrite');
        this.attrKmsKeyId = this.getAtt('KmsKeyId');
        this.attrMountInstanceNum = this.getAtt('MountInstanceNum');
        this.attrMountInstances = this.getAtt('MountInstances');
        this.attrMultiAttach = this.getAtt('MultiAttach');
        this.attrOperationLocks = this.getAtt('OperationLocks');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPerformanceLevel = this.getAtt('PerformanceLevel');
        this.attrPortable = this.getAtt('Portable');
        this.attrProductCode = this.getAtt('ProductCode');
        this.attrProvisionedIops = this.getAtt('ProvisionedIops');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSize = this.getAtt('Size');
        this.attrSnapshotId = this.getAtt('SnapshotId');
        this.attrStorageClusterId = this.getAtt('StorageClusterId');
        this.attrStorageSetId = this.getAtt('StorageSetId');
        this.attrStorageSetPartitionNumber = this.getAtt('StorageSetPartitionNumber');
        this.attrTags = this.getAtt('Tags');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.diskId = props.diskId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            diskId: this.diskId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDiskCategories`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
 */
export interface RosDiskCategoriesProps {

    /**
     * @Property type: The resource type to query.
     * If you set Type to data,you can specify the InstanceType parameter to disk.
     * If you set Type to system, you must specify the InstanceType parameter.
     * Valid values:
     * system: system disk
     * data: data disk
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values: 
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    readonly dataDiskCategory?: string | ros.IResolvable;

    /**
     * @Property instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
     * When the Type parameter is set to system or data,you must set the InstanceType parameter.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values: 
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDiskCategoriesProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskCategoriesProps`
 *
 * @returns the result of the validation.
 */
function RosDiskCategoriesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["system","data"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dataDiskCategory', ros.validateString)(properties.dataDiskCategory));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosDiskCategoriesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DiskCategories` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskCategoriesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::DiskCategories` resource.
 */
// @ts-ignore TS6133
function rosDiskCategoriesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskCategoriesPropsValidator(properties).assertSuccess();
    }
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'DataDiskCategory': ros.stringToRosTemplate(properties.dataDiskCategory),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::DiskCategories`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DiskCategories` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-diskcategories
 */
export class RosDiskCategories extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::DiskCategories";

    /**
     * @Attribute DiskCategories: The list of disk categories.
     */
    public readonly attrDiskCategories: ros.IResolvable;

    /**
     * @Attribute DiskCategoryIds: The list of disk category IDs.
     */
    public readonly attrDiskCategoryIds: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property type: The resource type to query.
     * If you set Type to data,you can specify the InstanceType parameter to disk.
     * If you set Type to system, you must specify the InstanceType parameter.
     * Valid values:
     * system: system disk
     * data: data disk
     */
    public type: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values: 
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    public dataDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The instance type. For more information,see Instance families or call the DescribeInstanceTypes,operation to query the most recent instance type list.
     * When the Type parameter is set to system or data,you must set the InstanceType parameter.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values: 
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskCategoriesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskCategories.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskCategories = this.getAtt('DiskCategories');
        this.attrDiskCategoryIds = this.getAtt('DiskCategoryIds');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.type = props.type;
        this.zoneId = props.zoneId;
        this.dataDiskCategory = props.dataDiskCategory;
        this.instanceType = props.instanceType;
        this.refreshOptions = props.refreshOptions;
        this.systemDiskCategory = props.systemDiskCategory;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            type: this.type,
            zoneId: this.zoneId,
            dataDiskCategory: this.dataDiskCategory,
            instanceType: this.instanceType,
            refreshOptions: this.refreshOptions,
            systemDiskCategory: this.systemDiskCategory,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskCategoriesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosDisks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
export interface RosDisksProps {

    /**
     * @Property additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
     */
    readonly additionalAttributes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
     */
    readonly autoSnapshotPolicyId?: string | ros.IResolvable;

    /**
     * @Property category: The category of the disk. Valid values:
     * all: all disk categories
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral: retired local disk
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     * local_ssd_pro: I\/O-intensive local disk
     * local_hdd_pro: throughput-intensive local disk
     */
    readonly category?: string | ros.IResolvable;

    /**
     * @Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
     * Default value: false.
     */
    readonly deleteAutoSnapshot?: string | ros.IResolvable;

    /**
     * @Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
     * true: The cloud disk is released when its associated instance is released.
     * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
     * Default value: false.
     */
    readonly deleteWithInstance?: boolean | ros.IResolvable;

    /**
     * @Property diskChargeType: The billing method of the disk. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly diskChargeType?: string | ros.IResolvable;

    /**
     * @Property diskIds: The IDs of disks.
     * The value is a JSON array that consists of up to 100 disk IDs.
     * Separate the disk IDs with commas (,).
     */
    readonly diskIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property diskName: The name of the disk.
     */
    readonly diskName?: string | ros.IResolvable;

    /**
     * @Property diskType: The type of the disk. Valid values:
     * all: system disk and data disk
     * system: system disk
     * data: data disk
     * Default value: all.
     */
    readonly diskType?: string | ros.IResolvable;

    /**
     * @Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
     * true: An automatic snapshot policy is applied to the cloud disk.
     * false: No automatic snapshot policy is applied to the cloud disk.
     * Default value: false.
     */
    readonly enableAutomatedSnapshotPolicy?: boolean | ros.IResolvable;

    /**
     * @Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
     * true: The automatic snapshot policy feature is enabled for the cloud disk.
     * false: The automatic snapshot policy feature is disabled for the cloud disk.
     * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
     */
    readonly enableAutoSnapshot?: boolean | ros.IResolvable;

    /**
     * @Property enableShared: Specifies whether the disk is a Shared Block Storage device.
     */
    readonly enableShared?: string | ros.IResolvable;

    /**
     * @Property encrypted: Specifies whether to query only encrypted cloud disks.
     * Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosDisks.FiltersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance to which the disk is attached.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
     * Disabled: The multi-attach feature is disabled.
     * Enabled: The multi-attach feature is enabled.
     * LegacyShared: Shared Block Storage devices are queried.
     * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
     */
    readonly multiAttach?: string | ros.IResolvable;

    /**
     * @Property portable: Specifies whether the disk is removable. Valid values:
     * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
     * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
     * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
     * Local disks
     * Local SSDs
     * Subscription data disks
     */
    readonly portable?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the disk belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property snapshotId: The ID of the snapshot used to create the cloud disk.
     */
    readonly snapshotId?: string | ros.IResolvable;

    /**
     * @Property status: The state of the cloud disk. For more information, see Disk states. Valid values:
     * In_use
     * Available
     * Attaching
     * Detaching
     * Creating
     * ReIniting
     * All
     * Default value: All.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of disks.
     */
    readonly tags?: RosDisks.TagsProperty[];

    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDisksProps`
 *
 * @param properties - the TypeScript properties of a `RosDisksProps`
 *
 * @returns the result of the validation.
 */
function RosDisksPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["In_use","Available","Attaching","Detaching","Creating","ReIniting","All"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    if(properties.diskIds && (Array.isArray(properties.diskIds) || (typeof properties.diskIds) === 'string')) {
        errors.collect(ros.propertyValidator('diskIds', ros.validateLength)({
            data: properties.diskIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('diskIds', ros.listValidator(ros.validateString))(properties.diskIds));
    errors.collect(ros.propertyValidator('enableShared', ros.validateString)(properties.enableShared));
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('deleteWithInstance', ros.validateBoolean)(properties.deleteWithInstance));
    errors.collect(ros.propertyValidator('deleteAutoSnapshot', ros.validateString)(properties.deleteAutoSnapshot));
    errors.collect(ros.propertyValidator('enableAutomatedSnapshotPolicy', ros.validateBoolean)(properties.enableAutomatedSnapshotPolicy));
    errors.collect(ros.propertyValidator('diskChargeType', ros.validateString)(properties.diskChargeType));
    errors.collect(ros.propertyValidator('enableAutoSnapshot', ros.validateBoolean)(properties.enableAutoSnapshot));
    errors.collect(ros.propertyValidator('autoSnapshotPolicyId', ros.validateString)(properties.autoSnapshotPolicyId));
    errors.collect(ros.propertyValidator('diskName', ros.validateString)(properties.diskName));
    errors.collect(ros.propertyValidator('multiAttach', ros.validateString)(properties.multiAttach));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    if(properties.diskType && (typeof properties.diskType) !== 'object') {
        errors.collect(ros.propertyValidator('diskType', ros.validateAllowedValues)({
          data: properties.diskType,
          allowedValues: ["all","system","data"],
        }));
    }
    errors.collect(ros.propertyValidator('diskType', ros.validateString)(properties.diskType));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('portable', ros.validateString)(properties.portable));
    if(properties.filters && (Array.isArray(properties.filters) || (typeof properties.filters) === 'string')) {
        errors.collect(ros.propertyValidator('filters', ros.validateLength)({
            data: properties.filters.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('filters', ros.listValidator(RosDisks_FiltersPropertyValidator))(properties.filters));
    if(properties.additionalAttributes && (Array.isArray(properties.additionalAttributes) || (typeof properties.additionalAttributes) === 'string')) {
        errors.collect(ros.propertyValidator('additionalAttributes', ros.validateLength)({
            data: properties.additionalAttributes.length,
            min: undefined,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('additionalAttributes', ros.listValidator(ros.validateString))(properties.additionalAttributes));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosDisks_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosDisksProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disks` resource
 *
 * @param properties - the TypeScript properties of a `RosDisksProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disks` resource.
 */
// @ts-ignore TS6133
function rosDisksPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDisksPropsValidator(properties).assertSuccess();
    }
    return {
      'AdditionalAttributes': ros.listMapper(ros.stringToRosTemplate)(properties.additionalAttributes),
      'AutoSnapshotPolicyId': ros.stringToRosTemplate(properties.autoSnapshotPolicyId),
      'Category': ros.stringToRosTemplate(properties.category),
      'DeleteAutoSnapshot': ros.stringToRosTemplate(properties.deleteAutoSnapshot),
      'DeleteWithInstance': ros.booleanToRosTemplate(properties.deleteWithInstance),
      'DiskChargeType': ros.stringToRosTemplate(properties.diskChargeType),
      'DiskIds': ros.listMapper(ros.stringToRosTemplate)(properties.diskIds),
      'DiskName': ros.stringToRosTemplate(properties.diskName),
      'DiskType': ros.stringToRosTemplate(properties.diskType),
      'EnableAutomatedSnapshotPolicy': ros.booleanToRosTemplate(properties.enableAutomatedSnapshotPolicy),
      'EnableAutoSnapshot': ros.booleanToRosTemplate(properties.enableAutoSnapshot),
      'EnableShared': ros.stringToRosTemplate(properties.enableShared),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'Filters': ros.listMapper(rosDisksFiltersPropertyToRosTemplate)(properties.filters),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'KMSKeyId': ros.stringToRosTemplate(properties.kmsKeyId),
      'MultiAttach': ros.stringToRosTemplate(properties.multiAttach),
      'Portable': ros.stringToRosTemplate(properties.portable),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SnapshotId': ros.stringToRosTemplate(properties.snapshotId),
      'Status': ros.stringToRosTemplate(properties.status),
      'Tags': ros.listMapper(rosDisksTagsPropertyToRosTemplate)(properties.tags),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Disks`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Disks` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-disks
 */
export class RosDisks extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Disks";

    /**
     * @Attribute DiskIds: The list of disk IDs.
     */
    public readonly attrDiskIds: ros.IResolvable;

    /**
     * @Attribute Disks: The list of disks.
     */
    public readonly attrDisks: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property additionalAttributes: The value of attribute N. Set the value to IOPS, which indicates the maximum IOPS of the disk.
     */
    public additionalAttributes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
     */
    public autoSnapshotPolicyId: string | ros.IResolvable | undefined;

    /**
     * @Property category: The category of the disk. Valid values:
     * all: all disk categories
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral: retired local disk
     * ephemeral_ssd: local SSD
     * cloud_essd: ESSD
     * local_ssd_pro: I\/O-intensive local disk
     * local_hdd_pro: throughput-intensive local disk
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
     * Default value: false.
     */
    public deleteAutoSnapshot: string | ros.IResolvable | undefined;

    /**
     * @Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. Valid values:
     * true: The cloud disk is released when its associated instance is released.
     * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
     * Default value: false.
     */
    public deleteWithInstance: boolean | ros.IResolvable | undefined;

    /**
     * @Property diskChargeType: The billing method of the disk. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    public diskChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property diskIds: The IDs of disks.
     * The value is a JSON array that consists of up to 100 disk IDs.
     * Separate the disk IDs with commas (,).
     */
    public diskIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property diskName: The name of the disk.
     */
    public diskName: string | ros.IResolvable | undefined;

    /**
     * @Property diskType: The type of the disk. Valid values:
     * all: system disk and data disk
     * system: system disk
     * data: data disk
     * Default value: all.
     */
    public diskType: string | ros.IResolvable | undefined;

    /**
     * @Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
     * true: An automatic snapshot policy is applied to the cloud disk.
     * false: No automatic snapshot policy is applied to the cloud disk.
     * Default value: false.
     */
    public enableAutomatedSnapshotPolicy: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
     * true: The automatic snapshot policy feature is enabled for the cloud disk.
     * false: The automatic snapshot policy feature is disabled for the cloud disk.
     * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
     */
    public enableAutoSnapshot: boolean | ros.IResolvable | undefined;

    /**
     * @Property enableShared: Specifies whether the disk is a Shared Block Storage device.
     */
    public enableShared: string | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Specifies whether to query only encrypted cloud disks.
     * Default value: false.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property filters: Filter value when querying resources
     */
    public filters: Array<RosDisks.FiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the instance to which the disk is attached.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. Valid values:
     * Disabled: The multi-attach feature is disabled.
     * Enabled: The multi-attach feature is enabled.
     * LegacyShared: Shared Block Storage devices are queried.
     * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
     */
    public multiAttach: string | ros.IResolvable | undefined;

    /**
     * @Property portable: Specifies whether the disk is removable. Valid values:
     * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
     * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
     * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
     * Local disks
     * Local SSDs
     * Subscription data disks
     */
    public portable: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the disk belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: The ID of the snapshot used to create the cloud disk.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The state of the cloud disk. For more information, see Disk states. Valid values:
     * In_use
     * Available
     * Attaching
     * Detaching
     * Creating
     * ReIniting
     * All
     * Default value: All.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of disks.
     */
    public tags: RosDisks.TagsProperty[] | undefined;

    /**
     * @Property zoneId: The ID of the zone for which to query resources.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDisksProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDisks.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDiskIds = this.getAtt('DiskIds');
        this.attrDisks = this.getAtt('Disks');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.additionalAttributes = props.additionalAttributes;
        this.autoSnapshotPolicyId = props.autoSnapshotPolicyId;
        this.category = props.category;
        this.deleteAutoSnapshot = props.deleteAutoSnapshot;
        this.deleteWithInstance = props.deleteWithInstance;
        this.diskChargeType = props.diskChargeType;
        this.diskIds = props.diskIds;
        this.diskName = props.diskName;
        this.diskType = props.diskType;
        this.enableAutomatedSnapshotPolicy = props.enableAutomatedSnapshotPolicy;
        this.enableAutoSnapshot = props.enableAutoSnapshot;
        this.enableShared = props.enableShared;
        this.encrypted = props.encrypted;
        this.filters = props.filters;
        this.instanceId = props.instanceId;
        this.kmsKeyId = props.kmsKeyId;
        this.multiAttach = props.multiAttach;
        this.portable = props.portable;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
        this.status = props.status;
        this.tags = props.tags;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            additionalAttributes: this.additionalAttributes,
            autoSnapshotPolicyId: this.autoSnapshotPolicyId,
            category: this.category,
            deleteAutoSnapshot: this.deleteAutoSnapshot,
            deleteWithInstance: this.deleteWithInstance,
            diskChargeType: this.diskChargeType,
            diskIds: this.diskIds,
            diskName: this.diskName,
            diskType: this.diskType,
            enableAutomatedSnapshotPolicy: this.enableAutomatedSnapshotPolicy,
            enableAutoSnapshot: this.enableAutoSnapshot,
            enableShared: this.enableShared,
            encrypted: this.encrypted,
            filters: this.filters,
            instanceId: this.instanceId,
            kmsKeyId: this.kmsKeyId,
            multiAttach: this.multiAttach,
            portable: this.portable,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
            status: this.status,
            tags: this.tags,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDisksPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDisks {
    /**
     * @stability external
     */
    export interface FiltersProperty {
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
 * Determine whether the given properties match those of a `FiltersProperty`
 *
 * @param properties - the TypeScript properties of a `FiltersProperty`
 *
 * @returns the result of the validation.
 */
function RosDisks_FiltersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "FiltersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disks.Filters` resource
 *
 * @param properties - the TypeScript properties of a `FiltersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disks.Filters` resource.
 */
// @ts-ignore TS6133
function rosDisksFiltersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDisks_FiltersPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosDisks {
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
function RosDisks_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disks.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Disks.Tags` resource.
 */
// @ts-ignore TS6133
function rosDisksTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDisks_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosHpcCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
export interface RosHpcClusterProps {

    /**
     * @Property hpcClusterId: The ID of cluster.
     */
    readonly hpcClusterId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHpcClusterProps`
 *
 * @param properties - the TypeScript properties of a `RosHpcClusterProps`
 *
 * @returns the result of the validation.
 */
function RosHpcClusterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('hpcClusterId', ros.requiredValidator)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosHpcClusterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::HpcCluster` resource
 *
 * @param properties - the TypeScript properties of a `RosHpcClusterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::HpcCluster` resource.
 */
// @ts-ignore TS6133
function rosHpcClusterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHpcClusterPropsValidator(properties).assertSuccess();
    }
    return {
      'HpcClusterId': ros.stringToRosTemplate(properties.hpcClusterId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::HpcCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HpcCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpccluster
 */
export class RosHpcCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::HpcCluster";

    /**
     * @Attribute Description: The description of the HPC cluster.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute HpcClusterId: The ID of cluster.
     */
    public readonly attrHpcClusterId: ros.IResolvable;

    /**
     * @Attribute HpcClusterName: The name of the HPC cluster.
     */
    public readonly attrHpcClusterName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property hpcClusterId: The ID of cluster.
     */
    public hpcClusterId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosHpcClusterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHpcCluster.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrHpcClusterId = this.getAtt('HpcClusterId');
        this.attrHpcClusterName = this.getAtt('HpcClusterName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.hpcClusterId = props.hpcClusterId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            hpcClusterId: this.hpcClusterId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHpcClusterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHpcClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export interface RosHpcClustersProps {

    /**
     * @Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
     */
    readonly hpcClusterIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHpcClustersProps`
 *
 * @param properties - the TypeScript properties of a `RosHpcClustersProps`
 *
 * @returns the result of the validation.
 */
function RosHpcClustersPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.hpcClusterIds && (Array.isArray(properties.hpcClusterIds) || (typeof properties.hpcClusterIds) === 'string')) {
        errors.collect(ros.propertyValidator('hpcClusterIds', ros.validateLength)({
            data: properties.hpcClusterIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('hpcClusterIds', ros.listValidator(ros.validateString))(properties.hpcClusterIds));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosHpcClustersProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::HpcClusters` resource
 *
 * @param properties - the TypeScript properties of a `RosHpcClustersProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::HpcClusters` resource.
 */
// @ts-ignore TS6133
function rosHpcClustersPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHpcClustersPropsValidator(properties).assertSuccess();
    }
    return {
      'HpcClusterIds': ros.listMapper(ros.stringToRosTemplate)(properties.hpcClusterIds),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::HpcClusters`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HpcClusters` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-hpcclusters
 */
export class RosHpcClusters extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::HpcClusters";

    /**
     * @Attribute HpcClusterIds: the list of hpc cluster ids
     */
    public readonly attrHpcClusterIds: ros.IResolvable;

    /**
     * @Attribute HpcClusters: The list of hpc clusters.
     */
    public readonly attrHpcClusters: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property hpcClusterIds: The IDs of the HPC clusters. You can specify up to 100 HPC cluster IDs.
     */
    public hpcClusterIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

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
    constructor(scope: ros.Construct, id: string, props: RosHpcClustersProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHpcClusters.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrHpcClusterIds = this.getAtt('HpcClusterIds');
        this.attrHpcClusters = this.getAtt('HpcClusters');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.hpcClusterIds = props.hpcClusterIds;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            hpcClusterIds: this.hpcClusterIds,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHpcClustersPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosImages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
export interface RosImagesProps {

    /**
     * @Property actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
     * CreateEcs: instance creation
     * ChangeOS: replacement of the system disk or operating system
     */
    readonly actionType?: string | ros.IResolvable;

    /**
     * @Property architecture: The image architecture. Valid values:
     * i38
     * x86_64
     * arm64
     */
    readonly architecture?: string | ros.IResolvable;

    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
     * This parameter is empty by default.
     */
    readonly imageFamily?: string | ros.IResolvable;

    /**
     * @Property imageId: The ID of the image.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property imageName: The name of the image. Support for fuzzy queries using *.
     */
    readonly imageName?: string | ros.IResolvable;

    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
     * - To query community images, you must set IsPublic to true.
     * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
     */
    readonly imageOwnerAlias?: string | ros.IResolvable;

    /**
     * @Property instanceType: The instance type for which the image can be used.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property isPublic: Specifies whether to query published community images. Valid values:
     * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
     * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
     * Default value: false.
     */
    readonly isPublic?: boolean | ros.IResolvable;

    /**
     * @Property isSupportCloudinit: Specifies whether the image supports cloud-init.
     */
    readonly isSupportCloudinit?: boolean | ros.IResolvable;

    /**
     * @Property isSupportIoOptimized: Specifies whether the image can be used on I\/O optimized instances.
     */
    readonly isSupportIoOptimized?: boolean | ros.IResolvable;

    /**
     * @Property osType: The operating system type of the image. Valid values:
     * windows
     * linux
     */
    readonly osType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property snapshotId: The ID of the snapshot used to create the custom image.
     */
    readonly snapshotId?: string | ros.IResolvable;

    /**
     * @Property status: The state of the image. Default value: Available. Valid values:
     * Creating: The image is being created.
     * Waiting: The image is waiting to be processed.
     * Available: The image is available.
     * UnAvailable: The image is unavailable.
     * CreateFailed: The image failed to be created.
     * Deprecated: The image is discontinued.
     * You can specify multiple values. Separate multiple values with commas (,).
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of image.
     */
    readonly tags?: RosImages.TagsProperty[];

    /**
     * @Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
     * instance: The image is already in use and running on an ECS instance.
     * none: The image is not in use.
     */
    readonly usage?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImagesProps`
 *
 * @param properties - the TypeScript properties of a `RosImagesProps`
 *
 * @returns the result of the validation.
 */
function RosImagesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    if(properties.imageOwnerAlias && (typeof properties.imageOwnerAlias) !== 'object') {
        errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateAllowedValues)({
          data: properties.imageOwnerAlias,
          allowedValues: ["system","self","others","marketplace"],
        }));
    }
    errors.collect(ros.propertyValidator('imageOwnerAlias', ros.validateString)(properties.imageOwnerAlias));
    if(properties.usage && (typeof properties.usage) !== 'object') {
        errors.collect(ros.propertyValidator('usage', ros.validateAllowedValues)({
          data: properties.usage,
          allowedValues: ["instance","none"],
        }));
    }
    errors.collect(ros.propertyValidator('usage', ros.validateString)(properties.usage));
    if(properties.actionType && (typeof properties.actionType) !== 'object') {
        errors.collect(ros.propertyValidator('actionType', ros.validateAllowedValues)({
          data: properties.actionType,
          allowedValues: ["CreateEcs","ChangeOS"],
        }));
    }
    errors.collect(ros.propertyValidator('actionType', ros.validateString)(properties.actionType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.architecture && (typeof properties.architecture) !== 'object') {
        errors.collect(ros.propertyValidator('architecture', ros.validateAllowedValues)({
          data: properties.architecture,
          allowedValues: ["i38","x86_64","arm64"],
        }));
    }
    errors.collect(ros.propertyValidator('architecture', ros.validateString)(properties.architecture));
    errors.collect(ros.propertyValidator('imageFamily', ros.validateString)(properties.imageFamily));
    errors.collect(ros.propertyValidator('isSupportIoOptimized', ros.validateBoolean)(properties.isSupportIoOptimized));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('isSupportCloudinit', ros.validateBoolean)(properties.isSupportCloudinit));
    errors.collect(ros.propertyValidator('imageName', ros.validateString)(properties.imageName));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    errors.collect(ros.propertyValidator('isPublic', ros.validateBoolean)(properties.isPublic));
    if(properties.osType && (typeof properties.osType) !== 'object') {
        errors.collect(ros.propertyValidator('osType', ros.validateAllowedValues)({
          data: properties.osType,
          allowedValues: ["windows","linux"],
        }));
    }
    errors.collect(ros.propertyValidator('osType', ros.validateString)(properties.osType));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosImages_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosImagesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Images` resource
 *
 * @param properties - the TypeScript properties of a `RosImagesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Images` resource.
 */
// @ts-ignore TS6133
function rosImagesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImagesPropsValidator(properties).assertSuccess();
    }
    return {
      'ActionType': ros.stringToRosTemplate(properties.actionType),
      'Architecture': ros.stringToRosTemplate(properties.architecture),
      'ImageFamily': ros.stringToRosTemplate(properties.imageFamily),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'ImageName': ros.stringToRosTemplate(properties.imageName),
      'ImageOwnerAlias': ros.stringToRosTemplate(properties.imageOwnerAlias),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'IsPublic': ros.booleanToRosTemplate(properties.isPublic),
      'IsSupportCloudinit': ros.booleanToRosTemplate(properties.isSupportCloudinit),
      'IsSupportIoOptimized': ros.booleanToRosTemplate(properties.isSupportIoOptimized),
      'OSType': ros.stringToRosTemplate(properties.osType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SnapshotId': ros.stringToRosTemplate(properties.snapshotId),
      'Status': ros.stringToRosTemplate(properties.status),
      'Tags': ros.listMapper(rosImagesTagsPropertyToRosTemplate)(properties.tags),
      'Usage': ros.stringToRosTemplate(properties.usage),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Images`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Images` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-images
 */
export class RosImages extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Images";

    /**
     * @Attribute ImageIds: The list of image IDs.
     */
    public readonly attrImageIds: ros.IResolvable;

    /**
     * @Attribute Images: The list of images.
     */
    public readonly attrImages: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property actionType: The scenario in which the image is used. Default value: CreateEcs. Valid values:
     * CreateEcs: instance creation
     * ChangeOS: replacement of the system disk or operating system
     */
    public actionType: string | ros.IResolvable | undefined;

    /**
     * @Property architecture: The image architecture. Valid values:
     * i38
     * x86_64
     * arm64
     */
    public architecture: string | ros.IResolvable | undefined;

    /**
     * @Property imageFamily: The name of the image family. You can set this parameter to query images of the specified image family.
     * This parameter is empty by default.
     */
    public imageFamily: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: The ID of the image.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property imageName: The name of the image. Support for fuzzy queries using *.
     */
    public imageName: string | ros.IResolvable | undefined;

    /**
     * @Property imageOwnerAlias: The source of the image. Valid values:
     * system: public images provided by Alibaba Cloud.
     * self: your custom images.
     * others: shared images from other Alibaba Cloud accounts, or community images published by other Alibaba Cloud accounts. Take note of the following items:
     * - To query community images, you must set IsPublic to true.
     * To query shared images, you must set IsPublic to false or leave the IsPublic parameter empty.
     * marketplace: Alibaba Cloud Marketplace images. If Alibaba Cloud Marketplace images are returned in the response, you can use the images without subscription. You must pay attention to the billing details of Alibaba Cloud Marketplace images.
     * This parameter is empty by default, which indicates that the results that match system, self, and others are returned.
     */
    public imageOwnerAlias: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The instance type for which the image can be used.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property isPublic: Specifies whether to query published community images. Valid values:
     * true: queries published community images. When you set this parameter to true, you must set ImageOwnerAlias to others.
     * false: queries other image types than community images. The specific image types to be queried are determined by the ImageOwnerAlias value.
     * Default value: false.
     */
    public isPublic: boolean | ros.IResolvable | undefined;

    /**
     * @Property isSupportCloudinit: Specifies whether the image supports cloud-init.
     */
    public isSupportCloudinit: boolean | ros.IResolvable | undefined;

    /**
     * @Property isSupportIoOptimized: Specifies whether the image can be used on I\/O optimized instances.
     */
    public isSupportIoOptimized: boolean | ros.IResolvable | undefined;

    /**
     * @Property osType: The operating system type of the image. Valid values:
     * windows
     * linux
     */
    public osType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the custom image belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotId: The ID of the snapshot used to create the custom image.
     */
    public snapshotId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The state of the image. Default value: Available. Valid values:
     * Creating: The image is being created.
     * Waiting: The image is waiting to be processed.
     * Available: The image is available.
     * UnAvailable: The image is unavailable.
     * CreateFailed: The image failed to be created.
     * Deprecated: The image is discontinued.
     * You can specify multiple values. Separate multiple values with commas (,).
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of image.
     */
    public tags: RosImages.TagsProperty[] | undefined;

    /**
     * @Property usage: Specifies whether the image is running on an Elastic Compute Service (ECS) instance. Valid values:
     * instance: The image is already in use and running on an ECS instance.
     * none: The image is not in use.
     */
    public usage: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImagesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImages.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrImageIds = this.getAtt('ImageIds');
        this.attrImages = this.getAtt('Images');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.actionType = props.actionType;
        this.architecture = props.architecture;
        this.imageFamily = props.imageFamily;
        this.imageId = props.imageId;
        this.imageName = props.imageName;
        this.imageOwnerAlias = props.imageOwnerAlias;
        this.instanceType = props.instanceType;
        this.isPublic = props.isPublic;
        this.isSupportCloudinit = props.isSupportCloudinit;
        this.isSupportIoOptimized = props.isSupportIoOptimized;
        this.osType = props.osType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotId = props.snapshotId;
        this.status = props.status;
        this.tags = props.tags;
        this.usage = props.usage;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            actionType: this.actionType,
            architecture: this.architecture,
            imageFamily: this.imageFamily,
            imageId: this.imageId,
            imageName: this.imageName,
            imageOwnerAlias: this.imageOwnerAlias,
            instanceType: this.instanceType,
            isPublic: this.isPublic,
            isSupportCloudinit: this.isSupportCloudinit,
            isSupportIoOptimized: this.isSupportIoOptimized,
            osType: this.osType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            snapshotId: this.snapshotId,
            status: this.status,
            tags: this.tags,
            usage: this.usage,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImagesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosImages {
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
function RosImages_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Images.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Images.Tags` resource.
 */
// @ts-ignore TS6133
function rosImagesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosImages_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
 */
export interface RosInstanceProps {

    /**
     * @Property instanceId: Instance ID.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instance` resource
 *
 * @param properties - the TypeScript properties of a `RosInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instance` resource.
 */
// @ts-ignore TS6133
function rosInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instance
 */
export class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Instance";

    /**
     * @Attribute ActionOnMaintenance: The O&M action attribute of the instance.
     */
    public readonly attrActionOnMaintenance: ros.IResolvable;

    /**
     * @Attribute AutoRebootTime: Automatic reboot time after instance configuration change.
     */
    public readonly attrAutoRebootTime: ros.IResolvable;

    /**
     * @Attribute AutoReleaseTime: The time when to automatically release the pay-as-you-go instance.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable;

    /**
     * @Attribute AutoRenewEnabled: Whether automatic renewal has been set.
     */
    public readonly attrAutoRenewEnabled: ros.IResolvable;

    /**
     * @Attribute ClusterId: The ID of the cluster to which the instance belongs.
     */
    public readonly attrClusterId: ros.IResolvable;

    /**
     * @Attribute Cpu: The number of vCPUs.
     */
    public readonly attrCpu: ros.IResolvable;

    /**
     * @Attribute CpuOptions: Details about the CPU options.
     */
    public readonly attrCpuOptions: ros.IResolvable;

    /**
     * @Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreditSpecification: The performance mode of the burstable instance.
     */
    public readonly attrCreditSpecification: ros.IResolvable;

    /**
     * @Attribute DedicatedHostAttribute: Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
     */
    public readonly attrDedicatedHostAttribute: ros.IResolvable;

    /**
     * @Attribute DedicatedInstanceAttribute: The attributes of the instance on the dedicated host.
     */
    public readonly attrDedicatedInstanceAttribute: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: The release protection attribute of the instance. This parameter indicates whether you can use the ECS console or call the DeleteInstance operation to release the instance.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute DeploymentSetGroupNo: The number of the deployment set group to which the instance belongs in a deployment set.
     */
    public readonly attrDeploymentSetGroupNo: ros.IResolvable;

    /**
     * @Attribute DeploymentSetId: The ID of the deployment set in which the instance is deployed.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    /**
     * @Attribute Description: The description of the instance.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DeviceAvailable: Indicates whether data disks can be attached to the instance.
     */
    public readonly attrDeviceAvailable: ros.IResolvable;

    /**
     * @Attribute Duration: The duration of automatic renewal.
     */
    public readonly attrDuration: ros.IResolvable;

    /**
     * @Attribute EcsCapacityReservationAttr: Details about the capacity reservation related to the instance.
     */
    public readonly attrEcsCapacityReservationAttr: ros.IResolvable;

    /**
     * @Attribute EipAddress: Details about the EIP associated with the instance.
     */
    public readonly attrEipAddress: ros.IResolvable;

    /**
     * @Attribute ExpiredTime: The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrExpiredTime: ros.IResolvable;

    /**
     * @Attribute GpuAmount: The number of GPUs for the instance type.
     */
    public readonly attrGpuAmount: ros.IResolvable;

    /**
     * @Attribute GpuSpec: The category of GPUs for the instance type.
     */
    public readonly attrGpuSpec: ros.IResolvable;

    /**
     * @Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * @Attribute HpcClusterId: ID of the HPC cluster to which the instance belongs.
     */
    public readonly attrHpcClusterId: ros.IResolvable;

    /**
     * @Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard characters is supported.
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceNetworkType: The network type of the instance.
     */
    public readonly attrInstanceNetworkType: ros.IResolvable;

    /**
     * @Attribute InstanceType: The instance type of the instance.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute InstanceTypeFamily: The instance family of the instance.
     */
    public readonly attrInstanceTypeFamily: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: The billing method for network usage.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute InternetMaxBandwidthIn: The maximum inbound public bandwidth. Unit: Mbit/s.
     */
    public readonly attrInternetMaxBandwidthIn: ros.IResolvable;

    /**
     * @Attribute InternetMaxBandwidthOut: The maximum outbound public bandwidth. Unit: Mbit/s.
     */
    public readonly attrInternetMaxBandwidthOut: ros.IResolvable;

    /**
     * @Attribute IoOptimized: Specifies whether the instance is I/O optimized.
     */
    public readonly attrIoOptimized: ros.IResolvable;

    /**
     * @Attribute KeyPairName: The name of the SSH key pair bound to the instance.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * @Attribute LocalStorageAmount: The number of local disks attached to the instance.
     */
    public readonly attrLocalStorageAmount: ros.IResolvable;

    /**
     * @Attribute LocalStorageCapacity: The capacity of local disks attached to the instance.
     */
    public readonly attrLocalStorageCapacity: ros.IResolvable;

    /**
     * @Attribute MaintenanceWindows: The list of operations window instances.
     */
    public readonly attrMaintenanceWindows: ros.IResolvable;

    /**
     * @Attribute Memory: The memory size of the instance. Unit: MiB.
     */
    public readonly attrMemory: ros.IResolvable;

    /**
     * @Attribute MetadataOptions: Details about the metadata options.
     */
    public readonly attrMetadataOptions: ros.IResolvable;

    /**
     * @Attribute NetworkInterfaces: Details about the ENIs bound to the instance.
     */
    public readonly attrNetworkInterfaces: ros.IResolvable;

    /**
     * @Attribute NotifyOnMaintenance: Whether to send an event notification before the instance goes down.
     */
    public readonly attrNotifyOnMaintenance: ros.IResolvable;

    /**
     * @Attribute OperationLocks: The reasons why the instance was locked.
     */
    public readonly attrOperationLocks: ros.IResolvable;

    /**
     * @Attribute OsName: The name of the operating system of the instance.
     */
    public readonly attrOsName: ros.IResolvable;

    /**
     * @Attribute OsNameEn: The English name of the operating system of the instance.
     */
    public readonly attrOsNameEn: ros.IResolvable;

    /**
     * @Attribute OsType: The type of the operating system of the instance.
     */
    public readonly attrOsType: ros.IResolvable;

    /**
     * @Attribute PaymentType: The billing method of the instance.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * @Attribute PeriodUnit: Renewal unit.
     */
    public readonly attrPeriodUnit: ros.IResolvable;

    /**
     * @Attribute PrivatePoolOptionsId: Private pool ID. When the return value is open, the private pool ID is the private pool ID assigned when the system automatically matches.
     */
    public readonly attrPrivatePoolOptionsId: ros.IResolvable;

    /**
     * @Attribute PrivatePoolOptionsMatchCriteria: The private pool matching pattern of the instance.
     */
    public readonly attrPrivatePoolOptionsMatchCriteria: ros.IResolvable;

    /**
     * @Attribute PublicIpAddress: The public IP addresses of the instance.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    /**
     * @Attribute RdmaIpAddress: The RDMA network IP of the HPC instance.
     */
    public readonly attrRdmaIpAddress: ros.IResolvable;

    /**
     * @Attribute Recyclable: Indicates whether the instance can be recycled.
     */
    public readonly attrRecyclable: ros.IResolvable;

    /**
     * @Attribute RenewalStatus: The automatic renewal status of the instance.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SaleCycle: Instance billing cycles.
     */
    public readonly attrSaleCycle: ros.IResolvable;

    /**
     * @Attribute SecurityGroupIds: The IDs of the security groups to which the instance belongs.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * @Attribute SerialNumber: The serial number of the instance.
     */
    public readonly attrSerialNumber: ros.IResolvable;

    /**
     * @Attribute SpotDuration: The protection period of the preemptible instance. Unit: hours.
     */
    public readonly attrSpotDuration: ros.IResolvable;

    /**
     * @Attribute SpotPriceLimit: The maximum hourly price of the instance. It can be accurate to three decimal places. This parameter is valid only when the SpotStrategy parameter is set to SpotWithPriceLimit.
     */
    public readonly attrSpotPriceLimit: ros.IResolvable;

    /**
     * @Attribute SpotStrategy: The bidding policy for the pay-as-you-go instance.
     */
    public readonly attrSpotStrategy: ros.IResolvable;

    /**
     * @Attribute StartTime: The time when the instance was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrStartTime: ros.IResolvable;

    /**
     * @Attribute StoppedMode: Indicates whether the instance continues to be billed after it is stopped.
     */
    public readonly attrStoppedMode: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute UserData: The custom data of the instance.
     */
    public readonly attrUserData: ros.IResolvable;

    /**
     * @Attribute VpcAttributes: The VPC attributes of the instance.
     */
    public readonly attrVpcAttributes: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID of the instance.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: Instance ID.
     */
    public instanceId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrActionOnMaintenance = this.getAtt('ActionOnMaintenance');
        this.attrAutoRebootTime = this.getAtt('AutoRebootTime');
        this.attrAutoReleaseTime = this.getAtt('AutoReleaseTime');
        this.attrAutoRenewEnabled = this.getAtt('AutoRenewEnabled');
        this.attrClusterId = this.getAtt('ClusterId');
        this.attrCpu = this.getAtt('Cpu');
        this.attrCpuOptions = this.getAtt('CpuOptions');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreditSpecification = this.getAtt('CreditSpecification');
        this.attrDedicatedHostAttribute = this.getAtt('DedicatedHostAttribute');
        this.attrDedicatedInstanceAttribute = this.getAtt('DedicatedInstanceAttribute');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrDeploymentSetGroupNo = this.getAtt('DeploymentSetGroupNo');
        this.attrDeploymentSetId = this.getAtt('DeploymentSetId');
        this.attrDescription = this.getAtt('Description');
        this.attrDeviceAvailable = this.getAtt('DeviceAvailable');
        this.attrDuration = this.getAtt('Duration');
        this.attrEcsCapacityReservationAttr = this.getAtt('EcsCapacityReservationAttr');
        this.attrEipAddress = this.getAtt('EipAddress');
        this.attrExpiredTime = this.getAtt('ExpiredTime');
        this.attrGpuAmount = this.getAtt('GpuAmount');
        this.attrGpuSpec = this.getAtt('GpuSpec');
        this.attrHostName = this.getAtt('HostName');
        this.attrHpcClusterId = this.getAtt('HpcClusterId');
        this.attrImageId = this.getAtt('ImageId');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceNetworkType = this.getAtt('InstanceNetworkType');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrInstanceTypeFamily = this.getAtt('InstanceTypeFamily');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrInternetMaxBandwidthIn = this.getAtt('InternetMaxBandwidthIn');
        this.attrInternetMaxBandwidthOut = this.getAtt('InternetMaxBandwidthOut');
        this.attrIoOptimized = this.getAtt('IoOptimized');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrLocalStorageAmount = this.getAtt('LocalStorageAmount');
        this.attrLocalStorageCapacity = this.getAtt('LocalStorageCapacity');
        this.attrMaintenanceWindows = this.getAtt('MaintenanceWindows');
        this.attrMemory = this.getAtt('Memory');
        this.attrMetadataOptions = this.getAtt('MetadataOptions');
        this.attrNetworkInterfaces = this.getAtt('NetworkInterfaces');
        this.attrNotifyOnMaintenance = this.getAtt('NotifyOnMaintenance');
        this.attrOperationLocks = this.getAtt('OperationLocks');
        this.attrOsName = this.getAtt('OsName');
        this.attrOsNameEn = this.getAtt('OsNameEn');
        this.attrOsType = this.getAtt('OsType');
        this.attrPaymentType = this.getAtt('PaymentType');
        this.attrPeriodUnit = this.getAtt('PeriodUnit');
        this.attrPrivatePoolOptionsId = this.getAtt('PrivatePoolOptionsId');
        this.attrPrivatePoolOptionsMatchCriteria = this.getAtt('PrivatePoolOptionsMatchCriteria');
        this.attrPublicIpAddress = this.getAtt('PublicIpAddress');
        this.attrRdmaIpAddress = this.getAtt('RdmaIpAddress');
        this.attrRecyclable = this.getAtt('Recyclable');
        this.attrRenewalStatus = this.getAtt('RenewalStatus');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSaleCycle = this.getAtt('SaleCycle');
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrSerialNumber = this.getAtt('SerialNumber');
        this.attrSpotDuration = this.getAtt('SpotDuration');
        this.attrSpotPriceLimit = this.getAtt('SpotPriceLimit');
        this.attrSpotStrategy = this.getAtt('SpotStrategy');
        this.attrStartTime = this.getAtt('StartTime');
        this.attrStoppedMode = this.getAtt('StoppedMode');
        this.attrTags = this.getAtt('Tags');
        this.attrUserData = this.getAtt('UserData');
        this.attrVpcAttributes = this.getAtt('VpcAttributes');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
export interface RosInstancesProps {

    /**
     * @Property additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
     * META_OPTIONS: instance metadata
     * DDH_CLUSTER: dedicated host cluster
     * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
     */
    readonly additionalAttributes?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly eipAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosInstances.FiltersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
     */
    readonly hpcClusterId?: string | ros.IResolvable;

    /**
     * @Property imageId: The ID of the image.
     */
    readonly imageId?: string | ros.IResolvable;

    /**
     * @Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly innerIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     *
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    readonly instanceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property instanceNetworkType: The network type of the instance. Valid values:
     * classic: classic network
     * vpc: VPC
     *
     */
    readonly instanceNetworkType?: string | ros.IResolvable;

    /**
     * @Property instanceType: The instance type of the instance.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property instanceTypeFamily: The instance family of the instance.
     */
    readonly instanceTypeFamily?: string | ros.IResolvable;

    /**
     * @Property internetChargeType: The billing method for network usage. Valid values:
     * PayByBandwidth: pay-by-bandwidth
     * PayByTraffic: pay-by-traffic
     *
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized.
     */
    readonly ioOptimized?: boolean | ros.IResolvable;

    /**
     * @Property ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    readonly ipv6Address?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property keyPairName: The name of the SSH key pair bound to the instance.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    readonly publicIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
     */
    readonly rdmaIpAddresses?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property status: The state of the instance. Valid values:
     * Pending
     * Running
     * Starting
     * Stopping
     * Stopped
     *
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId?: string | ros.IResolvable;
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
    if(properties.innerIpAddresses && (Array.isArray(properties.innerIpAddresses) || (typeof properties.innerIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('innerIpAddresses', ros.validateLength)({
            data: properties.innerIpAddresses.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('innerIpAddresses', ros.listValidator(ros.validateString))(properties.innerIpAddresses));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.privateIpAddresses && (Array.isArray(properties.privateIpAddresses) || (typeof properties.privateIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('privateIpAddresses', ros.validateLength)({
            data: properties.privateIpAddresses.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('privateIpAddresses', ros.listValidator(ros.validateString))(properties.privateIpAddresses));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('instanceTypeFamily', ros.validateString)(properties.instanceTypeFamily));
    errors.collect(ros.propertyValidator('instanceNetworkType', ros.validateString)(properties.instanceNetworkType));
    if(properties.filters && (Array.isArray(properties.filters) || (typeof properties.filters) === 'string')) {
        errors.collect(ros.propertyValidator('filters', ros.validateLength)({
            data: properties.filters.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('filters', ros.listValidator(RosInstances_FiltersPropertyValidator))(properties.filters));
    if(properties.additionalAttributes && (Array.isArray(properties.additionalAttributes) || (typeof properties.additionalAttributes) === 'string')) {
        errors.collect(ros.propertyValidator('additionalAttributes', ros.validateLength)({
            data: properties.additionalAttributes.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('additionalAttributes', ros.listValidator(ros.validateString))(properties.additionalAttributes));
    errors.collect(ros.propertyValidator('imageId', ros.validateString)(properties.imageId));
    if(properties.publicIpAddresses && (Array.isArray(properties.publicIpAddresses) || (typeof properties.publicIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('publicIpAddresses', ros.validateLength)({
            data: properties.publicIpAddresses.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('publicIpAddresses', ros.listValidator(ros.validateString))(properties.publicIpAddresses));
    errors.collect(ros.propertyValidator('rdmaIpAddresses', ros.validateString)(properties.rdmaIpAddresses));
    if(properties.instanceIds && (Array.isArray(properties.instanceIds) || (typeof properties.instanceIds) === 'string')) {
        errors.collect(ros.propertyValidator('instanceIds', ros.validateLength)({
            data: properties.instanceIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('instanceIds', ros.listValidator(ros.validateString))(properties.instanceIds));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.ipv6Address && (Array.isArray(properties.ipv6Address) || (typeof properties.ipv6Address) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Address', ros.validateLength)({
            data: properties.ipv6Address.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Address', ros.listValidator(ros.validateString))(properties.ipv6Address));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosInstances_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateBoolean)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('hpcClusterId', ros.validateString)(properties.hpcClusterId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('internetChargeType', ros.validateString)(properties.internetChargeType));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.eipAddresses && (Array.isArray(properties.eipAddresses) || (typeof properties.eipAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('eipAddresses', ros.validateLength)({
            data: properties.eipAddresses.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('eipAddresses', ros.listValidator(ros.validateString))(properties.eipAddresses));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    return errors.wrap('supplied properties not correct for "RosInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instances` resource
 *
 * @param properties - the TypeScript properties of a `RosInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instances` resource.
 */
// @ts-ignore TS6133
function rosInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'AdditionalAttributes': ros.listMapper(ros.stringToRosTemplate)(properties.additionalAttributes),
      'EipAddresses': ros.listMapper(ros.stringToRosTemplate)(properties.eipAddresses),
      'Filters': ros.listMapper(rosInstancesFiltersPropertyToRosTemplate)(properties.filters),
      'HpcClusterId': ros.stringToRosTemplate(properties.hpcClusterId),
      'ImageId': ros.stringToRosTemplate(properties.imageId),
      'InnerIpAddresses': ros.listMapper(ros.stringToRosTemplate)(properties.innerIpAddresses),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'InstanceIds': ros.listMapper(ros.stringToRosTemplate)(properties.instanceIds),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'InstanceNetworkType': ros.stringToRosTemplate(properties.instanceNetworkType),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'InstanceTypeFamily': ros.stringToRosTemplate(properties.instanceTypeFamily),
      'InternetChargeType': ros.stringToRosTemplate(properties.internetChargeType),
      'IoOptimized': ros.booleanToRosTemplate(properties.ioOptimized),
      'Ipv6Address': ros.listMapper(ros.stringToRosTemplate)(properties.ipv6Address),
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'PrivateIpAddresses': ros.listMapper(ros.stringToRosTemplate)(properties.privateIpAddresses),
      'PublicIpAddresses': ros.listMapper(ros.stringToRosTemplate)(properties.publicIpAddresses),
      'RdmaIpAddresses': ros.stringToRosTemplate(properties.rdmaIpAddresses),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'Status': ros.stringToRosTemplate(properties.status),
      'Tags': ros.listMapper(rosInstancesTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Instances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
 */
export class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Instances";

    /**
     * @Attribute InstanceIds: The list of InstanceIds.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of Instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property additionalAttributes: The value of attribute N. Valid values of N: 1 to 20. Valid values:
     * META_OPTIONS: instance metadata
     * DDH_CLUSTER: dedicated host cluster
     * NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance
     */
    public additionalAttributes: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property eipAddresses: The elastic IP addresses (EIPs) of instances. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    public eipAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property filters: Filter value when querying resources
     */
    public filters: Array<RosInstances.FiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
     */
    public hpcClusterId: string | ros.IResolvable | undefined;

    /**
     * @Property imageId: The ID of the image.
     */
    public imageId: string | ros.IResolvable | undefined;

    /**
     * @Property innerIpAddresses: The internal IP addresses of instances located in the classic network. This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    public innerIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     *
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceIds: The IDs of instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
     */
    public instanceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The name of the instance. Fuzzy search with the asterisk (*) wildcard is supported.
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property instanceNetworkType: The network type of the instance. Valid values:
     * classic: classic network
     * vpc: VPC
     *
     */
    public instanceNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The instance type of the instance.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceTypeFamily: The instance family of the instance.
     */
    public instanceTypeFamily: string | ros.IResolvable | undefined;

    /**
     * @Property internetChargeType: The billing method for network usage. Valid values:
     * PayByBandwidth: pay-by-bandwidth
     * PayByTraffic: pay-by-traffic
     *
     */
    public internetChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized.
     */
    public ioOptimized: boolean | ros.IResolvable | undefined;

    /**
     * @Property ipv6Address: IPv6 address N of the elastic network interface (ENI). You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    public ipv6Address: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: The name of the SSH key pair bound to the instance.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddresses: The private IP addresses of instances located in VPCs. This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    public privateIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property publicIpAddresses: The public IP addresses of instances. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
     */
    public publicIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
     */
    public rdmaIpAddresses: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the security group to which the instance belongs.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property status: The state of the instance. Valid values:
     * Pending
     * Running
     * Starting
     * Stopping
     * Stopped
     *
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of instance.
     */
    public tags: RosInstances.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC).
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the instance.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.additionalAttributes = props.additionalAttributes;
        this.eipAddresses = props.eipAddresses;
        this.filters = props.filters;
        this.hpcClusterId = props.hpcClusterId;
        this.imageId = props.imageId;
        this.innerIpAddresses = props.innerIpAddresses;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceId = props.instanceId;
        this.instanceIds = props.instanceIds;
        this.instanceName = props.instanceName;
        this.instanceNetworkType = props.instanceNetworkType;
        this.instanceType = props.instanceType;
        this.instanceTypeFamily = props.instanceTypeFamily;
        this.internetChargeType = props.internetChargeType;
        this.ioOptimized = props.ioOptimized;
        this.ipv6Address = props.ipv6Address;
        this.keyPairName = props.keyPairName;
        this.privateIpAddresses = props.privateIpAddresses;
        this.publicIpAddresses = props.publicIpAddresses;
        this.rdmaIpAddresses = props.rdmaIpAddresses;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.status = props.status;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            additionalAttributes: this.additionalAttributes,
            eipAddresses: this.eipAddresses,
            filters: this.filters,
            hpcClusterId: this.hpcClusterId,
            imageId: this.imageId,
            innerIpAddresses: this.innerIpAddresses,
            instanceChargeType: this.instanceChargeType,
            instanceId: this.instanceId,
            instanceIds: this.instanceIds,
            instanceName: this.instanceName,
            instanceNetworkType: this.instanceNetworkType,
            instanceType: this.instanceType,
            instanceTypeFamily: this.instanceTypeFamily,
            internetChargeType: this.internetChargeType,
            ioOptimized: this.ioOptimized,
            ipv6Address: this.ipv6Address,
            keyPairName: this.keyPairName,
            privateIpAddresses: this.privateIpAddresses,
            publicIpAddresses: this.publicIpAddresses,
            rdmaIpAddresses: this.rdmaIpAddresses,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            status: this.status,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
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
    export interface FiltersProperty {
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
 * Determine whether the given properties match those of a `FiltersProperty`
 *
 * @param properties - the TypeScript properties of a `FiltersProperty`
 *
 * @returns the result of the validation.
 */
function RosInstances_FiltersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "FiltersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instances.Filters` resource
 *
 * @param properties - the TypeScript properties of a `FiltersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instances.Filters` resource.
 */
// @ts-ignore TS6133
function rosInstancesFiltersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosInstances_FiltersPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
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
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instances.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Instances.Tags` resource.
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
 * Properties for defining a `RosKeyPair`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
export interface RosKeyPairProps {

    /**
     * @Property keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
     * - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * - SshKey: queries the key pair named SshKey.
     */
    readonly keyPairName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKeyPairProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPairPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairName', ros.requiredValidator)(properties.keyPairName));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosKeyPairProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::KeyPair` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyPairProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::KeyPair` resource.
 */
// @ts-ignore TS6133
function rosKeyPairPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPairPropsValidator(properties).assertSuccess();
    }
    return {
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::KeyPair`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPair` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypair
 */
export class RosKeyPair extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::KeyPair";

    /**
     * @Attribute CreateTime: The time when the key pair was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute FingerPrint: The fingerprint of the key pair.
     */
    public readonly attrFingerPrint: ros.IResolvable;

    /**
     * @Attribute KeyPairName: The name of the key pair.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the key pair.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairName: The name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to perform a fuzzy search for key pairs. Sample patterns:
     * - *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * - SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * - *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * - SshKey: queries the key pair named SshKey.
     */
    public keyPairName: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosKeyPairProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeyPair.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrFingerPrint = this.getAtt('FingerPrint');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairName = props.keyPairName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairName: this.keyPairName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKeyPairs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
 */
export interface RosKeyPairsProps {

    /**
     * @Property keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    readonly keyPairFingerPrint?: string | ros.IResolvable;

    /**
     * @Property keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
     * *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * SshKey: queries the key pair named SshKey.
     */
    readonly keyPairName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of keypair.
     */
    readonly tags?: RosKeyPairs.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosKeyPairsProps`
 *
 * @param properties - the TypeScript properties of a `RosKeyPairsProps`
 *
 * @returns the result of the validation.
 */
function RosKeyPairsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('keyPairFingerPrint', ros.validateString)(properties.keyPairFingerPrint));
    errors.collect(ros.propertyValidator('keyPairName', ros.validateString)(properties.keyPairName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosKeyPairs_TagsPropertyValidator))(properties.tags));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosKeyPairsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::KeyPairs` resource
 *
 * @param properties - the TypeScript properties of a `RosKeyPairsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::KeyPairs` resource.
 */
// @ts-ignore TS6133
function rosKeyPairsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKeyPairsPropsValidator(properties).assertSuccess();
    }
    return {
      'KeyPairFingerPrint': ros.stringToRosTemplate(properties.keyPairFingerPrint),
      'KeyPairName': ros.stringToRosTemplate(properties.keyPairName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosKeyPairsTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::KeyPairs`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KeyPairs` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-keypairs
 */
export class RosKeyPairs extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::KeyPairs";

    /**
     * @Attribute KeyPairNames: The list of key pair names.
     */
    public readonly attrKeyPairNames: ros.IResolvable;

    /**
     * @Attribute KeyPairs: The list of key pairs.
     */
    public readonly attrKeyPairs: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property keyPairFingerPrint: The fingerprint of the key pair. The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
     */
    public keyPairFingerPrint: string | ros.IResolvable | undefined;

    /**
     * @Property keyPairName: he name of the key pair. You can use the asterisk (*) symbol as a wildcard in regular expressions to query key pairs by performing a fuzzy search. Sample patterns:
     * *SshKey: queries key pairs whose names end with SshKey, including the key pair named SshKey.
     * SshKey*: queries key pairs whose names start with SshKey, including the key pair named SshKey.
     * *SshKey*: queries key pairs whose names include SshKey, including the key pair named SshKey.
     * SshKey: queries the key pair named SshKey.
     */
    public keyPairName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the key pair belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of keypair.
     */
    public tags: RosKeyPairs.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKeyPairsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKeyPairs.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrKeyPairNames = this.getAtt('KeyPairNames');
        this.attrKeyPairs = this.getAtt('KeyPairs');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.keyPairFingerPrint = props.keyPairFingerPrint;
        this.keyPairName = props.keyPairName;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            keyPairFingerPrint: this.keyPairFingerPrint,
            keyPairName: this.keyPairName,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKeyPairsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosKeyPairs {
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
function RosKeyPairs_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::KeyPairs.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::KeyPairs.Tags` resource.
 */
// @ts-ignore TS6133
function rosKeyPairsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosKeyPairs_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosLaunchTemplate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
 */
export interface RosLaunchTemplateProps {

    /**
     * @Property launchTemplateId: Template ID.
     */
    readonly launchTemplateId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLaunchTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('launchTemplateId', ros.requiredValidator)(properties.launchTemplateId));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosLaunchTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::LaunchTemplate` resource
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::LaunchTemplate` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLaunchTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      'LaunchTemplateId': ros.stringToRosTemplate(properties.launchTemplateId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::LaunchTemplate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LaunchTemplate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
 */
export class RosLaunchTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::LaunchTemplate";

    /**
     * @Attribute AutoReleaseTime: Automatic release time (UTC). The format is: yyyy-MM-ddTHH:mm:ssZ.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the instance launch template was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreatedBy: The creator of the launch template.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute DataDisk: Data disk information list.
     */
    public readonly attrDataDisk: ros.IResolvable;

    /**
     * @Attribute DefaultVersionNumber: The default version number of the template.
     */
    public readonly attrDefaultVersionNumber: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: Instance deletion protection attribute.
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute DeploymentSetId: The ID of the deployment set.
     */
    public readonly attrDeploymentSetId: ros.IResolvable;

    /**
     * @Attribute Description: Instance description. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute HostName: The hostname of the instance.
     */
    public readonly attrHostName: ros.IResolvable;

    /**
     * @Attribute ImageId: The ID of the image.
     */
    public readonly attrImageId: ros.IResolvable;

    /**
     * @Attribute ImageOwnerAlias: The source of the image.
     */
    public readonly attrImageOwnerAlias: ros.IResolvable;

    /**
     * @Attribute InstanceChargeType: The billing method of the instance.
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * @Attribute InstanceName: The name of the instance. The length is 2~128 English or Chinese characters. It must start with a large or small letter or Chinese, and cannot start with' http:// 'or' https. It can contain numbers, colons (:), underscores (_), or dashes (-).
     */
    public readonly attrInstanceName: ros.IResolvable;

    /**
     * @Attribute InstanceType: The instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * @Attribute InternetChargeType: Network billing method.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * @Attribute InternetMaxBandwidthIn: The maximum public inbound bandwidth, in Mbit/s.
     */
    public readonly attrInternetMaxBandwidthIn: ros.IResolvable;

    /**
     * @Attribute InternetMaxBandwidthOut: The maximum outbound bandwidth of the public network. The unit is Mbit/s. The value range is 0~100.
     */
    public readonly attrInternetMaxBandwidthOut: ros.IResolvable;

    /**
     * @Attribute IoOptimized: Whether to optimize the instance for I/O.
     */
    public readonly attrIoOptimized: ros.IResolvable;

    /**
     * @Attribute Ipv6AddressCount: Specify the number of randomly generated IPv6 addresses for the primary network card. The value range is 1 to 10.
     */
    public readonly attrIpv6AddressCount: ros.IResolvable;

    /**
     * @Attribute KeyPairName: The name of the key pair.
     */
    public readonly attrKeyPairName: ros.IResolvable;

    /**
     * @Attribute LatestVersionNumber: The latest version number of the template.
     */
    public readonly attrLatestVersionNumber: ros.IResolvable;

    /**
     * @Attribute LaunchTemplateId: The ID of the launch template.
     */
    public readonly attrLaunchTemplateId: ros.IResolvable;

    /**
     * @Attribute LaunchTemplateName: The name of the launch template.
     */
    public readonly attrLaunchTemplateName: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: The time when the launch template was modified.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * @Attribute NetworkInterface: The elastic network interfaces (ENIs).
     */
    public readonly attrNetworkInterface: ros.IResolvable;

    /**
     * @Attribute NetworkType: The network type of the instance.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * @Attribute PasswordInherit: Whether to use the password preset by the image.
     */
    public readonly attrPasswordInherit: ros.IResolvable;

    /**
     * @Attribute Period: The duration of the purchase of resources, in months. When creating an instance, the parameter 'InstanceChargeType' takes effect and is required only when the value of the parameter 'PrePaid' is 'PrePaid. Value range: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, 60.
     */
    public readonly attrPeriod: ros.IResolvable;

    /**
     * @Attribute PrivateIpAddress: The private IP address of the instance.
     */
    public readonly attrPrivateIpAddress: ros.IResolvable;

    /**
     * @Attribute RamRoleName: The instance RAM role name.
     */
    public readonly attrRamRoleName: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance, Elastic Block Storage (EBS) device, and ENI belong.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityEnhancementStrategy: Whether to turn on security reinforcement for the operating system.
     */
    public readonly attrSecurityEnhancementStrategy: ros.IResolvable;

    /**
     * @Attribute SecurityGroupIds: The IDs of one or more security groups to which you want to add the instance.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * @Attribute SpotPriceLimit: Set the maximum price per hour for the instance. The maximum number of 3 decimal places is supported. The value of the parameter 'SpotStrategy' is 'SpotWithPriceLimit.
     */
    public readonly attrSpotPriceLimit: ros.IResolvable;

    /**
     * @Attribute SpotStrategy: The preemption policy for a pay-as-you-go instance. This parameter takes effect when the value of the parameter 'InstanceChargeType' is 'PostPaid.
     */
    public readonly attrSpotStrategy: ros.IResolvable;

    /**
     * @Attribute SystemDisk: System disk configuration.
     */
    public readonly attrSystemDisk: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the launch template.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute TemplateResourceGroupId: Q
     */
    public readonly attrTemplateResourceGroupId: ros.IResolvable;

    /**
     * @Attribute TemplateTag: The tags of the launch template.
     */
    public readonly attrTemplateTag: ros.IResolvable;

    /**
     * @Attribute UserData: The user-defined data of the instance must be encoded in Base64. The maximum original data is 16KB.
     */
    public readonly attrUserData: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VersionDescription: Instance launch template version description. 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    public readonly attrVersionDescription: ros.IResolvable;

    /**
     * @Attribute VpcId: VPC Id.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The ID of the zone to which the instance belongs.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property launchTemplateId: Template ID.
     */
    public launchTemplateId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosLaunchTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLaunchTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAutoReleaseTime = this.getAtt('AutoReleaseTime');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrDataDisk = this.getAtt('DataDisk');
        this.attrDefaultVersionNumber = this.getAtt('DefaultVersionNumber');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrDeploymentSetId = this.getAtt('DeploymentSetId');
        this.attrDescription = this.getAtt('Description');
        this.attrHostName = this.getAtt('HostName');
        this.attrImageId = this.getAtt('ImageId');
        this.attrImageOwnerAlias = this.getAtt('ImageOwnerAlias');
        this.attrInstanceChargeType = this.getAtt('InstanceChargeType');
        this.attrInstanceName = this.getAtt('InstanceName');
        this.attrInstanceType = this.getAtt('InstanceType');
        this.attrInternetChargeType = this.getAtt('InternetChargeType');
        this.attrInternetMaxBandwidthIn = this.getAtt('InternetMaxBandwidthIn');
        this.attrInternetMaxBandwidthOut = this.getAtt('InternetMaxBandwidthOut');
        this.attrIoOptimized = this.getAtt('IoOptimized');
        this.attrIpv6AddressCount = this.getAtt('Ipv6AddressCount');
        this.attrKeyPairName = this.getAtt('KeyPairName');
        this.attrLatestVersionNumber = this.getAtt('LatestVersionNumber');
        this.attrLaunchTemplateId = this.getAtt('LaunchTemplateId');
        this.attrLaunchTemplateName = this.getAtt('LaunchTemplateName');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrNetworkInterface = this.getAtt('NetworkInterface');
        this.attrNetworkType = this.getAtt('NetworkType');
        this.attrPasswordInherit = this.getAtt('PasswordInherit');
        this.attrPeriod = this.getAtt('Period');
        this.attrPrivateIpAddress = this.getAtt('PrivateIpAddress');
        this.attrRamRoleName = this.getAtt('RamRoleName');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityEnhancementStrategy = this.getAtt('SecurityEnhancementStrategy');
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrSpotPriceLimit = this.getAtt('SpotPriceLimit');
        this.attrSpotStrategy = this.getAtt('SpotStrategy');
        this.attrSystemDisk = this.getAtt('SystemDisk');
        this.attrTags = this.getAtt('Tags');
        this.attrTemplateResourceGroupId = this.getAtt('TemplateResourceGroupId');
        this.attrTemplateTag = this.getAtt('TemplateTag');
        this.attrUserData = this.getAtt('UserData');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVersionDescription = this.getAtt('VersionDescription');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTemplateId = props.launchTemplateId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            launchTemplateId: this.launchTemplateId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLaunchTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosLaunchTemplates`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
export interface RosLaunchTemplatesProps {

    /**
     * @Property launchTemplateId: The ID of the launch template.
     */
    readonly launchTemplateId?: string | ros.IResolvable;

    /**
     * @Property launchTemplateName: The name of the launch template.
     */
    readonly launchTemplateName?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
     */
    readonly templateResourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLaunchTemplatesProps`
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplatesProps`
 *
 * @returns the result of the validation.
 */
function RosLaunchTemplatesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('launchTemplateName', ros.validateString)(properties.launchTemplateName));
    errors.collect(ros.propertyValidator('launchTemplateId', ros.validateString)(properties.launchTemplateId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('templateResourceGroupId', ros.validateString)(properties.templateResourceGroupId));
    return errors.wrap('supplied properties not correct for "RosLaunchTemplatesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::LaunchTemplates` resource
 *
 * @param properties - the TypeScript properties of a `RosLaunchTemplatesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::LaunchTemplates` resource.
 */
// @ts-ignore TS6133
function rosLaunchTemplatesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLaunchTemplatesPropsValidator(properties).assertSuccess();
    }
    return {
      'LaunchTemplateId': ros.stringToRosTemplate(properties.launchTemplateId),
      'LaunchTemplateName': ros.stringToRosTemplate(properties.launchTemplateName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'TemplateResourceGroupId': ros.stringToRosTemplate(properties.templateResourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::LaunchTemplates`.
 * @Note This class does not contain additional functions, so it is recommended to use the `LaunchTemplates` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
 */
export class RosLaunchTemplates extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::LaunchTemplates";

    /**
     * @Attribute LaunchTemplateIds: The list of launch template IDs.
     */
    public readonly attrLaunchTemplateIds: ros.IResolvable;

    /**
     * @Attribute LaunchTemplates: The list of launch templates.
     */
    public readonly attrLaunchTemplates: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property launchTemplateId: The ID of the launch template.
     */
    public launchTemplateId: string | ros.IResolvable | undefined;

    /**
     * @Property launchTemplateName: The name of the launch template.
     */
    public launchTemplateName: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
     */
    public templateResourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLaunchTemplatesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLaunchTemplates.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLaunchTemplateIds = this.getAtt('LaunchTemplateIds');
        this.attrLaunchTemplates = this.getAtt('LaunchTemplates');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.launchTemplateId = props.launchTemplateId;
        this.launchTemplateName = props.launchTemplateName;
        this.refreshOptions = props.refreshOptions;
        this.templateResourceGroupId = props.templateResourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            launchTemplateId: this.launchTemplateId,
            launchTemplateName: this.launchTemplateName,
            refreshOptions: this.refreshOptions,
            templateResourceGroupId: this.templateResourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLaunchTemplatesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosManagedInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
export interface RosManagedInstancesProps {

    /**
     * @Property activationId: The ID of the activation code
     */
    readonly activationId?: string | ros.IResolvable;

    /**
     * @Property instanceId: The ID of managed instance. Valid values of N: 1 to 50.
     */
    readonly instanceId?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceIp: The internal or public IP address of the managed instance
     */
    readonly instanceIp?: string | ros.IResolvable;

    /**
     * @Property instanceName: The name of the managed instance
     */
    readonly instanceName?: string | ros.IResolvable;

    /**
     * @Property osType: The operating system type of the managed instance.  Valid values:
     * windows
     * linux
     */
    readonly osType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of managedinstance.
     */
    readonly tags?: RosManagedInstances.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosManagedInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosManagedInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosManagedInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('instanceName', ros.validateString)(properties.instanceName));
    if(properties.instanceId && (Array.isArray(properties.instanceId) || (typeof properties.instanceId) === 'string')) {
        errors.collect(ros.propertyValidator('instanceId', ros.validateLength)({
            data: properties.instanceId.length,
            min: undefined,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('instanceId', ros.listValidator(ros.validateString))(properties.instanceId));
    if(properties.osType && (typeof properties.osType) !== 'object') {
        errors.collect(ros.propertyValidator('osType', ros.validateAllowedValues)({
          data: properties.osType,
          allowedValues: ["windows","linux"],
        }));
    }
    errors.collect(ros.propertyValidator('osType', ros.validateString)(properties.osType));
    errors.collect(ros.propertyValidator('activationId', ros.validateString)(properties.activationId));
    errors.collect(ros.propertyValidator('instanceIp', ros.validateString)(properties.instanceIp));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosManagedInstances_TagsPropertyValidator))(properties.tags));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosManagedInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::ManagedInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosManagedInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::ManagedInstances` resource.
 */
// @ts-ignore TS6133
function rosManagedInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosManagedInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      'ActivationId': ros.stringToRosTemplate(properties.activationId),
      'InstanceId': ros.listMapper(ros.stringToRosTemplate)(properties.instanceId),
      'InstanceIp': ros.stringToRosTemplate(properties.instanceIp),
      'InstanceName': ros.stringToRosTemplate(properties.instanceName),
      'OsType': ros.stringToRosTemplate(properties.osType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Tags': ros.listMapper(rosManagedInstancesTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::ManagedInstances`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ManagedInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
 */
export class RosManagedInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::ManagedInstances";

    /**
     * @Attribute InstanceIds: The list of managed instance ids.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * @Attribute Instances: The list of managed instances.
     */
    public readonly attrInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property activationId: The ID of the activation code
     */
    public activationId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of managed instance. Valid values of N: 1 to 50.
     */
    public instanceId: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceIp: The internal or public IP address of the managed instance
     */
    public instanceIp: string | ros.IResolvable | undefined;

    /**
     * @Property instanceName: The name of the managed instance
     */
    public instanceName: string | ros.IResolvable | undefined;

    /**
     * @Property osType: The operating system type of the managed instance.  Valid values:
     * windows
     * linux
     */
    public osType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of managedinstance.
     */
    public tags: RosManagedInstances.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosManagedInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosManagedInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceIds = this.getAtt('InstanceIds');
        this.attrInstances = this.getAtt('Instances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.activationId = props.activationId;
        this.instanceId = props.instanceId;
        this.instanceIp = props.instanceIp;
        this.instanceName = props.instanceName;
        this.osType = props.osType;
        this.refreshOptions = props.refreshOptions;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            activationId: this.activationId,
            instanceId: this.instanceId,
            instanceIp: this.instanceIp,
            instanceName: this.instanceName,
            osType: this.osType,
            refreshOptions: this.refreshOptions,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosManagedInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosManagedInstances {
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
function RosManagedInstances_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::ManagedInstances.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::ManagedInstances.Tags` resource.
 */
// @ts-ignore TS6133
function rosManagedInstancesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosManagedInstances_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosNetworkInterfaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
export interface RosNetworkInterfacesProps {

    /**
     * @Property instanceId: The ID of the instance to which the ENI is bound.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    readonly ipv6Addresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
     */
    readonly networkInterfaceIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property networkInterfaceName: The name of the ENI.
     */
    readonly networkInterfaceName?: string | ros.IResolvable;

    /**
     * @Property primaryIpAddress: The primary private IPv4 address of the ENI.
     */
    readonly primaryIpAddress?: string | ros.IResolvable;

    /**
     * @Property privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
     */
    readonly privateIpAddresses?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the eni belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
     * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
     * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
     */
    readonly serviceManaged?: boolean | ros.IResolvable;

    /**
     * @Property status: The state of the ENI. Valid values:
     * Creating: The ENI is being created.
     * Available: The ENI is not bound to an instance.
     * Attaching: The ENI is being bound to an instance.
     * InUse: The ENI is bound to an instance.
     * Detaching: The ENI is being unbound from an instance.
     * Deleting: The ENI is being deleted.
     * CreateFailed: The ENI cannot be created.
     * This parameter is empty by default, which indicates that ENIs in all states are queried.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of eni.
     */
    readonly tags?: RosNetworkInterfaces.TagsProperty[];

    /**
     * @Property type: The type of the ENI. Valid values:
     * Primary
     * Secondary
     * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
     */
    readonly type?: string | ros.IResolvable;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkInterfacesProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfacesProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkInterfacesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    if(properties.privateIpAddresses && (Array.isArray(properties.privateIpAddresses) || (typeof properties.privateIpAddresses) === 'string')) {
        errors.collect(ros.propertyValidator('privateIpAddresses', ros.validateLength)({
            data: properties.privateIpAddresses.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('privateIpAddresses', ros.listValidator(ros.validateString))(properties.privateIpAddresses));
    errors.collect(ros.propertyValidator('serviceManaged', ros.validateBoolean)(properties.serviceManaged));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('networkInterfaceName', ros.validateString)(properties.networkInterfaceName));
    if(properties.networkInterfaceIds && (Array.isArray(properties.networkInterfaceIds) || (typeof properties.networkInterfaceIds) === 'string')) {
        errors.collect(ros.propertyValidator('networkInterfaceIds', ros.validateLength)({
            data: properties.networkInterfaceIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('networkInterfaceIds', ros.listValidator(ros.validateString))(properties.networkInterfaceIds));
    errors.collect(ros.propertyValidator('primaryIpAddress', ros.validateString)(properties.primaryIpAddress));
    if(properties.ipv6Addresses && (Array.isArray(properties.ipv6Addresses) || (typeof properties.ipv6Addresses) === 'string')) {
        errors.collect(ros.propertyValidator('ipv6Addresses', ros.validateLength)({
            data: properties.ipv6Addresses.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('ipv6Addresses', ros.listValidator(ros.validateString))(properties.ipv6Addresses));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosNetworkInterfaces_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosNetworkInterfacesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::NetworkInterfaces` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkInterfacesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::NetworkInterfaces` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfacesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkInterfacesPropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'Ipv6Addresses': ros.listMapper(ros.stringToRosTemplate)(properties.ipv6Addresses),
      'NetworkInterfaceIds': ros.listMapper(ros.stringToRosTemplate)(properties.networkInterfaceIds),
      'NetworkInterfaceName': ros.stringToRosTemplate(properties.networkInterfaceName),
      'PrimaryIpAddress': ros.stringToRosTemplate(properties.primaryIpAddress),
      'PrivateIpAddresses': ros.listMapper(ros.stringToRosTemplate)(properties.privateIpAddresses),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'ServiceManaged': ros.booleanToRosTemplate(properties.serviceManaged),
      'Status': ros.stringToRosTemplate(properties.status),
      'Tags': ros.listMapper(rosNetworkInterfacesTagsPropertyToRosTemplate)(properties.tags),
      'Type': ros.stringToRosTemplate(properties.type),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::NetworkInterfaces`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkInterfaces` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
 */
export class RosNetworkInterfaces extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::NetworkInterfaces";

    /**
     * @Attribute NetworkInterfaceIds: The list of NetworkInterfaceIds.
     */
    public readonly attrNetworkInterfaceIds: ros.IResolvable;

    /**
     * @Attribute NetworkInterfaces: The list of NetworkInterfaces.
     */
    public readonly attrNetworkInterfaces: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the instance to which the ENI is bound.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property ipv6Addresses: IPv6 address N of the ENI. You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
     */
    public ipv6Addresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaceIds: The ID of ENI N. Valid values of N: 1 to 100.
     */
    public networkInterfaceIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property networkInterfaceName: The name of the ENI.
     */
    public networkInterfaceName: string | ros.IResolvable | undefined;

    /**
     * @Property primaryIpAddress: The primary private IPv4 address of the ENI.
     */
    public primaryIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddresses: Secondary private IPv4 address N of the ENI. Valid values of N: 1 to 100.
     */
    public privateIpAddresses: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the eni belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
     * To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
     * To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
     */
    public serviceManaged: boolean | ros.IResolvable | undefined;

    /**
     * @Property status: The state of the ENI. Valid values:
     * Creating: The ENI is being created.
     * Available: The ENI is not bound to an instance.
     * Attaching: The ENI is being bound to an instance.
     * InUse: The ENI is bound to an instance.
     * Detaching: The ENI is being unbound from an instance.
     * Deleting: The ENI is being deleted.
     * CreateFailed: The ENI cannot be created.
     * This parameter is empty by default, which indicates that ENIs in all states are queried.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of eni.
     */
    public tags: RosNetworkInterfaces.TagsProperty[] | undefined;

    /**
     * @Property type: The type of the ENI. Valid values:
     * Primary
     * Secondary
     * This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
     */
    public type: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkInterfacesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkInterfaces.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrNetworkInterfaceIds = this.getAtt('NetworkInterfaceIds');
        this.attrNetworkInterfaces = this.getAtt('NetworkInterfaces');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.ipv6Addresses = props.ipv6Addresses;
        this.networkInterfaceIds = props.networkInterfaceIds;
        this.networkInterfaceName = props.networkInterfaceName;
        this.primaryIpAddress = props.primaryIpAddress;
        this.privateIpAddresses = props.privateIpAddresses;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.serviceManaged = props.serviceManaged;
        this.status = props.status;
        this.tags = props.tags;
        this.type = props.type;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            ipv6Addresses: this.ipv6Addresses,
            networkInterfaceIds: this.networkInterfaceIds,
            networkInterfaceName: this.networkInterfaceName,
            primaryIpAddress: this.primaryIpAddress,
            privateIpAddresses: this.privateIpAddresses,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            serviceManaged: this.serviceManaged,
            status: this.status,
            tags: this.tags,
            type: this.type,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkInterfacesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosNetworkInterfaces {
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
function RosNetworkInterfaces_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::NetworkInterfaces.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::NetworkInterfaces.Tags` resource.
 */
// @ts-ignore TS6133
function rosNetworkInterfacesTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosNetworkInterfaces_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosRecommendInstanceTypes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
 */
export interface RosRecommendInstanceTypesProps {

    /**
     * @Property cores: The number of vCPUs of the instance.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    readonly cores?: number | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the instances of the instance type. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
     */
    readonly instanceFamilyLevel?: string | ros.IResolvable;

    /**
     * @Property instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
     * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
     */
    readonly instanceTypeFamilies?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property ioOptimized: Specifies whether to match I\/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
     * optimized: matches I\/O optimized instances.
     * none: matches non-I\/O optimized instances.
     * Default value: optimized.
     * If you query alternative instance types for retired instance types, this parameter is set to none by default. 
     * Default value: none.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * @Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
     * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
     */
    readonly maxPrice?: number | ros.IResolvable;

    /**
     * @Property memory: The memory size of the instance. Unit: GiB.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    readonly memory?: number | ros.IResolvable;

    /**
     * @Property priorityStrategy: The policy for recommending instance types. Valid values:
     * InventoryFirst: Instance types are recommended in descending order based on resource availability.
     * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
     * NewProductFirst: The latest instance types are recommended first.
     * Default value: InventoryFirst.
     */
    readonly priorityStrategy?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property scene: Specifies the scenario in which the instance type is recommended. Valid values:
     * UPGRADE: instance type upgrade or downgrade
     * CREATE: instance creation
     * Default value: CREATE.
     */
    readonly scene?: string | ros.IResolvable;

    /**
     * @Property spotStrategy: The bidding policy of preemptible instances. Valid values:
     * NoSpot: applies to regular pay-as-you-go instances.
     * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
     * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
     * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
     * Default value: NoSpot.
     */
    readonly spotStrategy?: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     * cloud: basic disk
     * For non-I\/O optimized instances, the default value is cloud.
     * For I\/O optimized instances, the default value is cloud_efficiency.
     */
    readonly systemDiskCategory?: string | ros.IResolvable;

    /**
     * @Property zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
     */
    readonly zoneId?: string | ros.IResolvable;

    /**
     * @Property zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
     * Strict: recommends only alternative instance types in the zone specified by ZoneId.
     * Include: recommends all instance types in all the zones in the same region as the specified instance type.
     * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
     */
    readonly zoneMatchMode?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRecommendInstanceTypesProps`
 *
 * @param properties - the TypeScript properties of a `RosRecommendInstanceTypesProps`
 *
 * @returns the result of the validation.
 */
function RosRecommendInstanceTypesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.zoneMatchMode && (typeof properties.zoneMatchMode) !== 'object') {
        errors.collect(ros.propertyValidator('zoneMatchMode', ros.validateAllowedValues)({
          data: properties.zoneMatchMode,
          allowedValues: ["Strict","Include"],
        }));
    }
    errors.collect(ros.propertyValidator('zoneMatchMode', ros.validateString)(properties.zoneMatchMode));
    if(properties.ioOptimized && (typeof properties.ioOptimized) !== 'object') {
        errors.collect(ros.propertyValidator('ioOptimized', ros.validateAllowedValues)({
          data: properties.ioOptimized,
          allowedValues: ["optimized","none"],
        }));
    }
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.instanceChargeType && (typeof properties.instanceChargeType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceChargeType', ros.validateAllowedValues)({
          data: properties.instanceChargeType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('memory', ros.validateNumber)(properties.memory));
    if(properties.scene && (typeof properties.scene) !== 'object') {
        errors.collect(ros.propertyValidator('scene', ros.validateAllowedValues)({
          data: properties.scene,
          allowedValues: ["UPGRADE","CREATE"],
        }));
    }
    errors.collect(ros.propertyValidator('scene', ros.validateString)(properties.scene));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    errors.collect(ros.propertyValidator('cores', ros.validateNumber)(properties.cores));
    if(properties.priorityStrategy && (typeof properties.priorityStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('priorityStrategy', ros.validateAllowedValues)({
          data: properties.priorityStrategy,
          allowedValues: ["InventoryFirst","PriceFirst","NewProductFirst"],
        }));
    }
    errors.collect(ros.propertyValidator('priorityStrategy', ros.validateString)(properties.priorityStrategy));
    if(properties.instanceFamilyLevel && (typeof properties.instanceFamilyLevel) !== 'object') {
        errors.collect(ros.propertyValidator('instanceFamilyLevel', ros.validateAllowedValues)({
          data: properties.instanceFamilyLevel,
          allowedValues: ["EntryLevel","EnterpriseLevel","CreditEntryLevel"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceFamilyLevel', ros.validateString)(properties.instanceFamilyLevel));
    if(properties.instanceTypeFamilies && (Array.isArray(properties.instanceTypeFamilies) || (typeof properties.instanceTypeFamilies) === 'string')) {
        errors.collect(ros.propertyValidator('instanceTypeFamilies', ros.validateLength)({
            data: properties.instanceTypeFamilies.length,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('instanceTypeFamilies', ros.listValidator(ros.validateString))(properties.instanceTypeFamilies));
    errors.collect(ros.propertyValidator('maxPrice', ros.validateNumber)(properties.maxPrice));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    if(properties.spotStrategy && (typeof properties.spotStrategy) !== 'object') {
        errors.collect(ros.propertyValidator('spotStrategy', ros.validateAllowedValues)({
          data: properties.spotStrategy,
          allowedValues: ["NoSpot","SpotWithPriceLimit","SpotAsPriceGo"],
        }));
    }
    errors.collect(ros.propertyValidator('spotStrategy', ros.validateString)(properties.spotStrategy));
    return errors.wrap('supplied properties not correct for "RosRecommendInstanceTypesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::RecommendInstanceTypes` resource
 *
 * @param properties - the TypeScript properties of a `RosRecommendInstanceTypesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::RecommendInstanceTypes` resource.
 */
// @ts-ignore TS6133
function rosRecommendInstanceTypesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRecommendInstanceTypesPropsValidator(properties).assertSuccess();
    }
    return {
      'Cores': ros.numberToRosTemplate(properties.cores),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'InstanceFamilyLevel': ros.stringToRosTemplate(properties.instanceFamilyLevel),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'InstanceTypeFamilies': ros.listMapper(ros.stringToRosTemplate)(properties.instanceTypeFamilies),
      'IoOptimized': ros.stringToRosTemplate(properties.ioOptimized),
      'MaxPrice': ros.numberToRosTemplate(properties.maxPrice),
      'Memory': ros.numberToRosTemplate(properties.memory),
      'PriorityStrategy': ros.stringToRosTemplate(properties.priorityStrategy),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'Scene': ros.stringToRosTemplate(properties.scene),
      'SpotStrategy': ros.stringToRosTemplate(properties.spotStrategy),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
      'ZoneId': ros.stringToRosTemplate(properties.zoneId),
      'ZoneMatchMode': ros.stringToRosTemplate(properties.zoneMatchMode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::RecommendInstanceTypes`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RecommendInstanceTypes` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-recommendinstancetypes
 */
export class RosRecommendInstanceTypes extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::RecommendInstanceTypes";

    /**
     * @Attribute InstanceTypeIds: The list of instance type ids. Note that instance type ids are not unique.
     */
    public readonly attrInstanceTypeIds: ros.IResolvable;

    /**
     * @Attribute InstanceTypes: The list of instance types, including information such as cores and memory.
     */
    public readonly attrInstanceTypes: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cores: The number of vCPUs of the instance.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    public cores: number | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the instances of the instance type. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceFamilyLevel: The level of the instance family. Valid values: EntryLevel, EnterpriseLevel, CreditEntryLevel.
     */
    public instanceFamilyLevel: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The specified instance type. For more information, see Instance families or call ECS DescribeInstanceTypes operation to query the most recent instance type list.
     * Note If the InstanceType parameter is specified, none of the Cores and Memory parameters can be specified.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceTypeFamilies: The list of instance family to be filtered out. You can also call ECS DescribeInstanceTypeFamilies operation to query the list of instance families.
     */
    public instanceTypeFamilies: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: Specifies whether to match I\/O optimized instances. The IoOptimized parameter cannot be specified when the instance is not I\/O optimized. Valid values:
     * optimized: matches I\/O optimized instances.
     * none: matches non-I\/O optimized instances.
     * Default value: optimized.
     * If you query alternative instance types for retired instance types, this parameter is set to none by default. 
     * Default value: none.
     */
    public ioOptimized: string | ros.IResolvable | undefined;

    /**
     * @Property maxPrice: The maximum hourly price for pay-as-you-go instances or preemptible instances.
     * Note If this parameter is specified, the SpotStrategy parameter must be set to SpotWithPriceLimit.
     */
    public maxPrice: number | ros.IResolvable | undefined;

    /**
     * @Property memory: The memory size of the instance. Unit: GiB.
     * Note If the Cores and Memory parameters are both specified, all instance types that offer the vCPUs and memory size specified by the parameters are matched.
     */
    public memory: number | ros.IResolvable | undefined;

    /**
     * @Property priorityStrategy: The policy for recommending instance types. Valid values:
     * InventoryFirst: Instance types are recommended in descending order based on resource availability.
     * PriceFirst: Instance types are recommended in ascending order based on hourly price per vCPU.
     * NewProductFirst: The latest instance types are recommended first.
     * Default value: InventoryFirst.
     */
    public priorityStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property scene: Specifies the scenario in which the instance type is recommended. Valid values:
     * UPGRADE: instance type upgrade or downgrade
     * CREATE: instance creation
     * Default value: CREATE.
     */
    public scene: string | ros.IResolvable | undefined;

    /**
     * @Property spotStrategy: The bidding policy of preemptible instances. Valid values:
     * NoSpot: applies to regular pay-as-you-go instances.
     * SpotWithPriceLimit: applies to preemptible instances that have user-defined maximum hourly prices.
     * SpotAsPriceGo: applies to preemptible instances that are of the market price at the time of purchase.
     * Note If the SpotStrategy parameter is specified, the InstanceChargeType parameter must be set to PostPaid.
     * Default value: NoSpot.
     */
    public spotStrategy: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * cloud_essd: enhanced SSD (ESSD)
     * cloud: basic disk
     * For non-I\/O optimized instances, the default value is cloud.
     * For I\/O optimized instances, the default value is cloud_efficiency.
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The zone ID of the alternative instance types. You can call ECS DescribeZones operation to query the most recent zone list.When you specify this parameter, we recommend that you set ZoneMatchMode to the default value Include. This value indicates that instance types in the zone specified by ZoneId are preferentially recommended, and instance types in other zones in the same region are also listed.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneMatchMode: Specifies which alternative instance types are recommended. Valid values:
     * Strict: recommends only alternative instance types in the zone specified by ZoneId.
     * Include: recommends all instance types in all the zones in the same region as the specified instance type.
     * When ZoneId is specified, the default value of this parameter is Strict. This value indicates that only alternative instance types in the zone specified by ZoneId are recommended.
     */
    public zoneMatchMode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRecommendInstanceTypesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRecommendInstanceTypes.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrInstanceTypeIds = this.getAtt('InstanceTypeIds');
        this.attrInstanceTypes = this.getAtt('InstanceTypes');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cores = props.cores;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceFamilyLevel = props.instanceFamilyLevel;
        this.instanceType = props.instanceType;
        this.instanceTypeFamilies = props.instanceTypeFamilies;
        this.ioOptimized = props.ioOptimized;
        this.maxPrice = props.maxPrice;
        this.memory = props.memory;
        this.priorityStrategy = props.priorityStrategy;
        this.refreshOptions = props.refreshOptions;
        this.scene = props.scene;
        this.spotStrategy = props.spotStrategy;
        this.systemDiskCategory = props.systemDiskCategory;
        this.zoneId = props.zoneId;
        this.zoneMatchMode = props.zoneMatchMode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cores: this.cores,
            instanceChargeType: this.instanceChargeType,
            instanceFamilyLevel: this.instanceFamilyLevel,
            instanceType: this.instanceType,
            instanceTypeFamilies: this.instanceTypeFamilies,
            ioOptimized: this.ioOptimized,
            maxPrice: this.maxPrice,
            memory: this.memory,
            priorityStrategy: this.priorityStrategy,
            refreshOptions: this.refreshOptions,
            scene: this.scene,
            spotStrategy: this.spotStrategy,
            systemDiskCategory: this.systemDiskCategory,
            zoneId: this.zoneId,
            zoneMatchMode: this.zoneMatchMode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRecommendInstanceTypesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecurityGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export interface RosSecurityGroupProps {

    /**
     * @Property securityGroupId: Security group ID.
     */
    readonly securityGroupId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('securityGroupId', ros.requiredValidator)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::SecurityGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::SecurityGroup` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::SecurityGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroup
 */
export class RosSecurityGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::SecurityGroup";

    /**
     * @Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute InnerAccessPolicy: Network connectivity policy within the security group.
     */
    public readonly attrInnerAccessPolicy: ros.IResolvable;

    /**
     * @Attribute Permissions: A collection of Security Group permission rules.
     */
    public readonly attrPermissions: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The enterprise resource group ID where the security group resides.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupId: Security group ID.
     */
    public readonly attrSecurityGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityGroupName: The security group name.
     */
    public readonly attrSecurityGroupName: ros.IResolvable;

    /**
     * @Attribute SecurityGroupReferences: The complete information about the authorization of all user-specified security groups.
     */
    public readonly attrSecurityGroupReferences: ros.IResolvable;

    /**
     * @Attribute SecurityGroupType: Security group type.
     */
    public readonly attrSecurityGroupType: ros.IResolvable;

    /**
     * @Attribute ServiceId: The virtual quotient ID corresponding to the security group.
     */
    public readonly attrServiceId: ros.IResolvable;

    /**
     * @Attribute ServiceManaged: Whether the owner of the security group is a cloud product or vendor.
     */
    public readonly attrServiceManaged: ros.IResolvable;

    /**
     * @Attribute Tags: The tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute VpcId: Secure the group's proprietary network.
     */
    public readonly attrVpcId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property securityGroupId: Security group ID.
     */
    public securityGroupId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrInnerAccessPolicy = this.getAtt('InnerAccessPolicy');
        this.attrPermissions = this.getAtt('Permissions');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityGroupId = this.getAtt('SecurityGroupId');
        this.attrSecurityGroupName = this.getAtt('SecurityGroupName');
        this.attrSecurityGroupReferences = this.getAtt('SecurityGroupReferences');
        this.attrSecurityGroupType = this.getAtt('SecurityGroupType');
        this.attrServiceId = this.getAtt('ServiceId');
        this.attrServiceManaged = this.getAtt('ServiceManaged');
        this.attrTags = this.getAtt('Tags');
        this.attrVpcId = this.getAtt('VpcId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.securityGroupId = props.securityGroupId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            securityGroupId: this.securityGroupId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSecurityGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
export interface RosSecurityGroupsProps {

    /**
     * @Property networkType: The network type of the security group. Valid values:
     * vpc
     * classic
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupId: The ID of the security group.
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * @Property securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
     */
    readonly securityGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property securityGroupName: The name of the security group.
     */
    readonly securityGroupName?: string | ros.IResolvable;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     * Note If you do not specify this parameter, both basic and advanced security groups are queried.
     */
    readonly securityGroupType?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of securitygroup.
     */
    readonly tags?: RosSecurityGroups.TagsProperty[];

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSecurityGroupsProps`
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupsProps`
 *
 * @returns the result of the validation.
 */
function RosSecurityGroupsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('securityGroupName', ros.validateString)(properties.securityGroupName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('networkType', ros.validateString)(properties.networkType));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('securityGroupType', ros.validateString)(properties.securityGroupType));
    if(properties.securityGroupIds && (Array.isArray(properties.securityGroupIds) || (typeof properties.securityGroupIds) === 'string')) {
        errors.collect(ros.propertyValidator('securityGroupIds', ros.validateLength)({
            data: properties.securityGroupIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('securityGroupIds', ros.listValidator(ros.validateString))(properties.securityGroupIds));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSecurityGroups_TagsPropertyValidator))(properties.tags));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSecurityGroupsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::SecurityGroups` resource
 *
 * @param properties - the TypeScript properties of a `RosSecurityGroupsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::SecurityGroups` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecurityGroupsPropsValidator(properties).assertSuccess();
    }
    return {
      'NetworkType': ros.stringToRosTemplate(properties.networkType),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SecurityGroupId': ros.stringToRosTemplate(properties.securityGroupId),
      'SecurityGroupIds': ros.listMapper(ros.stringToRosTemplate)(properties.securityGroupIds),
      'SecurityGroupName': ros.stringToRosTemplate(properties.securityGroupName),
      'SecurityGroupType': ros.stringToRosTemplate(properties.securityGroupType),
      'Tags': ros.listMapper(rosSecurityGroupsTagsPropertyToRosTemplate)(properties.tags),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::SecurityGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SecurityGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-securitygroups
 */
export class RosSecurityGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::SecurityGroups";

    /**
     * @Attribute SecurityGroupIds: The list of security group ids.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable;

    /**
     * @Attribute SecurityGroups: The list of security groups.
     */
    public readonly attrSecurityGroups: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property networkType: The network type of the security group. Valid values:
     * vpc
     * classic
     */
    public networkType: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instance belongs. 
     * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the security group.
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupIds: The IDs of security groups. The value is a JSON array that consists of up to 100 security group IDs. Separate multiple security group IDs with commas (,).
     */
    public securityGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property securityGroupName: The name of the security group.
     */
    public securityGroupName: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupType: The type of the security group. Valid values:
     * normal: basic security group
     * enterprise: advanced security group
     * Note If you do not specify this parameter, both basic and advanced security groups are queried.
     */
    public securityGroupType: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of securitygroup.
     */
    public tags: RosSecurityGroups.TagsProperty[] | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the security group belongs.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecurityGroupsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecurityGroups.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityGroupIds = this.getAtt('SecurityGroupIds');
        this.attrSecurityGroups = this.getAtt('SecurityGroups');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.networkType = props.networkType;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.securityGroupId = props.securityGroupId;
        this.securityGroupIds = props.securityGroupIds;
        this.securityGroupName = props.securityGroupName;
        this.securityGroupType = props.securityGroupType;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            networkType: this.networkType,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            securityGroupId: this.securityGroupId,
            securityGroupIds: this.securityGroupIds,
            securityGroupName: this.securityGroupName,
            securityGroupType: this.securityGroupType,
            tags: this.tags,
            vpcId: this.vpcId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecurityGroupsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSecurityGroups {
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
function RosSecurityGroups_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::SecurityGroups.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::SecurityGroups.Tags` resource.
 */
// @ts-ignore TS6133
function rosSecurityGroupsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecurityGroups_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosSnapshot`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export interface RosSnapshotProps {

    /**
     * @Property snapshotId: The snapshot id.
     */
    readonly snapshotId: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSnapshotProps`
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the result of the validation.
 */
function RosSnapshotPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('snapshotId', ros.requiredValidator)(properties.snapshotId));
    errors.collect(ros.propertyValidator('snapshotId', ros.validateString)(properties.snapshotId));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosSnapshotProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshot` resource
 *
 * @param properties - the TypeScript properties of a `RosSnapshotProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshot` resource.
 */
// @ts-ignore TS6133
function rosSnapshotPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSnapshotPropsValidator(properties).assertSuccess();
    }
    return {
      'SnapshotId': ros.stringToRosTemplate(properties.snapshotId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Snapshot`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshot` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshot
 */
export class RosSnapshot extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Snapshot";

    /**
     * @Attribute CreateTime: The create time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Description: The description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DiskId: The source disk id.
     */
    public readonly attrDiskId: ros.IResolvable;

    /**
     * @Attribute Encrypted: Whether the snapshot is encrypted.
     */
    public readonly attrEncrypted: ros.IResolvable;

    /**
     * @Attribute InstantAccess: Whether snapshot speed availability is enabled.
     */
    public readonly attrInstantAccess: ros.IResolvable;

    /**
     * @Attribute InstantAccessRetentionDays: InstantAccessRetentionDays.
     */
    public readonly attrInstantAccessRetentionDays: ros.IResolvable;

    /**
     * @Attribute ProductCode: The product number inherited from the mirror market.
     */
    public readonly attrProductCode: ros.IResolvable;

    /**
     * @Attribute Progress: Snapshot creation progress, in percentage.
     */
    public readonly attrProgress: ros.IResolvable;

    /**
     * @Attribute RemainTime: Remaining completion time for the snapshot being created.
     */
    public readonly attrRemainTime: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute RetentionDays: Automatic snapshot retention days.
     */
    public readonly attrRetentionDays: ros.IResolvable;

    /**
     * @Attribute SnapshotId: The snapshot id.
     */
    public readonly attrSnapshotId: ros.IResolvable;

    /**
     * @Attribute SnapshotName: Snapshot Display Name.
     */
    public readonly attrSnapshotName: ros.IResolvable;

    /**
     * @Attribute SnapshotSN: Snapshot serial number.
     */
    public readonly attrSnapshotSn: ros.IResolvable;

    /**
     * @Attribute SnapshotType: Snapshot creation type.
     */
    public readonly attrSnapshotType: ros.IResolvable;

    /**
     * @Attribute SourceDiskSize: Source disk capacity.
     */
    public readonly attrSourceDiskSize: ros.IResolvable;

    /**
     * @Attribute SourceDiskType: Source disk attributes.
     */
    public readonly attrSourceDiskType: ros.IResolvable;

    /**
     * @Attribute SourceStorageType: Original disk type.
     */
    public readonly attrSourceStorageType: ros.IResolvable;

    /**
     * @Attribute Tags: The tags.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Usage: A resource type that has a reference relationship.
     */
    public readonly attrUsage: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property snapshotId: The snapshot id.
     */
    public snapshotId: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosSnapshotProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSnapshot.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDescription = this.getAtt('Description');
        this.attrDiskId = this.getAtt('DiskId');
        this.attrEncrypted = this.getAtt('Encrypted');
        this.attrInstantAccess = this.getAtt('InstantAccess');
        this.attrInstantAccessRetentionDays = this.getAtt('InstantAccessRetentionDays');
        this.attrProductCode = this.getAtt('ProductCode');
        this.attrProgress = this.getAtt('Progress');
        this.attrRemainTime = this.getAtt('RemainTime');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrRetentionDays = this.getAtt('RetentionDays');
        this.attrSnapshotId = this.getAtt('SnapshotId');
        this.attrSnapshotName = this.getAtt('SnapshotName');
        this.attrSnapshotSn = this.getAtt('SnapshotSN');
        this.attrSnapshotType = this.getAtt('SnapshotType');
        this.attrSourceDiskSize = this.getAtt('SourceDiskSize');
        this.attrSourceDiskType = this.getAtt('SourceDiskType');
        this.attrSourceStorageType = this.getAtt('SourceStorageType');
        this.attrTags = this.getAtt('Tags');
        this.attrUsage = this.getAtt('Usage');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.snapshotId = props.snapshotId;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            snapshotId: this.snapshotId,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSnapshotPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSnapshots`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
export interface RosSnapshotsProps {

    /**
     * @Property category: The category of the snapshot. Valid values:
     * Standard: normal snapshot
     * Flash: local snapshot
     * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
     *  If you have used local snapshots before December 14, 2020, you can use this parameter.
     *  If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
     *  Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
     */
    readonly category?: string | ros.IResolvable;

    /**
     * @Property diskId: The ID of the disk.
     */
    readonly diskId?: string | ros.IResolvable;

    /**
     * @Property encrypted: Specifies whether the snapshot is encrypted. Default value: false.
     */
    readonly encrypted?: boolean | ros.IResolvable;

    /**
     * @Property filters: Filter value when querying resources
     */
    readonly filters?: Array<RosSnapshots.FiltersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property instanceId: The ID of the instance.
     */
    readonly instanceId?: string | ros.IResolvable;

    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
     */
    readonly snapshotIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property snapshotLinkId: The ID of the snapshot chain.
     */
    readonly snapshotLinkId?: string | ros.IResolvable;

    /**
     * @Property snapshotName: The name of the snapshot.
     */
    readonly snapshotName?: string | ros.IResolvable;

    /**
     * @Property snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
     * auto: automatic snapshot
     * user: manual snapshot
     * all: all snapshot types
     */
    readonly snapshotType?: string | ros.IResolvable;

    /**
     * @Property sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
     * System: system disk
     * Data: data disk
     * Note These values are case-insensitive.
     */
    readonly sourceDiskType?: string | ros.IResolvable;

    /**
     * @Property status: The status of the snapshot. Default value: all. Valid values:
     * progressing: The snapshot is being created.
     * accomplished: The snapshot is created.
     * failed: The snapshot fails to be created.
     * all: all snapshot statuses.
     */
    readonly status?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of snapshot.
     */
    readonly tags?: RosSnapshots.TagsProperty[];

    /**
     * @Property usage: The type of the snapshot. Default value: all. Valid values:
     * image: The snapshot has been used to create custom images.
     * disk: The snapshot has been used to create disks.
     * image_disk: The snapshot has been used to create custom images and data disks.
     * none: The snapshot has not been used to create custom images or disks.
     */
    readonly usage?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSnapshotsProps`
 *
 * @param properties - the TypeScript properties of a `RosSnapshotsProps`
 *
 * @returns the result of the validation.
 */
function RosSnapshotsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["progressing","accomplished","failed","all"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    if(properties.usage && (typeof properties.usage) !== 'object') {
        errors.collect(ros.propertyValidator('usage', ros.validateAllowedValues)({
          data: properties.usage,
          allowedValues: ["image","disk","image_disk","none"],
        }));
    }
    errors.collect(ros.propertyValidator('usage', ros.validateString)(properties.usage));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Standard","Flash"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('kmsKeyId', ros.validateString)(properties.kmsKeyId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('encrypted', ros.validateBoolean)(properties.encrypted));
    errors.collect(ros.propertyValidator('snapshotLinkId', ros.validateString)(properties.snapshotLinkId));
    if(properties.snapshotIds && (Array.isArray(properties.snapshotIds) || (typeof properties.snapshotIds) === 'string')) {
        errors.collect(ros.propertyValidator('snapshotIds', ros.validateLength)({
            data: properties.snapshotIds.length,
            min: undefined,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('snapshotIds', ros.listValidator(ros.validateString))(properties.snapshotIds));
    errors.collect(ros.propertyValidator('snapshotName', ros.validateString)(properties.snapshotName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    if(properties.filters && (Array.isArray(properties.filters) || (typeof properties.filters) === 'string')) {
        errors.collect(ros.propertyValidator('filters', ros.validateLength)({
            data: properties.filters.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('filters', ros.listValidator(RosSnapshots_FiltersPropertyValidator))(properties.filters));
    if(properties.snapshotType && (typeof properties.snapshotType) !== 'object') {
        errors.collect(ros.propertyValidator('snapshotType', ros.validateAllowedValues)({
          data: properties.snapshotType,
          allowedValues: ["auto","user","all"],
        }));
    }
    errors.collect(ros.propertyValidator('snapshotType', ros.validateString)(properties.snapshotType));
    if(properties.sourceDiskType && (typeof properties.sourceDiskType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceDiskType', ros.validateAllowedValues)({
          data: properties.sourceDiskType,
          allowedValues: ["System","Data"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceDiskType', ros.validateString)(properties.sourceDiskType));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSnapshots_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('diskId', ros.validateString)(properties.diskId));
    return errors.wrap('supplied properties not correct for "RosSnapshotsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshots` resource
 *
 * @param properties - the TypeScript properties of a `RosSnapshotsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshots` resource.
 */
// @ts-ignore TS6133
function rosSnapshotsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSnapshotsPropsValidator(properties).assertSuccess();
    }
    return {
      'Category': ros.stringToRosTemplate(properties.category),
      'DiskId': ros.stringToRosTemplate(properties.diskId),
      'Encrypted': ros.booleanToRosTemplate(properties.encrypted),
      'Filters': ros.listMapper(rosSnapshotsFiltersPropertyToRosTemplate)(properties.filters),
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'KMSKeyId': ros.stringToRosTemplate(properties.kmsKeyId),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'SnapshotIds': ros.listMapper(ros.stringToRosTemplate)(properties.snapshotIds),
      'SnapshotLinkId': ros.stringToRosTemplate(properties.snapshotLinkId),
      'SnapshotName': ros.stringToRosTemplate(properties.snapshotName),
      'SnapshotType': ros.stringToRosTemplate(properties.snapshotType),
      'SourceDiskType': ros.stringToRosTemplate(properties.sourceDiskType),
      'Status': ros.stringToRosTemplate(properties.status),
      'Tags': ros.listMapper(rosSnapshotsTagsPropertyToRosTemplate)(properties.tags),
      'Usage': ros.stringToRosTemplate(properties.usage),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Snapshots`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Snapshots` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-snapshots
 */
export class RosSnapshots extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Snapshots";

    /**
     * @Attribute SnapshotIds: the list of snapshot ids.
     */
    public readonly attrSnapshotIds: ros.IResolvable;

    /**
     * @Attribute Snapshots: the list of snapshots.
     */
    public readonly attrSnapshots: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property category: The category of the snapshot. Valid values:
     * Standard: normal snapshot
     * Flash: local snapshot
     * The local snapshot feature is replaced by the instant access feature. When you specify this parameter, take note of the following items:
     *  If you have used local snapshots before December 14, 2020, you can use this parameter.
     *  If you have not used local snapshots before December 14, 2020, you cannot use this parameter.
     *  Note This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property diskId: The ID of the disk.
     */
    public diskId: string | ros.IResolvable | undefined;

    /**
     * @Property encrypted: Specifies whether the snapshot is encrypted. Default value: false.
     */
    public encrypted: boolean | ros.IResolvable | undefined;

    /**
     * @Property filters: Filter value when querying resources
     */
    public filters: Array<RosSnapshots.FiltersProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property instanceId: The ID of the instance.
     */
    public instanceId: string | ros.IResolvable | undefined;

    /**
     * @Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the data disk.
     */
    public kmsKeyId: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the snapshot belongs. If this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotIds: The IDs of snapshots. The value can be a JSON array that consists of up to 100 snapshot IDs. Separate multiple snapshot IDs with commas (,).
     */
    public snapshotIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property snapshotLinkId: The ID of the snapshot chain.
     */
    public snapshotLinkId: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotName: The name of the snapshot.
     */
    public snapshotName: string | ros.IResolvable | undefined;

    /**
     * @Property snapshotType: Specifies whether the snapshot has been used to create images or disks. Valid values:
     * auto: automatic snapshot
     * user: manual snapshot
     * all: all snapshot types
     */
    public snapshotType: string | ros.IResolvable | undefined;

    /**
     * @Property sourceDiskType: The type of the source disk for which the snapshot was created. Valid values:
     * System: system disk
     * Data: data disk
     * Note These values are case-insensitive.
     */
    public sourceDiskType: string | ros.IResolvable | undefined;

    /**
     * @Property status: The status of the snapshot. Default value: all. Valid values:
     * progressing: The snapshot is being created.
     * accomplished: The snapshot is created.
     * failed: The snapshot fails to be created.
     * all: all snapshot statuses.
     */
    public status: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of snapshot.
     */
    public tags: RosSnapshots.TagsProperty[] | undefined;

    /**
     * @Property usage: The type of the snapshot. Default value: all. Valid values:
     * image: The snapshot has been used to create custom images.
     * disk: The snapshot has been used to create disks.
     * image_disk: The snapshot has been used to create custom images and data disks.
     * none: The snapshot has not been used to create custom images or disks.
     */
    public usage: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSnapshotsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSnapshots.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSnapshotIds = this.getAtt('SnapshotIds');
        this.attrSnapshots = this.getAtt('Snapshots');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.category = props.category;
        this.diskId = props.diskId;
        this.encrypted = props.encrypted;
        this.filters = props.filters;
        this.instanceId = props.instanceId;
        this.kmsKeyId = props.kmsKeyId;
        this.refreshOptions = props.refreshOptions;
        this.resourceGroupId = props.resourceGroupId;
        this.snapshotIds = props.snapshotIds;
        this.snapshotLinkId = props.snapshotLinkId;
        this.snapshotName = props.snapshotName;
        this.snapshotType = props.snapshotType;
        this.sourceDiskType = props.sourceDiskType;
        this.status = props.status;
        this.tags = props.tags;
        this.usage = props.usage;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            category: this.category,
            diskId: this.diskId,
            encrypted: this.encrypted,
            filters: this.filters,
            instanceId: this.instanceId,
            kmsKeyId: this.kmsKeyId,
            refreshOptions: this.refreshOptions,
            resourceGroupId: this.resourceGroupId,
            snapshotIds: this.snapshotIds,
            snapshotLinkId: this.snapshotLinkId,
            snapshotName: this.snapshotName,
            snapshotType: this.snapshotType,
            sourceDiskType: this.sourceDiskType,
            status: this.status,
            tags: this.tags,
            usage: this.usage,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSnapshotsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSnapshots {
    /**
     * @stability external
     */
    export interface FiltersProperty {
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
 * Determine whether the given properties match those of a `FiltersProperty`
 *
 * @param properties - the TypeScript properties of a `FiltersProperty`
 *
 * @returns the result of the validation.
 */
function RosSnapshots_FiltersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "FiltersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshots.Filters` resource
 *
 * @param properties - the TypeScript properties of a `FiltersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshots.Filters` resource.
 */
// @ts-ignore TS6133
function rosSnapshotsFiltersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSnapshots_FiltersPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

export namespace RosSnapshots {
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
function RosSnapshots_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshots.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Snapshots.Tags` resource.
 */
// @ts-ignore TS6133
function rosSnapshotsTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSnapshots_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
 */
export interface RosZonesProps {

    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    readonly dataDiskCategory?: string | ros.IResolvable;

    /**
     * @Property instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * @Property instanceType: The instance type.
     */
    readonly instanceType?: string | ros.IResolvable;

    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. Valid values:
     * none: non-I\/O optimized
     * optimized: I\/O optimized
     * Default value: optimized.
     */
    readonly ioOptimized?: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * @Property resourceType: The type of the resource. Valid values:
     * instance: ECS instance
     * disk: cloud disk
     * reservedinstance: reserved instance
     * ddh: dedicated host
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    readonly systemDiskCategory?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the result of the validation.
 */
function RosZonesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('ioOptimized', ros.validateString)(properties.ioOptimized));
    errors.collect(ros.propertyValidator('instanceChargeType', ros.validateString)(properties.instanceChargeType));
    errors.collect(ros.propertyValidator('resourceType', ros.validateString)(properties.resourceType));
    errors.collect(ros.propertyValidator('dataDiskCategory', ros.validateString)(properties.dataDiskCategory));
    errors.collect(ros.propertyValidator('instanceType', ros.validateString)(properties.instanceType));
    errors.collect(ros.propertyValidator('systemDiskCategory', ros.validateString)(properties.systemDiskCategory));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Zones` resource
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::ECS::Zones` resource.
 */
// @ts-ignore TS6133
function rosZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonesPropsValidator(properties).assertSuccess();
    }
    return {
      'DataDiskCategory': ros.stringToRosTemplate(properties.dataDiskCategory),
      'InstanceChargeType': ros.stringToRosTemplate(properties.instanceChargeType),
      'InstanceType': ros.stringToRosTemplate(properties.instanceType),
      'IoOptimized': ros.stringToRosTemplate(properties.ioOptimized),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
      'ResourceType': ros.stringToRosTemplate(properties.resourceType),
      'SystemDiskCategory': ros.stringToRosTemplate(properties.systemDiskCategory),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ECS::Zones`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-zones
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ECS::Zones";

    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * @Attribute Zones: The list of zones.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dataDiskCategory: The category of the data disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    public dataDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @Property instanceChargeType: The billing method of the resource. For more information, see Billing overview. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     * Default value: PostPaid.
     */
    public instanceChargeType: string | ros.IResolvable | undefined;

    /**
     * @Property instanceType: The instance type.
     */
    public instanceType: string | ros.IResolvable | undefined;

    /**
     * @Property ioOptimized: Specifies whether the instance is I\/O optimized. Valid values:
     * none: non-I\/O optimized
     * optimized: I\/O optimized
     * Default value: optimized.
     */
    public ioOptimized: string | ros.IResolvable | undefined;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    public refreshOptions: string | ros.IResolvable | undefined;

    /**
     * @Property resourceType: The type of the resource. Valid values:
     * instance: ECS instance
     * disk: cloud disk
     * reservedinstance: reserved instance
     * ddh: dedicated host
     */
    public resourceType: string | ros.IResolvable | undefined;

    /**
     * @Property systemDiskCategory: The category of the system disk. Valid values:
     * cloud: basic disk
     * cloud_efficiency: ultra disk
     * cloud_ssd: standard SSD
     * ephemeral_ssd: local SSD
     * cloud_essd: enhanced SSD (ESSD)
     */
    public systemDiskCategory: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dataDiskCategory = props.dataDiskCategory;
        this.instanceChargeType = props.instanceChargeType;
        this.instanceType = props.instanceType;
        this.ioOptimized = props.ioOptimized;
        this.refreshOptions = props.refreshOptions;
        this.resourceType = props.resourceType;
        this.systemDiskCategory = props.systemDiskCategory;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dataDiskCategory: this.dataDiskCategory,
            instanceChargeType: this.instanceChargeType,
            instanceType: this.instanceType,
            ioOptimized: this.ioOptimized,
            refreshOptions: this.refreshOptions,
            resourceType: this.resourceType,
            systemDiskCategory: this.systemDiskCategory,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
