using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Artifact properties for ROS stacks.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AliyunRosStackProperties")]
    public class AliyunRosStackProperties : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliyunRosStackProperties
    {
        /// <summary>A file relative to the assembly root which contains the ROS template for this stack.</summary>
        [JsiiProperty(name: "templateFile", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TemplateFile
        {
            get;
            set;
        }

        /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No parameters
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string>? Parameters
        {
            get;
            set;
        }

        /// <summary>The name to use for the ROS stack.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - name derived from artifact ID
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? StackName
        {
            get;
            set;
        }

        /// <summary>Values for ROS stack tags that should be passed when the stack is deployed.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No tags
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string>? Tags
        {
            get;
            set;
        }
    }
}
