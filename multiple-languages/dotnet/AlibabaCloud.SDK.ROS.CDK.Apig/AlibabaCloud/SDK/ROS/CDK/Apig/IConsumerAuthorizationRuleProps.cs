using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `ConsumerAuthorizationRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IConsumerAuthorizationRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.ConsumerAuthorizationRuleProps")]
    public interface IConsumerAuthorizationRuleProps
    {
        /// <summary>Property consumerId: The consumer ID.</summary>
        [JsiiProperty(name: "consumerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerId
        {
            get;
        }

        /// <summary>Property resourceIdentifier: Resource identifier for non-standard code sources.</summary>
        [JsiiProperty(name: "resourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty\"}]}}")]
        object ResourceIdentifier
        {
            get;
        }

        /// <summary>Property resourceType: The resource type.</summary>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <summary>Property expireMode: The expire mode.</summary>
        /// <remarks>
        /// Valid values: LongTerm, ShortTerm.
        /// </remarks>
        [JsiiProperty(name: "expireMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExpireMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property expireTimestamp: The expire timestamp in milliseconds.</summary>
        [JsiiProperty(name: "expireTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExpireTimestamp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ConsumerAuthorizationRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IConsumerAuthorizationRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.ConsumerAuthorizationRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IConsumerAuthorizationRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property consumerId: The consumer ID.</summary>
            [JsiiProperty(name: "consumerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceIdentifier: Resource identifier for non-standard code sources.</summary>
            [JsiiProperty(name: "resourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty\"}]}}")]
            public object ResourceIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceType: The resource type.</summary>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property expireMode: The expire mode.</summary>
            /// <remarks>
            /// Valid values: LongTerm, ShortTerm.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expireMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpireMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property expireTimestamp: The expire timestamp in milliseconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "expireTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpireTimestamp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
