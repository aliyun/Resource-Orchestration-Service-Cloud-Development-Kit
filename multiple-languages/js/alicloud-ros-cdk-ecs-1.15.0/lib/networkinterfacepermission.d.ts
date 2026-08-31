import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfacePermission } from './ecs.generated';
export { RosNetworkInterfacePermission as NetworkInterfacePermissionProperty };
/**
 * Properties for defining a `NetworkInterfacePermission`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfacepermission
 */
export interface NetworkInterfacePermissionProps {
    /**
     * Property accountId: The ID of the account to which the permission is granted. The
     * account can be a cloud partner (certified ISV) or an individual user.
     */
    readonly accountId: string | ros.IResolvable;
    /**
     * Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string | ros.IResolvable;
    /**
     * Property permission: The permission to grant. The only supported value is InstanceAttach.
     * InstanceAttach: Allows an authorized account to attach your elastic network
     * interface to one of its ECS instances. The ECS instance and the elastic network
     * interface must be in the same availability zone.
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
export declare class NetworkInterfacePermission extends ros.Resource implements INetworkInterfacePermission {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NetworkInterfacePermissionProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    readonly attrNetworkInterfacePermissionId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfacePermissionProps, enableResourcePropertyConstraint?: boolean);
}
