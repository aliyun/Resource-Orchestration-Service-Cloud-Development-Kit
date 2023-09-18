import * as ros from '@alicloud/ros-cdk-core';
import { RosEditingProjects } from './vod.generated';
export { RosEditingProjects as EditingProjectsProperty };
/**
 * Properties for defining a `DATASOURCE::VOD::EditingProjects`
 */
export interface EditingProjectsProps {
    /**
     * Property title: The title of the online editing project.
     */
    readonly title?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VOD::EditingProjects`
 */
export declare class EditingProjects extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute EditingProjectIds: The list of editing project IDs.
     */
    readonly attrEditingProjectIds: ros.IResolvable;
    /**
     * Attribute EditingProjects: The list of editing projects.
     */
    readonly attrEditingProjects: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VOD::EditingProjects`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: EditingProjectsProps, enableResourcePropertyConstraint?: boolean);
}
