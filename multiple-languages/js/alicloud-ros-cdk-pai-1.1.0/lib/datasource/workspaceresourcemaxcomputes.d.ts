import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceMaxComputes } from './pai.generated';
export { RosWorkspaceResourceMaxComputes as WorkspaceResourceMaxComputesProperty };
/**
 * Properties for defining a `WorkspaceResourceMaxComputes`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
export interface WorkspaceResourceMaxComputesProps {
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxComputes`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceMaxComputes`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcomputes
 */
export declare class WorkspaceResourceMaxComputes extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceResourceMaxComputesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupNames: The list of group names.
     */
    readonly attrGroupNames: ros.IResolvable;
    /**
     * Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.
     */
    readonly attrWorkspaceResourceMaxComputes: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceMaxComputesProps, enableResourcePropertyConstraint?: boolean);
}
