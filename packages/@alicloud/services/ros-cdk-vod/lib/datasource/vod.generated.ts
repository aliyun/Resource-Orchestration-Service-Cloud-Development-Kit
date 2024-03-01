// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosEditingProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export interface RosEditingProjectsProps {

    /**
     * @Property title: The title of the online editing project.
     */
    readonly title?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEditingProjectsProps`
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectsProps`
 *
 * @returns the result of the validation.
 */
function RosEditingProjectsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    return errors.wrap('supplied properties not correct for "RosEditingProjectsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::VOD::EditingProjects` resource
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::VOD::EditingProjects` resource.
 */
// @ts-ignore TS6133
function rosEditingProjectsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEditingProjectsPropsValidator(properties).assertSuccess();
    }
    return {
      Title: ros.stringToRosTemplate(properties.title),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::EditingProjects`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProjects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export class RosEditingProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProjects";

    /**
     * @Attribute EditingProjectIds: The list of editing project IDs.
     */
    public readonly attrEditingProjectIds: ros.IResolvable;

    /**
     * @Attribute EditingProjects: The list of editing projects.
     */
    public readonly attrEditingProjects: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property title: The title of the online editing project.
     */
    public title: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEditingProjects.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEditingProjectIds = this.getAtt('EditingProjectIds');
        this.attrEditingProjects = this.getAtt('EditingProjects');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.title = props.title;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            title: this.title,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEditingProjectsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
