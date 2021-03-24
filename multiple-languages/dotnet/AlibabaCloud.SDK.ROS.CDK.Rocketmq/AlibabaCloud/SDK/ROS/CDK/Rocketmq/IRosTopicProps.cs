using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Topic`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.RosTopicProps")]
    public interface IRosTopicProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: messageType: The type of the message. Valid values:
        /// 0: normal message
        /// 1: partitionally ordered message
        /// 2: globally ordered message
        /// 4: transactional message
        /// 5: scheduled/delayed message
        /// </remarks>
        [JsiiProperty(name: "messageType", typeJson: "{\"primitive\":\"number\"}")]
        double MessageType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: topic: The name of the topic you want to create.
        /// Note:
        /// "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
        /// If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
        /// If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
        /// </remarks>
        [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}")]
        string Topic
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: perm: Set the read-write mode for the topic Valid values.:
        /// 6: Both read and write operations are supported.
        /// 4: Write operation is prohibited.
        /// 2: Read operation is prohibited.
        /// </remarks>
        [JsiiProperty(name: "perm", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Perm
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The remarks on the request. This parameter can be left blank.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Remark
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Topic`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosTopicProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.RosTopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq.IRosTopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: messageType: The type of the message. Valid values:
            /// 0: normal message
            /// 1: partitionally ordered message
            /// 2: globally ordered message
            /// 4: transactional message
            /// 5: scheduled/delayed message
            /// </remarks>
            [JsiiProperty(name: "messageType", typeJson: "{\"primitive\":\"number\"}")]
            public double MessageType
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: The name of the topic you want to create.
            /// Note:
            /// "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
            /// If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
            /// If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"primitive\":\"string\"}")]
            public string Topic
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: perm: Set the read-write mode for the topic Valid values.:
            /// 6: Both read and write operations are supported.
            /// 4: Write operation is prohibited.
            /// 2: Read operation is prohibited.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "perm", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Perm
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: The remarks on the request. This parameter can be left blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Remark
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
