using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `RosAggregateCompliancePack`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAggregateCompliancePackProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosAggregateCompliancePackProps")]
    public interface IRosAggregateCompliancePackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aggregatorId: Aggregator id.
        /// </remarks>
        [JsiiProperty(name: "aggregatorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggregatorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: compliancePackName: Compliance package name.
        /// </remarks>
        [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CompliancePackName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: configRules: List of rules in the compliance package.
        /// </remarks>
        [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ConfigRules
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of compliance pack.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: riskLevel: Compliance package risk level. Value:
        /// 1: High risk.
        /// 2: Medium risk.
        /// 3: Low risk.
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskLevel
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: compliancePackTemplateId: Compliance package template ID.
        /// </remarks>
        [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompliancePackTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultEnable: Whether the rule supports quick activation. Value:
        /// true: This rule will be enabled when the compliance package is quickly enabled.
        /// false (default): disable
        /// </remarks>
        [JsiiProperty(name: "defaultEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
        /// </remarks>
        [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeResourceIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
        /// </remarks>
        [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
        /// </remarks>
        [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagKeyScope
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
        /// </remarks>
        [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagValueScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosAggregateCompliancePack`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAggregateCompliancePackProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosAggregateCompliancePackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IRosAggregateCompliancePackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aggregatorId: Aggregator id.
            /// </remarks>
            [JsiiProperty(name: "aggregatorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggregatorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: compliancePackName: Compliance package name.
            /// </remarks>
            [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CompliancePackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: configRules: List of rules in the compliance package.
            /// </remarks>
            [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ConfigRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of compliance pack.
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: riskLevel: Compliance package risk level. Value:
            /// 1: High risk.
            /// 2: Medium risk.
            /// 3: Low risk.
            /// </remarks>
            [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: compliancePackTemplateId: Compliance package template ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompliancePackTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultEnable: Whether the rule supports quick activation. Value:
            /// true: This rule will be enabled when the compliance package is quickly enabled.
            /// false (default): disable
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExcludeResourceIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: regionIdsScope: The compliance package only takes effect for resources in the specified region ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RegionIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceGroupIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagKeyScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagValueScope
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
