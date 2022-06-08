// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::IMM::Project`
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
      Project: ros.stringToRosTemplate(properties.project),
      ServiceRole: ros.stringToRosTemplate(properties.serviceRole),
    };
}

/**
 * A ROS template type:  `ALIYUN::IMM::Project`
 */
export class RosProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::IMM::Project";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

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
     * Create a new `ALIYUN::IMM::Project`.
     *
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
