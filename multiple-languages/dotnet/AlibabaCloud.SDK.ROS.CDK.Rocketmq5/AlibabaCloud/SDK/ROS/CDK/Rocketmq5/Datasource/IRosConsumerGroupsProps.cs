using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ROCKETMQ5::ConsumerGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IRosConsumerGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.RosConsumerGroupsProps")]
    public interface IRosConsumerGroupsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: Instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::ROCKETMQ5::ConsumerGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.RosConsumerGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IRosConsumerGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: Instance ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
