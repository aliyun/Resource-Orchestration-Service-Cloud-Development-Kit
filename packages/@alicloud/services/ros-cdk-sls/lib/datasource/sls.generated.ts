// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosLogstores`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
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

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.project && (Array.isArray(properties.project) || (typeof properties.project) === 'string')) {
        errors.collect(ros.propertyValidator('project', ros.validateLength)({
            data: properties.project.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.project && (typeof properties.project) !== 'object') {
        errors.collect(ros.propertyValidator('project', ros.validateAllowedPattern)({
          data: properties.project,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    if(properties.logstoreName && (Array.isArray(properties.logstoreName) || (typeof properties.logstoreName) === 'string')) {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateLength)({
            data: properties.logstoreName.length,
            min: 3,
            max: 63,
          }));
    }
    if(properties.logstoreName && (typeof properties.logstoreName) !== 'object') {
        errors.collect(ros.propertyValidator('logstoreName', ros.validateAllowedPattern)({
          data: properties.logstoreName,
          reg: /^[a-zA-Z0-9_-]+$/
        }));
    }
    errors.collect(ros.propertyValidator('logstoreName', ros.validateString)(properties.logstoreName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'Project': ros.stringToRosTemplate(properties.project),
      'LogstoreName': ros.stringToRosTemplate(properties.logstoreName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Logstores`, which is used to query Logstores.
 * @Note This class does not contain additional functions, so it is recommended to use the `Logstores` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-logstores
 */
export class RosLogstores extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Logstores";

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
    constructor(scope: ros.Construct, id: string, props: RosLogstoresProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosLogstores.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrLogstores = this.getAtt('Logstores');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.project = props.project;
        this.logstoreName = props.logstoreName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            project: this.project,
            logstoreName: this.logstoreName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosLogstoresPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
 */
export interface RosProjectProps {

    /**
     * @Property projectName: The name of the project.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::SLS::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::SLS::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Project";

    /**
     * @Attribute CreateTime: The time at which the project was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DataRedundancyType: Data redundancy type.
     */
    public readonly attrDataRedundancyType: ros.IResolvable;

    /**
     * @Attribute Description: The description of the project.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute LastModifyTime: The time at which the project was last modified.
     */
    public readonly attrLastModifyTime: ros.IResolvable;

    /**
     * @Attribute Owner: The ID of the Alibaba Cloud account that is used to create the project.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * @Attribute ProjectName: The name of the project.
     */
    public readonly attrProjectName: ros.IResolvable;

    /**
     * @Attribute Quota: Project quota.
     */
    public readonly attrQuota: ros.IResolvable;

    /**
     * @Attribute Region: The region to which the project belongs.
     */
    public readonly attrRegion: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the project belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute Status: The status of the project.
     */
    public readonly attrStatus: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property projectName: The name of the project.
     */
    public projectName: string | ros.IResolvable;

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
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDataRedundancyType = this.getAtt('DataRedundancyType');
        this.attrDescription = this.getAtt('Description');
        this.attrLastModifyTime = this.getAtt('LastModifyTime');
        this.attrOwner = this.getAtt('Owner');
        this.attrProjectName = this.getAtt('ProjectName');
        this.attrQuota = this.getAtt('Quota');
        this.attrRegion = this.getAtt('Region');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrStatus = this.getAtt('Status');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectName = props.projectName;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            projectName: this.projectName,
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export interface RosProjectsProps {

    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
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
    if(properties.refreshOptions && (typeof properties.refreshOptions) !== 'object') {
        errors.collect(ros.propertyValidator('refreshOptions', ros.validateAllowedValues)({
          data: properties.refreshOptions,
          allowedValues: ["Always","Never"],
        }));
    }
    errors.collect(ros.propertyValidator('refreshOptions', ros.validateString)(properties.refreshOptions));
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
      'RefreshOptions': ros.stringToRosTemplate(properties.refreshOptions),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::SLS::Projects`, which is used to query Log Service projects.
 * @Note This class does not contain additional functions, so it is recommended to use the `Projects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-projects
 */
export class RosProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::SLS::Projects";

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
    constructor(scope: ros.Construct, id: string, props: RosProjectsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProjects.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectNames = this.getAtt('ProjectNames');
        this.attrProjects = this.getAtt('Projects');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.refreshOptions = props.refreshOptions;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            refreshOptions: this.refreshOptions,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
