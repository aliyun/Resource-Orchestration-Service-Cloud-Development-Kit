import * as ros from '@alicloud/ros-cdk-core';
import { RosDevice } from './iot.generated';
export { RosDevice as DeviceProperty };
/**
 * Properties for defining a `ALIYUN::IOT::Device`
 */
export interface DeviceProps {
    /**
     * @Property productKey: The identifier of the product to which the device to be registered belongs.
     */
    readonly productKey: string;
    /**
     * @Property devEui: DevEUI LoRaWAN equipment.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly devEui?: string;
    /**
     * @Property deviceName: The name of the device that you want to register. The device name must consist of
     * 4 to 32 characters, including English letters, digits, and special characters, for
     * example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
     * DeviceName is used with ProductKey to identify a specified device.
     * Note If you do not specify this parameter, the system will generate a name for the device.
     */
    readonly deviceName?: string;
    /**
     * @Property iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
     */
    readonly iotInstanceId?: string;
    /**
     * @Property nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
     * contain Chinese characters, English letters, numbers and underscores (_). A Chinese
     * character counts as two characters.
     */
    readonly nickname?: string;
    /**
     * @Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
     * When you create a LoRaWAN devices, this will pass.
     */
    readonly pinCode?: string;
}
/**
 * A ROS resource type:  `ALIYUN::IOT::Device`
 */
export declare class Device extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute DeviceName: Device name.
     */
    readonly attrDeviceName: any;
    /**
     * @Attribute DeviceSecret: Device key.
     */
    readonly attrDeviceSecret: any;
    /**
     * @Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    readonly attrIotId: any;
    /**
     * @Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: any;
    /**
     * @Attribute IpAddress: IP address.
     */
    readonly attrIpAddress: any;
    /**
     * @Attribute NickName: Nick name.
     */
    readonly attrNickName: any;
    /**
     * @Attribute NodeType: Node type.
     */
    readonly attrNodeType: any;
    /**
     * @Attribute ProductKey: Product key.
     */
    readonly attrProductKey: any;
    /**
     * @Attribute ProductName: Product name.
     */
    readonly attrProductName: any;
    /**
     * Create a new `ALIYUN::IOT::Device`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeviceProps, enableResourcePropertyConstraint?: boolean);
}
