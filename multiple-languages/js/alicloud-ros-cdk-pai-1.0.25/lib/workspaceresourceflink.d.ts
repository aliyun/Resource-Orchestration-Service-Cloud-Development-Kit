import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceFlink } from './pai.generated';
export { RosWorkspaceResourceFlink as WorkspaceResourceFlinkProperty };
/**
 * Properties for defining a `WorkspaceResourceFlink`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export interface WorkspaceResourceFlinkProps {
    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceFlink.ResourcesProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * Property isDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * Property option: Create behavior that supports the following values:
     * - CreateAndAttach: Create resource and bind to workspace
     * - Attach: bind resource to workspace.
     */
    readonly option?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::WorkspaceResourceFlink`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceFlink`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export declare class WorkspaceResourceFlink extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceResourceFlinkProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    readonly attrGroupName: ros.IResolvable;
    /**
     * Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * Attribute Resources: Resource List.
     */
    readonly attrResources: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceFlinkProps, enableResourcePropertyConstraint?: boolean);
}
