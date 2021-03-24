using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::EventRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosEventRuleProps")]
    public class RosEventRuleProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosEventRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: eventPattern: Event pattern configuration.A maximum of 20 event patterns.
        /// </remarks>
        [JsiiProperty(name: "eventPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object EventPattern
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the alarm rule.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the alert rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: eventType: The type of the event alert. Valid values:
        /// SYSTEM
        /// CUSTOM
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eventType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EventType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: The ID of the application group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: state: The status of the alert rule. Valid values:
        /// ENABLED
        /// DISABLED
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "state", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? State
        {
            get;
            set;
        }
    }
}
