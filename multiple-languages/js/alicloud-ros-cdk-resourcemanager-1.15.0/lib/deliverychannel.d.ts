import * as ros from '@alicloud/ros-cdk-core';
import { RosDeliveryChannel } from './resourcemanager.generated';
export { RosDeliveryChannel as DeliveryChannelProperty };
/**
 * Properties for defining a `DeliveryChannel`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
 */
export interface DeliveryChannelProps {
    /**
     * Property deliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly deliveryChannelFilter: RosDeliveryChannel.DeliveryChannelFilterProperty | ros.IResolvable;
    /**
     * Property deliveryChannelName: The name of the delivery channel.
     */
    readonly deliveryChannelName: string | ros.IResolvable;
    /**
     * Property deliveryChannelDescription: The description of the delivery channel.
     */
    readonly deliveryChannelDescription?: string | ros.IResolvable;
    /**
     * Property deliveryChannelId: The ID of the delivery channel.
     */
    readonly deliveryChannelId?: string | ros.IResolvable;
    /**
     * Property enabledResourceChangeDelivery: Enable resource change delivery.
     */
    readonly enabledResourceChangeDelivery?: string | ros.IResolvable;
    /**
     * Property enabledResourceSnapshotDelivery: Enable resource snapshot delivery.
     */
    readonly enabledResourceSnapshotDelivery?: string | ros.IResolvable;
    /**
     * Property resourceChangeDelivery: The delivery of resource configuration changes.
     */
    readonly resourceChangeDelivery?: RosDeliveryChannel.ResourceChangeDeliveryProperty | ros.IResolvable;
    /**
     * Property resourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    readonly resourceSnapshotDelivery?: RosDeliveryChannel.ResourceSnapshotDeliveryProperty | ros.IResolvable;
}
/**
 * Represents a `DeliveryChannel`.
 */
export interface IDeliveryChannel extends ros.IResource {
    readonly props: DeliveryChannelProps;
    /**
     * Attribute DeliveryChannelDescription: The description of the delivery channel.
     */
    readonly attrDeliveryChannelDescription: ros.IResolvable | string;
    /**
     * Attribute DeliveryChannelFilter: The effective scope of the delivery channel.
     */
    readonly attrDeliveryChannelFilter: ros.IResolvable | string;
    /**
     * Attribute DeliveryChannelId: The ID of the delivery channel.
     */
    readonly attrDeliveryChannelId: ros.IResolvable | string;
    /**
     * Attribute DeliveryChannelName: The name of the delivery channel.
     */
    readonly attrDeliveryChannelName: ros.IResolvable | string;
    /**
     * Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
     */
    readonly attrResourceChangeDelivery: ros.IResolvable | string;
    /**
     * Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    readonly attrResourceSnapshotDelivery: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::DeliveryChannel`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeliveryChannel`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-deliverychannel
 */
export declare class DeliveryChannel extends ros.Resource implements IDeliveryChannel {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: DeliveryChannelProps;
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
     * Attribute DeliveryChannelId: The ID of the delivery channel.
     */
    readonly attrDeliveryChannelId: ros.IResolvable | string;
    /**
     * Attribute DeliveryChannelName: The name of the delivery channel.
     */
    readonly attrDeliveryChannelName: ros.IResolvable | string;
    /**
     * Attribute ResourceChangeDelivery: The delivery of resource configuration changes.
     */
    readonly attrResourceChangeDelivery: ros.IResolvable | string;
    /**
     * Attribute ResourceSnapshotDelivery: The scheduled delivery of resource snapshots.
     */
    readonly attrResourceSnapshotDelivery: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeliveryChannelProps, enableResourcePropertyConstraint?: boolean);
}
