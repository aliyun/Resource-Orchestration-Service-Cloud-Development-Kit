using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::EventRuleTargets`.</summary>
    [JsiiInterface(nativeType: typeof(IRosEventRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosEventRuleTargetsProps")]
    public interface IRosEventRuleTargetsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
        string RuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactParameters: CONTACT configuration.A maximum of 5 parameters
        /// </remarks>
        [JsiiProperty(name: "contactParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContactParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fcParameters: FC configuration.A maximum of 5 parameters.
        /// </remarks>
        [JsiiProperty(name: "fcParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FcParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mnsParameters: MNS configuration.A maximum of 5 parameters
        /// </remarks>
        [JsiiProperty(name: "mnsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MnsParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: slsParameters: SLS configuration.A maximum of 5 parameters.
        /// </remarks>
        [JsiiProperty(name: "slsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsParameters
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        /// </remarks>
        [JsiiProperty(name: "webhookParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? WebhookParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::EventRuleTargets`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosEventRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosEventRuleTargetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosEventRuleTargetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: The name of the alert rule.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RuleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactParameters: CONTACT configuration.A maximum of 5 parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contactParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ContactParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fcParameters: FC configuration.A maximum of 5 parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fcParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FcParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mnsParameters: MNS configuration.A maximum of 5 parameters
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mnsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MnsParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: slsParameters: SLS configuration.A maximum of 5 parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SlsParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "webhookParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WebhookParameters
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
