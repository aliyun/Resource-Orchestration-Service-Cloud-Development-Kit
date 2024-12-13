import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceFlinks } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWorkspaceResourceFlinks as WorkspaceResourceFlinksProperty };

/**
 * Properties for defining a `WorkspaceResourceFlinks`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export interface WorkspaceResourceFlinksProps {

    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;

    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlinks`, which is used to query the Realtime Compute for Apache Flink resources that are associated with a workspace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceFlinks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export class WorkspaceResourceFlinks extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceResourceFlinksProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GroupNames: The list of group names.
     */
    public readonly attrGroupNames: ros.IResolvable;

    /**
     * Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.
     */
    public readonly attrWorkspaceResourceFlinks: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceFlinksProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspaceResourceFlinks = new RosWorkspaceResourceFlinks(this, id,  {
            groupName: props.groupName,
            workspaceId: props.workspaceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaceResourceFlinks;
        this.attrGroupNames = rosWorkspaceResourceFlinks.attrGroupNames;
        this.attrWorkspaceResourceFlinks = rosWorkspaceResourceFlinks.attrWorkspaceResourceFlinks;
    }
}
