import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkInterfaceAttachment } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `NetworkInterfaceAttachment`.
 */
export interface INetworkInterfaceAttachment extends ros.IResource {
    readonly props: NetworkInterfaceAttachmentProps;

    /**
     * Attribute InstanceId: ID of ECS instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    readonly attrNetworkInterfaceId: ros.IResolvable | string;

    /**
     * Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    readonly attrTrunkNetworkInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::NetworkInterfaceAttachment`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkInterfaceAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
 */
export class NetworkInterfaceAttachment extends ros.Resource implements INetworkInterfaceAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NetworkInterfaceAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute InstanceId: ID of ECS instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute NetworkInterfaceId: ID of your Network Interface.
     */
    public readonly attrNetworkInterfaceId: ros.IResolvable | string;

    /**
     * Attribute TrunkNetworkInstanceId: ID of Trunk Network Interface.
     */
    public readonly attrTrunkNetworkInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkInterfaceAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkInterfaceAttachment = new RosNetworkInterfaceAttachment(this, id,  {
            trunkNetworkInstanceId: props.trunkNetworkInstanceId,
            instanceId: props.instanceId,
            ecsRestartOption: props.ecsRestartOption,
            networkInterfaceId: props.networkInterfaceId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkInterfaceAttachment;
        this.attrInstanceId = rosNetworkInterfaceAttachment.attrInstanceId;
        this.attrNetworkInterfaceId = rosNetworkInterfaceAttachment.attrNetworkInterfaceId;
        this.attrTrunkNetworkInstanceId = rosNetworkInterfaceAttachment.attrTrunkNetworkInstanceId;
    }
}
