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
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
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
        [JsiiProperty(name: "messageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object MessageType
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
        [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Topic
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: perm: Set the read-write mode for the topic Valid values.:
        /// 6: Both read and write operations are supported.
        /// 4: Write operation is prohibited.
        /// 2: Read operation is prohibited.
        /// </remarks>
        [JsiiProperty(name: "perm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Perm
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: remark: The remarks on the request. This parameter can be left blank.
        /// </remarks>
        [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Remark
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
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: messageType: The type of the message. Valid values:
            /// 0: normal message
            /// 1: partitionally ordered message
            /// 2: globally ordered message
            /// 4: transactional message
            /// 5: scheduled/delayed message
            /// </remarks>
            [JsiiProperty(name: "messageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MessageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: topic: The name of the topic you want to create.
            /// Note:
            /// "CID" and "GID" are the reserved fields of a group ID, and they cannot be the start of a topic name.
            /// If namespaces are available in the instance for which the topic is created, the topic name must be unique in the instance and can be duplicated across instances.
            /// If no namespaces are available in the instance, the topic name must be unique both in the instance and across instances.
            /// </remarks>
            [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Topic
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: perm: Set the read-write mode for the topic Valid values.:
            /// 6: Both read and write operations are supported.
            /// 4: Write operation is prohibited.
            /// 2: Read operation is prohibited.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "perm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Perm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: remark: The remarks on the request. This parameter can be left blank.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "remark", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Remark
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
