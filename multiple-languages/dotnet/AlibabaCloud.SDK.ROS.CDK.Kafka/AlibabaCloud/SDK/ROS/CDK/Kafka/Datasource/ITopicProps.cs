using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka.Datasource
{
    /// <summary>Properties for defining a `Topic`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.datasource.TopicProps")]
    public interface ITopicProps
    {
        /// <summary>Property instanceId: Resource id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property topic: Topic Name.</summary>
        [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Topic
        {
            get;
        }

        /// <summary>Properties for defining a `Topic`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topic
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITopicProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.datasource.TopicProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.Datasource.ITopicProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: Resource id.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property topic: Topic Name.</summary>
            [JsiiProperty(name: "topic", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Topic
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
