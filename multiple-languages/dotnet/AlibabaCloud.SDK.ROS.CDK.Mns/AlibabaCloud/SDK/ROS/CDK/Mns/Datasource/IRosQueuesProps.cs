using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MNS::Queues`.</summary>
    [JsiiInterface(nativeType: typeof(IRosQueuesProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.RosQueuesProps")]
    public interface IRosQueuesProps
    {
        /// <remarks>
        /// <strong>Property</strong>: queueName: Queue name.
        /// </remarks>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::MNS::Queues`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosQueuesProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.RosQueuesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IRosQueuesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: queueName: Queue name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
