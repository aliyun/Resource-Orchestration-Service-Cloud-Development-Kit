// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
 */
export interface RosProjectProps {

    /**
     * @Property projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    readonly projectIdentifier: string | ros.IResolvable;

    /**
     * @Property disableDevelopment: Specifies whether to disable the Development role. Valid values:
     * false: enables the Development role.
     * true: disables the Development role.
     * Default value: false.
     */
    readonly disableDevelopment?: boolean | ros.IResolvable;

    /**
     * @Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
     * true: allowed
     * false: not allowed
     * Default value: true.
     */
    readonly isAllowDownload?: boolean | ros.IResolvable;

    /**
     * @Property projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
     */
    readonly projectDescription?: string | ros.IResolvable;

    /**
     * @Property projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
     * 2: basic mode
     * 3: standard mode
     * Default value: 2.
     */
    readonly projectMode?: number | ros.IResolvable;

    /**
     * @Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.The value contains 3 to 28 characters.
     */
    readonly projectName?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosProject.TagsProperty[];
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
    errors.collect(ros.propertyValidator('projectIdentifier', ros.requiredValidator)(properties.projectIdentifier));
    if(properties.projectIdentifier && (typeof properties.projectIdentifier) !== 'object') {
        errors.collect(ros.propertyValidator('projectIdentifier', ros.validateAllowedPattern)({
          data: properties.projectIdentifier,
          reg: /^[a-zA-Z][a-zA-Z0-9_]{2,27}$/
        }));
    }
    errors.collect(ros.propertyValidator('projectIdentifier', ros.validateString)(properties.projectIdentifier));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.projectName && (Array.isArray(properties.projectName) || (typeof properties.projectName) === 'string')) {
        errors.collect(ros.propertyValidator('projectName', ros.validateLength)({
            data: properties.projectName.length,
            min: 3,
            max: 28,
          }));
    }
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    errors.collect(ros.propertyValidator('isAllowDownload', ros.validateBoolean)(properties.isAllowDownload));
    if(properties.projectDescription && (Array.isArray(properties.projectDescription) || (typeof properties.projectDescription) === 'string')) {
        errors.collect(ros.propertyValidator('projectDescription', ros.validateLength)({
            data: properties.projectDescription.length,
            min: undefined,
            max: 80,
          }));
    }
    errors.collect(ros.propertyValidator('projectDescription', ros.validateString)(properties.projectDescription));
    if(properties.projectMode && (typeof properties.projectMode) !== 'object') {
        errors.collect(ros.propertyValidator('projectMode', ros.validateAllowedValues)({
          data: properties.projectMode,
          allowedValues: [2,3],
        }));
    }
    errors.collect(ros.propertyValidator('projectMode', ros.validateNumber)(properties.projectMode));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosProject_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('disableDevelopment', ros.validateBoolean)(properties.disableDevelopment));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'ProjectIdentifier': ros.stringToRosTemplate(properties.projectIdentifier),
      'DisableDevelopment': ros.booleanToRosTemplate(properties.disableDevelopment),
      'IsAllowDownload': ros.booleanToRosTemplate(properties.isAllowDownload),
      'ProjectDescription': ros.stringToRosTemplate(properties.projectDescription),
      'ProjectMode': ros.numberToRosTemplate(properties.projectMode),
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosProjectTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataWorks::Project";

    /**
     * @Attribute EnvTypes: The environment of the workspace. Valid values: PROD and DEV.
The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
     */
    public readonly attrEnvTypes: ros.IResolvable;

    /**
     * @Attribute Id: The ID number of the workspace.
     */
    public readonly attrId: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether the workspace is the default workspace. Valid values:
1: The workspace is the default workspace.
0: The workspace is not the default workspace.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute ProjectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    public readonly attrProjectIdentifier: ros.IResolvable;

    /**
     * @Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled. Valid values:
1: The workspace protection feature is enabled.
0: The workspace protection feature is disabled.
     */
    public readonly attrProtectedMode: ros.IResolvable;

    /**
     * @Attribute ResidentArea: The type of the workspace. Valid values: private and swap.
     */
    public readonly attrResidentArea: ros.IResolvable;

    /**
     * @Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.
     */
    public readonly attrSchedulerMaxRetryTimes: ros.IResolvable;

    /**
     * @Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs. Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
     */
    public readonly attrSchedulerRetryInterval: ros.IResolvable;

    /**
     * @Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant. Valid values:
0: The MaxCompute tables are invisible to the users within a tenant.
1: The MaxCompute tables are visible to the users within a tenant.
     */
    public readonly attrTablePrivacyMode: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property projectIdentifier: The name of the workspace. The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
     */
    public projectIdentifier: string | ros.IResolvable;

    /**
     * @Property disableDevelopment: Specifies whether to disable the Development role. Valid values:
     * false: enables the Development role.
     * true: disables the Development role.
     * Default value: false.
     */
    public disableDevelopment: boolean | ros.IResolvable | undefined;

    /**
     * @Property isAllowDownload: Specifies whether query result download from DataStudio is allowed. Valid values:
     * true: allowed
     * false: not allowed
     * Default value: true.
     */
    public isAllowDownload: boolean | ros.IResolvable | undefined;

    /**
     * @Property projectDescription: The description of the workspace. If not provided, it is the same as ProjectIdentifier.
     */
    public projectDescription: string | ros.IResolvable | undefined;

    /**
     * @Property projectMode: The mode of the workspace. For more information about the differences between the modes of workspaces, see Differences between workspaces in basic mode and workspaces in standard mode. Valid values:
     * 2: basic mode
     * 3: standard mode
     * Default value: 2.
     */
    public projectMode: number | ros.IResolvable | undefined;

    /**
     * @Property projectName: The display name of the workspace. If not provided, it is the same as ProjectIdentifier.The value contains 3 to 28 characters.
     */
    public projectName: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to workspace. Max support 20 tags to add during create workspace. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosProject.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEnvTypes = this.getAtt('EnvTypes');
        this.attrId = this.getAtt('Id');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrProjectIdentifier = this.getAtt('ProjectIdentifier');
        this.attrProtectedMode = this.getAtt('ProtectedMode');
        this.attrResidentArea = this.getAtt('ResidentArea');
        this.attrSchedulerMaxRetryTimes = this.getAtt('SchedulerMaxRetryTimes');
        this.attrSchedulerRetryInterval = this.getAtt('SchedulerRetryInterval');
        this.attrTablePrivacyMode = this.getAtt('TablePrivacyMode');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectIdentifier = props.projectIdentifier;
        this.disableDevelopment = props.disableDevelopment;
        this.isAllowDownload = props.isAllowDownload;
        this.projectDescription = props.projectDescription;
        this.projectMode = props.projectMode;
        this.projectName = props.projectName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            projectIdentifier: this.projectIdentifier,
            disableDevelopment: this.disableDevelopment,
            isAllowDownload: this.isAllowDownload,
            projectDescription: this.projectDescription,
            projectMode: this.projectMode,
            projectName: this.projectName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosProject {
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
function RosProject_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::Project.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::Project.Tags` resource.
 */
// @ts-ignore TS6133
function rosProjectTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
export interface RosResourceGroupProps {

    /**
     * @Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
     */
    readonly paymentType: string | ros.IResolvable;

    /**
     * @Property vpcId: The default bound VPC ID.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The default bound switch ID.
     */
    readonly vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoRenewEnabled: Whether to renew automatically.
     */
    readonly autoRenewEnabled?: boolean | ros.IResolvable;

    /**
     * @Property paymentDuration: Paid time. Default is 1.
     */
    readonly paymentDuration?: number | ros.IResolvable;

    /**
     * @Property paymentDurationUnit: Paid time unit. Valid values:
     * Month: represents monthly subscription
     * Year: represents annual subscription.
     * Default is Month.
     */
    readonly paymentDurationUnit?: string | ros.IResolvable;

    /**
     * @Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
     */
    readonly remark?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Alibaba Cloud Resource Group ID.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
     */
    readonly spec?: number | ros.IResolvable;

    /**
     * @Property tags: Tags to attach to ResourceGroup. Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosResourceGroup.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosResourceGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('autoRenewEnabled', ros.validateBoolean)(properties.autoRenewEnabled));
    errors.collect(ros.propertyValidator('vpcId', ros.requiredValidator)(properties.vpcId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.requiredValidator)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.paymentDurationUnit && (typeof properties.paymentDurationUnit) !== 'object') {
        errors.collect(ros.propertyValidator('paymentDurationUnit', ros.validateAllowedValues)({
          data: properties.paymentDurationUnit,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentDurationUnit', ros.validateString)(properties.paymentDurationUnit));
    errors.collect(ros.propertyValidator('paymentType', ros.requiredValidator)(properties.paymentType));
    if(properties.paymentType && (typeof properties.paymentType) !== 'object') {
        errors.collect(ros.propertyValidator('paymentType', ros.validateAllowedValues)({
          data: properties.paymentType,
          allowedValues: ["PayAsYouGo","PostPaid","PayOnDemand","Postpaid","PostPay","Postpay","POSTPAY","POST","Subscription","PrePaid","Prepaid","PrePay","Prepay","PREPAY","PRE"],
        }));
    }
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    if(properties.paymentDuration && (typeof properties.paymentDuration) !== 'object') {
        errors.collect(ros.propertyValidator('paymentDuration', ros.validateRange)({
            data: properties.paymentDuration,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('paymentDuration', ros.validateNumber)(properties.paymentDuration));
    if(properties.spec && (typeof properties.spec) !== 'object') {
        errors.collect(ros.propertyValidator('spec', ros.validateRange)({
            data: properties.spec,
            min: 2,
            max: 99999999,
          }));
    }
    errors.collect(ros.propertyValidator('spec', ros.validateNumber)(properties.spec));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosResourceGroup_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('remark', ros.validateString)(properties.remark));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosResourceGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::ResourceGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::ResourceGroup` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'VpcId': ros.stringToRosTemplate(properties.vpcId),
      'VSwitchId': ros.stringToRosTemplate(properties.vSwitchId),
      'AutoRenewEnabled': ros.booleanToRosTemplate(properties.autoRenewEnabled),
      'PaymentDuration': ros.numberToRosTemplate(properties.paymentDuration),
      'PaymentDurationUnit': ros.stringToRosTemplate(properties.paymentDurationUnit),
      'Remark': ros.stringToRosTemplate(properties.remark),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Spec': ros.numberToRosTemplate(properties.spec),
      'Tags': ros.listMapper(rosResourceGroupTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegroup
 */
export class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataWorks::ResourceGroup";

    /**
     * @Attribute Id: Creates a unique identifier for a common resource group.
     */
    public readonly attrId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of a common resource group that creates a common resource group must start with a letter and can contain letters, numbers, underscores (_), up to 128 characters.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property paymentType: The type of payment for resource groups, PrePaid represents annual and monthly payments, and PostPaid represents payment by volume.
     */
    public paymentType: string | ros.IResolvable;

    /**
     * @Property vpcId: The default bound VPC ID.
     */
    public vpcId: string | ros.IResolvable;

    /**
     * @Property vSwitchId: The default bound switch ID.
     */
    public vSwitchId: string | ros.IResolvable;

    /**
     * @Property autoRenewEnabled: Whether to renew automatically.
     */
    public autoRenewEnabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property paymentDuration: Paid time. Default is 1.
     */
    public paymentDuration: number | ros.IResolvable | undefined;

    /**
     * @Property paymentDurationUnit: Paid time unit. Valid values:
     * Month: represents monthly subscription
     * Year: represents annual subscription.
     * Default is Month.
     */
    public paymentDurationUnit: string | ros.IResolvable | undefined;

    /**
     * @Property remark: Remarks for creating a common resource group can contain letters, Chinese, numbers, underscores (_), up to 128 characters.
     */
    public remark: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Alibaba Cloud Resource Group ID.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property spec: Resource group specifications, unit CU, required when the resource group payment mode is PrePaid.
     */
    public spec: number | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags to attach to ResourceGroup. Max support 20 tags to add during create ResourceGroup. Each tag with two properties Key and Value, and Key is required.
     */
    public tags: RosResourceGroup.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrId = this.getAtt('Id');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.paymentType = props.paymentType;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.autoRenewEnabled = props.autoRenewEnabled;
        this.paymentDuration = props.paymentDuration;
        this.paymentDurationUnit = props.paymentDurationUnit;
        this.remark = props.remark;
        this.resourceGroupId = props.resourceGroupId;
        this.spec = props.spec;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            paymentType: this.paymentType,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            autoRenewEnabled: this.autoRenewEnabled,
            paymentDuration: this.paymentDuration,
            paymentDurationUnit: this.paymentDurationUnit,
            remark: this.remark,
            resourceGroupId: this.resourceGroupId,
            spec: this.spec,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosResourceGroup {
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
function RosResourceGroup_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::ResourceGroup.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::ResourceGroup.Tags` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosResourceGroup_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosResourceGroupRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
export interface RosResourceGroupRelationProps {

    /**
     * @Property projectId: Workspace ID to bind
     */
    readonly projectId: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Unique ID of resource group
     */
    readonly resourceGroupId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosResourceGroupRelationProps`
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupRelationProps`
 *
 * @returns the result of the validation.
 */
function RosResourceGroupRelationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.requiredValidator)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('projectId', ros.requiredValidator)(properties.projectId));
    errors.collect(ros.propertyValidator('projectId', ros.validateNumber)(properties.projectId));
    return errors.wrap('supplied properties not correct for "RosResourceGroupRelationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::ResourceGroupRelation` resource
 *
 * @param properties - the TypeScript properties of a `RosResourceGroupRelationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DataWorks::ResourceGroupRelation` resource.
 */
// @ts-ignore TS6133
function rosResourceGroupRelationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosResourceGroupRelationPropsValidator(properties).assertSuccess();
    }
    return {
      'ProjectId': ros.numberToRosTemplate(properties.projectId),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DataWorks::ResourceGroupRelation`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroupRelation` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
export class RosResourceGroupRelation extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DataWorks::ResourceGroupRelation";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property projectId: Workspace ID to bind
     */
    public projectId: number | ros.IResolvable;

    /**
     * @Property resourceGroupId: Unique ID of resource group
     */
    public resourceGroupId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupRelationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosResourceGroupRelation.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectId = props.projectId;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            projectId: this.projectId,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosResourceGroupRelationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
