using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ROCKETMQ5::ConsumerGroups`.</summary>
    [JsiiInterface(nativeType: typeof(IConsumerGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupsProps")]
    public interface IConsumerGroupsProps
    {
        /// <summary>Property instanceId: Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Properties for defining a `DATASOURCE::ROCKETMQ5::ConsumerGroups`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConsumerGroupsProps), fullyQualifiedName: "@alicloud/ros-cdk-rocketmq5.datasource.ConsumerGroupsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rocketmq5.Datasource.IConsumerGroupsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
