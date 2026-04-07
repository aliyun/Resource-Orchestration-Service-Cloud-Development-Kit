using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosWafRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWafRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWafRuleProps")]
    public interface IRosWafRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: phase: The version of the website.
        /// </remarks>
        [JsiiProperty(name: "phase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Phase
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: config: The configuration of the rule.
        /// </remarks>
        [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWafRule.ConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Config
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850233.html) operation.
        /// </remarks>
        [JsiiProperty(name: "rulesetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RulesetId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: shared: The configurations shared by multiple rules.
        /// </remarks>
        [JsiiProperty(name: "shared", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWafRule.SharedProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Shared
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: siteVersion: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
        /// </remarks>
        [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SiteVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosWafRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-wafrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWafRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWafRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosWafRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: phase: The version of the website.
            /// </remarks>
            [JsiiProperty(name: "phase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Phase
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: config: The configuration of the rule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "config", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWafRule.ConfigProperty\"}]}}", isOptional: true)]
            public object? Config
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rulesetId: The ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850233.html) operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rulesetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RulesetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: shared: The configurations shared by multiple rules.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "shared", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-esa.RosWafRule.SharedProperty\"}]}}", isOptional: true)]
            public object? Shared
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: siteVersion: The website ID, which can be obtained by calling the [ListSites](https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850189.html) operation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "siteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SiteVersion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
