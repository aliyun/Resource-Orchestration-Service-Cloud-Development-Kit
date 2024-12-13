import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaces } from './mobi.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWorkspaces as WorkspacesProperty };

/**
 * Properties for defining a `Workspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mobi-workspaces
 */
export interface WorkspacesProps {

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MOBI::Workspaces`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mobi-workspaces
 */
export class Workspaces extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspacesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute WorkspaceIds: The list of workspace IDs.
     */
    public readonly attrWorkspaceIds: ros.IResolvable;

    /**
     * Attribute Workspaces: The list of workspaces.
     */
    public readonly attrWorkspaces: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspacesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspaces = new RosWorkspaces(this, id,  {
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaces;
        this.attrWorkspaceIds = rosWorkspaces.attrWorkspaceIds;
        this.attrWorkspaces = rosWorkspaces.attrWorkspaces;
    }
}
