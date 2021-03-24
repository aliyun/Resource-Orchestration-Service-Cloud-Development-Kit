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
        [JsiiProperty(name: "repoName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RepoName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: the namespace the repo belongs to
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RepoNamespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: repository visibility, public or private
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RepoType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: description or something alike
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Summary
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: detailed configuration in markdown format
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Detail
        {
            get;
            set;
        }
    }
}
