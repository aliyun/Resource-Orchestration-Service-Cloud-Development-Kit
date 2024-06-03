using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Definitions for the asset manifest.</summary>
    [JsiiInterface(nativeType: typeof(IAssetManifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AssetManifest")]
    public interface IAssetManifest
    {
        /// <summary>Version of the manifest.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}")]
        string Version
        {
            get;
        }

        /// <summary>The Docker image assets in this manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No Docker images
        /// </remarks>
        [JsiiProperty(name: "dockerImages", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageAsset\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageAsset>? DockerImages
        {
            get
            {
                return null;
            }
        }

        /// <summary>The file assets in this manifest.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No files
        /// </remarks>
        [JsiiProperty(name: "files", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileAsset\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAsset>? Files
        {
            get
            {
                return null;
            }
        }

        /// <summary>Definitions for the asset manifest.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssetManifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AssetManifest")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssetManifest
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Version of the manifest.</summary>
            [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}")]
            public string Version
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The Docker image assets in this manifest.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No Docker images
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerImages", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.DockerImageAsset\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageAsset>? DockerImages
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IDockerImageAsset>?>();
            }

            /// <summary>The file assets in this manifest.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - No files
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "files", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.FileAsset\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAsset>? Files
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileAsset>?>();
            }
        }
    }
}
