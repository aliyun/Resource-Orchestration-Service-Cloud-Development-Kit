using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::EventRuleTargets`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.EventRuleTargetsProps")]
    public class EventRuleTargetsProps : AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleTargetsProps
    {
        /// <summary>Property ruleName: The name of the alert rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RuleName
        {
            get;
            set;
        }

        /// <summary>Property contactParameters: CONTACT configuration.A maximum of 5 parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "contactParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ContactParameters
        {
            get;
            set;
        }

        /// <summary>Property fcParameters: FC configuration.A maximum of 5 parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "fcParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? FcParameters
        {
            get;
            set;
        }

        /// <summary>Property mnsParameters: MNS configuration.A maximum of 5 parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "mnsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MnsParameters
        {
            get;
            set;
        }

        /// <summary>Property slsParameters: SLS configuration.A maximum of 5 parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "slsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? SlsParameters
        {
            get;
            set;
        }

        /// <summary>Property webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "webhookParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? WebhookParameters
        {
            get;
            set;
        }
    }
}
