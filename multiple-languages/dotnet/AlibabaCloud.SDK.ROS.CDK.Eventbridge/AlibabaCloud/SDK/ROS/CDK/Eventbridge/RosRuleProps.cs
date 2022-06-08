using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EventBridge::Rule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-eventbridge.RosRuleProps")]
    public class RosRuleProps : AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRosRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: eventBusName: The name of the event bus.
        /// </remarks>
        [JsiiProperty(name: "eventBusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EventBusName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: filterPattern: The event pattern, in the JSON format.
        /// </remarks>
        [JsiiProperty(name: "filterPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object FilterPattern
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the event rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: targets: The event target to which events are delivered.
        /// </remarks>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Targets
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the event rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the event rule. Valid values:
        /// ENABLE: The event rule is enabled. It is the default state of the event rule.
        /// DISABLE: The event rule is disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Status
        {
            get;
            set;
        }
    }
}
