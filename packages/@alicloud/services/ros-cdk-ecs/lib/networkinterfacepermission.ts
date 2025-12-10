import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfacePermission } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkInterfacePermission as NetworkInterfacePermissionProperty };

/**
 * Properties for defining a `NetworkInterfacePermission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
 */
export interface NetworkInterfacePermissionProps {

    /**
     * Property accountId: the account id
     */
    readonly accountId: string | ros.IResolvable;

    /**
     * Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * Property permission: the permission
     */
    readonly permission: string | ros.IResolvable;
}

/**
 * Represents a `NetworkInterfacePermission`.
 */
export interface INetworkInterfacePermission extends ros.IResource {
    readonly props: NetworkInterfacePermissionProps;

    /**
     * Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    readonly attrNetworkInterfacePermissionId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::NetworkInterfacePermission`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkInterfacePermission`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
 */
export class NetworkInterfacePermission extends ros.Resource implements INetworkInterfacePermission {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NetworkInterfacePermissionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    public readonly attrNetworkInterfacePermissionId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfacePermissionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkInterfacePermission = new RosNetworkInterfacePermission(this, id,  {
            accountId: props.accountId,
            permission: props.permission === undefined || props.permission === null ? 'InstanceAttach' : props.permission,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterfacePermission;
        this.attrNetworkInterfacePermissionId = rosNetworkInterfacePermission.attrNetworkInterfacePermissionId;
    }
}
