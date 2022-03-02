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
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: alertTemplates: Valid values of N: 0 to 200.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "alertTemplates", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosMetricRuleTemplate.AlertTemplatesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? AlertTemplates
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
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
        [JsiiProperty(name: "restVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RestVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateId: The ID of the alert template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TemplateId
        {
            get;
            set;
        }
    }
}
