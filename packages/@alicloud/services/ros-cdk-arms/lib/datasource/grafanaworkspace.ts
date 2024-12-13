import * as ros from '@alicloud/ros-cdk-core';
import { RosGrafanaWorkspace } from './arms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGrafanaWorkspace as GrafanaWorkspaceProperty };

/**
 * Properties for defining a `GrafanaWorkspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export interface GrafanaWorkspaceProps {

    /**
     * Property grafanaWorkspaceId: The first ID of the resource.
     */
    readonly grafanaWorkspaceId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrafanaWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export class GrafanaWorkspace extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GrafanaWorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The time when the workspace was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The description of the workspace.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute GrafanaVersion: The version number of Grafana.
     */
    public readonly attrGrafanaVersion: ros.IResolvable;

    /**
     * Attribute GrafanaWorkspaceEdition: The version of the workspace.
     */
    public readonly attrGrafanaWorkspaceEdition: ros.IResolvable;

    /**
     * Attribute GrafanaWorkspaceId: The ID of the workspace.
     */
    public readonly attrGrafanaWorkspaceId: ros.IResolvable;

    /**
     * Attribute GrafanaWorkspaceName: The workspace name.
     */
    public readonly attrGrafanaWorkspaceName: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrafanaWorkspaceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGrafanaWorkspace = new RosGrafanaWorkspace(this, id,  {
            grafanaWorkspaceId: props.grafanaWorkspaceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGrafanaWorkspace;
        this.attrCreateTime = rosGrafanaWorkspace.attrCreateTime;
        this.attrDescription = rosGrafanaWorkspace.attrDescription;
        this.attrGrafanaVersion = rosGrafanaWorkspace.attrGrafanaVersion;
        this.attrGrafanaWorkspaceEdition = rosGrafanaWorkspace.attrGrafanaWorkspaceEdition;
        this.attrGrafanaWorkspaceId = rosGrafanaWorkspace.attrGrafanaWorkspaceId;
        this.attrGrafanaWorkspaceName = rosGrafanaWorkspace.attrGrafanaWorkspaceName;
        this.attrResourceGroupId = rosGrafanaWorkspace.attrResourceGroupId;
        this.attrTags = rosGrafanaWorkspace.attrTags;
    }
}
