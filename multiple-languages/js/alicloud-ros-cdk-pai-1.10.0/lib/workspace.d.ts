import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspace } from './pai.generated';
export { RosWorkspace as WorkspaceProperty };
/**
 * Properties for defining a `Workspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
export interface WorkspaceProps {
    /**
     * Property description: Workspace description, no more than 80 characters.
     */
    readonly description: string | ros.IResolvable;
    /**
     * Property envTypes: Environments contained in the workspace:
     * - Simple mode only production environment (prod).
     * - Standard mode includes development environment (dev) and production environment (prod).
     */
    readonly envTypes: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property workspaceName: The workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly workspaceName: string | ros.IResolvable;
    /**
     * Property displayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name. The format is as follows:
     * - 3 to 23 characters in length and can contain letters, underscores, or numbers.
     * - Must start with a large or small letter.
     * - Unique in the current region.
     */
    readonly displayName?: string | ros.IResolvable;
}
/**
 * Represents a `Workspace`.
 */
export interface IWorkspace extends ros.IResource {
    readonly props: WorkspaceProps;
    /**
     * Attribute AdminNames: List of administrator account names.
     */
    readonly attrAdminNames: ros.IResolvable | string;
    /**
     * Attribute Creator: The user ID of the creator.
     */
    readonly attrCreator: ros.IResolvable | string;
    /**
     * Attribute Description: Workspace description, no more than 80 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute EnvTypes: Environments contained in the workspace:.
     */
    readonly attrEnvTypes: ros.IResolvable | string;
    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    readonly attrExtraInfos: ros.IResolvable | string;
    /**
     * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    readonly attrOwner: ros.IResolvable | string;
    /**
     * Attribute Users: List of users.
     */
    readonly attrUsers: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceName: The workspace name.
     */
    readonly attrWorkspaceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::Workspace`, which is used to create a workspace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspace
 */
export declare class Workspace extends ros.Resource implements IWorkspace {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AdminNames: List of administrator account names.
     */
    readonly attrAdminNames: ros.IResolvable | string;
    /**
     * Attribute Creator: The user ID of the creator.
     */
    readonly attrCreator: ros.IResolvable | string;
    /**
     * Attribute Description: Workspace description, no more than 80 characters.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute EnvTypes: Environments contained in the workspace:.
     */
    readonly attrEnvTypes: ros.IResolvable | string;
    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    readonly attrExtraInfos: ros.IResolvable | string;
    /**
     * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    readonly attrOwner: ros.IResolvable | string;
    /**
     * Attribute Users: List of users.
     */
    readonly attrUsers: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceName: The workspace name.
     */
    readonly attrWorkspaceName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceProps, enableResourcePropertyConstraint?: boolean);
}
