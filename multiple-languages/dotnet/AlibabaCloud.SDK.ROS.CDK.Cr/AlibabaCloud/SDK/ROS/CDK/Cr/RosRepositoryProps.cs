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
        /// <strong>Property</strong>: repoName: The name of the repository.
        /// </remarks>
        [JsiiProperty(name: "repoName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RepoName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoNamespace: The name of the namespace to which the repository belongs.
        /// </remarks>
        [JsiiProperty(name: "repoNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RepoNamespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoType: The type of the repository. Valid values: PUBLIC, PRIVATE.
        /// </remarks>
        [JsiiProperty(name: "repoType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object RepoType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: summary: The summary of the repository.
        /// </remarks>
        [JsiiProperty(name: "summary", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Summary
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: detail: The description of the repository.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "detail", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Detail
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the enterprise edition instance which repository belongs to. If not provided, will use personal edition instance as default.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoSource: Code Source message.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "repoSource", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cr.RosRepository.RepoSourceProperty\"}]}}", isOptional: true)]
        public object? RepoSource
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tagImmutability: Specifies whether the repository is immutable. Only takes effect when InstanceId is specified.
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
