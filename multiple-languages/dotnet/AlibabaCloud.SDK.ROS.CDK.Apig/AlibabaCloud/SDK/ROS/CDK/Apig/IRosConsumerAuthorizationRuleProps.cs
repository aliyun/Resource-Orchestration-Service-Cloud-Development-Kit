using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Properties for defining a `RosConsumerAuthorizationRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosConsumerAuthorizationRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosConsumerAuthorizationRuleProps")]
    public interface IRosConsumerAuthorizationRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: consumerId: The consumer ID.
        /// </remarks>
        [JsiiProperty(name: "consumerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConsumerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceIdentifier: Resource identifier for non-standard code sources.
        /// </remarks>
        [JsiiProperty(name: "resourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty\"}]}}")]
        object ResourceIdentifier
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceType: The resource type.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
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

        /// <remarks>
        /// <strong>Property</strong>: expireTimestamp: The expire timestamp in milliseconds.
        /// </remarks>
        [JsiiProperty(name: "expireTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExpireTimestamp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosConsumerAuthorizationRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosConsumerAuthorizationRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-apig.RosConsumerAuthorizationRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IRosConsumerAuthorizationRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: consumerId: The consumer ID.
            /// </remarks>
            [JsiiProperty(name: "consumerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConsumerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceIdentifier: Resource identifier for non-standard code sources.
            /// </remarks>
            [JsiiProperty(name: "resourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty\"}]}}")]
            public object ResourceIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceType: The resource type.
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: expireMode: The expire mode. Valid values: LongTerm, ShortTerm.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expireMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpireMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: expireTimestamp: The expire timestamp in milliseconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expireTimestamp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpireTimestamp
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
