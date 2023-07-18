// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `DATASOURCE::SLS::Logstores`
 */
export interface RosLogstoresProps {

    /**
     * @Property project: Project name.
     */
    readonly project: string | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name.
     */
    readonly logstoreName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosLogstoresProps`
 *
 * @param properties - the TypeScript properties of a `RosLogstoresProps`
 *
 * @returns the result of the validation.
 */
function RosLogstoresPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    return errors.wrap('supplied properties not correct for "RosLogstoresProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLS::Logstores` resource
 *
 * @param properties - the TypeScript properties of a `RosLogstoresProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLS::Logstores` resource.
 */
// @ts-ignore TS6133
function rosLogstoresPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosLogstoresPropsValidator(properties).assertSuccess();
    }
    return {
      Project: ros.stringToRosTemplate(properties.project),
      LogstoreName: ros.stringToRosTemplate(properties.logstoreName),
    };
}

/**
 * A ROS template type:  `DATASOURCE::SLS::Logstores`
 */
export class RosLogstores extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Logstores";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute Logstores: The list of logstores.
     */
    public readonly attrLogstores: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property project: Project name.
     */
    public project: string | ros.IResolvable;

    /**
     * @Property logstoreName: Logstore name.
     */
    public logstoreName: string | ros.IResolvable | undefined;

    /**
     * Create a new `DATASOURCE::SLS::Logstores`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosLogstoresProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogstores.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstores = this.getAtt('Logstores');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.project = props.project;
        this.logstoreName = props.logstoreName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            project: this.project,
            logstoreName: this.logstoreName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogstoresPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `DATASOURCE::SLS::Projects`
 */
export interface RosProjectsProps {
}

/**
 * Determine whether the given properties match those of a `RosProjectsProps`
 *
 * @param properties - the TypeScript properties of a `RosProjectsProps`
 *
 * @returns the result of the validation.
 */
function RosProjectsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    return errors.wrap('supplied properties not correct for "RosProjectsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLS::Projects` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLS::Projects` resource.
 */
// @ts-ignore TS6133
function rosProjectsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectsPropsValidator(properties).assertSuccess();
    }
    return {
    };
}

/**
 * A ROS template type:  `DATASOURCE::SLS::Projects`
 */
export class RosProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Projects";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ProjectNames: The list of project names.
     */
    public readonly attrProjectNames: ros.IResolvable;

    /**
     * @Attribute Projects: The list of projects.
     */
    public readonly attrProjects: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * Create a new `DATASOURCE::SLS::Projects`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProjects.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectNames = this.getAtt('ProjectNames');
        this.attrProjects = this.getAtt('Projects');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
