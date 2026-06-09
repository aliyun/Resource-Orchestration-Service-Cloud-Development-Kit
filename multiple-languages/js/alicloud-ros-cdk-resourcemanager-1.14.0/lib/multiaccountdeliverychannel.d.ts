import * as ros from '@alicloud/ros-cdk-core';
import { RosMultiAccountDeliveryChannel } from './resourcemanager.generated';
export { RosMultiAccountDeliveryChannel as MultiAccountDeliveryChannelProperty };
/**
 * Properties for defining a `MultiAccountDeliveryChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
 */
export interface MultiAccountDeliveryChannelProps {
    /**
     * Property deliveryChannelDescription: The description of the delivery channel.
     */
    readonly deliveryChannelDescription: string | ros.IResolvable;
    /**
     * Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly deliveryChannelFilter: RosMultiAccountDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;
    /**
     * Property multiAccountDeliveryChannelName: The name of the delivery channel.
     */
    readonly multiAccountDeliveryChannelName: string | ros.IResolvable;
    /**
     * Property multiAccountDeliveryChannelId: Delivery Channel id.
     */
    readonly multiAccountDeliveryChannelId?: string | ros.IResolvable;
    /**
     * Property resourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    readonly resourceChangeDelivery?: RosMultiAccountDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable;
    /**
     * Property resourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    readonly resourceSnapshotDelivery?: RosMultiAccountDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable;
}
/**
 * Represents a `MultiAccountDeliveryChannel`.
 */
export interface IMultiAccountDeliveryChannel extends ros.IResource {
    readonly props: MultiAccountDeliveryChannelProps;
    /**
     * Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    readonly attrDeliveryChannelDescription: ros.IResolvable | string;
    /**
     * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly attrDeliveryChannelFilter: ros.IResolvable | string;
    /**
     * Attribute MultiAccountDeliveryChannelId: The delivery channel ID.
     */
    readonly attrMultiAccountDeliveryChannelId: ros.IResolvable | string;
    /**
     * Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.
     */
    readonly attrMultiAccountDeliveryChannelName: ros.IResolvable | string;
    /**
     * Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    readonly attrResourceChangeDelivery: ros.IResolvable | string;
    /**
     * Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    readonly attrResourceSnapshotDelivery: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::MultiAccountDeliveryChannel`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosMultiAccountDeliveryChannel`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-multiaccountdeliverychannel
 */
export declare class MultiAccountDeliveryChannel extends ros.Resource implements IMultiAccountDeliveryChannel {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: MultiAccountDeliveryChannelProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    readonly attrDeliveryChannelDescription: ros.IResolvable | string;
    /**
     * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly attrDeliveryChannelFilter: ros.IResolvable | string;
    /**
     * Attribute MultiAccountDeliveryChannelId: The delivery channel ID.
     */
    readonly attrMultiAccountDeliveryChannelId: ros.IResolvable | string;
    /**
     * Attribute MultiAccountDeliveryChannelName: The name of the delivery channel.
     */
    readonly attrMultiAccountDeliveryChannelName: ros.IResolvable | string;
    /**
     * Attribute ResourceChangeDelivery: The configurations for delivery of resource configuration change events.
     */
    readonly attrResourceChangeDelivery: ros.IResolvable | string;
    /**
     * Attribute ResourceSnapshotDelivery: The configurations for scheduled delivery of resource snapshots.
     */
    readonly attrResourceSnapshotDelivery: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: MultiAccountDeliveryChannelProps, enableResourcePropertyConstraint?: boolean);
}
