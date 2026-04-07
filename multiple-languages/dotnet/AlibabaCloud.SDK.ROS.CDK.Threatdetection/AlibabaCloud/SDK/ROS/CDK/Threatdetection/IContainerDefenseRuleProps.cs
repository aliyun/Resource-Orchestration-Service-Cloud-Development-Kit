using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `ContainerDefenseRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IContainerDefenseRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ContainerDefenseRuleProps")]
    public interface IContainerDefenseRuleProps
    {
        /// <summary>Property description: Rule description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleAction: The action that is performed when the rule is hit.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>1</strong>: alert</description>
        /// <description><strong>2</strong>: block.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleAction
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleId: Rule Id.</summary>
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleName: The name of the rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleSwitch: The switch of the rule.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>0: off.</description>
        /// <description>1: on.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleSwitch
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ruleType: The rule type.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>2: User Rules</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RuleType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scope: Rule scope.</summary>
        [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.ScopeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scope
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property whitelist: The whitelist of rule.</summary>
        [JsiiProperty(name: "whitelist", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.WhitelistProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Whitelist
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property whitelistHash: The whitelist Hash.</summary>
        [JsiiProperty(name: "whitelistHash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WhitelistHash
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ContainerDefenseRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-containerdefenserule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IContainerDefenseRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.ContainerDefenseRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IContainerDefenseRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: Rule description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleAction: The action that is performed when the rule is hit.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>1</strong>: alert</description>
            /// <description><strong>2</strong>: block.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleAction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleAction
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleId: Rule Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleName: The name of the rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleSwitch: The switch of the rule.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>0: off.</description>
            /// <description>1: on.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleSwitch", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleSwitch
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ruleType: The rule type.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>2: User Rules</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ruleType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RuleType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scope: Rule scope.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "scope", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.ScopeProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Scope
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property whitelist: The whitelist of rule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "whitelist", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosContainerDefenseRule.WhitelistProperty\"}]}}", isOptional: true)]
            public object? Whitelist
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property whitelistHash: The whitelist Hash.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "whitelistHash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? WhitelistHash
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
