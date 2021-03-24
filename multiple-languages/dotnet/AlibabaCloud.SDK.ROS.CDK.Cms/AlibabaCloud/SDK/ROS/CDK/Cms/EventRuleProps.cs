using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::EventRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.EventRuleProps")]
    public class EventRuleProps : AlibabaCloud.SDK.ROS.CDK.Cms.IEventRuleProps
    {
        /// <summary>Property eventPattern: Event pattern configuration.A maximum of 20 event patterns.</summary>
        [JsiiProperty(name: "eventPattern", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosEventRule.EventPatternProperty\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object EventPattern
        {
            get;
            set;
        }

        /// <summary>Property ruleName: The name of the alarm rule.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RuleName
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the alert rule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property eventType: The type of the event alert.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property groupId: The ID of the application group.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? GroupId
        {
            get;
            set;
        }

        /// <summary>Property state: The status of the alert rule.</summary>
        /// <remarks>
        /// Valid values:
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
