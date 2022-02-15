using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `ALIYUN::Config::Rule`.</summary>
    [JsiiInterface(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RuleProps")]
    public interface IRuleProps
    {
        /// <summary>Property configRuleTriggerTypes: The trigger type of the rule.</summary>
        /// <remarks>
        /// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        /// </remarks>
        [JsiiProperty(name: "configRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ConfigRuleTriggerTypes
        {
            get;
        }

        /// <summary>Property resourceTypesScope: The types of the resources to be evaluated against the rule.</summary>
        [JsiiProperty(name: "resourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ResourceTypesScope
        {
            get;
        }

        /// <summary>Property riskLevel: The risk level of the resources that are not compliant with the rule.</summary>
        /// <remarks>
        /// Valid values:  1: critical 2: warning 3: info
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskLevel
        {
            get;
        }

        /// <summary>Property ruleName: The name of the rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property sourceIdentifier: The identifier of the rule.</summary>
        /// <remarks>
        /// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        /// </remarks>
        [JsiiProperty(name: "sourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceIdentifier
        {
            get;
        }

        /// <summary>Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.</summary>
        /// <remarks>
        /// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        /// </remarks>
        [JsiiProperty(name: "sourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceOwner
        {
            get;
        }

        /// <summary>Property description: The description of the rule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.</summary>
        [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExcludeResourceIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property inputParameters: The settings of the input parameters for the rule.</summary>
        [JsiiProperty(name: "inputParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InputParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maximumExecutionFrequency: The frequency of the compliance evaluations.</summary>
        /// <remarks>
        /// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        /// </remarks>
        [JsiiProperty(name: "maximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaximumExecutionFrequency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RegionIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupIdsScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagKeyLogicScope:.</summary>
        [JsiiProperty(name: "tagKeyLogicScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagKeyLogicScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagKeyScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TagValueScope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::Config::Rule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property configRuleTriggerTypes: The trigger type of the rule.</summary>
            /// <remarks>
            /// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
            /// </remarks>
            [JsiiProperty(name: "configRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ConfigRuleTriggerTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceTypesScope: The types of the resources to be evaluated against the rule.</summary>
            [JsiiProperty(name: "resourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ResourceTypesScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property riskLevel: The risk level of the resources that are not compliant with the rule.</summary>
            /// <remarks>
            /// Valid values:  1: critical 2: warning 3: info
            /// </remarks>
            [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: The name of the rule.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceIdentifier: The identifier of the rule.</summary>
            /// <remarks>
            /// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
            /// </remarks>
            [JsiiProperty(name: "sourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.</summary>
            /// <remarks>
            /// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
            /// </remarks>
            [JsiiProperty(name: "sourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceOwner
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExcludeResourceIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property inputParameters: The settings of the input parameters for the rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "inputParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? InputParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maximumExecutionFrequency: The frequency of the compliance evaluations.</summary>
            /// <remarks>
            /// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaximumExecutionFrequency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RegionIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupIdsScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagKeyLogicScope:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagKeyLogicScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagKeyLogicScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagKeyScope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TagValueScope
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
