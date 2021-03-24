using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IOT::Device`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.RosDeviceProps")]
    public class RosDeviceProps : AlibabaCloud.SDK.ROS.CDK.Iot.IRosDeviceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: productKey: The identifier of the product to which the device to be registered belongs.
        /// </remarks>
        [JsiiProperty(name: "productKey", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ProductKey
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: devEui: DevEUI LoRaWAN equipment.
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "devEui", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DevEui
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong></strong>: ), periods (.) , and colons (:).
        /// DeviceName is used with ProductKey to identify a specified device.
        /// Note If you do not specify this parameter, the system will generate a name for the device.
        /// 
        /// <strong>Property</strong>: deviceName: The name of the device that you want to register. The device name must consist of
        /// 4 to 32 characters, including English letters, digits, and special characters, for
        /// example, hyphens (-), underscores (_), at signs (
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DeviceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? IotInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        /// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        /// character counts as two characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "nickname", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Nickname
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pinCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PinCode
        {
            get;
            set;
        }
    }
}
