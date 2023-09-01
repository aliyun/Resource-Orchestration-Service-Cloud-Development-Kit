// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::OOS::DefaultPatchBaseline`
 */
export interface RosDefaultPatchBaselineProps {

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDefaultPatchBaselineProps`
 *
 * @param properties - the TypeScript properties of a `RosDefaultPatchBaselineProps`
 *
 * @returns the result of the validation.
 */
function RosDefaultPatchBaselinePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('patchBaselineName', ros.requiredValidator)(properties.patchBaselineName));
    errors.collect(ros.propertyValidator('patchBaselineName', ros.validateString)(properties.patchBaselineName));
    return errors.wrap('supplied properties not correct for "RosDefaultPatchBaselineProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::DefaultPatchBaseline` resource
 *
 * @param properties - the TypeScript properties of a `RosDefaultPatchBaselineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::DefaultPatchBaseline` resource.
 */
// @ts-ignore TS6133
function rosDefaultPatchBaselinePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDefaultPatchBaselinePropsValidator(properties).assertSuccess();
    }
    return {
      PatchBaselineName: ros.stringToRosTemplate(properties.patchBaselineName),
    };
}

/**
 * A ROS template type:  `ALIYUN::OOS::DefaultPatchBaseline`
 */
export class RosDefaultPatchBaseline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::DefaultPatchBaseline";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public readonly attrApprovalRules: ros.IResolvable;

    /**
     * @Attribute CreatedBy: The creator of the patch baseline.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute CreatedDate: The time when the patch baseline was created.
     */
    public readonly attrCreatedDate: ros.IResolvable;

    /**
     * @Attribute Description: The description of the patch baseline.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute OperationSystem: The type of the operating system.
     */
    public readonly attrOperationSystem: ros.IResolvable;

    /**
     * @Attribute PatchBaselineId: The ID of the patch baseline.
     */
    public readonly attrPatchBaselineId: ros.IResolvable;

    /**
     * @Attribute PatchBaselineName: The name of the patch baseline.
     */
    public readonly attrPatchBaselineName: ros.IResolvable;

    /**
     * @Attribute ShareType: The share type of the patch baseline.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * @Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    public patchBaselineName: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::OOS::DefaultPatchBaseline`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDefaultPatchBaselineProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDefaultPatchBaseline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApprovalRules = this.getAtt('ApprovalRules');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrCreatedDate = this.getAtt('CreatedDate');
        this.attrDescription = this.getAtt('Description');
        this.attrOperationSystem = this.getAtt('OperationSystem');
        this.attrPatchBaselineId = this.getAtt('PatchBaselineId');
        this.attrPatchBaselineName = this.getAtt('PatchBaselineName');
        this.attrShareType = this.getAtt('ShareType');
        this.attrUpdatedBy = this.getAtt('UpdatedBy');
        this.attrUpdatedDate = this.getAtt('UpdatedDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.patchBaselineName = props.patchBaselineName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            patchBaselineName: this.patchBaselineName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDefaultPatchBaselinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::OOS::Execution`
 */
export interface RosExecutionProps {

    /**
     * @Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
     */
    readonly templateName: string | ros.IResolvable;

    /**
     * @Property mode: Execution mode.
     */
    readonly mode?: string | ros.IResolvable;

    /**
     * @Property parameters: Parameters for the execution of template.
     */
    readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property parentExecutionId: Parent execution ID.
     */
    readonly parentExecutionId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property resourceOptions: Resource options user by ROS.
     */
    readonly resourceOptions?: RosExecution.ResourceOptionsProperty | ros.IResolvable;

    /**
     * @Property safetyCheck: Security check mode. Allowed values:
     * - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    readonly safetyCheck?: string | ros.IResolvable;

    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * @Property templateVersion: Version number of template. Default to the latest version.
     */
    readonly templateVersion?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosExecutionProps`
 *
 * @param properties - the TypeScript properties of a `RosExecutionProps`
 *
 * @returns the result of the validation.
 */
function RosExecutionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parentExecutionId', ros.validateString)(properties.parentExecutionId));
    errors.collect(ros.propertyValidator('resourceOptions', RosExecution_ResourceOptionsPropertyValidator)(properties.resourceOptions));
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    if(properties.safetyCheck && (typeof properties.safetyCheck) !== 'object') {
        errors.collect(ros.propertyValidator('safetyCheck', ros.validateAllowedValues)({
          data: properties.safetyCheck,
          allowedValues: ["ConfirmEveryHighRiskAction","Skip"],
        }));
    }
    errors.collect(ros.propertyValidator('safetyCheck', ros.validateString)(properties.safetyCheck));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.mode && (typeof properties.mode) !== 'object') {
        errors.collect(ros.propertyValidator('mode', ros.validateAllowedValues)({
          data: properties.mode,
          allowedValues: ["Automatic","Debug"],
        }));
    }
    errors.collect(ros.propertyValidator('mode', ros.validateString)(properties.mode));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    if(properties.templateName && (Array.isArray(properties.templateName) || (typeof properties.templateName) === 'string')) {
        errors.collect(ros.propertyValidator('templateName', ros.validateLength)({
            data: properties.templateName.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    errors.collect(ros.propertyValidator('templateVersion', ros.validateString)(properties.templateVersion));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosExecutionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution` resource
 *
 * @param properties - the TypeScript properties of a `RosExecutionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution` resource.
 */
// @ts-ignore TS6133
function rosExecutionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosExecutionPropsValidator(properties).assertSuccess();
    }
    return {
      TemplateName: ros.stringToRosTemplate(properties.templateName),
      Mode: ros.stringToRosTemplate(properties.mode),
      Parameters: ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      ParentExecutionId: ros.stringToRosTemplate(properties.parentExecutionId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      ResourceOptions: rosExecutionResourceOptionsPropertyToRosTemplate(properties.resourceOptions),
      SafetyCheck: ros.stringToRosTemplate(properties.safetyCheck),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      TemplateVersion: ros.stringToRosTemplate(properties.templateVersion),
    };
}

/**
 * A ROS template type:  `ALIYUN::OOS::Execution`
 */
export class RosExecution extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Execution";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Counters: Task statistics: FailedTasks, SuccessTasks, TotalTasks.
     */
    public readonly attrCounters: ros.IResolvable;

    /**
     * @Attribute CurlCli: Convenience attribute, provides curl CLI command prefix, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.
You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrCurlCli: ros.IResolvable;

    /**
     * @Attribute ExecutionId: Execution ID.
     */
    public readonly attrExecutionId: ros.IResolvable;

    /**
     * @Attribute Outputs: Execution output.
     */
    public readonly attrOutputs: ros.IResolvable;

    /**
     * @Attribute PowerShellCurlCli: Convenience attribute, provides curl CLI command prefix for PowerShell, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding -Body '{"data": {"NotifyType": "Approve"}}' 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrPowerShellCurlCli: ros.IResolvable;

    /**
     * @Attribute Status: Execution status.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * @Attribute StatusMessage: Execution status information.
     */
    public readonly attrStatusMessage: ros.IResolvable;

    /**
     * @Attribute WindowsCurlCli: Convenience attribute, provides curl CLI command prefix for Windows, which can be used to notify oos execution instead of OOS API NotifyExecution.
You can notify approve to oos execution by adding --data-binary "{\"data\": {\"NotifyType\": \"Approve\"}}" 
For more parameters in data, refer to https://help.aliyun.com/document_detail/120777.html.You can also notify execution via ROS API SignalResource. API parameters Status and UniqueId are ignored. Use API parameter Data to pass data.
     */
    public readonly attrWindowsCurlCli: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property templateName: Template name. Content is limited to letters, numbers, underlined, underline, the length of 200 characters.
     */
    public templateName: string | ros.IResolvable;

    /**
     * @Property mode: Execution mode.
     */
    public mode: string | ros.IResolvable | undefined;

    /**
     * @Property parameters: Parameters for the execution of template.
     */
    public parameters: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property parentExecutionId: Parent execution ID.
     */
    public parentExecutionId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceOptions: Resource options user by ROS.
     */
    public resourceOptions: RosExecution.ResourceOptionsProperty | ros.IResolvable | undefined;

    /**
     * @Property safetyCheck: Security check mode. Allowed values:
     * - Skip: This option means that customers understand the risks, you can do anything without confirmation Action, no matter what the level of risk. It takes effect only if Mode is Automatic.
     * - ConfirmEveryHighRiskAction (default): This option would require customers to confirm each Action a high risk. NotifyExecution by calling customer interface to confirm or cancel.
     */
    public safetyCheck: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property templateVersion: Version number of template. Default to the latest version.
     */
    public templateVersion: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::OOS::Execution`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosExecutionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosExecution.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCounters = this.getAtt('Counters');
        this.attrCurlCli = this.getAtt('CurlCli');
        this.attrExecutionId = this.getAtt('ExecutionId');
        this.attrOutputs = this.getAtt('Outputs');
        this.attrPowerShellCurlCli = this.getAtt('PowerShellCurlCli');
        this.attrStatus = this.getAtt('Status');
        this.attrStatusMessage = this.getAtt('StatusMessage');
        this.attrWindowsCurlCli = this.getAtt('WindowsCurlCli');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.templateName = props.templateName;
        this.mode = props.mode;
        this.parameters = props.parameters;
        this.parentExecutionId = props.parentExecutionId;
        this.resourceGroupId = props.resourceGroupId;
        this.resourceOptions = props.resourceOptions;
        this.safetyCheck = props.safetyCheck;
        this.tags = props.tags;
        this.templateVersion = props.templateVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            templateName: this.templateName,
            mode: this.mode,
            parameters: this.parameters,
            parentExecutionId: this.parentExecutionId,
            resourceGroupId: this.resourceGroupId,
            resourceOptions: this.resourceOptions,
            safetyCheck: this.safetyCheck,
            tags: this.tags,
            templateVersion: this.templateVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosExecutionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosExecution {
    /**
     * @stability external
     */
    export interface ResourceOptionsProperty {
        /**
         * @Property cancelOnDelete: Whether to cancel execution for resource deletion, if the execution is not completed. Default to false.
         */
        readonly cancelOnDelete?: boolean | ros.IResolvable;
        /**
         * @Property timeout: Timeout seconds before the completion of execution. Default to 1800.
         */
        readonly timeout?: number | ros.IResolvable;
        /**
         * @Property successStatuses: It is used for ROS to judge if resource creation is successful.
     * Default to [Success].
     * ROS will wait util some status in SuccessStatuses or FailureStatuses.
     * FailureStatuses has higher priority.
     * Specified all statuses(Started,Queued,Running,Waiting,Success,Failed,Cancelled) if you do not want to wait for the completion of execution.
         */
        readonly successStatuses?: Array<any | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property failureStatuses: It is used for ROS to judge if resource creation fails.
     * Default to [Failed, Cancelled].
     * ROS will wait util some status in SuccessStatuses or FailureStatuses.
     * FailureStatuses has higher priority.
         */
        readonly failureStatuses?: Array<any | ros.IResolvable> | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResourceOptionsProperty`
 *
 * @param properties - the TypeScript properties of a `ResourceOptionsProperty`
 *
 * @returns the result of the validation.
 */
function RosExecution_ResourceOptionsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('cancelOnDelete', ros.validateBoolean)(properties.cancelOnDelete));
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 10,
            max: 43200,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('successStatuses', ros.listValidator(ros.validateAny))(properties.successStatuses));
    errors.collect(ros.propertyValidator('failureStatuses', ros.listValidator(ros.validateAny))(properties.failureStatuses));
    return errors.wrap('supplied properties not correct for "ResourceOptionsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution.ResourceOptions` resource
 *
 * @param properties - the TypeScript properties of a `ResourceOptionsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Execution.ResourceOptions` resource.
 */
// @ts-ignore TS6133
function rosExecutionResourceOptionsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosExecution_ResourceOptionsPropertyValidator(properties).assertSuccess();
    return {
      CancelOnDelete: ros.booleanToRosTemplate(properties.cancelOnDelete),
      Timeout: ros.numberToRosTemplate(properties.timeout),
      SuccessStatuses: ros.listMapper(ros.objectToRosTemplate)(properties.successStatuses),
      FailureStatuses: ros.listMapper(ros.objectToRosTemplate)(properties.failureStatuses),
    };
}

/**
 * Properties for defining a `ALIYUN::OOS::Parameter`
 */
export interface RosParameterProps {

    /**
     * @Property name: The name of the parameter. 
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_). 
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property type: The data type of the common parameter. 
     * Valid values: String and StringList.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property value: The value of the parameter. 
     * The value must be 1 to 4096 characters in length.
     */
    readonly value: string | ros.IResolvable;

    /**
     * @Property constraints: The constraints of the parameter. 
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    readonly constraints?: string | ros.IResolvable;

    /**
     * @Property description: The description of the parameter. 
     * The description must be 1 to 200 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosParameterProps`
 *
 * @param properties - the TypeScript properties of a `RosParameterProps`
 *
 * @returns the result of the validation.
 */
function RosParameterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["String","StringList"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('constraints', ros.validateString)(properties.constraints));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosParameterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Parameter` resource
 *
 * @param properties - the TypeScript properties of a `RosParameterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Parameter` resource.
 */
// @ts-ignore TS6133
function rosParameterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosParameterPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      Type: ros.stringToRosTemplate(properties.type),
      Value: ros.stringToRosTemplate(properties.value),
      Constraints: ros.stringToRosTemplate(properties.constraints),
      Description: ros.stringToRosTemplate(properties.description),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
    };
}

/**
 * A ROS template type:  `ALIYUN::OOS::Parameter`
 */
export class RosParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Parameter";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Name: The Name of the parameter.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * @Attribute Value: The Value of the parameter.
     */
    public readonly attrValue: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the parameter. 
     * The name must be 1 to 200 characters in length,and can contain letters, digits, hyphens (-), and underscores (_). 
     * It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property type: The data type of the common parameter. 
     * Valid values: String and StringList.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property value: The value of the parameter. 
     * The value must be 1 to 4096 characters in length.
     */
    public value: string | ros.IResolvable;

    /**
     * @Property constraints: The constraints of the parameter. 
     * By default, this parameter is null. Valid values:
     * AllowedValues: The value that is allowed for the parameter. It must be an array string.
     * AllowedPattern: The pattern that is allowed for the parameter. It must be a regular expression.
     * MinLength: The minimum length of the parameter.
     * MaxLength: The maximum length of the parameter.
     */
    public constraints: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the parameter. 
     * The description must be 1 to 200 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::OOS::Parameter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosParameterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosParameter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');
        this.attrValue = this.getAtt('Value');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.type = props.type;
        this.value = props.value;
        this.constraints = props.constraints;
        this.description = props.description;
        this.resourceGroupId = props.resourceGroupId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            type: this.type,
            value: this.value,
            constraints: this.constraints,
            description: this.description,
            resourceGroupId: this.resourceGroupId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosParameterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::OOS::PatchBaseline`
 */
export interface RosPatchBaselineProps {

    /**
     * @Property approvalRules: The rules of scanning and installing patches for the specified operating system.
     */
    readonly approvalRules: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property operationSystem: The type of the operating system.
     */
    readonly operationSystem: string | ros.IResolvable;

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    readonly patchBaselineName: string | ros.IResolvable;

    /**
     * @Property description: The description of the patch baseline.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPatchBaselineProps`
 *
 * @param properties - the TypeScript properties of a `RosPatchBaselineProps`
 *
 * @returns the result of the validation.
 */
function RosPatchBaselinePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('patchBaselineName', ros.requiredValidator)(properties.patchBaselineName));
    errors.collect(ros.propertyValidator('patchBaselineName', ros.validateString)(properties.patchBaselineName));
    errors.collect(ros.propertyValidator('operationSystem', ros.requiredValidator)(properties.operationSystem));
    errors.collect(ros.propertyValidator('operationSystem', ros.validateString)(properties.operationSystem));
    errors.collect(ros.propertyValidator('approvalRules', ros.requiredValidator)(properties.approvalRules));
    errors.collect(ros.propertyValidator('approvalRules', ros.hashValidator(ros.validateAny))(properties.approvalRules));
    return errors.wrap('supplied properties not correct for "RosPatchBaselineProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::PatchBaseline` resource
 *
 * @param properties - the TypeScript properties of a `RosPatchBaselineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::PatchBaseline` resource.
 */
// @ts-ignore TS6133
function rosPatchBaselinePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPatchBaselinePropsValidator(properties).assertSuccess();
    }
    return {
      ApprovalRules: ros.hashMapper(ros.objectToRosTemplate)(properties.approvalRules),
      OperationSystem: ros.stringToRosTemplate(properties.operationSystem),
      PatchBaselineName: ros.stringToRosTemplate(properties.patchBaselineName),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * A ROS template type:  `ALIYUN::OOS::PatchBaseline`
 */
export class RosPatchBaseline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::PatchBaseline";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ApprovalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public readonly attrApprovalRules: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the patch baseline was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreatedBy: The creator of the patch baseline.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute Description: The description of the patch baseline.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute IsDefault: Indicates whether the patch baseline is set as the default patch baseline.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * @Attribute OperationSystem: The type of the operating system.
     */
    public readonly attrOperationSystem: ros.IResolvable;

    /**
     * @Attribute PatchBaselineId: The ID of the patch baseline.
     */
    public readonly attrPatchBaselineId: ros.IResolvable;

    /**
     * @Attribute PatchBaselineName: The name of the patch baseline.
     */
    public readonly attrPatchBaselineName: ros.IResolvable;

    /**
     * @Attribute ShareType: The share type of the patch baseline.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute UpdatedBy: The user who last modified the patch baseline.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * @Attribute UpdatedDate: The time when the patch baseline was last modified.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property approvalRules: The rules of scanning and installing patches for the specified operating system.
     */
    public approvalRules: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property operationSystem: The type of the operating system.
     */
    public operationSystem: string | ros.IResolvable;

    /**
     * @Property patchBaselineName: The name of the patch baseline.
     */
    public patchBaselineName: string | ros.IResolvable;

    /**
     * @Property description: The description of the patch baseline.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::OOS::PatchBaseline`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPatchBaselineProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPatchBaseline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApprovalRules = this.getAtt('ApprovalRules');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrDescription = this.getAtt('Description');
        this.attrIsDefault = this.getAtt('IsDefault');
        this.attrOperationSystem = this.getAtt('OperationSystem');
        this.attrPatchBaselineId = this.getAtt('PatchBaselineId');
        this.attrPatchBaselineName = this.getAtt('PatchBaselineName');
        this.attrShareType = this.getAtt('ShareType');
        this.attrUpdatedBy = this.getAtt('UpdatedBy');
        this.attrUpdatedDate = this.getAtt('UpdatedDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.approvalRules = props.approvalRules;
        this.operationSystem = props.operationSystem;
        this.patchBaselineName = props.patchBaselineName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            approvalRules: this.approvalRules,
            operationSystem: this.operationSystem,
            patchBaselineName: this.patchBaselineName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPatchBaselinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::OOS::SecretParameter`
 */
export interface RosSecretParameterProps {

    /**
     * @Property secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    readonly secretParameterName: string | ros.IResolvable;

    /**
     * @Property value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
     */
    readonly value: string | ros.IResolvable;

    /**
     * @Property constraints: The constraints of the encryption parameter.
     */
    readonly constraints?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    readonly keyId?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of encryption parameter.
     */
    readonly tags?: RosSecretParameter.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosSecretParameterProps`
 *
 * @param properties - the TypeScript properties of a `RosSecretParameterProps`
 *
 * @returns the result of the validation.
 */
function RosSecretParameterPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('constraints', ros.hashValidator(ros.validateAny))(properties.constraints));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('secretParameterName', ros.requiredValidator)(properties.secretParameterName));
    errors.collect(ros.propertyValidator('secretParameterName', ros.validateString)(properties.secretParameterName));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('keyId', ros.validateString)(properties.keyId));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSecretParameter_TagsPropertyValidator))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosSecretParameterProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::SecretParameter` resource
 *
 * @param properties - the TypeScript properties of a `RosSecretParameterProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::SecretParameter` resource.
 */
// @ts-ignore TS6133
function rosSecretParameterPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSecretParameterPropsValidator(properties).assertSuccess();
    }
    return {
      SecretParameterName: ros.stringToRosTemplate(properties.secretParameterName),
      Value: ros.stringToRosTemplate(properties.value),
      Constraints: ros.hashMapper(ros.objectToRosTemplate)(properties.constraints),
      Description: ros.stringToRosTemplate(properties.description),
      KeyId: ros.stringToRosTemplate(properties.keyId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(rosSecretParameterTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::OOS::SecretParameter`
 */
export class RosSecretParameter extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::SecretParameter";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Constraints: The constraints of the encryption parameter.
     */
    public readonly attrConstraints: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the encryption parameter was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CreatedBy: The user who created the encryption parameter.
     */
    public readonly attrCreatedBy: ros.IResolvable;

    /**
     * @Attribute Description: The description of the encryption parameter.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute KeyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    public readonly attrKeyId: ros.IResolvable;

    /**
     * @Attribute ParameterVersion: The version number of the encryption parameter.
     */
    public readonly attrParameterVersion: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecretParameterId: The ID of the encryption parameter.
     */
    public readonly attrSecretParameterId: ros.IResolvable;

    /**
     * @Attribute SecretParameterName: The name of the encryption parameter.
     */
    public readonly attrSecretParameterName: ros.IResolvable;

    /**
     * @Attribute ShareType: The share type of the encryption parameter.
     */
    public readonly attrShareType: ros.IResolvable;

    /**
     * @Attribute Tags: Tags of encryption parameter.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * @Attribute Type: The data type of the encryption parameter.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute UpdatedBy: The user who updated the encryption parameter.
     */
    public readonly attrUpdatedBy: ros.IResolvable;

    /**
     * @Attribute UpdatedDate: The time when the encryption parameter was updated.
     */
    public readonly attrUpdatedDate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property secretParameterName: The name of the encryption parameter. The name must be 1 to 180 characters in length, and can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, ALICLOUD, or OOS.
     */
    public secretParameterName: string | ros.IResolvable;

    /**
     * @Property value: The value of the encryption parameter. The value must be 1 to 4096 characters in length.
     */
    public value: string | ros.IResolvable;

    /**
     * @Property constraints: The constraints of the encryption parameter.
     */
    public constraints: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the encryption parameter. The description must be 1 to 200 characters in length.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property keyId: The Customer Master Key (CMK) of Key Management Service (KMS) that is used to encrypt the parameter.
     */
    public keyId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of encryption parameter.
     */
    public tags: RosSecretParameter.TagsProperty[] | undefined;

    /**
     * Create a new `ALIYUN::OOS::SecretParameter`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSecretParameterProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSecretParameter.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConstraints = this.getAtt('Constraints');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCreatedBy = this.getAtt('CreatedBy');
        this.attrDescription = this.getAtt('Description');
        this.attrKeyId = this.getAtt('KeyId');
        this.attrParameterVersion = this.getAtt('ParameterVersion');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecretParameterId = this.getAtt('SecretParameterId');
        this.attrSecretParameterName = this.getAtt('SecretParameterName');
        this.attrShareType = this.getAtt('ShareType');
        this.attrTags = this.getAtt('Tags');
        this.attrType = this.getAtt('Type');
        this.attrUpdatedBy = this.getAtt('UpdatedBy');
        this.attrUpdatedDate = this.getAtt('UpdatedDate');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.secretParameterName = props.secretParameterName;
        this.value = props.value;
        this.constraints = props.constraints;
        this.description = props.description;
        this.keyId = props.keyId;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            secretParameterName: this.secretParameterName,
            value: this.value,
            constraints: this.constraints,
            description: this.description,
            keyId: this.keyId,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSecretParameterPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSecretParameter {
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
function RosSecretParameter_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::SecretParameter.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::SecretParameter.Tags` resource.
 */
// @ts-ignore TS6133
function rosSecretParameterTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSecretParameter_TagsPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::OOS::Template`
 */
export interface RosTemplateProps {

    /**
     * @Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    readonly content: string | ros.IResolvable;

    /**
     * @Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    readonly templateName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    readonly tags?: { [key: string]: (any) };
}

/**
 * Determine whether the given properties match those of a `RosTemplateProps`
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the result of the validation.
 */
function RosTemplatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    if(properties.content && (Array.isArray(properties.content) || (typeof properties.content) === 'string')) {
        errors.collect(ros.propertyValidator('content', ros.validateLength)({
            data: properties.content.length,
            min: undefined,
            max: 65536,
          }));
    }
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    if(properties.templateName && (Array.isArray(properties.templateName) || (typeof properties.templateName) === 'string')) {
        errors.collect(ros.propertyValidator('templateName', ros.validateLength)({
            data: properties.templateName.length,
            min: undefined,
            max: 200,
          }));
    }
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosTemplateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::OOS::Template` resource
 *
 * @param properties - the TypeScript properties of a `RosTemplateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::OOS::Template` resource.
 */
// @ts-ignore TS6133
function rosTemplatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosTemplatePropsValidator(properties).assertSuccess();
    }
    return {
      Content: ros.stringToRosTemplate(properties.content),
      TemplateName: ros.stringToRosTemplate(properties.templateName),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
    };
}

/**
 * A ROS template type:  `ALIYUN::OOS::Template`
 */
export class RosTemplate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::OOS::Template";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ExecutionPolicy: Execution Policy
     */
    public readonly attrExecutionPolicy: ros.IResolvable;

    /**
     * @Attribute TemplateId: Template ID
     */
    public readonly attrTemplateId: ros.IResolvable;

    /**
     * @Attribute TemplateName: Template Name
     */
    public readonly attrTemplateName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property content: The content of the template. The template must be in the JSON or YAML format. Maximum size: 64 KB.
     */
    public content: string | ros.IResolvable;

    /**
     * @Property templateName: The name of the template. The template name can be up to 200 characters in length. The name can contain letters, digits, hyphens (-), and underscores (_). It cannot start with ALIYUN, ACS, ALIBABA, or ALICLOUD.
     */
    public templateName: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tag value and the key mapping, the label of the key number can be up to 20.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * Create a new `ALIYUN::OOS::Template`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosTemplateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosTemplate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrExecutionPolicy = this.getAtt('ExecutionPolicy');
        this.attrTemplateId = this.getAtt('TemplateId');
        this.attrTemplateName = this.getAtt('TemplateName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.content = props.content;
        this.templateName = props.templateName;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            content: this.content,
            templateName: this.templateName,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosTemplatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
