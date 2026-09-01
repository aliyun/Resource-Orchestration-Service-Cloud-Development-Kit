using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `Device`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeviceProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceProps")]
    public interface IDeviceProps
    {
        /// <summary>Property productKey: The identifier of the product to which the device to be registered belongs.</summary>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProductKey
        {
            get;
        }

        /// <summary>Property devEui: The DevEUI of the LoRaWAN device.</summary>
        /// <remarks>
        /// This parameter is required when you create a LoRaWAN device.
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

        /// <summary>Property deviceName: The DeviceName of the device.</summary>
        /// <remarks>
        /// The name must be 4 to 32 characters in length, and
        /// can contain letters, digits, hyphens (-), underscores (_), at signs (@), periods
        /// (.), and colons (:).
        /// You can use a combination of the DeviceName and ProductKey parameters to identify
        /// a device.
        ///
        ///     If you do not specify this parameter, IoT Platform randomly generates a
        ///     DeviceName.
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

        /// <summary>Property iotInstanceId: The ID of the instance.</summary>
        /// <remarks>
        /// You can view the instance ID on the Overview page in the
        /// IoT Platform console.
        ///
        ///     <list type="bullet">
        ///     <description>If your instance has an ID, you must configure this parameter. If you do not
        ///     set this parameter, the call fails.</description>
        ///     <description>If your instance has no Overview page or ID, you do not need to set this
        ///     parameter.</description>
        ///     </list>
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

        /// <summary>Property nickname: The alias of the device.</summary>
        /// <remarks>
        /// The alias must be 4 to 64 characters in length, and can
        /// contain letters, digits, and underscores (_).
        ///
        ///     If you do not specify this parameter, IoT Platform does not generate an alias
        ///     for the device.
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

        /// <summary>Property pinCode: The PIN code of the LoRaWAN device.</summary>
        /// <remarks>
        /// This parameter is used to verify the DevEUI.
        /// When you create a LoRaWAN device, set LoraNodeType to CUSTOMDEFINED. This
        /// parameter is required.
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

        /// <summary>Properties for defining a `Device`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeviceProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property productKey: The identifier of the product to which the device to be registered belongs.</summary>
            [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProductKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property devEui: The DevEUI of the LoRaWAN device.</summary>
            /// <remarks>
            /// This parameter is required when you create a LoRaWAN device.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "devEui", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DevEui
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deviceName: The DeviceName of the device.</summary>
            /// <remarks>
            /// The name must be 4 to 32 characters in length, and
            /// can contain letters, digits, hyphens (-), underscores (_), at signs (@), periods
            /// (.), and colons (:).
            /// You can use a combination of the DeviceName and ProductKey parameters to identify
            /// a device.
            ///
            ///     If you do not specify this parameter, IoT Platform randomly generates a
            ///     DeviceName.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeviceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iotInstanceId: The ID of the instance.</summary>
            /// <remarks>
            /// You can view the instance ID on the Overview page in the
            /// IoT Platform console.
            ///
            ///     <list type="bullet">
            ///     <description>If your instance has an ID, you must configure this parameter. If you do not
            ///     set this parameter, the call fails.</description>
            ///     <description>If your instance has no Overview page or ID, you do not need to set this
            ///     parameter.</description>
            ///     </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property nickname: The alias of the device.</summary>
            /// <remarks>
            /// The alias must be 4 to 64 characters in length, and can
            /// contain letters, digits, and underscores (_).
            ///
            ///     If you do not specify this parameter, IoT Platform does not generate an alias
            ///     for the device.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nickname
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property pinCode: The PIN code of the LoRaWAN device.</summary>
            /// <remarks>
            /// This parameter is used to verify the DevEUI.
            /// When you create a LoRaWAN device, set LoraNodeType to CUSTOMDEFINED. This
            /// parameter is required.
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
