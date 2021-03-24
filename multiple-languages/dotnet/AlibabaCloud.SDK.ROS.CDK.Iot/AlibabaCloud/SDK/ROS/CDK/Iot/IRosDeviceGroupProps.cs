using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Iot
{
    /// <summary>Properties for defining a `ALIYUN::IOT::DeviceGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDeviceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosDeviceGroupProps")]
    public interface IRosDeviceGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupDesc: The description of the group. You can enter a description with up to 100 characters.
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

        /// <remarks>
        /// <strong>Property</strong>: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
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

        /// <remarks>
        /// <strong>Property</strong>: superGroupId: The ID of the parent group.
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
        [JsiiTypeProxy(nativeType: typeof(IRosDeviceGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-iot.RosDeviceGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Iot.IRosDeviceGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: The name of the group. The name can contain Chinese characters, English letters, digits, and underscores (_). The length must be 4 to 30 characters (a Chinese character counts as two characters).
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: groupDesc: The description of the group. You can enter a description with up to 100 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupDesc", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupDesc
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: iotInstanceId: Public instance does not pass this parameter; instance that you need to buy the incoming instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "iotInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? IotInstanceId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: superGroupId: The ID of the parent group.
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
