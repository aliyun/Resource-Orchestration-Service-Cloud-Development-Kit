import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceFlink } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `WorkspaceResourceFlink`.
 */
export interface IWorkspaceResourceFlink extends ros.IResource {
    readonly props: WorkspaceResourceFlinkProps;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::WorkspaceResourceFlink`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceFlink`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourceflink
 */
export class WorkspaceResourceFlink extends ros.Resource implements IWorkspaceResourceFlink {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: WorkspaceResourceFlinkProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
     */
    public readonly attrGroupName: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public readonly attrIsDefault: ros.IResolvable | string;

    /**
     * Attribute Resources: Resource List.
     */
    public readonly attrResources: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceFlinkProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspaceResourceFlink = new RosWorkspaceResourceFlink(this, id,  {
            isDefault: props.isDefault,
            groupName: props.groupName,
            workspaceId: props.workspaceId,
            option: props.option,
            resources: props.resources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaceResourceFlink;
        this.attrCreateTime = rosWorkspaceResourceFlink.attrCreateTime;
        this.attrGroupName = rosWorkspaceResourceFlink.attrGroupName;
        this.attrIsDefault = rosWorkspaceResourceFlink.attrIsDefault;
        this.attrResources = rosWorkspaceResourceFlink.attrResources;
    }
}
