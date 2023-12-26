using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `AggregateCompliancePack`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAggregateCompliancePackProps), fullyQualifiedName: "@alicloud/ros-cdk-config.AggregateCompliancePackProps")]
    public interface IAggregateCompliancePackProps
    {
        /// <summary>Property aggregatorId: Aggregator id.</summary>
        [JsiiProperty(name: "aggregatorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggregatorId
        {
            get;
        }

        /// <summary>Property compliancePackName: Compliance package name.</summary>
        [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CompliancePackName
        {
            get;
        }

        /// <summary>Property configRules: List of rules in the compliance package.</summary>
        [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ConfigRules
        {
            get;
        }

        /// <summary>Property description: The description of compliance pack.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property riskLevel: Compliance package risk level.</summary>
        /// <remarks>
        /// Value:
        /// 1: High risk.
        /// 2: Medium risk.
        /// 3: Low risk.
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskLevel
        {
            get;
        }

        /// <summary>Property compliancePackTemplateId: Compliance package template ID.</summary>
        [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompliancePackTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultEnable: Whether the rule supports quick activation.</summary>
        /// <remarks>
        /// Value:
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

        /// <summary>Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.</summary>
        [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeResourceIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.</summary>
        [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.</summary>
        [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.</summary>
        [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagKeyScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.</summary>
        [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagValueScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AggregateCompliancePack`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-aggregatecompliancepack
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAggregateCompliancePackProps), fullyQualifiedName: "@alicloud/ros-cdk-config.AggregateCompliancePackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IAggregateCompliancePackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aggregatorId: Aggregator id.</summary>
            [JsiiProperty(name: "aggregatorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggregatorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property compliancePackName: Compliance package name.</summary>
            [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CompliancePackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property configRules: List of rules in the compliance package.</summary>
            [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosAggregateCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ConfigRules
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of compliance pack.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property riskLevel: Compliance package risk level.</summary>
            /// <remarks>
            /// Value:
            /// 1: High risk.
            /// 2: Medium risk.
            /// 3: Low risk.
            /// </remarks>
            [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property compliancePackTemplateId: Compliance package template ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompliancePackTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultEnable: Whether the rule supports quick activation.</summary>
            /// <remarks>
            /// Value:
            /// true: This rule will be enabled when the compliance package is quickly enabled.
            /// false (default): disable
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excludeResourceIdsScope: The compliance package is invalid for the specified resource ID, that is, no evaluation is performed on the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExcludeResourceIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionIdsScope: The compliance package only takes effect for resources in the specified region ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RegionIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupIdsScope: The compliance package only takes effect on resources in the specified resource group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ResourceGroupIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagKeyScope: Compliance packages only take effect on resources bound to the specified tag key.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagKeyScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagValueScope: Compliance packages only take effect on resources bound to specified tag key-value pairs.TagValueScope needs to be used in conjunction with TagKeyScope.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagValueScope
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
