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
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::VOD::EditingProjects`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EditingProjects` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export declare class RosEditingProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProjects";
    /**
     * @Attribute EditingProjectIds: The list of editing project IDs.
     */
    readonly attrEditingProjectIds: ros.IResolvable;
    /**
     * @Attribute EditingProjects: The list of editing projects.
     */
    readonly attrEditingProjects: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property title: The title of the online editing project.
     */
    title: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEditingProjectsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
