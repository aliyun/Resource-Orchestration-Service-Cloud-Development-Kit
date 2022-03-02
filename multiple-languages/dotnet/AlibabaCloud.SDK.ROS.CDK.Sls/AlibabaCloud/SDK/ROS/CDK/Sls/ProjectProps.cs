using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Project`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.ProjectProps")]
    public class ProjectProps : AlibabaCloud.SDK.ROS.CDK.Sls.IProjectProps
    {
        /// <summary>Property name: Project name: 1.</summary>
        /// <remarks>
        /// Only supports lowercase letters, numbers, hyphens (-) and underscores (_).
        /// 2. Must start and end with lowercase letters and numbers.
        /// 3. The name length is 3-63 characters.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Name
        {
            get;
            set;
        }

        /// <summary>Property description: Project description: &lt;&gt;'"\ is not supported, up to 64 characters.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to project.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create project. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-sls.RosProject.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Sls.RosProject.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
