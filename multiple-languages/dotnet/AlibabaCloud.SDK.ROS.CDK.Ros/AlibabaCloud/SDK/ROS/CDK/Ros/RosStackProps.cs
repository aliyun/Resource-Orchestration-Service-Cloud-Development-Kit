using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::Stack`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.RosStackProps")]
    public class RosStackProps : AlibabaCloud.SDK.ROS.CDK.Ros.IRosStackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: parameters: The set of parameters passed to this nested stack.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? Parameters
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateBody: Structure containing the template body.
        /// It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
        /// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateBody", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true, isOverride: true)]
        public object? TemplateBody
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateId: Template ID of template containing the template body.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TemplateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateUrl: Location of file containing the template body. The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss://ros-template/demo?RegionId=cn-hangzhou, oss://ros-template/demo. RegionId is default to the value of RegionId Parameter of the request.).
        /// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateUrl", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TemplateUrl
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: templateVersion: Template version of template containing the template body.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateVersion", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? TemplateVersion
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update. Default to 60 minutes.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutMins", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TimeoutMins
        {
            get;
            set;
        }
    }
}
