using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `RosDevice`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
    /// </remarks>
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
        /// <strong>Property</strong>: devEui: The DevEUI of the LoRaWAN device.
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

        /// <remarks>
        /// <strong></strong>: ), periods
        /// (.), and colons (:).
        /// You can use a combination of the DeviceName and ProductKey parameters to identify
        /// a device.
        /// >  If you do not specify this parameter, IoT Platform randomly generates a
        /// DeviceName.
        ///
        /// <strong>Property</strong>: deviceName: The DeviceName of the device. The name must be 4 to 32 characters in length, and
        /// can contain letters, digits, hyphens (-), underscores (_), at signs (
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
        /// <strong>Property</strong>: iotInstanceId: The ID of the instance. You can view the instance ID on the Overview page in the
        /// IoT Platform console.
        /// >*   If your instance has an ID, you must configure this parameter. If you do not
        /// set this parameter, the call fails.
        /// >*   If your instance has no Overview page or ID, you do not need to set this
        /// parameter.
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
        /// <strong>Property</strong>: nickname: The alias of the device. The alias must be 4 to 64 characters in length, and can
        /// contain letters, digits, and underscores (_).
        /// >  If you do not specify this parameter, IoT Platform does not generate an alias
        /// for the device.
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
        /// <strong>Property</strong>: pinCode: The PIN code of the LoRaWAN device. This parameter is used to verify the DevEUI.
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

        /// <summary>Properties for defining a `RosDevice`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
        /// </remarks>
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
            /// <strong>Property</strong>: devEui: The DevEUI of the LoRaWAN device.
            /// This parameter is required when you create a LoRaWAN device.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "devEui", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DevEui
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong></strong>: ), periods
            /// (.), and colons (:).
            /// You can use a combination of the DeviceName and ProductKey parameters to identify
            /// a device.
            /// >  If you do not specify this parameter, IoT Platform randomly generates a
            /// DeviceName.
            ///
            /// <strong>Property</strong>: deviceName: The DeviceName of the device. The name must be 4 to 32 characters in length, and
            /// can contain letters, digits, hyphens (-), underscores (_), at signs (
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeviceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iotInstanceId: The ID of the instance. You can view the instance ID on the Overview page in the
            /// IoT Platform console.
            /// >*   If your instance has an ID, you must configure this parameter. If you do not
            /// set this parameter, the call fails.
            /// >*   If your instance has no Overview page or ID, you do not need to set this
            /// parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: nickname: The alias of the device. The alias must be 4 to 64 characters in length, and can
            /// contain letters, digits, and underscores (_).
            /// >  If you do not specify this parameter, IoT Platform does not generate an alias
            /// for the device.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "nickname", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Nickname
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pinCode: The PIN code of the LoRaWAN device. This parameter is used to verify the DevEUI.
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
