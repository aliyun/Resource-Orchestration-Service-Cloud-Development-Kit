import * as ros from '@alicloud/ros-cdk-core';
import { RosBackendServerToVServerGroupAddition } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBackendServerToVServerGroupAddition as BackendServerToVServerGroupAdditionProperty };

/**
 * Properties for defining a `BackendServerToVServerGroupAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
export interface BackendServerToVServerGroupAdditionProps {

    /**
     * Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
     */
    readonly backendServers: Array<RosBackendServerToVServerGroupAddition.BackendServersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property vServerGroupId: The ID of virtual server group.
     */
    readonly vServerGroupId: string | ros.IResolvable;
}

/**
 * Represents a `BackendServerToVServerGroupAddition`.
 */
export interface IBackendServerToVServerGroupAddition extends ros.IResource {
    readonly props: BackendServerToVServerGroupAdditionProps;

    /**
     * Attribute VServerGroupId: The ID of virtual server group.
     */
    readonly attrVServerGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::BackendServerToVServerGroupAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBackendServerToVServerGroupAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-backendservertovservergroupaddition
 */
export class BackendServerToVServerGroupAddition extends ros.Resource implements IBackendServerToVServerGroupAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BackendServerToVServerGroupAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VServerGroupId: The ID of virtual server group.
     */
    public readonly attrVServerGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BackendServerToVServerGroupAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBackendServerToVServerGroupAddition = new RosBackendServerToVServerGroupAddition(this, id,  {
            vServerGroupId: props.vServerGroupId,
            backendServers: props.backendServers,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBackendServerToVServerGroupAddition;
        this.attrVServerGroupId = rosBackendServerToVServerGroupAddition.attrVServerGroupId;
    }
}
