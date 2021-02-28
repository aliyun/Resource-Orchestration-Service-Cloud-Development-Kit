import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfacePermission } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkInterfacePermission as NetworkInterfacePermissionProperty };

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfacePermission`
 */
export interface NetworkInterfacePermissionProps {

    /**
     * Property accountId: the account id
     */
    readonly accountId: string;

    /**
     * Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string;

    /**
     * Property permission: the permission
     */
    readonly permission: string;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterfacePermission`
 */
export class NetworkInterfacePermission extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NetworkInterfacePermissionId: the network interface permission id
     */
    public readonly attrNetworkInterfacePermissionId: any;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfacePermission`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfacePermissionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNetworkInterfacePermission = new RosNetworkInterfacePermission(this, id,  {
            accountId: props.accountId,
            permission: props.permission ? props.permission : 'InstanceAttach',
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterfacePermission;
        this.attrNetworkInterfacePermissionId = rosNetworkInterfacePermission.attrNetworkInterfacePermissionId;
    }
}
