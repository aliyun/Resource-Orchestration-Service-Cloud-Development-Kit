using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq
{
    /// <summary>Properties for defining a `ALIYUN::ROCKETMQ::Topic`.</summary>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property instanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property messageType: The type of the message.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property topic: The name of the topic you want to create.</summary>
        /// <remarks>
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

        /// <summary>Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.</summary>
        [JsiiProperty(name: "perm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Perm
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property remark: The remarks on the request.</summary>
        /// <remarks>
        /// This parameter can be left blank.
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
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property messageType: The type of the message.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property topic: The name of the topic you want to create.</summary>
            /// <remarks>
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

            /// <summary>Property perm: Set the read-write mode for the topic Valid values.: 6: Both read and write operations are supported. 4: Write operation is prohibited. 2: Read operation is prohibited.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "perm", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Perm
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property remark: The remarks on the request.</summary>
            /// <remarks>
            /// This parameter can be left blank.
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
