import * as ros from '@alicloud/ros-cdk-core';
import { RosGrafanaWorkspace } from './arms.generated';
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
 * Represents a `GrafanaWorkspace`.
 */
export interface IGrafanaWorkspace extends ros.IResource {
    readonly props: GrafanaWorkspaceProps;
    /**
     * Attribute CreateTime: The time when the workspace was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the workspace.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute GrafanaVersion: The version number of Grafana.
     */
    readonly attrGrafanaVersion: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceEdition: The version of the workspace.
     */
    readonly attrGrafanaWorkspaceEdition: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceId: The ID of the workspace.
     */
    readonly attrGrafanaWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceName: The workspace name.
     */
    readonly attrGrafanaWorkspaceName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrafanaWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspace
 */
export declare class GrafanaWorkspace extends ros.Resource implements IGrafanaWorkspace {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GrafanaWorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The time when the workspace was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the workspace.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute GrafanaVersion: The version number of Grafana.
     */
    readonly attrGrafanaVersion: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceEdition: The version of the workspace.
     */
    readonly attrGrafanaWorkspaceEdition: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceId: The ID of the workspace.
     */
    readonly attrGrafanaWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaceName: The workspace name.
     */
    readonly attrGrafanaWorkspaceName: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GrafanaWorkspaceProps, enableResourcePropertyConstraint?: boolean);
}
