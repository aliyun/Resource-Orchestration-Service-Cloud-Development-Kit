// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
 */
export interface RosProjectProps {

    /**
     * @Property name: The name of the project. It needs to be unique and cannot be changed.
     */
    readonly name: string | ros.IResolvable;

    /**
     * @Property description: The description of the project.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property labels: The labels for the project
     */
    readonly labels?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;

    /**
     * @Property spec: The project configuration.
     */
    readonly spec?: RosProject.SpecProperty | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('labels', ros.hashValidator(ros.validateAny))(properties.labels));
    errors.collect(ros.propertyValidator('spec', RosProject_SpecPropertyValidator)(properties.spec));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    if(properties.name && (typeof properties.name) !== 'object') {
        errors.collect(ros.propertyValidator('name', ros.validateAllowedPattern)({
          data: properties.name,
          reg: /^[a-zA-Z][-a-zA-Z0-9_]{0,62}[a-zA-Z0-9]$/
        }));
    }
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ServerlessDev::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ServerlessDev::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'Name': ros.stringToRosTemplate(properties.name),
      'Description': ros.stringToRosTemplate(properties.description),
      'Labels': ros.hashMapper(ros.objectToRosTemplate)(properties.labels),
      'Spec': rosProjectSpecPropertyToRosTemplate(properties.spec),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ServerlessDev::Project`, which is used to create a project. If a template is specified for the project, the project is automatically deployed.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-serverlessdev-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ServerlessDev::Project";

    /**
     * @Attribute Name: The name of the project.
     */
    public readonly attrName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property name: The name of the project. It needs to be unique and cannot be changed.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property description: The description of the project.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property labels: The labels for the project
     */
    public labels: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable | undefined;

    /**
     * @Property spec: The project configuration.
     */
    public spec: RosProject.SpecProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrName = this.getAtt('Name');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.name = props.name;
        this.description = props.description;
        this.labels = props.labels;
        this.spec = props.spec;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            name: this.name,
            description: this.description,
            labels: this.labels,
            spec: this.spec,
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
    export interface SpecProperty {
        /**
         * @Property templateConfig: Template configuration for the project. If it is not empty, the default environment will be automatically created and automatic deployment will be completed.
         */
        readonly templateConfig?: RosProject.TemplateConfigProperty | ros.IResolvable;
        /**
         * @Property roleArn: The Arn of the role that the development platform needs to play when deploying your project. The default is acs:ram::${your_main_account_ID}:role\/aliyundevsdefaultrole
         */
        readonly roleArn?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SpecProperty`
 *
 * @param properties - the TypeScript properties of a `SpecProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_SpecPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('templateConfig', RosProject_TemplateConfigPropertyValidator)(properties.templateConfig));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    return errors.wrap('supplied properties not correct for "SpecProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ServerlessDev::Project.Spec` resource
 *
 * @param properties - the TypeScript properties of a `SpecProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ServerlessDev::Project.Spec` resource.
 */
// @ts-ignore TS6133
function rosProjectSpecPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_SpecPropertyValidator(properties).assertSuccess();
    return {
      'TemplateConfig': rosProjectTemplateConfigPropertyToRosTemplate(properties.templateConfig),
      'RoleArn': ros.stringToRosTemplate(properties.roleArn),
    };
}

export namespace RosProject {
    /**
     * @stability external
     */
    export interface TemplateConfigProperty {
        /**
         * @Property parameters: The parameters for the template.
         */
        readonly parameters?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
        /**
         * @Property templateName: The name of the template.
         */
        readonly templateName: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `TemplateConfigProperty`
 *
 * @param properties - the TypeScript properties of a `TemplateConfigProperty`
 *
 * @returns the result of the validation.
 */
function RosProject_TemplateConfigPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.hashValidator(ros.validateAny))(properties.parameters));
    errors.collect(ros.propertyValidator('templateName', ros.requiredValidator)(properties.templateName));
    errors.collect(ros.propertyValidator('templateName', ros.validateString)(properties.templateName));
    return errors.wrap('supplied properties not correct for "TemplateConfigProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ServerlessDev::Project.TemplateConfig` resource
 *
 * @param properties - the TypeScript properties of a `TemplateConfigProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ServerlessDev::Project.TemplateConfig` resource.
 */
// @ts-ignore TS6133
function rosProjectTemplateConfigPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosProject_TemplateConfigPropertyValidator(properties).assertSuccess();
    return {
      'Parameters': ros.hashMapper(ros.objectToRosTemplate)(properties.parameters),
      'TemplateName': ros.stringToRosTemplate(properties.templateName),
    };
}
