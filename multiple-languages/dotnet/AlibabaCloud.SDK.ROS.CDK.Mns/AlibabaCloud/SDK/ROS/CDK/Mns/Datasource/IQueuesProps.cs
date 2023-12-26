using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `Queues`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQueuesProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.QueuesProps")]
    public interface IQueuesProps
    {
        /// <summary>Property queueName: Queue name.</summary>
        [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? QueueName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Queues`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQueuesProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.QueuesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IQueuesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property queueName: Queue name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "queueName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? QueueName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
