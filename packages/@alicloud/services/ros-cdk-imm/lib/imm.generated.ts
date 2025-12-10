// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosProject`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export interface RosProjectProps {

    /**
     * @Property project: The name of project.
     */
    readonly project: string | ros.IResolvable;

    /**
     * @Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
     */
    readonly serviceRole?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('project', ros.requiredValidator)(properties.project));
    errors.collect(ros.propertyValidator('project', ros.validateString)(properties.project));
    errors.collect(ros.propertyValidator('serviceRole', ros.validateString)(properties.serviceRole));
    return errors.wrap('supplied properties not correct for "RosProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IMM::Project` resource
 *
 * @param properties - the TypeScript properties of a `RosProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IMM::Project` resource.
 */
// @ts-ignore TS6133
function rosProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProjectPropsValidator(properties).assertSuccess();
    }
    return {
      'Project': ros.stringToRosTemplate(properties.project),
      'ServiceRole': ros.stringToRosTemplate(properties.serviceRole),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IMM::Project`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IMM::Project";

    /**
     * @Attribute Project: The name of project.
     */
    public readonly attrProject: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property project: The name of project.
     */
    public project: string | ros.IResolvable;

    /**
     * @Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
     */
    public serviceRole: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProject = this.getAtt('Project');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.project = props.project;
        this.serviceRole = props.serviceRole;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            project: this.project,
            serviceRole: this.serviceRole,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosProject2`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
export interface RosProject2Props {

    /**
     * @Property projectName: The name of project.
     */
    readonly projectName: string | ros.IResolvable;

    /**
     * @Property datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
     */
    readonly datasetMaxBindCount?: number | ros.IResolvable;

    /**
     * @Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
     */
    readonly datasetMaxEntityCount?: number | ros.IResolvable;

    /**
     * @Property datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
     */
    readonly datasetMaxFileCount?: number | ros.IResolvable;

    /**
     * @Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
     */
    readonly datasetMaxRelationCount?: number | ros.IResolvable;

    /**
     * @Property datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
     */
    readonly datasetMaxTotalFileSize?: number | ros.IResolvable;

    /**
     * @Property description: The description of project.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
     */
    readonly projectMaxDatasetCount?: number | ros.IResolvable;

    /**
     * @Property serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
     */
    readonly serviceRole?: string | ros.IResolvable;

    /**
     * @Property templateId: The ID of the workflow template. You can leave this parameter empty.
     */
    readonly templateId?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosProject2Props`
 *
 * @param properties - the TypeScript properties of a `RosProject2Props`
 *
 * @returns the result of the validation.
 */
function RosProject2PropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.description && (Array.isArray(properties.description) || (typeof properties.description) === 'string')) {
        errors.collect(ros.propertyValidator('description', ros.validateLength)({
            data: properties.description.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('serviceRole', ros.validateString)(properties.serviceRole));
    errors.collect(ros.propertyValidator('projectName', ros.requiredValidator)(properties.projectName));
    errors.collect(ros.propertyValidator('projectName', ros.validateString)(properties.projectName));
    if(properties.datasetMaxBindCount && (typeof properties.datasetMaxBindCount) !== 'object') {
        errors.collect(ros.propertyValidator('datasetMaxBindCount', ros.validateRange)({
            data: properties.datasetMaxBindCount,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('datasetMaxBindCount', ros.validateNumber)(properties.datasetMaxBindCount));
    if(properties.datasetMaxEntityCount && (typeof properties.datasetMaxEntityCount) !== 'object') {
        errors.collect(ros.propertyValidator('datasetMaxEntityCount', ros.validateRange)({
            data: properties.datasetMaxEntityCount,
            min: 1,
            max: 10000000000,
          }));
    }
    errors.collect(ros.propertyValidator('datasetMaxEntityCount', ros.validateNumber)(properties.datasetMaxEntityCount));
    if(properties.projectMaxDatasetCount && (typeof properties.projectMaxDatasetCount) !== 'object') {
        errors.collect(ros.propertyValidator('projectMaxDatasetCount', ros.validateRange)({
            data: properties.projectMaxDatasetCount,
            min: 1,
            max: 1000000000,
          }));
    }
    errors.collect(ros.propertyValidator('projectMaxDatasetCount', ros.validateNumber)(properties.projectMaxDatasetCount));
    if(properties.datasetMaxTotalFileSize && (typeof properties.datasetMaxTotalFileSize) !== 'object') {
        errors.collect(ros.propertyValidator('datasetMaxTotalFileSize', ros.validateRange)({
            data: properties.datasetMaxTotalFileSize,
            min: 1,
            max: 90000000000000000,
          }));
    }
    errors.collect(ros.propertyValidator('datasetMaxTotalFileSize', ros.validateNumber)(properties.datasetMaxTotalFileSize));
    if(properties.datasetMaxRelationCount && (typeof properties.datasetMaxRelationCount) !== 'object') {
        errors.collect(ros.propertyValidator('datasetMaxRelationCount', ros.validateRange)({
            data: properties.datasetMaxRelationCount,
            min: 1,
            max: 100000000000,
          }));
    }
    errors.collect(ros.propertyValidator('datasetMaxRelationCount', ros.validateNumber)(properties.datasetMaxRelationCount));
    if(properties.datasetMaxFileCount && (typeof properties.datasetMaxFileCount) !== 'object') {
        errors.collect(ros.propertyValidator('datasetMaxFileCount', ros.validateRange)({
            data: properties.datasetMaxFileCount,
            min: 1,
            max: 100000000,
          }));
    }
    errors.collect(ros.propertyValidator('datasetMaxFileCount', ros.validateNumber)(properties.datasetMaxFileCount));
    errors.collect(ros.propertyValidator('templateId', ros.validateString)(properties.templateId));
    return errors.wrap('supplied properties not correct for "RosProject2Props"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::IMM::Project2` resource
 *
 * @param properties - the TypeScript properties of a `RosProject2Props`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::IMM::Project2` resource.
 */
// @ts-ignore TS6133
function rosProject2PropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosProject2PropsValidator(properties).assertSuccess();
    }
    return {
      'ProjectName': ros.stringToRosTemplate(properties.projectName),
      'DatasetMaxBindCount': ros.numberToRosTemplate(properties.datasetMaxBindCount),
      'DatasetMaxEntityCount': ros.numberToRosTemplate(properties.datasetMaxEntityCount),
      'DatasetMaxFileCount': ros.numberToRosTemplate(properties.datasetMaxFileCount),
      'DatasetMaxRelationCount': ros.numberToRosTemplate(properties.datasetMaxRelationCount),
      'DatasetMaxTotalFileSize': ros.numberToRosTemplate(properties.datasetMaxTotalFileSize),
      'Description': ros.stringToRosTemplate(properties.description),
      'ProjectMaxDatasetCount': ros.numberToRosTemplate(properties.projectMaxDatasetCount),
      'ServiceRole': ros.stringToRosTemplate(properties.serviceRole),
      'TemplateId': ros.stringToRosTemplate(properties.templateId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::IMM::Project2`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Project2` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-imm-project2
 */
export class RosProject2 extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IMM::Project2";

    /**
     * @Attribute ProjectName: The name of project.
     */
    public readonly attrProjectName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property projectName: The name of project.
     */
    public projectName: string | ros.IResolvable;

    /**
     * @Property datasetMaxBindCount: The maximum number of bindings for each dataset. Valid values: 1 to 10. Default value: 10.
     */
    public datasetMaxBindCount: number | ros.IResolvable | undefined;

    /**
     * @Property datasetMaxEntityCount: The maximum number of metadata entities in each dataset. Default value: 10000000000.
     */
    public datasetMaxEntityCount: number | ros.IResolvable | undefined;

    /**
     * @Property datasetMaxFileCount: The maximum number of files in each dataset. Valid values: 1 to 100000000. Default value: 100000000.
     */
    public datasetMaxFileCount: number | ros.IResolvable | undefined;

    /**
     * @Property datasetMaxRelationCount: The maximum number of metadata entities in each dataset. Default value: 100000000000.
     */
    public datasetMaxRelationCount: number | ros.IResolvable | undefined;

    /**
     * @Property datasetMaxTotalFileSize: The maximum size of files in each dataset. If the maximum size is exceeded, no indexes can be added. Unit: bytes. Default value: 90000000000000000.
     */
    public datasetMaxTotalFileSize: number | ros.IResolvable | undefined;

    /**
     * @Property description: The description of project.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property projectMaxDatasetCount: The maximum number of datasets in the project. Valid values: 1 to 1000000000. Default value: 1000000000.
     */
    public projectMaxDatasetCount: number | ros.IResolvable | undefined;

    /**
     * @Property serviceRole: 	The name of the Resource Access Management (RAM) role. You must attach the RAM role to IMM to allow IMM to access other cloud resources, such as Object Storage Service (OSS). Default value: AliyunIMMDefaultRole.
     */
    public serviceRole: string | ros.IResolvable | undefined;

    /**
     * @Property templateId: The ID of the workflow template. You can leave this parameter empty.
     */
    public templateId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosProject2Props, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosProject2.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrProjectName = this.getAtt('ProjectName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.projectName = props.projectName;
        this.datasetMaxBindCount = props.datasetMaxBindCount;
        this.datasetMaxEntityCount = props.datasetMaxEntityCount;
        this.datasetMaxFileCount = props.datasetMaxFileCount;
        this.datasetMaxRelationCount = props.datasetMaxRelationCount;
        this.datasetMaxTotalFileSize = props.datasetMaxTotalFileSize;
        this.description = props.description;
        this.projectMaxDatasetCount = props.projectMaxDatasetCount;
        this.serviceRole = props.serviceRole;
        this.templateId = props.templateId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            projectName: this.projectName,
            datasetMaxBindCount: this.datasetMaxBindCount,
            datasetMaxEntityCount: this.datasetMaxEntityCount,
            datasetMaxFileCount: this.datasetMaxFileCount,
            datasetMaxRelationCount: this.datasetMaxRelationCount,
            datasetMaxTotalFileSize: this.datasetMaxTotalFileSize,
            description: this.description,
            projectMaxDatasetCount: this.projectMaxDatasetCount,
            serviceRole: this.serviceRole,
            templateId: this.templateId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosProject2PropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
