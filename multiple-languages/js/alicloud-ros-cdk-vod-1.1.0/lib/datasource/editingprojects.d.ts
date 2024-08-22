import * as ros from '@alicloud/ros-cdk-core';
import { RosEditingProjects } from './vod.generated';
export { RosEditingProjects as EditingProjectsProperty };
/**
 * Properties for defining a `EditingProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export interface EditingProjectsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property title: The title of the online editing project.
     */
    readonly title?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::EditingProjects`, which is used to query the basic information about online editing projects.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEditingProjects`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export declare class EditingProjects extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: EditingProjectsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute EditingProjectIds: The list of editing project IDs.
     */
    readonly attrEditingProjectIds: ros.IResolvable;
    /**
     * Attribute EditingProjects: The list of editing projects.
     */
    readonly attrEditingProjects: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: EditingProjectsProps, enableResourcePropertyConstraint?: boolean);
}
