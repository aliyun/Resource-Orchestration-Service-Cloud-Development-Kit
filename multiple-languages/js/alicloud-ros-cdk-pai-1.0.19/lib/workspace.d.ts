import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspace } from './pai.generated';
export { RosWorkspace as WorkspaceProperty };
/**
 * Properties for defining a `ALIYUN::PAI::Workspace`
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
 * A ROS resource type:  `ALIYUN::PAI::Workspace`
 */
export declare class Workspace extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AdminNames: List of administrator account names.
     */
    readonly attrAdminNames: ros.IResolvable;
    /**
     * Attribute Creator: The user ID of the creator.
     */
    readonly attrCreator: ros.IResolvable;
    /**
     * Attribute Description: Workspace description, no more than 80 characters.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * Attribute EnvTypes: Environments contained in the workspace:.
     */
    readonly attrEnvTypes: ros.IResolvable;
    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    readonly attrExtraInfos: ros.IResolvable;
    /**
     * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    readonly attrOwner: ros.IResolvable;
    /**
     * Attribute Users: List of users.
     */
    readonly attrUsers: ros.IResolvable;
    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    readonly attrWorkspaceId: ros.IResolvable;
    /**
     * Attribute WorkspaceName: The workspace name.
     */
    readonly attrWorkspaceName: ros.IResolvable;
    /**
     * Create a new `ALIYUN::PAI::Workspace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceProps, enableResourcePropertyConstraint?: boolean);
}
