import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfacePermission } from './ecs.generated';
export { RosNetworkInterfacePermission as NetworkInterfacePermissionProperty };
/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`
 */
export interface NetworkInterfacePermissionProps {
    /**
     * @Property accountId: the account id
     */
    readonly accountId: string;
    /**
     * @Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string;
    /**
     * @Property permission: the permission
     */
    readonly permission: string;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterfacePermission`
 */
export declare class NetworkInterfacePermission extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    readonly attrNetworkInterfacePermissionId: any;
    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfacePermissionProps, enableResourcePropertyConstraint?: boolean);
}
