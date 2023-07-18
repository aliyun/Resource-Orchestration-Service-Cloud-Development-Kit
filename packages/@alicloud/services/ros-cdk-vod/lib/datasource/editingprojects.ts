import * as ros from '@alicloud/ros-cdk-core';
import { RosEditingProjects } from './vod.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class EditingProjects extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute EditingProjectIds: The list of editing project IDs.
     */
    public readonly attrEditingProjectIds: ros.IResolvable;

    /**
     * Attribute EditingProjects: The list of editing projects.
     */
    public readonly attrEditingProjects: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VOD::EditingProjects`.
     *
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
