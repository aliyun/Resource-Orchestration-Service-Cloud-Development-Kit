using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::Config::Rule`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-rule
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Config.Rule), fullyQualifiedName: "@alicloud/ros-cdk-config.Rule", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-config.RuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Rule : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Config.IRule
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Rule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Rule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Rule(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ConfigRuleArn: config rule arn.</summary>
        [JsiiProperty(name: "attrConfigRuleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigRuleArn
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigRuleId: The ID of the rule.</summary>
        [JsiiProperty(name: "attrConfigRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigRuleId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ConfigRuleTriggerTypes: The trigger type of the rule.</summary>
        /// <remarks>
        /// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        /// </remarks>
        [JsiiProperty(name: "attrConfigRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigRuleTriggerTypes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the rule.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EventSource: The event source of the rule.</summary>
        [JsiiProperty(name: "attrEventSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEventSource
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.</summary>
        [JsiiProperty(name: "attrExcludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExcludeResourceIdsScope
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InputParameters: The settings of the input parameters for the rule.</summary>
        [JsiiProperty(name: "attrInputParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInputParameters
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.</summary>
        /// <remarks>
        /// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        /// </remarks>
        [JsiiProperty(name: "attrMaximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMaximumExecutionFrequency
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrRegionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRegionIdsScope
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrResourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceGroupIdsScope
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.</summary>
        [JsiiProperty(name: "attrResourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResourceTypesScope
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.</summary>
        /// <remarks>
        /// Valid values:  1: critical 2: warning 3: info
        /// </remarks>
        [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRiskLevel
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RuleName: The name of the rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrRuleName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceIdentifier: The identifier of the rule.</summary>
        /// <remarks>
        /// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        /// </remarks>
        [JsiiProperty(name: "attrSourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceIdentifier
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.</summary>
        /// <remarks>
        /// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        /// </remarks>
        [JsiiProperty(name: "attrSourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceOwner
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrTagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTagKeyScope
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrTagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTagValueScope
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.RuleProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
