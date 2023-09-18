import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::VOD::EditingProjects`
 */
export interface RosEditingProjectsProps {
    /**
     * @Property title: The title of the online editing project.
     */
    readonly title?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::VOD::EditingProjects`
 */
export declare class RosEditingProjects extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::VOD::EditingProjects";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::VOD::EditingProjects`.
     *
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
