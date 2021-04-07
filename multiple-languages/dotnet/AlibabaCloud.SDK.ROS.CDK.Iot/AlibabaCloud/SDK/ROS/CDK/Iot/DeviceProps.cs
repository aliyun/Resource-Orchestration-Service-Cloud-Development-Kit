using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IOT::Device`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.DeviceProps")]
    public class DeviceProps : AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps
    {
        /// <summary>Property productKey: The identifier of the product to which the device to be registered belongs.</summary>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ProductKey
        {
            get;
            set;
        }

        /// <summary>Property devEui: DevEUI LoRaWAN equipment.</summary>
        /// <remarks>
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "devEui", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DevEui
        {
            get;
            set;
        }

        /// <summary>Property deviceName: The name of the device that you want to register.</summary>
        /// <remarks>
        /// The device name must consist of
        /// 4 to 32 characters, including English letters, digits, and special characters, for
        /// example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
        /// DeviceName is used with ProductKey to identify a specified device.
        /// Note If you do not specify this parameter, the system will generate a name for the device.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeviceName
        {
            get;
            set;
        }

        /// <summary>Property iotInstanceId: Public instance does not pass this parameter;</summary>
        /// <remarks>
        /// instance that you need to buy the incoming instance ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? IotInstanceId
        {
            get;
            set;
        }

        /// <summary>Property nickname: Add a nickname for the device.</summary>
        /// <remarks>
        /// A nickname can be 4-64 characters in length, and can
        /// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        /// character counts as two characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Nickname
        {
            get;
            set;
        }

        /// <summary>Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.</summary>
        /// <remarks>
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pinCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PinCode
        {
            get;
            set;
        }
    }
}
