using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::EventRuleTargets`.</summary>
    [JsiiInterface(nativeType: typeof(IEventRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.EventRuleTargetsProps")]
    public interface IEventRuleTargetsProps
    {
        /// <summary>Property ruleName: The name of the alert rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
        string RuleName
        {
            get;
        }

        /// <summary>Property contactParameters: CONTACT configuration.A maximum of 5 parameters.</summary>
        [JsiiProperty(name: "contactParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContactParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fcParameters: FC configuration.A maximum of 5 parameters.</summary>
        [JsiiProperty(name: "fcParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FcParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mnsParameters: MNS configuration.A maximum of 5 parameters.</summary>
        [JsiiProperty(name: "mnsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MnsParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slsParameters: SLS configuration.A maximum of 5 parameters.</summary>
        [JsiiProperty(name: "slsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlsParameters
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IEventRuleTargetsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.EventRuleTargetsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleTargetsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ruleName: The name of the alert rule.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}")]
            public string RuleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property contactParameters: CONTACT configuration.A maximum of 5 parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "contactParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ContactParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fcParameters: FC configuration.A maximum of 5 parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fcParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? FcParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mnsParameters: MNS configuration.A maximum of 5 parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "mnsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MnsParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slsParameters: SLS configuration.A maximum of 5 parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SlsParameters
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "webhookParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? WebhookParameters
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
