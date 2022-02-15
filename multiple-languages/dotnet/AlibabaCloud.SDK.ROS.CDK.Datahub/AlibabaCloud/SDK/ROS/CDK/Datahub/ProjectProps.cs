using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Datahub
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::DATAHUB::Project`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-datahub.ProjectProps")]
    public class ProjectProps : AlibabaCloud.SDK.ROS.CDK.Datahub.IProjectProps
    {
        /// <summary>Property comment: The comment of project.</summary>
        [JsiiProperty(name: "comment", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Comment
        {
            get;
            set;
        }

        /// <summary>Property projectName: The name of the project.</summary>
        /// <remarks>
        /// Length [3, 32]. Beginning with characters, only characters, numbers and _ are allowed.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ProjectName
        {
            get;
            set;
        }
    }
}
