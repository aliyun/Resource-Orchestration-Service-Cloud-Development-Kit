// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::VOD::EditingProject`
 */
export interface RosEditingProjectProps {

    /**
     * @Property title: The title of the online editing project.
     */
    readonly title: string | ros.IResolvable;

    /**
     * @Property editingProjectName: The name of the online editing project.
     */
    readonly editingProjectName?: string | ros.IResolvable;

    /**
     * @Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    readonly timeline?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEditingProjectProps`
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectProps`
 *
 * @returns the result of the validation.
 */
function RosEditingProjectPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('editingProjectName', ros.validateString)(properties.editingProjectName));
    errors.collect(ros.propertyValidator('timeline', ros.validateString)(properties.timeline));
    errors.collect(ros.propertyValidator('title', ros.requiredValidator)(properties.title));
    errors.collect(ros.propertyValidator('title', ros.validateString)(properties.title));
    return errors.wrap('supplied properties not correct for "RosEditingProjectProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::VOD::EditingProject` resource
 *
 * @param properties - the TypeScript properties of a `RosEditingProjectProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::VOD::EditingProject` resource.
 */
// @ts-ignore TS6133
function rosEditingProjectPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEditingProjectPropsValidator(properties).assertSuccess();
    }
    return {
      Title: ros.stringToRosTemplate(properties.title),
      EditingProjectName: ros.stringToRosTemplate(properties.editingProjectName),
      Timeline: ros.stringToRosTemplate(properties.timeline),
    };
}

/**
 * A ROS template type:  `ALIYUN::VOD::EditingProject`
 */
export class RosEditingProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::EditingProject";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute CreateTime: The time when the online editing project was created.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute EditingProjectId: The ID of the online editing project.
     */
    public readonly attrEditingProjectId: ros.IResolvable;

    /**
     * @Attribute EditingProjectName: The name of the online editing project.
     */
    public readonly attrEditingProjectName: ros.IResolvable;

    /**
     * @Attribute ModifiedTime: The last time when the online editing project was modified.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrModifiedTime: ros.IResolvable;

    /**
     * @Attribute Timeline: The timeline of the online editing project.
     */
    public readonly attrTimeline: ros.IResolvable;

    /**
     * @Attribute Title: The title of the online editing project.
     */
    public readonly attrTitle: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property title: The title of the online editing project.
     */
    public title: string | ros.IResolvable;

    /**
     * @Property editingProjectName: The name of the online editing project.
     */
    public editingProjectName: string | ros.IResolvable | undefined;

    /**
     * @Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    public timeline: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::VOD::EditingProject`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEditingProject.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrEditingProjectId = this.getAtt('EditingProjectId');
        this.attrEditingProjectName = this.getAtt('EditingProjectName');
        this.attrModifiedTime = this.getAtt('ModifiedTime');
        this.attrTimeline = this.getAtt('Timeline');
        this.attrTitle = this.getAtt('Title');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.title = props.title;
        this.editingProjectName = props.editingProjectName;
        this.timeline = props.timeline;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            title: this.title,
            editingProjectName: this.editingProjectName,
            timeline: this.timeline,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEditingProjectPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
