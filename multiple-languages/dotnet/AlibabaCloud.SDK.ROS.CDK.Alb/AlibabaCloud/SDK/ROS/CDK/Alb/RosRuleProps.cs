using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ALB::Rule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-alb.RosRuleProps")]
    public class RosRuleProps : AlibabaCloud.SDK.ROS.CDK.Alb.IRosRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener that is configured for the Application Load Balancer (ALB)
        /// instance.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ListenerId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the forwarding rule. Valid values: 1 to 10000. A lower value specifies a higher priority.
        /// Note The priority of each forwarding rule within a listener must be unique.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Priority
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleActions: The actions of the forwarding rule.
        /// </remarks>
        [JsiiProperty(name: "ruleActions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RuleActionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object RuleActions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleConditions: The conditions of the forwarding rule.
        /// </remarks>
        [JsiiProperty(name: "ruleConditions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosRule.RuleConditionsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object RuleConditions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the forwarding rule.
        /// The name must be 2 to 128 characters in length.
        /// It can contain letters, digits, periods (.), underscores (_), and hyphens (-). It
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: direction: Rule direction. Valid values: Request or Response.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "direction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Direction
        {
            get;
            set;
        }
    }
}
