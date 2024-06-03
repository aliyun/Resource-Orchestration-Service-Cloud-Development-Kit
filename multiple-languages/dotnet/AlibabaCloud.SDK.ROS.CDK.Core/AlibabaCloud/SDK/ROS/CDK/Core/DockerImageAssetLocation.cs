using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>The location of the published docker image.</summary>
    /// <remarks>
    /// This is where the image can be
    /// consumed at runtime.
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DockerImageAssetLocation")]
    public class DockerImageAssetLocation : AlibabaCloud.SDK.ROS.CDK.Core.IDockerImageAssetLocation
    {
        /// <summary>The URI of the image in Aliyun ACR (including a tag).</summary>
        [JsiiProperty(name: "imageUri", typeJson: "{\"primitive\":\"string\"}")]
        public string ImageUri
        {
            get;
            set;
        }

        /// <summary>The name of the ACR repository.</summary>
        [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
        public string RepositoryName
        {
            get;
            set;
        }

        /// <summary>The tag of the image in Aliyun ACR.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - the hash of the asset, or the `dockerTagPrefix` concatenated with the asset hash if a `dockerTagPrefix` is specified in the stack synthesizer
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "imageTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? ImageTag
        {
            get;
            set;
        }
    }
}
