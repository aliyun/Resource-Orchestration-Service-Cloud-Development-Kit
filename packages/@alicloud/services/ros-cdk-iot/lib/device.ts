import * as ros from '@alicloud/ros-cdk-core';
import { RosDevice } from './iot.generated';
// Generated from the AliCloud ROS Resource Specification
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
     * Property devEui: The DevEUI of the LoRaWAN device.
     * This parameter is required when you create a LoRaWAN device.
     */
    readonly devEui?: string | ros.IResolvable;

    /**
     * Property deviceName: The DeviceName of the device. The name must be 4 to 32 characters in length, and
     * can contain letters, digits, hyphens (-), underscores (_), at signs (@), periods
     * (.), and colons (:).
     * You can use a combination of the DeviceName and ProductKey parameters to identify
     * a device.
     * >  If you do not specify this parameter, IoT Platform randomly generates a
     * DeviceName.
     */
    readonly deviceName?: string | ros.IResolvable;

    /**
     * Property iotInstanceId: The ID of the instance. You can view the instance ID on the Overview page in the
     * IoT Platform console.
     * >*   If your instance has an ID, you must configure this parameter. If you do not
     * set this parameter, the call fails.
     * >*   If your instance has no Overview page or ID, you do not need to set this
     * parameter.
     */
    readonly iotInstanceId?: string | ros.IResolvable;

    /**
     * Property nickname: The alias of the device. The alias must be 4 to 64 characters in length, and can
     * contain letters, digits, and underscores (_).
     * >  If you do not specify this parameter, IoT Platform does not generate an alias
     * for the device.
     */
    readonly nickname?: string | ros.IResolvable;

    /**
     * Property pinCode: The PIN code of the LoRaWAN device. This parameter is used to verify the DevEUI.
     * When you create a LoRaWAN device, set LoraNodeType to CUSTOMDEFINED. This
     * parameter is required.
     */
    readonly pinCode?: string | ros.IResolvable;
}

/**
 * Represents a `Device`.
 */
export interface IDevice extends ros.IResource {
    readonly props: DeviceProps;

    /**
     * Attribute DeviceName: Device name.
     */
    readonly attrDeviceName: ros.IResolvable | string;

    /**
     * Attribute DeviceSecret: Device key.
     */
    readonly attrDeviceSecret: ros.IResolvable | string;

    /**
     * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    readonly attrIotId: ros.IResolvable | string;

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    readonly attrIotInstanceId: ros.IResolvable | string;

    /**
     * Attribute IpAddress: IP address.
     */
    readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute NickName: Nick name.
     */
    readonly attrNickName: ros.IResolvable | string;

    /**
     * Attribute NodeType: Node type.
     */
    readonly attrNodeType: ros.IResolvable | string;

    /**
     * Attribute ProductKey: Product key.
     */
    readonly attrProductKey: ros.IResolvable | string;

    /**
     * Attribute ProductName: Product name.
     */
    readonly attrProductName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::IOT::Device`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDevice`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
 */
export class Device extends ros.Resource implements IDevice {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DeviceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DeviceName: Device name.
     */
    public readonly attrDeviceName: ros.IResolvable | string;

    /**
     * Attribute DeviceSecret: Device key.
     */
    public readonly attrDeviceSecret: ros.IResolvable | string;

    /**
     * Attribute IotId: Things internet device ID issued for the device, as the unique identifier of the device.
Description Keep, do not leak.
     */
    public readonly attrIotId: ros.IResolvable | string;

    /**
     * Attribute IotInstanceId: IOT instance ID.
     */
    public readonly attrIotInstanceId: ros.IResolvable | string;

    /**
     * Attribute IpAddress: IP address.
     */
    public readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute NickName: Nick name.
     */
    public readonly attrNickName: ros.IResolvable | string;

    /**
     * Attribute NodeType: Node type.
     */
    public readonly attrNodeType: ros.IResolvable | string;

    /**
     * Attribute ProductKey: Product key.
     */
    public readonly attrProductKey: ros.IResolvable | string;

    /**
     * Attribute ProductName: Product name.
     */
    public readonly attrProductName: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DeviceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDevice = new RosDevice(this, id,  {
            iotInstanceId: props.iotInstanceId,
            devEui: props.devEui,
            productKey: props.productKey,
            deviceName: props.deviceName,
            pinCode: props.pinCode,
            nickname: props.nickname,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDevice;
        this.attrDeviceName = rosDevice.attrDeviceName;
        this.attrDeviceSecret = rosDevice.attrDeviceSecret;
        this.attrIotId = rosDevice.attrIotId;
        this.attrIotInstanceId = rosDevice.attrIotInstanceId;
        this.attrIpAddress = rosDevice.attrIpAddress;
        this.attrNickName = rosDevice.attrNickName;
        this.attrNodeType = rosDevice.attrNodeType;
        this.attrProductKey = rosDevice.attrProductKey;
        this.attrProductName = rosDevice.attrProductName;
    }
}
