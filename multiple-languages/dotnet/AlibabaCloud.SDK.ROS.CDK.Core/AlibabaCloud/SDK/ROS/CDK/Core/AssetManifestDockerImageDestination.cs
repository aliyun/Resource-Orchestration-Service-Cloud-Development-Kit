using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>The destination for a docker image asset, when it is given to the AssetManifestBuilder.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.AssetManifestDockerImageDestination")]
    public class AssetManifestDockerImageDestination : AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestDockerImageDestination
    {
        /// <summary>Repository name where the docker image asset should be written.</summary>
        [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
        public string RepositoryName
        {
            get;
            set;
        }

        /// <summary>Prefix to add to the asset hash to make the Docker image tag.</summary>
        /// <remarks>
        /// <strong>Default</strong>: ''
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerTagPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? DockerTagPrefix
        {
            get;
            set;
        }
    }
}
