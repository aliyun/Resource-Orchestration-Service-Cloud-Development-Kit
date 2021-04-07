using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ALIYUN::IOT::Device`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDeviceProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosDeviceProps")]
    public interface IRosDeviceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: productKey: The identifier of the product to which the device to be registered belongs.
        /// </remarks>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: devEui: DevEUI LoRaWAN equipment.
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiProperty(name: "devEui", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DevEui
        {
            get
            {
                return null;
            }
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
        [JsiiProperty(name: "deviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeviceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
        /// </remarks>
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
        /// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
        /// character counts as two characters.
        /// </remarks>
        [JsiiProperty(name: "nickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Nickname
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
        /// When you create a LoRaWAN devices, this will pass.
        /// </remarks>
        [JsiiProperty(name: "pinCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PinCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::IOT::Device`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDeviceProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosDeviceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IRosDeviceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: productKey: The identifier of the product to which the device to be registered belongs.
            /// </remarks>
            [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: devEui: DevEUI LoRaWAN equipment.
            /// When you create a LoRaWAN devices, this will pass.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "devEui", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DevEui
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "deviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeviceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nickname: Add a nickname for the device. A nickname can be 4-64 characters in length, and can
            /// contain Chinese characters, English letters, numbers and underscores (_). A Chinese
            /// character counts as two characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nickname
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pinCode: PIN Code LoRaWAN device for checking the legitimacy of DevEUI.
            /// When you create a LoRaWAN devices, this will pass.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pinCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PinCode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
