// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosPipeline`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
export interface RosPipelineProps {

    /**
     * @Property content: Pipeline description in YAML format.
     */
    readonly content: string | ros.IResolvable;

    /**
     * @Property name: Pipeline name.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPipelineProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the result of the validation.
 */
function RosPipelinePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('content', ros.requiredValidator)(properties.content));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosPipelineProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::Pipeline` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::Pipeline` resource.
 */
// @ts-ignore TS6133
function rosPipelinePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPipelinePropsValidator(properties).assertSuccess();
    }
    return {
      Content: ros.stringToRosTemplate(properties.content),
      Name: ros.stringToRosTemplate(properties.name),
      OrganizationId: ros.stringToRosTemplate(properties.organizationId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::Pipeline`ALIYUN::DFS::AccessGroup is used to create a permission group.
 * @Note This class does not contain additional functions, so it is recommended to use the `Pipeline` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
 */
export class RosPipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::Pipeline";

    /**
     * @Attribute PipelineId: Pipeline id.
     */
    public readonly attrPipelineId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property content: Pipeline description in YAML format.
     */
    public content: string | ros.IResolvable;

    /**
     * @Property name: Pipeline name.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    public organizationId: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPipeline.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPipelineId = this.getAtt('PipelineId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.content = props.content;
        this.name = props.name;
        this.organizationId = props.organizationId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            content: this.content,
            name: this.name,
            organizationId: this.organizationId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPipelinePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPipelineRelations`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
 */
export interface RosPipelineRelationsProps {

    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;

    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    readonly pipelineId: number | ros.IResolvable;

    /**
     * @Property relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
     */
    readonly relObjectIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property relObjectType: Associated resource type. Valid values:
     * - VARIABLE_GROUP
     * - OOS_APP_ID
     * For now, only VARIABLE GROUP is supported.
     */
    readonly relObjectType: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPipelineRelationsProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineRelationsProps`
 *
 * @returns the result of the validation.
 */
function RosPipelineRelationsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('relObjectType', ros.requiredValidator)(properties.relObjectType));
    errors.collect(ros.propertyValidator('relObjectType', ros.validateString)(properties.relObjectType));
    errors.collect(ros.propertyValidator('relObjectIds', ros.requiredValidator)(properties.relObjectIds));
    errors.collect(ros.propertyValidator('relObjectIds', ros.listValidator(ros.validateNumber))(properties.relObjectIds));
    errors.collect(ros.propertyValidator('pipelineId', ros.requiredValidator)(properties.pipelineId));
    errors.collect(ros.propertyValidator('pipelineId', ros.validateNumber)(properties.pipelineId));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    return errors.wrap('supplied properties not correct for "RosPipelineRelationsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRelations` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineRelationsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRelations` resource.
 */
// @ts-ignore TS6133
function rosPipelineRelationsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPipelineRelationsPropsValidator(properties).assertSuccess();
    }
    return {
      OrganizationId: ros.stringToRosTemplate(properties.organizationId),
      PipelineId: ros.numberToRosTemplate(properties.pipelineId),
      RelObjectIds: ros.listMapper(ros.numberToRosTemplate)(properties.relObjectIds),
      RelObjectType: ros.stringToRosTemplate(properties.relObjectType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::PipelineRelations`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PipelineRelations` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
 */
export class RosPipelineRelations extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::PipelineRelations";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    public organizationId: string | ros.IResolvable;

    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    public pipelineId: number | ros.IResolvable;

    /**
     * @Property relObjectIds: Ids of the associated resource. For now, only variable group ids are supported.
     */
    public relObjectIds: Array<number | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property relObjectType: Associated resource type. Valid values:
     * - VARIABLE_GROUP
     * - OOS_APP_ID
     * For now, only VARIABLE GROUP is supported.
     */
    public relObjectType: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineRelationsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPipelineRelations.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.organizationId = props.organizationId;
        this.pipelineId = props.pipelineId;
        this.relObjectIds = props.relObjectIds;
        this.relObjectType = props.relObjectType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            organizationId: this.organizationId,
            pipelineId: this.pipelineId,
            relObjectIds: this.relObjectIds,
            relObjectType: this.relObjectType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPipelineRelationsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPipelineRun`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
 */
export interface RosPipelineRunProps {

    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;

    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    readonly pipelineId: number | ros.IResolvable;

    /**
     * @Property params: Pipeline operating parameters. Keys:
     * - **branchModeBranchs**: Branch mode runs branches.
     * - **envs**: Running variables.
     * - **runningBranchs**: Running branches whose key is the warehouse address.
     * - **runningTags**: Running tags whose key is the warehouse address.
     */
    readonly params?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
     * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
     */
    readonly sync?: boolean | ros.IResolvable;

    /**
     * @Property timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
     */
    readonly timeout?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPipelineRunProps`
 *
 * @param properties - the TypeScript properties of a `RosPipelineRunProps`
 *
 * @returns the result of the validation.
 */
function RosPipelineRunPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.timeout && (typeof properties.timeout) !== 'object') {
        errors.collect(ros.propertyValidator('timeout', ros.validateRange)({
            data: properties.timeout,
            min: 1,
            max: 120,
          }));
    }
    errors.collect(ros.propertyValidator('timeout', ros.validateNumber)(properties.timeout));
    errors.collect(ros.propertyValidator('pipelineId', ros.requiredValidator)(properties.pipelineId));
    errors.collect(ros.propertyValidator('pipelineId', ros.validateNumber)(properties.pipelineId));
    errors.collect(ros.propertyValidator('params', ros.hashValidator(ros.validateAny))(properties.params));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    errors.collect(ros.propertyValidator('sync', ros.validateBoolean)(properties.sync));
    return errors.wrap('supplied properties not correct for "RosPipelineRunProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRun` resource
 *
 * @param properties - the TypeScript properties of a `RosPipelineRunProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::PipelineRun` resource.
 */
// @ts-ignore TS6133
function rosPipelineRunPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPipelineRunPropsValidator(properties).assertSuccess();
    }
    return {
      OrganizationId: ros.stringToRosTemplate(properties.organizationId),
      PipelineId: ros.numberToRosTemplate(properties.pipelineId),
      Params: ros.hashMapper(ros.objectToRosTemplate)(properties.params),
      Sync: ros.booleanToRosTemplate(properties.sync),
      Timeout: ros.numberToRosTemplate(properties.timeout),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::PipelineRun`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PipelineRun` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
 */
export class RosPipelineRun extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::PipelineRun";

    /**
     * @Attribute PipelineRunId: Pipeline run id.
     */
    public readonly attrPipelineRunId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    public organizationId: string | ros.IResolvable;

    /**
     * @Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
     */
    public pipelineId: number | ros.IResolvable;

    /**
     * @Property params: Pipeline operating parameters. Keys:
     * - **branchModeBranchs**: Branch mode runs branches.
     * - **envs**: Running variables.
     * - **runningBranchs**: Running branches whose key is the warehouse address.
     * - **runningTags**: Running tags whose key is the warehouse address.
     */
    public params: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
     * Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
     */
    public sync: boolean | ros.IResolvable | undefined;

    /**
     * @Property timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
     */
    public timeout: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPipelineRunProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPipelineRun.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrPipelineRunId = this.getAtt('PipelineRunId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.organizationId = props.organizationId;
        this.pipelineId = props.pipelineId;
        this.params = props.params;
        this.sync = props.sync;
        this.timeout = props.timeout;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            organizationId: this.organizationId,
            pipelineId: this.pipelineId,
            params: this.params,
            sync: this.sync,
            timeout: this.timeout,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPipelineRunPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosVariableGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export interface RosVariableGroupProps {

    /**
     * @Property name: The name of variable group.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    readonly organizationId: string | ros.IResolvable;

    /**
     * @Property variables: Variables information.
     */
    readonly variables: Array<RosVariableGroup.VariablesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of variable group.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosVariableGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosVariableGroupProps`
 *
 * @returns the result of the validation.
 */
function RosVariableGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('variables', ros.requiredValidator)(properties.variables));
    errors.collect(ros.propertyValidator('variables', ros.listValidator(RosVariableGroup_VariablesPropertyValidator))(properties.variables));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('organizationId', ros.requiredValidator)(properties.organizationId));
    errors.collect(ros.propertyValidator('organizationId', ros.validateString)(properties.organizationId));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosVariableGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosVariableGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup` resource.
 */
// @ts-ignore TS6133
function rosVariableGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosVariableGroupPropsValidator(properties).assertSuccess();
    }
    return {
      Name: ros.stringToRosTemplate(properties.name),
      OrganizationId: ros.stringToRosTemplate(properties.organizationId),
      Variables: ros.listMapper(rosVariableGroupVariablesPropertyToRosTemplate)(properties.variables),
      Description: ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::DEVOPS::VariableGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `VariableGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-variablegroup
 */
export class RosVariableGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::VariableGroup";

    /**
     * @Attribute VariableGroupId: Variable group id.
     */
    public readonly attrVariableGroupId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of variable group.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
     */
    public organizationId: string | ros.IResolvable;

    /**
     * @Property variables: Variables information.
     */
    public variables: Array<RosVariableGroup.VariablesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property description: The description of variable group.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosVariableGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosVariableGroup.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrVariableGroupId = this.getAtt('VariableGroupId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.organizationId = props.organizationId;
        this.variables = props.variables;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            organizationId: this.organizationId,
            variables: this.variables,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosVariableGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosVariableGroup {
    /**
     * @stability external
     */
    export interface VariablesProperty {
        /**
         * @Property isEncrypted: Encryption or not.
         */
        readonly isEncrypted: boolean | ros.IResolvable;
        /**
         * @Property name: Name of the variable.
         */
        readonly name: string | ros.IResolvable;
        /**
         * @Property value: Value of the variable.
         */
        readonly value: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `VariablesProperty`
 *
 * @param properties - the TypeScript properties of a `VariablesProperty`
 *
 * @returns the result of the validation.
 */
function RosVariableGroup_VariablesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('isEncrypted', ros.requiredValidator)(properties.isEncrypted));
    errors.collect(ros.propertyValidator('isEncrypted', ros.validateBoolean)(properties.isEncrypted));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    return errors.wrap('supplied properties not correct for "VariablesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup.Variables` resource
 *
 * @param properties - the TypeScript properties of a `VariablesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::DEVOPS::VariableGroup.Variables` resource.
 */
// @ts-ignore TS6133
function rosVariableGroupVariablesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosVariableGroup_VariablesPropertyValidator(properties).assertSuccess();
    return {
      isEncrypted: ros.booleanToRosTemplate(properties.isEncrypted),
      name: ros.stringToRosTemplate(properties.name),
      value: ros.stringToRosTemplate(properties.value),
    };
}
