using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ALIYUN::IOT::Device`.</summary>
    [JsiiInterface(nativeType: typeof(IDeviceProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceProps")]
    public interface IDeviceProps
    {
        /// <summary>Property productKey: The identifier of the product to which the device to be registered belongs.</summary>
        [JsiiProperty(name: "productKey", typeJson: "{\"primitive\":\"string\"}")]
        string ProductKey
        {
            get;
        }

        /// <summary>Property devEui: DevEUI LoRaWAN equipment.</summary>
        /// <remarks>
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiProperty(name: "devEui", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DevEui
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deviceName: The name of the device that you want to register.</summary>
        /// <remarks>
        /// The device name must consist of
        /// 4 to 32 characters, including English letters, digits, and special characters, for
        /// example, hyphens (-), underscores (_), at signs (@), periods (.) , and colons (:).
        /// DeviceName is used with ProductKey to identify a specified device.
        /// Note If you do not specify this parameter, the system will generate a name for the device.
        /// </remarks>
        [JsiiProperty(name: "deviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DeviceName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property iotInstanceId: Public instance does not pass this parameter;</summary>
        /// <remarks>
        /// instance that you need to buy the incoming instance ID.
        /// </remarks>
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property nickname: Add a nickname for the device.</summary>
        /// <remarks>
        /// A nickname can be 4-64 characters in length, and can
        /// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        /// character counts as two characters.
        /// </remarks>
        [JsiiProperty(name: "nickname", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Nickname
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.</summary>
        /// <remarks>
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiProperty(name: "pinCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PinCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::IOT::Device`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDeviceProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property productKey: The identifier of the product to which the device to be registered belongs.</summary>
            [JsiiProperty(name: "productKey", typeJson: "{\"primitive\":\"string\"}")]
            public string ProductKey
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property devEui: DevEUI LoRaWAN equipment.</summary>
            /// <remarks>
            /// When you create a LoRaWAN devices, this will pass.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "devEui", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DevEui
            {
                get => GetInstanceProperty<string?>();
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
            [JsiiProperty(name: "deviceName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DeviceName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property iotInstanceId: Public instance does not pass this parameter;</summary>
            /// <remarks>
            /// instance that you need to buy the incoming instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IotInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property nickname: Add a nickname for the device.</summary>
            /// <remarks>
            /// A nickname can be 4-64 characters in length, and can
            /// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
            /// character counts as two characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nickname", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Nickname
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.</summary>
            /// <remarks>
            /// When you create a LoRaWAN devices, this will pass.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pinCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PinCode
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
