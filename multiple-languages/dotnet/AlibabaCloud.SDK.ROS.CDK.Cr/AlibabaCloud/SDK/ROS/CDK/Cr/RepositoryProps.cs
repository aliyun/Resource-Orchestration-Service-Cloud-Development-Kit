using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::Repository`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RepositoryProps")]
    public class RepositoryProps : AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps
    {
        /// <summary>Property repoName: the name of the repo.</summary>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RepoName
        {
            get;
            set;
        }

        /// <summary>Property repoNamespace: the namespace the repo belongs to.</summary>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RepoNamespace
        {
            get;
            set;
        }

        /// <summary>Property repoType: repository visibility, public or private.</summary>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RepoType
        {
            get;
            set;
        }

        /// <summary>Property summary: description or something alike.</summary>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Summary
        {
            get;
            set;
        }

        /// <summary>Property detail: detailed configuration in markdown format.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Detail
        {
            get;
            set;
        }

        /// <summary>Property repoSource: Code Source message.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true, isOverride: true)]
        public object? RepoSource
        {
            get;
            set;
        }
    }
}
