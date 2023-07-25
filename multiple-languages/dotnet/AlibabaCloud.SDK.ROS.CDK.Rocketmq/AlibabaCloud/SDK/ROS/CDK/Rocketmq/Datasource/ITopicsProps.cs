using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ROCKETMQ::Topics`.</summary>
    [JsiiInterface(nativeType: typeof(ITopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.datasource.TopicsProps")]
    public interface ITopicsProps
    {
        /// <summary>Property instanceId: InstanceId.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property topicName: TopicName.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TopicName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ROCKETMQ::Topics`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq.datasource.TopicsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq.Datasource.ITopicsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: InstanceId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property topicName: TopicName.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopicName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
