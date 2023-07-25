using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MNS::Topics`.</summary>
    [JsiiInterface(nativeType: typeof(IRosTopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.RosTopicsProps")]
    public interface IRosTopicsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: topicName: Topic name.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosTopicsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.RosTopicsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IRosTopicsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: topicName: Topic name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TopicName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
