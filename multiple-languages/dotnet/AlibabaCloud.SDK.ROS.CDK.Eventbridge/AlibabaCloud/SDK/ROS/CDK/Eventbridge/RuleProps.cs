using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Eventbridge
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EventBridge::Rule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-eventbridge.RuleProps")]
    public class RuleProps : AlibabaCloud.SDK.ROS.CDK.Eventbridge.IRuleProps
    {
        /// <summary>Property eventBusName: The name of the event bus.</summary>
        [JsiiProperty(name: "eventBusName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object EventBusName
        {
            get;
            set;
        }

        /// <summary>Property filterPattern: The event pattern, in the JSON format.</summary>
        [JsiiProperty(name: "filterPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object FilterPattern
        {
            get;
            set;
        }

        /// <summary>Property ruleName: The name of the event rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RuleName
        {
            get;
            set;
        }

        /// <summary>Property targets: The event target to which events are delivered.</summary>
        [JsiiProperty(name: "targets", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-eventbridge.RosRule.TargetsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object Targets
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the event rule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property status: The status of the event rule.</summary>
        /// <remarks>
        /// Valid values:
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
