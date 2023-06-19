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
 * A ROS template type:  `ALIYUN::VOD::EditingProject`
 */
export declare class RosEditingProject extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::VOD::EditingProject";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute CreateTime: The time when the online editing project was created.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * @Attribute EditingProjectId: The ID of the online editing project.
     */
    readonly attrEditingProjectId: ros.IResolvable;
    /**
     * @Attribute EditingProjectName: The name of the online editing project.
     */
    readonly attrEditingProjectName: ros.IResolvable;
    /**
     * @Attribute ModifiedTime: The last time when the online editing project was modified.
The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrModifiedTime: ros.IResolvable;
    /**
     * @Attribute Timeline: The timeline of the online editing project.
     */
    readonly attrTimeline: ros.IResolvable;
    /**
     * @Attribute Title: The title of the online editing project.
     */
    readonly attrTitle: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property title: The title of the online editing project.
     */
    title: string | ros.IResolvable;
    /**
     * @Property editingProjectName: The name of the online editing project.
     */
    editingProjectName: string | ros.IResolvable | undefined;
    /**
     * @Property timeline: The timeline of the online editing project, in JSON format.
     * If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
     */
    timeline: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::VOD::EditingProject`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
