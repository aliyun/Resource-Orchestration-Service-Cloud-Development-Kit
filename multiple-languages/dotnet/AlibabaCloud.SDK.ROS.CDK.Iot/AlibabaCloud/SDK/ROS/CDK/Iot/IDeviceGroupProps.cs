using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `DeviceGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDeviceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceGroupProps")]
    public interface IDeviceGroupProps
    {
        /// <summary>Property groupName: The name of the group.</summary>
        /// <remarks>
        /// The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property groupDesc: The description of the group.</summary>
        /// <remarks>
        /// You can enter a description with up to 100 characters.
        /// </remarks>
        [JsiiProperty(name: "groupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GroupDesc
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
        [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IotInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property superGroupId: The ID of the parent group.</summary>
        /// <remarks>
        /// If you want to create a first-level group, do not enter this parameter.
        /// </remarks>
        [JsiiProperty(name: "superGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SuperGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DeviceGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-iot-devicegroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDeviceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IDeviceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: The name of the group.</summary>
            /// <remarks>
            /// The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property groupDesc: The description of the group.</summary>
            /// <remarks>
            /// You can enter a description with up to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupDesc", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GroupDesc
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property iotInstanceId: Public instance does not pass this parameter;</summary>
            /// <remarks>
            /// instance that you need to buy the incoming instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IotInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property superGroupId: The ID of the parent group.</summary>
            /// <remarks>
            /// If you want to create a first-level group, do not enter this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "superGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SuperGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
