import * as ros from '@alicloud/ros-cdk-core';
import { RosVServerGroup } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVServerGroup as VServerGroupProperty };

/**
 * Properties for defining a `VServerGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
 */
export interface VServerGroupProps {

    /**
     * Property vServerGroupId: The ID of the vServer group.
     */
    readonly vServerGroupId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `VServerGroup`.
 */
export interface IVServerGroup extends ros.IResource {
    readonly props: VServerGroupProps;

    /**
     * Attribute BackendServers: The list of backend servers.
     */
    readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupId: The ID of the vServer group.
     */
    readonly attrVServerGroupId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupName: The name of the vServer group.
     */
    readonly attrVServerGroupName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::VServerGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVServerGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-vservergroup
 */
export class VServerGroup extends ros.Resource implements IVServerGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VServerGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BackendServers: The list of backend servers.
     */
    public readonly attrBackendServers: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the CLB instance was created. The time follows the YYYY-MM-DDThh:mm:ssZ format.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The ID of the CLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupId: The ID of the vServer group.
     */
    public readonly attrVServerGroupId: ros.IResolvable | string;

    /**
     * Attribute VServerGroupName: The name of the vServer group.
     */
    public readonly attrVServerGroupName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VServerGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVServerGroup = new RosVServerGroup(this, id,  {
            vServerGroupId: props.vServerGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVServerGroup;
        this.attrBackendServers = rosVServerGroup.attrBackendServers;
        this.attrCreateTime = rosVServerGroup.attrCreateTime;
        this.attrLoadBalancerId = rosVServerGroup.attrLoadBalancerId;
        this.attrVServerGroupId = rosVServerGroup.attrVServerGroupId;
        this.attrVServerGroupName = rosVServerGroup.attrVServerGroupName;
    }
}
