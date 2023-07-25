using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MNS::Topics`.</summary>
    [JsiiInterface(nativeType: typeof(ITopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.TopicsProps")]
    public interface ITopicsProps
    {
        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TopicName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::MNS::Topics`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.TopicsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ITopicsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property topicName: Topic name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopicName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
