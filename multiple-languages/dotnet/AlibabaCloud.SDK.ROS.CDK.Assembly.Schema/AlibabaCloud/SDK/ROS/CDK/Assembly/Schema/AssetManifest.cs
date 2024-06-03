using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Definitions for the asset manifest.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.AssetManifest")]
    public class AssetManifest : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifest
    {
        /// <summary>Version of the manifest.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}")]
        public string Version
        {
            get;
            set;
        }

        /// <summary>The Docker image assets in this manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No Docker images
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dockerImages", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageAsset\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageAsset>? DockerImages
        {
            get;
            set;
        }

        /// <summary>The file assets in this manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No files
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "files", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileAsset\"},\"kind\":\"map\"}}", isOptional: true)]
        public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAsset>? Files
        {
            get;
            set;
        }
    }
}
