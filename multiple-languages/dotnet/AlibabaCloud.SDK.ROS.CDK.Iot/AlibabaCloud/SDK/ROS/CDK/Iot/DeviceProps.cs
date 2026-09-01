using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `Device`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-device
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-iot.DeviceProps")]
    public class DeviceProps : AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceProps
    {
        private object _productKey;

        /// <summary>Property productKey: The identifier of the product to which the device to be registered belongs.</summary>
        [JsiiProperty(name: "productKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProductKey
        {
            get => _productKey;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _productKey = value;
            }
        }

        private object? _devEui;

        /// <summary>Property devEui: The DevEUI of the LoRaWAN device.</summary>
        /// <remarks>
        /// This parameter is required when you create a LoRaWAN device.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "devEui", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DevEui
        {
            get => _devEui;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _devEui = value;
            }
        }

        private object? _deviceName;

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
            get => _deviceName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _deviceName = value;
            }
        }

        private object? _iotInstanceId;

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
            get => _iotInstanceId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _iotInstanceId = value;
            }
        }

        private object? _nickname;

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
            get => _nickname;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _nickname = value;
            }
        }

        private object? _pinCode;

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
            get => _pinCode;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _pinCode = value;
            }
        }
    }
}
