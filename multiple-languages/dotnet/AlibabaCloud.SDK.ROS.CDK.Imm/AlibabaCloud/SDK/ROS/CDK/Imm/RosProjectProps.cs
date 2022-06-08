using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Imm
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IMM::Project`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-imm.RosProjectProps")]
    public class RosProjectProps : AlibabaCloud.SDK.ROS.CDK.Imm.IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: project: The name of project.
        /// </remarks>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Project
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS). The default value is AliyunIMMDefaultRole.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "serviceRole", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ServiceRole
        {
            get;
            set;
        }
    }
}
