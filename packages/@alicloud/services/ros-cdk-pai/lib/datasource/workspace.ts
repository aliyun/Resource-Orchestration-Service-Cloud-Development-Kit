import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspace } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Workspace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
 */
export class Workspace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AdminNames: List of administrator account names.
     */
    public readonly attrAdminNames: ros.IResolvable;

    /**
     * Attribute Creator: The user ID of the creator.
     */
    public readonly attrCreator: ros.IResolvable;

    /**
     * Attribute Description: The description of the workspace.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DisplayName: The display name of the workspace.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * Attribute EnvTypes: The environments of the workspace.
     */
    public readonly attrEnvTypes: ros.IResolvable;

    /**
     * Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
     */
    public readonly attrExtraInfos: ros.IResolvable;

    /**
     * Attribute IsDefault: Default Workspace.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * Attribute Users: List of users.
     */
    public readonly attrUsers: ros.IResolvable;

    /**
     * Attribute WorkspaceId: The first ID of the resource.
     */
    public readonly attrWorkspaceId: ros.IResolvable;

    /**
     * Attribute WorkspaceName: The name of the workspace.
     */
    public readonly attrWorkspaceName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspace = new RosWorkspace(this, id,  {
            workspaceId: props.workspaceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspace;
        this.attrAdminNames = rosWorkspace.attrAdminNames;
        this.attrCreator = rosWorkspace.attrCreator;
        this.attrDescription = rosWorkspace.attrDescription;
        this.attrDisplayName = rosWorkspace.attrDisplayName;
        this.attrEnvTypes = rosWorkspace.attrEnvTypes;
        this.attrExtraInfos = rosWorkspace.attrExtraInfos;
        this.attrIsDefault = rosWorkspace.attrIsDefault;
        this.attrUsers = rosWorkspace.attrUsers;
        this.attrWorkspaceId = rosWorkspace.attrWorkspaceId;
        this.attrWorkspaceName = rosWorkspace.attrWorkspaceName;
    }
}
