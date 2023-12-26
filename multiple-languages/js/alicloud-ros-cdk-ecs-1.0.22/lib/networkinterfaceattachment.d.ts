import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfaceAttachment } from './ecs.generated';
export { RosNetworkInterfaceAttachment as NetworkInterfaceAttachmentProperty };
/**
 * Properties for defining a `NetworkInterfaceAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
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
     * Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
     */
    readonly ecsRestartOption?: string | ros.IResolvable;
    /**
     * Property trunkNetworkInstanceId: undefined
     */
    readonly trunkNetworkInstanceId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::NetworkInterfaceAttachment`, which is used to bind an elastic network interface (ENI) to an Elastic Compute Service (ECS) instance in a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkInterfaceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
 */
export declare class NetworkInterfaceAttachment extends ros.Resource {
    /**
     * Attribute InstanceId: ID of ECS instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable;
    /**
     * Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    readonly attrTrunkNetworkInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
