import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspace } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Workspace extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AdminNames: List of administrator account names.
     */
    public readonly attrAdminNames: ros.IResolvable;

    /**
     * Attribute Creator: The user ID of the creator.
     */
    public readonly attrCreator: ros.IResolvable;

    /**
     * Attribute Description: Workspace description, no more than 80 characters.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DisplayName: It is recommended that you name the workspace based on the business attribute to identify the purpose of the workspace. If not configured, the default value is the workspace name.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * Attribute EnvTypes: Environments contained in the workspace:.
     */
    public readonly attrEnvTypes: ros.IResolvable;

    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    public readonly attrExtraInfos: ros.IResolvable;

    /**
     * Attribute Owner: Workspace owner ID, displayed when Verbose is true.
     */
    public readonly attrOwner: ros.IResolvable;

    /**
     * Attribute Users: List of users.
     */
    public readonly attrUsers: ros.IResolvable;

    /**
     * Attribute WorkspaceId: The ID of the workspace.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * Attribute WorkspaceName: The workspace name.
     */
    public readonly attrWorkspaceName: ros.IResolvable;

    /**
     * Create a new `ALIYUN::PAI::Workspace`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosWorkspace = new RosWorkspace(this, id,  {
            description: props.description,
            displayName: props.displayName,
            workspaceName: props.workspaceName,
            envTypes: props.envTypes,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspace;
        this.attrAdminNames = rosWorkspace.attrAdminNames;
        this.attrCreator = rosWorkspace.attrCreator;
        this.attrDescription = rosWorkspace.attrDescription;
        this.attrDisplayName = rosWorkspace.attrDisplayName;
        this.attrEnvTypes = rosWorkspace.attrEnvTypes;
        this.attrExtraInfos = rosWorkspace.attrExtraInfos;
        this.attrOwner = rosWorkspace.attrOwner;
        this.attrUsers = rosWorkspace.attrUsers;
        this.attrWorkspaceId = rosWorkspace.attrWorkspaceId;
        this.attrWorkspaceName = rosWorkspace.attrWorkspaceName;
    }
}
