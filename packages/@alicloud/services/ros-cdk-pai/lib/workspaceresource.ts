import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResource } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
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
    readonly spec?: { [key: string]: (any | ros.IResolvable) } | ros.IResolvable;
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
export class WorkspaceResource extends ros.Resource implements IWorkspaceResource {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WorkspaceResourceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Create UTC time in ISO8601 format.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute EnvType: Environment type, possible values:.
     */
    public readonly attrEnvType: ros.IResolvable | string;

    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources](~~ 449143 ~~).
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Whether it is the default resource, each resource type has a default resource.
     */
    public readonly attrIsDefault: ros.IResolvable | string;

    /**
     * Attribute ResourceId: The resource ID.
     */
    public readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute ResourceType: Resource type, possible values:.
     */
    public readonly attrResourceType: ros.IResolvable | string;

    /**
     * Attribute Spec: Resource configuration, required for public resource groups of DLC, enter the content.
     */
    public readonly attrSpec: ros.IResolvable | string;

    /**
     * Attribute WorkspaceId: The ID of the workspace to which the workspace belongs.
     */
    public readonly attrWorkspaceId: ros.IResolvable | string;

    /**
     * Attribute WorkspaceResourceName: The resource name.
     */
    public readonly attrWorkspaceResourceName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspaceResource = new RosWorkspaceResource(this, id,  {
            groupName: props.groupName,
            isDefault: props.isDefault,
            workspaceResourceName: props.workspaceResourceName,
            workspaceId: props.workspaceId,
            resourceType: props.resourceType,
            spec: props.spec,
            envType: props.envType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaceResource;
        this.attrCreateTime = rosWorkspaceResource.attrCreateTime;
        this.attrEnvType = rosWorkspaceResource.attrEnvType;
        this.attrGroupName = rosWorkspaceResource.attrGroupName;
        this.attrIsDefault = rosWorkspaceResource.attrIsDefault;
        this.attrResourceId = rosWorkspaceResource.attrResourceId;
        this.attrResourceType = rosWorkspaceResource.attrResourceType;
        this.attrSpec = rosWorkspaceResource.attrSpec;
        this.attrWorkspaceId = rosWorkspaceResource.attrWorkspaceId;
        this.attrWorkspaceResourceName = rosWorkspaceResource.attrWorkspaceResourceName;
    }
}
