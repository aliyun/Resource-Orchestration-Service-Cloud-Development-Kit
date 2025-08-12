import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceDlcs } from './pai.generated';
export { RosWorkspaceResourceDlcs as WorkspaceResourceDlcsProperty };
/**
 * Properties for defining a `WorkspaceResourceDlcs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
export interface WorkspaceResourceDlcsProps {
    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
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
 * Represents a `WorkspaceResourceDlcs`.
 */
export interface IWorkspaceResourceDlcs extends ros.IResource {
    readonly props: WorkspaceResourceDlcsProps;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;
    /**
     * Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.
     */
    readonly attrWorkspaceResourceDlcs: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlcs`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceDlcs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlcs
 */
export declare class WorkspaceResourceDlcs extends ros.Resource implements IWorkspaceResourceDlcs {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkspaceResourceDlcsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;
    /**
     * Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.
     */
    readonly attrWorkspaceResourceDlcs: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceDlcsProps, enableResourcePropertyConstraint?: boolean);
}
