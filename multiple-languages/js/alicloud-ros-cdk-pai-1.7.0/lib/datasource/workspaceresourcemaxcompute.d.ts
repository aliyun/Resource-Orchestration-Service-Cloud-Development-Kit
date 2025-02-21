import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceMaxCompute } from './pai.generated';
export { RosWorkspaceResourceMaxCompute as WorkspaceResourceMaxComputeProperty };
/**
 * Properties for defining a `WorkspaceResourceMaxCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
export interface WorkspaceResourceMaxComputeProps {
    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
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
 * Represents a `WorkspaceResourceMaxCompute`.
 */
export interface IWorkspaceResourceMaxCompute extends ros.IResource {
    readonly props: WorkspaceResourceMaxComputeProps;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly attrIsDefault: ros.IResolvable | string;
    /**
     * Attribute Resources: Resource List.
     */
    readonly attrResources: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::WorkspaceResourceMaxCompute`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceMaxCompute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcemaxcompute
 */
export declare class WorkspaceResourceMaxCompute extends ros.Resource implements IWorkspaceResourceMaxCompute {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkspaceResourceMaxComputeProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    readonly attrIsDefault: ros.IResolvable | string;
    /**
     * Attribute Resources: Resource List.
     */
    readonly attrResources: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceMaxComputeProps, enableResourcePropertyConstraint?: boolean);
}
