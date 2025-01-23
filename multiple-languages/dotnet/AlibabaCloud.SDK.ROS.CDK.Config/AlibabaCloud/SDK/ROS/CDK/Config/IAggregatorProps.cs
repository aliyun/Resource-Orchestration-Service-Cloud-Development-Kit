using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `Aggregator`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAggregatorProps), fullyQualifiedName: "@alicloud/ros-cdk-config.AggregatorProps")]
    public interface IAggregatorProps
    {
        /// <summary>Property aggregatorName: The name of aggregator.</summary>
        [JsiiProperty(name: "aggregatorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggregatorName
        {
            get;
        }

        /// <summary>Property description: The description of aggregator.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.When the AggregatorType is FOLDER, this parameter can be empty,which means that all accounts in the resource folder will be added to the global account group.</summary>
        [JsiiProperty(name: "aggregatorAccounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AggregatorAccounts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property aggregatorType: Account group type.</summary>
        /// <remarks>
        /// Value:
        /// RD: Global account group.
        /// CUSTOM: Custom account group (default value).
        /// FOLDER: Folder account group. Must set FolderId if the AggregatorType is FOLDER. Please refer to ListAccounts for accessing FolderId.
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

        /// <summary>Property folderId: The folder ID.</summary>
        [JsiiProperty(name: "folderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FolderId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Aggregator`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregator
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAggregatorProps), fullyQualifiedName: "@alicloud/ros-cdk-config.AggregatorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IAggregatorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aggregatorName: The name of aggregator.</summary>
            [JsiiProperty(name: "aggregatorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggregatorName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of aggregator.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aggregatorAccounts: The member account in aggregator.When the AggregatorType is RD, this parameter can be empty, which means that all accounts in the resource directory will be added to the global account group.When the AggregatorType is FOLDER, this parameter can be empty,which means that all accounts in the resource folder will be added to the global account group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "aggregatorAccounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregator.AggregatorAccountsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? AggregatorAccounts
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property aggregatorType: Account group type.</summary>
            /// <remarks>
            /// Value:
            /// RD: Global account group.
            /// CUSTOM: Custom account group (default value).
            /// FOLDER: Folder account group. Must set FolderId if the AggregatorType is FOLDER. Please refer to ListAccounts for accessing FolderId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aggregatorType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AggregatorType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property folderId: The folder ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "folderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FolderId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
