import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspace } from './pai.generated';
export { RosWorkspace as WorkspaceProperty };
/**
 * Properties for defining a `Workspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export interface WorkspaceProps {
    /**
     * Property workspaceId: The ID of the workspace.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Workspace`, which is used to query the information about a Platform for AI (PAI) workspace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export declare class Workspace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AdminNames: List of administrator account names.
     */
    readonly attrAdminNames: ros.IResolvable;
    /**
     * Attribute Creator: The user ID of the creator.
     */
    readonly attrCreator: ros.IResolvable;
    /**
     * Attribute Description: The description of the workspace.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DisplayName: The display name of the workspace.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * Attribute EnvTypes: The environments of the workspace.
     */
    readonly attrEnvTypes: ros.IResolvable;
    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    readonly attrExtraInfos: ros.IResolvable;
    /**
     * Attribute IsDefault: Default Workspace.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * Attribute Users: List of users.
     */
    readonly attrUsers: ros.IResolvable;
    /**
     * Attribute WorkspaceId: The first ID of the resource.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * Attribute WorkspaceName: The name of the workspace.
     */
    readonly attrWorkspaceName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceProps, enableResourcePropertyConstraint?: boolean);
}
