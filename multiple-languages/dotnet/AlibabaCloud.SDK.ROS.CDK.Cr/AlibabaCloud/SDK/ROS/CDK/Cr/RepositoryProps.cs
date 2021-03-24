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
        [JsiiProperty(name: "repoName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RepoName
        {
            get;
            set;
        }

        /// <summary>Property repoNamespace: the namespace the repo belongs to.</summary>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RepoNamespace
        {
            get;
            set;
        }

        /// <summary>Property repoType: repository visibility, public or private.</summary>
        [JsiiProperty(name: "repoType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string RepoType
        {
            get;
            set;
        }

        /// <summary>Property summary: description or something alike.</summary>
        [JsiiProperty(name: "summary", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Summary
        {
            get;
            set;
        }

        /// <summary>Property detail: detailed configuration in markdown format.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Detail
        {
            get;
            set;
        }
    }
}
