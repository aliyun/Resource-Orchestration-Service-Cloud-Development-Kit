import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResource } from './pai.generated';
export { RosWorkspaceResource as WorkspaceResourceProperty };
/**
 * Properties for defining a `WorkspaceResource`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
 */
export interface WorkspaceResourceProps {
    /**
     * Property envType: Environment type, possible values:
     * - dev: Development environment.
     * - prod: Production environment.
     */
    readonly envType: string | ros.IResolvable;
    /**
     * Property resourceType: The resource types. Valid values:
     * MaxCompute
     * ECS
     * Lingjun
     * ACS
     * FLINK
     */
    readonly resourceType: string | ros.IResolvable;
    /**
     * Property workspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly workspaceId: string | ros.IResolvable;
    /**
     * Property workspaceResourceName: The resource name.
     */
    readonly workspaceResourceName: string | ros.IResolvable;
    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    readonly groupName?: string | ros.IResolvable;
    /**
     * Property isDefault: Whether it is the default resource, each resource type has a default resource. Possible values:
     * - true: is the default resource.
     * - false: Not the default resource.
     */
    readonly isDefault?: boolean | ros.IResolvable;
    /**
     * Property spec: Resource configuration, required for public resource groups of DLC, enter the content: {"clusterType": "share"}.
     */
    readonly spec?: {
        [key: string]: (any | ros.IResolvable);
    } | ros.IResolvable;
}
/**
 * Represents a `WorkspaceResource`.
 */
export interface IWorkspaceResource extends ros.IResource {
    readonly props: WorkspaceResourceProps;
    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EnvType: Environment type, possible values:.
     */
    readonly attrEnvType: ros.IResolvable | string;
    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.
     */
    readonly attrIsDefault: ros.IResolvable | string;
    /**
     * Attribute ResourceId: The resource ID.
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: Resource type, possible values:.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.
     */
    readonly attrSpec: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceResourceName: The resource name.
     */
    readonly attrWorkspaceResourceName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::WorkspaceResource`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResource`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresource
 */
export declare class WorkspaceResource extends ros.Resource implements IWorkspaceResource {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: WorkspaceResourceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute EnvType: Environment type, possible values:.
     */
    readonly attrEnvType: ros.IResolvable | string;
    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    readonly attrGroupName: ros.IResolvable | string;
    /**
     * Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.
     */
    readonly attrIsDefault: ros.IResolvable | string;
    /**
     * Attribute ResourceId: The resource ID.
     */
    readonly attrResourceId: ros.IResolvable | string;
    /**
     * Attribute ResourceType: Resource type, possible values:.
     */
    readonly attrResourceType: ros.IResolvable | string;
    /**
     * Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.
     */
    readonly attrSpec: ros.IResolvable | string;
    /**
     * Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.
     */
    readonly attrWorkspaceId: ros.IResolvable | string;
    /**
     * Attribute WorkspaceResourceName: The resource name.
     */
    readonly attrWorkspaceResourceName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceProps, enableResourcePropertyConstraint?: boolean);
}
