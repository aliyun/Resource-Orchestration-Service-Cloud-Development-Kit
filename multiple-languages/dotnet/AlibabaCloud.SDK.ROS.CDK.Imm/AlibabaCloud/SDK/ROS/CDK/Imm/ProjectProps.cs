using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Imm
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::IMM::Project`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-imm.ProjectProps")]
    public class ProjectProps : AlibabaCloud.SDK.ROS.CDK.Imm.IProjectProps
    {
        /// <summary>Property project: The name of project.</summary>
        [JsiiProperty(name: "project", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Project
        {
            get;
            set;
        }

        /// <summary>Property serviceRole: Service role, which grants the IMM service the right to access other cloud resources (such as OSS).</summary>
        /// <remarks>
        /// The default value is AliyunIMMDefaultRole.
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
