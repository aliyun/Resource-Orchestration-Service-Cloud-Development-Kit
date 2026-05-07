import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceFlinks } from './pai.generated';
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
 * Represents a `WorkspaceResourceFlinks`.
 */
export interface IWorkspaceResourceFlinks extends ros.IResource {
    readonly props: WorkspaceResourceFlinksProps;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;
    /**
     * Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.
     */
    readonly attrWorkspaceResourceFlinks: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::WorkspaceResourceFlinks`, which is used to query the Realtime Compute for Apache Flink resources that are associated with a workspace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceFlinks`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourceflinks
 */
export declare class WorkspaceResourceFlinks extends ros.Resource implements IWorkspaceResourceFlinks {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkspaceResourceFlinksProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable | string;
    /**
     * Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.
     */
    readonly attrWorkspaceResourceFlinks: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceFlinksProps, enableResourcePropertyConstraint?: boolean);
}
