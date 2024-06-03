using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Where to publish docker images.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.DockerImageDestination")]
    public class DockerImageDestination : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageDestination
    {
        /// <summary>Tag of the image to publish.</summary>
        [JsiiProperty(name: "imageTag", typeJson: "{\"primitive\":\"string\"}")]
        public string ImageTag
        {
            get;
            set;
        }

        /// <summary>Name of the ECR repository to publish to.</summary>
        [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
        public string RepositoryName
        {
            get;
            set;
        }

        /// <summary>The region where this asset will need to be published.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Current region
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Region
        {
            get;
            set;
        }
    }
}
