import * as ros from '@alicloud/ros-cdk-core';
import { RosDevice } from './iot.generated';
export { RosDevice as DeviceProperty };
/**
 * Properties for defining a `Device`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
export interface DeviceProps {
    /**
     * Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    readonly productKey: string | ros.IResolvable;
    /**
     * Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly devEui?: string | ros.IResolvable;
    /**
     * Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    readonly deviceName?: string | ros.IResolvable;
    /**
     * Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string | ros.IResolvable;
    /**
     * Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    readonly nickname?: string | ros.IResolvable;
    /**
     * Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly pinCode?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::Device`, which is used to register a Device.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDevice`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
export declare class Device extends ros.Resource {
    /**
     * Attribute DeviceName: Device name.
     */
    readonly attrDeviceName: ros.IResolvable;
    /**
     * Attribute DeviceSecret: Device key.
     */
    readonly attrDeviceSecret: ros.IResolvable;
    /**
     * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    readonly attrIotId: ros.IResolvable;
    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable;
    /**
     * Attribute IpAddress: IP address.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute NickName: Nick name.
     */
    readonly attrNickName: ros.IResolvable;
    /**
     * Attribute NodeType: Node type.
     */
    readonly attrNodeType: ros.IResolvable;
    /**
     * Attribute ProductKey: Product key.
     */
    readonly attrProductKey: ros.IResolvable;
    /**
     * Attribute ProductName: Product name.
     */
    readonly attrProductName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeviceProps, enableResourcePropertyConstraint?: boolean);
}
