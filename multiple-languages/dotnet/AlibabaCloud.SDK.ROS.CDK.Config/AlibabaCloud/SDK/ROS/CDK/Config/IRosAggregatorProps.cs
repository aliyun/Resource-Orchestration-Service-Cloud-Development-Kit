using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `RosAggregator`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAggregatorProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosAggregatorProps")]
    public interface IRosAggregatorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aggregatorName: The name of aggregator.
        /// </remarks>
        [JsiiProperty(name: "aggregatorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggregatorName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of aggregator.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.
        /// </remarks>
        [JsiiProperty(name: "aggregatorAccounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AggregatorAccounts
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: aggregatorType: Account group type. Value:
        /// RD: Global account group.CUSTOM: Custom account group (default value).
        /// </remarks>
        [JsiiProperty(name: "aggregatorType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AggregatorType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAggregator`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAggregatorProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosAggregatorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IRosAggregatorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aggregatorName: The name of aggregator.
            /// </remarks>
            [JsiiProperty(name: "aggregatorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggregatorName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of aggregator.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aggregatorAccounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AggregatorAccounts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: aggregatorType: Account group type. Value:
            /// RD: Global account group.CUSTOM: Custom account group (default value).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aggregatorType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AggregatorType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
