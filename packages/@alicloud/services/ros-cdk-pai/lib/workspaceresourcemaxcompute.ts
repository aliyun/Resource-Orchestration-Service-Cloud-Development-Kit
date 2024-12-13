import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceMaxCompute } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWorkspaceResourceMaxCompute as WorkspaceResourceMaxComputeProperty };

/**
 * Properties for defining a `WorkspaceResourceMaxCompute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
export interface WorkspaceResourceMaxComputeProps {

    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name.
     */
    readonly groupName: string | ros.IResolvable;

    /**
     * Property resources: Resource List.
     */
    readonly resources: Array<RosWorkspaceResourceMaxCompute.ResourcesProperty | ros.IResolvable> | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `ALIYUN::PAI::WorkspaceResourceMaxCompute`, which is used to associate MaxCompute resources with a workspace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceMaxCompute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-workspaceresourcemaxcompute
 */
export class WorkspaceResourceMaxCompute extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceResourceMaxComputeProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute GroupName: Resource group name.
     */
    public readonly attrGroupName: ros.IResolvable;

    /**
     * Attribute IsDefault: Indicates whether it is the default resource. Currently, this parameter only supports the input of true and does not support false.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * Attribute Resources: Resource List.
     */
    public readonly attrResources: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceMaxComputeProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspaceResourceMaxCompute = new RosWorkspaceResourceMaxCompute(this, id,  {
            isDefault: props.isDefault,
            groupName: props.groupName,
            workspaceId: props.workspaceId,
            option: props.option,
            resources: props.resources,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaceResourceMaxCompute;
        this.attrCreateTime = rosWorkspaceResourceMaxCompute.attrCreateTime;
        this.attrGroupName = rosWorkspaceResourceMaxCompute.attrGroupName;
        this.attrIsDefault = rosWorkspaceResourceMaxCompute.attrIsDefault;
        this.attrResources = rosWorkspaceResourceMaxCompute.attrResources;
    }
}
