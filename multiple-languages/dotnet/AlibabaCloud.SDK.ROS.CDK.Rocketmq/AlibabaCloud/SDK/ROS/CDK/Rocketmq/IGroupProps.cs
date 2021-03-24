using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Group`.</summary>
    [JsiiInterface(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.GroupProps")]
    public interface IGroupProps
    {
        /// <summary>Property groupId: The group ID of the consumption cluster.</summary>
        /// <remarks>
        /// When creating a group ID, pay attention to the following aspects:
        /// A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
        /// A group ID ranges from 7 to 64 bytes.
        /// Once a group ID is created, it cannot be edited anymore.
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
        string GroupId
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property groupType: Group ID specify the creation of applicable agreements.</summary>
        /// <remarks>
        /// Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
        /// tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
        /// http: represents the Group ID was created only for the HTTP protocol messaging.
        /// </remarks>
        [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? GroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: The remarks on the request.</summary>
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Group`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.GroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq.IGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupId: The group ID of the consumption cluster.</summary>
            /// <remarks>
            /// When creating a group ID, pay attention to the following aspects:
            /// A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
            /// A group ID ranges from 7 to 64 bytes.
            /// Once a group ID is created, it cannot be edited anymore.
            /// </remarks>
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property groupType: Group ID specify the creation of applicable agreements.</summary>
            /// <remarks>
            /// Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
            /// tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
            /// http: represents the Group ID was created only for the HTTP protocol messaging.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? GroupType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property remark: The remarks on the request.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Remark
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
