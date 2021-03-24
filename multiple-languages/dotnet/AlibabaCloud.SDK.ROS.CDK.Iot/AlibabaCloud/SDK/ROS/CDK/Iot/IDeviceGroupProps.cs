using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ALIYUN::IOT::DeviceGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IDeviceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.DeviceGroupProps")]
    public interface IDeviceGroupProps
    {
        /// <summary>Property groupName: The name of the group.</summary>
        /// <remarks>
        /// The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <summary>Property groupDesc: The description of the group.</summary>
        /// <remarks>
        /// You can enter a description with up to 100 characters.
        /// </remarks>
        [JsiiProperty(name: "groupDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupDesc
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

        /// <summary>Property superGroupId: The ID of the parent group.</summary>
        /// <remarks>
        /// If you want to create a first-level group, do not enter this parameter.
        /// </remarks>
        [JsiiProperty(name: "superGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SuperGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::IOT::DeviceGroup`.</summary>
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
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property groupDesc: The description of the group.</summary>
            /// <remarks>
            /// You can enter a description with up to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupDesc
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

            /// <summary>Property superGroupId: The ID of the parent group.</summary>
            /// <remarks>
            /// If you want to create a first-level group, do not enter this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "superGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SuperGroupId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
