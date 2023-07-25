using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MNS::Subscriptions`.</summary>
    [JsiiInterface(nativeType: typeof(ISubscriptionsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.SubscriptionsProps")]
    public interface ISubscriptionsProps
    {
        /// <summary>Property topicName: Topic name.</summary>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <summary>Property subscriptionName: Subscription name.</summary>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SubscriptionName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::MNS::Subscriptions`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISubscriptionsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.SubscriptionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.ISubscriptionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property topicName: Topic name.</summary>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property subscriptionName: Subscription name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SubscriptionName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
