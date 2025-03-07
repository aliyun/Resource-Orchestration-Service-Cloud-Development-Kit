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
 * Represents a `EditingProjects`.
 */
export interface IEditingProjects extends ros.IResource {
    readonly props: EditingProjectsProps;

    /**
     * Attribute EditingProjectIds: The list of editing project IDs.
     */
    readonly attrEditingProjectIds: ros.IResolvable | string;

    /**
     * Attribute EditingProjects: The list of editing projects.
     */
    readonly attrEditingProjects: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VOD::EditingProjects`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEditingProjects`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vod-editingprojects
 */
export class EditingProjects extends ros.Resource implements IEditingProjects {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EditingProjectsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EditingProjectIds: The list of editing project IDs.
     */
    public readonly attrEditingProjectIds: ros.IResolvable | string;

    /**
     * Attribute EditingProjects: The list of editing projects.
     */
    public readonly attrEditingProjects: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EditingProjectsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEditingProjects = new RosEditingProjects(this, id,  {
            title: props.title,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEditingProjects;
        this.attrEditingProjectIds = rosEditingProjects.attrEditingProjectIds;
        this.attrEditingProjects = rosEditingProjects.attrEditingProjects;
    }
}
