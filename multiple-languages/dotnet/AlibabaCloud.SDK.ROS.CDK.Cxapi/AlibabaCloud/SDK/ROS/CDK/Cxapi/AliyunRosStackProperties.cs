using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cxapi
{
    #pragma warning disable CS8618

    /// <summary>Artifact properties for ROS stacks.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cxapi.AliyunRosStackProperties")]
    public class AliyunRosStackProperties : AlibabaCloud.SDK.ROS.CDK.Cxapi.IAliyunRosStackProperties
    {
        /// <summary>A file relative to the assembly root which contains the ROS template for this stack.</summary>
        [JsiiProperty(name: "templateFile", typeJson: "{\"primitive\":\"string\"}")]
        public string TemplateFile
        {
            get;
            set;
        }

        /// <summary>Values for ROS stack parameters that should be passed when the stack is deployed.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "parameters", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
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
        [JsiiProperty(name: "stackName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? StackName
        {
            get;
            set;
        }
    }
}
