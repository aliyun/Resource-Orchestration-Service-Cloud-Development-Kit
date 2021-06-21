using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Config::Rule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-config.RuleProps")]
    public class RuleProps : AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps
    {
        /// <summary>Property configRuleTriggerTypes: The trigger type of the rule.</summary>
        /// <remarks>
        /// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        /// </remarks>
        [JsiiProperty(name: "configRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ConfigRuleTriggerTypes
        {
            get;
            set;
        }

        /// <summary>Property resourceTypesScope: The types of the resources to be evaluated against the rule.</summary>
        [JsiiProperty(name: "resourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ResourceTypesScope
        {
            get;
            set;
        }

        /// <summary>Property riskLevel: The risk level of the resources that are not compliant with the rule.</summary>
        /// <remarks>
        /// Valid values:  1: critical 2: warning 3: info
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RiskLevel
        {
            get;
            set;
        }

        /// <summary>Property ruleName: The name of the rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RuleName
        {
            get;
            set;
        }

        /// <summary>Property sourceIdentifier: The identifier of the rule.</summary>
        /// <remarks>
        /// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        /// </remarks>
        [JsiiProperty(name: "sourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceIdentifier
        {
            get;
            set;
        }

        /// <summary>Property sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.</summary>
        /// <remarks>
        /// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        /// </remarks>
        [JsiiProperty(name: "sourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceOwner
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the rule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ExcludeResourceIdsScope
        {
            get;
            set;
        }

        /// <summary>Property inputParameters: The settings of the input parameters for the rule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "inputParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? InputParameters
        {
            get;
            set;
        }

        /// <summary>Property maximumExecutionFrequency: The frequency of the compliance evaluations.</summary>
        /// <remarks>
        /// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MaximumExecutionFrequency
        {
            get;
            set;
        }

        /// <summary>Property regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RegionIdsScope
        {
            get;
            set;
        }

        /// <summary>Property resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceGroupIdsScope
        {
            get;
            set;
        }

        /// <summary>Property tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TagKeyScope
        {
            get;
            set;
        }

        /// <summary>Property tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TagValueScope
        {
            get;
            set;
        }
    }
}
