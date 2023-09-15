// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::DEVOPS::Pipeline`
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
 * A ROS template type:  `ALIYUN::DEVOPS::Pipeline`
 */
export class RosPipeline extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::Pipeline";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::DEVOPS::Pipeline`.
     *
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
 * Properties for defining a `ALIYUN::DEVOPS::VariableGroup`
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
 * A ROS template type:  `ALIYUN::DEVOPS::VariableGroup`
 */
export class RosVariableGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::DEVOPS::VariableGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::DEVOPS::VariableGroup`.
     *
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
