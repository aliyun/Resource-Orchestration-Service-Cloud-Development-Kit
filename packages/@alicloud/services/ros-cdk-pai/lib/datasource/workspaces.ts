import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaces } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWorkspaces as WorkspacesProperty };

/**
 * Properties for defining a `DATASOURCE::PAI::Workspaces`
 */
export interface WorkspacesProps {

    /**
     * Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId?: string | ros.IResolvable;

    /**
     * Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::PAI::Workspaces`
 */
export class Workspaces extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute WorkspaceIds: The list of workspace IDs.
     */
    public readonly attrWorkspaceIds: ros.IResolvable;

    /**
     * Attribute Workspaces: The list of workspaces.
     */
    public readonly attrWorkspaces: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::PAI::Workspaces`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspacesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosWorkspaces = new RosWorkspaces(this, id,  {
            workspaceId: props.workspaceId,
            workspaceName: props.workspaceName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaces;
        this.attrWorkspaceIds = rosWorkspaces.attrWorkspaceIds;
        this.attrWorkspaces = rosWorkspaces.attrWorkspaces;
    }
}
