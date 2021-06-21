using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Config::Rule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-config.RosRuleProps")]
    public class RosRuleProps : AlibabaCloud.SDK.ROS.CDK.Config.IRosRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: configRuleTriggerTypes: The trigger type of the rule. Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        /// </remarks>
        [JsiiProperty(name: "configRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ConfigRuleTriggerTypes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceTypesScope: The types of the resources to be evaluated against the rule
        /// </remarks>
        [JsiiProperty(name: "resourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object ResourceTypesScope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: riskLevel: The risk level of the resources that are not compliant with the rule. Valid values:  1: critical 2: warning 3: info
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RiskLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceIdentifier: The identifier of the rule.  For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        /// </remarks>
        [JsiiProperty(name: "sourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceIdentifier
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule. Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        /// </remarks>
        [JsiiProperty(name: "sourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object SourceOwner
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the rule
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: excludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "excludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ExcludeResourceIdsScope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: inputParameters: The settings of the input parameters for the rule
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "inputParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? InputParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maximumExecutionFrequency: The frequency of the compliance evaluations. Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MaximumExecutionFrequency
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: regionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "regionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RegionIdsScope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ResourceGroupIdsScope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TagKeyScope
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? TagValueScope
        {
            get;
            set;
        }
    }
}
