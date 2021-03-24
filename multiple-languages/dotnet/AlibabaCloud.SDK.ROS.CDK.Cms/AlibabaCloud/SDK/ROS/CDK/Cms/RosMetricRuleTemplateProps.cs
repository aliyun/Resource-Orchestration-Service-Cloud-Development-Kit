using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::MetricRuleTemplate`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosMetricRuleTemplateProps")]
    public class RosMetricRuleTemplateProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosMetricRuleTemplateProps
    {
        /// <remarks>
        /// <strong>Property</strong>: name: The name of the alert template.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: alertTemplates: Valid values of N: 0 to 200.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "alertTemplates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? AlertTemplates
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restVersion: The version of the alert template. Call DescribeMetricRuleTemplateList or DescribeMetricRuleTemplateAttribute
        /// to obtain information about the alert templates. The combination of version and ID
        /// uniquely identifies an alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RestVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateId: The ID of the alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TemplateId
        {
            get;
            set;
        }
    }
}
