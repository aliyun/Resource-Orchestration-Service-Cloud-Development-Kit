import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspace } from './cms2.generated';
export { RosWorkspace as WorkspaceProperty };
/**
 * Properties for defining a `Workspace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
 */
export interface WorkspaceProps {
    /**
     * Property slsProject: The name of the Log Service (SLS) project.
     */
    readonly slsProject: string | ros.IResolvable;
    /**
     * Property workspaceName: The name of the workspace.
     */
    readonly workspaceName: string | ros.IResolvable;
    /**
     * Property description: The description of the workspace.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property displayName: The display name of the workspace.
     */
    readonly displayName?: string | ros.IResolvable;
}
/**
 * Represents a `Workspace`.
 */
export interface IWorkspace extends ros.IResource {
    readonly props: WorkspaceProps;
    /**
     * Attribute WorkspaceName: The name of the workspace.
     */
    readonly attrWorkspaceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS2::Workspace`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspace`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-workspace
 */
export declare class Workspace extends ros.Resource implements IWorkspace {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkspaceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute WorkspaceName: The name of the workspace.
     */
    readonly attrWorkspaceName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceProps, enableResourcePropertyConstraint?: boolean);
}
