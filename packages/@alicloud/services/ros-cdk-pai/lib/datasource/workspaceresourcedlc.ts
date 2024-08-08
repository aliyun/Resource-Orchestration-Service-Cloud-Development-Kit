import * as ros from '@alicloud/ros-cdk-core';
import { RosWorkspaceResourceDlc } from './pai.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosWorkspaceResourceDlc as WorkspaceResourceDlcProperty };

/**
 * Properties for defining a `WorkspaceResourceDlc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
export interface WorkspaceResourceDlcProps {

    /**
     * Property groupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::WorkspaceResourceDlc`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspaceResourceDlc`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspaceresourcedlc
 */
export class WorkspaceResourceDlc extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: WorkspaceResourceDlcProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute GroupName: Resource group name. If you want to obtain a resource group name, see [ListResources].
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
    constructor(scope: ros.Construct, id: string, props: WorkspaceResourceDlcProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosWorkspaceResourceDlc = new RosWorkspaceResourceDlc(this, id,  {
            groupName: props.groupName,
            workspaceId: props.workspaceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosWorkspaceResourceDlc;
        this.attrCreateTime = rosWorkspaceResourceDlc.attrCreateTime;
        this.attrGroupName = rosWorkspaceResourceDlc.attrGroupName;
        this.attrIsDefault = rosWorkspaceResourceDlc.attrIsDefault;
        this.attrResources = rosWorkspaceResourceDlc.attrResources;
    }
}
