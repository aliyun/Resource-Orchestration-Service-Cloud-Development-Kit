using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::EventRuleTargets`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosEventRuleTargetsProps")]
    public class RosEventRuleTargetsProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosEventRuleTargetsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactParameters: CONTACT configuration.A maximum of 5 parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "contactParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.ContactParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? ContactParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: fcParameters: FC configuration.A maximum of 5 parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "fcParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.FcParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? FcParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: mnsParameters: MNS configuration.A maximum of 5 parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mnsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.MnsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? MnsParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slsParameters: SLS configuration.A maximum of 5 parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slsParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.SlsParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SlsParameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: webhookParameters: WEBHOOK configuration.A maximum of 5 parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webhookParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRuleTargets.WebhookParametersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? WebhookParameters
        {
            get;
            set;
        }
    }
}
