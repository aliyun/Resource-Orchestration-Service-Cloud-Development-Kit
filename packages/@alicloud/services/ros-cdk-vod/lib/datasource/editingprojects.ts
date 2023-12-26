import * as ros from '@alicloud/ros-cdk-core';
import { RosEditingProjects } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEditingProjects as EditingProjectsProperty };

/**
 * Properties for defining a `EditingProjects`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export interface EditingProjectsProps {

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
export class EditingProjects extends ros.Resource {

    /**
     * Attribute EditingProjectIds: The list of editing project IDs.
     */
    public readonly attrEditingProjectIds: ros.IResolvable;

    /**
     * Attribute EditingProjects: The list of editing projects.
     */
    public readonly attrEditingProjects: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EditingProjectsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosEditingProjects = new RosEditingProjects(this, id,  {
            title: props.title,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEditingProjects;
        this.attrEditingProjectIds = rosEditingProjects.attrEditingProjectIds;
        this.attrEditingProjects = rosEditingProjects.attrEditingProjects;
    }
}
