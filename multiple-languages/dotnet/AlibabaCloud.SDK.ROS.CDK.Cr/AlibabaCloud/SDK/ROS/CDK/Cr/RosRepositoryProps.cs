using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::Repository`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RosRepositoryProps")]
    public class RosRepositoryProps : AlibabaCloud.SDK.ROS.CDK.Cr.IRosRepositoryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: repoName: the name of the repo
        /// </remarks>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RepoName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: the namespace the repo belongs to
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RepoNamespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: repository visibility, public or private
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RepoType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: description or something alike
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Summary
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: detailed configuration in markdown format
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Detail
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoSource: Code Source message.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? RepoSource
        {
            get;
            set;
        }
    }
}
