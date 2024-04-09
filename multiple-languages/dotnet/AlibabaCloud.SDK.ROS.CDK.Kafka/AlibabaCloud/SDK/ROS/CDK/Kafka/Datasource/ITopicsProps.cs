using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kafka.Datasource
{
    /// <summary>Properties for defining a `Topics`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.datasource.TopicsProps")]
    public interface ITopicsProps
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

        /// <summary>Properties for defining a `Topics`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kafka-topics
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-kafka.datasource.TopicsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kafka.Datasource.ITopicsProps
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
