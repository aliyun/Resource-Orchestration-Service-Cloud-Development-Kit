import * as ros from '@alicloud/ros-cdk-core';
import { RosDeviceGroup } from './iot.generated';
export { RosDeviceGroup as DeviceGroupProperty };
/**
 * Properties for defining a `DeviceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
 */
export interface DeviceGroupProps {
    /**
     * Property groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
     */
    readonly groupName: string | ros.IResolvable;
    /**
     * Property groupDesc: The description of the group. You can enter a description with up to 100 characters.
     */
    readonly groupDesc?: string | ros.IResolvable;
    /**
     * Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * Property superGroupId: The ID of the parent group.
     * If you want to create a first-level group, do not enter this parameter.
     */
    readonly superGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::DeviceGroup`, which is used to create a group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDeviceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
 */
export declare class DeviceGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DeviceGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GroupId: Packet, ID, System for the globally unique identifier generated packet.
     */
    readonly attrGroupId: ros.IResolvable;
    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeviceGroupProps, enableResourcePropertyConstraint?: boolean);
}
