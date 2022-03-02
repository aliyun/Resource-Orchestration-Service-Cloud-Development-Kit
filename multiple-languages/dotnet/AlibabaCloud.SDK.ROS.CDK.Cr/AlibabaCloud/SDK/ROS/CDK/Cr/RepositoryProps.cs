using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CR::Repository`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cr.RepositoryProps")]
    public class RepositoryProps : AlibabaCloud.SDK.ROS.CDK.Cr.IRepositoryProps
    {
        /// <summary>Property repoName: The name of the repository.</summary>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RepoName
        {
            get;
            set;
        }

        /// <summary>Property repoNamespace: The name of the namespace to which the repository belongs.</summary>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RepoNamespace
        {
            get;
            set;
        }

        /// <summary>Property repoType: The type of the repository.</summary>
        /// <remarks>
        /// Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RepoType
        {
            get;
            set;
        }

        /// <summary>Property summary: The summary of the repository.</summary>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Summary
        {
            get;
            set;
        }

        /// <summary>Property detail: The description of the repository.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Detail
        {
            get;
            set;
        }

        /// <summary>Property instanceId: The ID of the enterprise edition instance which repository belongs to.</summary>
        /// <remarks>
        /// If not provided, will use personal edition instance as default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <summary>Property repoSource: Code Source message.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
        public object? RepoSource
        {
            get;
            set;
        }

        /// <summary>Property tagImmutability: Specifies whether the repository is immutable.</summary>
        /// <remarks>
        /// Only takes effect when InstanceId is specified.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tagImmutability", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? TagImmutability
        {
            get;
            set;
        }
    }
}
