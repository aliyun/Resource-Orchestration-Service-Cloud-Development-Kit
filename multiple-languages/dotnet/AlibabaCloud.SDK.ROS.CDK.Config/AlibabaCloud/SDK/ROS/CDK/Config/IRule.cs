using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Represents a `Rule`.</summary>
    [JsiiInterface(nativeType: typeof(IRule), fullyQualifiedName: "@alicloud/ros-cdk-config.IRule")]
    public interface IRule : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ConfigRuleArn: config rule arn.</summary>
        [JsiiProperty(name: "attrConfigRuleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigRuleArn
        {
            get;
        }

        /// <summary>Attribute ConfigRuleId: The ID of the rule.</summary>
        [JsiiProperty(name: "attrConfigRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigRuleId
        {
            get;
        }

        /// <summary>Attribute ConfigRuleTriggerTypes: The trigger type of the rule.</summary>
        /// <remarks>
        /// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
        /// </remarks>
        [JsiiProperty(name: "attrConfigRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrConfigRuleTriggerTypes
        {
            get;
        }

        /// <summary>Attribute Description: The description of the rule.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute EventSource: The event source of the rule.</summary>
        [JsiiProperty(name: "attrEventSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEventSource
        {
            get;
        }

        /// <summary>Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.</summary>
        [JsiiProperty(name: "attrExcludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExcludeResourceIdsScope
        {
            get;
        }

        /// <summary>Attribute InputParameters: The settings of the input parameters for the rule.</summary>
        [JsiiProperty(name: "attrInputParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInputParameters
        {
            get;
        }

        /// <summary>Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.</summary>
        /// <remarks>
        /// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
        /// </remarks>
        [JsiiProperty(name: "attrMaximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMaximumExecutionFrequency
        {
            get;
        }

        /// <summary>Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrRegionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRegionIdsScope
        {
            get;
        }

        /// <summary>Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrResourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupIdsScope
        {
            get;
        }

        /// <summary>Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.</summary>
        [JsiiProperty(name: "attrResourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceTypesScope
        {
            get;
        }

        /// <summary>Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.</summary>
        /// <remarks>
        /// Valid values:  1: critical 2: warning 3: info
        /// </remarks>
        [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRiskLevel
        {
            get;
        }

        /// <summary>Attribute RuleName: The name of the rule.</summary>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRuleName
        {
            get;
        }

        /// <summary>Attribute SourceIdentifier: The identifier of the rule.</summary>
        /// <remarks>
        /// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
        /// </remarks>
        [JsiiProperty(name: "attrSourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceIdentifier
        {
            get;
        }

        /// <summary>Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.</summary>
        /// <remarks>
        /// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
        /// </remarks>
        [JsiiProperty(name: "attrSourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceOwner
        {
            get;
        }

        /// <summary>Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrTagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTagKeyScope
        {
            get;
        }

        /// <summary>Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.</summary>
        [JsiiProperty(name: "attrTagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTagValueScope
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.RuleProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps Props
        {
            get;
        }

        /// <summary>Represents a `Rule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRule), fullyQualifiedName: "@alicloud/ros-cdk-config.IRule")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IRule
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ConfigRuleArn: config rule arn.</summary>
            [JsiiProperty(name: "attrConfigRuleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigRuleArn
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigRuleId: The ID of the rule.</summary>
            [JsiiProperty(name: "attrConfigRuleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigRuleId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ConfigRuleTriggerTypes: The trigger type of the rule.</summary>
            /// <remarks>
            /// Valid values:  ConfigurationItemChangeNotification: The rule is triggered upon configuration changes. ScheduledNotification: The rule is triggered as scheduled.
            /// </remarks>
            [JsiiProperty(name: "attrConfigRuleTriggerTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrConfigRuleTriggerTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the rule.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EventSource: The event source of the rule.</summary>
            [JsiiProperty(name: "attrEventSource", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEventSource
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExcludeResourceIdsScope: The rule monitors excluded resource IDs, multiple of which are separated by commas, only applies to rules created based on managed rules, , custom rule this field is empty.</summary>
            [JsiiProperty(name: "attrExcludeResourceIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExcludeResourceIdsScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InputParameters: The settings of the input parameters for the rule.</summary>
            [JsiiProperty(name: "attrInputParameters", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInputParameters
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MaximumExecutionFrequency: The frequency of the compliance evaluations.</summary>
            /// <remarks>
            /// Valid values:  One_Hour Three_Hours Six_Hours Twelve_Hours TwentyFour_Hours
            /// </remarks>
            [JsiiProperty(name: "attrMaximumExecutionFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMaximumExecutionFrequency
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RegionIdsScope: The rule monitors region IDs, separated by commas, only applies to rules created based on managed rules.</summary>
            [JsiiProperty(name: "attrRegionIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRegionIdsScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupIdsScope: The rule monitors resource group IDs, separated by commas, only applies to rules created based on managed rules.</summary>
            [JsiiProperty(name: "attrResourceGroupIdsScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupIdsScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceTypesScope: The types of the resources to be evaluated against the rule.</summary>
            [JsiiProperty(name: "attrResourceTypesScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceTypesScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RiskLevel: The risk level of the resources that are not compliant with the rule.</summary>
            /// <remarks>
            /// Valid values:  1: critical 2: warning 3: info
            /// </remarks>
            [JsiiProperty(name: "attrRiskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RuleName: The name of the rule.</summary>
            [JsiiProperty(name: "attrRuleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceIdentifier: The identifier of the rule.</summary>
            /// <remarks>
            /// For a managed rule, the value is the name of the managed rule. For a custom rule, the value is the ARN of the custom rule
            /// </remarks>
            [JsiiProperty(name: "attrSourceIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceIdentifier
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceOwner: Specifies whether you or Alibaba Cloud owns and manages the rule.</summary>
            /// <remarks>
            /// Valid values:  CUSTOM_FC: The rule is a custom rule and you own the rule. ALIYUN: The rule is a managed rule and Alibaba Cloud owns the rule
            /// </remarks>
            [JsiiProperty(name: "attrSourceOwner", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceOwner
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TagKeyScope: The rule monitors the tag key, only applies to rules created based on managed rules.</summary>
            [JsiiProperty(name: "attrTagKeyScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTagKeyScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TagValueScope: The rule monitors the tag value, only applies to rules created based on managed rules.</summary>
            [JsiiProperty(name: "attrTagValueScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTagValueScope
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-config.RuleProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Config.IRuleProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
