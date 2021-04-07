import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfaceAttachment } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkInterfaceAttachment as NetworkInterfaceAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export interface NetworkInterfaceAttachmentProps {

    /**
     * Property instanceId: ECS instance id
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * Property networkInterfaceId: Network interface id
     */
    readonly networkInterfaceId: string | ros.IResolvable;

    /**
     * Property trunkNetworkInstanceId: undefined
     */
    readonly trunkNetworkInstanceId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::ECS::NetworkInterfaceAttachment`
 */
export class NetworkInterfaceAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable;

    /**
     * Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    public readonly attrTrunkNetworkInstanceId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ECS::NetworkInterfaceAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNetworkInterfaceAttachment = new RosNetworkInterfaceAttachment(this, id,  {
            instanceId: props.instanceId,
            trunkNetworkInstanceId: props.trunkNetworkInstanceId,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterfaceAttachment;
        this.attrNetworkInterfaceId = rosNetworkInterfaceAttachment.attrNetworkInterfaceId;
        this.attrTrunkNetworkInstanceId = rosNetworkInterfaceAttachment.attrTrunkNetworkInstanceId;
    }
}
