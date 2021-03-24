using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.NestedStackProps")]
    public class NestedStackProps : AlibabaCloud.SDK.ROS.CDK.Core.INestedStackProps
    {
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>? Parameters
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "templateBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TemplateBody
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "templateUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TemplateUrl
        {
            get;
            set;
        }

        [JsiiOptional]
        [JsiiProperty(name: "timeout", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Timeout
        {
            get;
            set;
        }
    }
}
