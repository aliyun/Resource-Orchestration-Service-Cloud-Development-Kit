using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mns.Datasource
{
    /// <summary>Properties for defining a `RosSubscriptions`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSubscriptionsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.RosSubscriptionsProps")]
    public interface IRosSubscriptionsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: topicName: Topic name.
        /// </remarks>
        [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TopicName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionName: Subscription name.
        /// </remarks>
        [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SubscriptionName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSubscriptions`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-subscriptions
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSubscriptionsProps), fullyQualifiedName: "@alicloud/ros-cdk-mns.datasource.RosSubscriptionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mns.Datasource.IRosSubscriptionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: topicName: Topic name.
            /// </remarks>
            [JsiiProperty(name: "topicName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TopicName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: subscriptionName: Subscription name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "subscriptionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SubscriptionName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
