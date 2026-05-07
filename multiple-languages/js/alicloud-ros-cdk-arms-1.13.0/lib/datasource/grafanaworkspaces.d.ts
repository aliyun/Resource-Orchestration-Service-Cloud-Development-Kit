import * as ros from '@alicloud/ros-cdk-core';
import { RosGrafanaWorkspaces } from './arms.generated';
export { RosGrafanaWorkspaces as GrafanaWorkspacesProperty };
/**
 * Properties for defining a `GrafanaWorkspaces`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
 */
export interface GrafanaWorkspacesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the Prometheus instance belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `GrafanaWorkspaces`.
 */
export interface IGrafanaWorkspaces extends ros.IResource {
    readonly props: GrafanaWorkspacesProps;
    /**
     * Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
     */
    readonly attrGrafanaWorkspaceIds: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaces: The list of grafana workspaces.
     */
    readonly attrGrafanaWorkspaces: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ARMS::GrafanaWorkspaces`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGrafanaWorkspaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-grafanaworkspaces
 */
export declare class GrafanaWorkspaces extends ros.Resource implements IGrafanaWorkspaces {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GrafanaWorkspacesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
     */
    readonly attrGrafanaWorkspaceIds: ros.IResolvable | string;
    /**
     * Attribute GrafanaWorkspaces: The list of grafana workspaces.
     */
    readonly attrGrafanaWorkspaces: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GrafanaWorkspacesProps, enableResourcePropertyConstraint?: boolean);
}
