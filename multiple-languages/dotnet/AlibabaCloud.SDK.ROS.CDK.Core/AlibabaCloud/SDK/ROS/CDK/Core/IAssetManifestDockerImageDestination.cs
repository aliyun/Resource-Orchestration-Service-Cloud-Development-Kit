using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The destination for a docker image asset, when it is given to the AssetManifestBuilder.</summary>
    [JsiiInterface(nativeType: typeof(IAssetManifestDockerImageDestination), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetManifestDockerImageDestination")]
    public interface IAssetManifestDockerImageDestination
    {
        /// <summary>Repository name where the docker image asset should be written.</summary>
        [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
        string RepositoryName
        {
            get;
        }

        /// <summary>Prefix to add to the asset hash to make the Docker image tag.</summary>
        /// <remarks>
        /// <strong>Default</strong>: ''
        /// </remarks>
        [JsiiProperty(name: "dockerTagPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? DockerTagPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>The destination for a docker image asset, when it is given to the AssetManifestBuilder.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssetManifestDockerImageDestination), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetManifestDockerImageDestination")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestDockerImageDestination
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Repository name where the docker image asset should be written.</summary>
            [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
            public string RepositoryName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Prefix to add to the asset hash to make the Docker image tag.</summary>
            /// <remarks>
            /// <strong>Default</strong>: ''
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dockerTagPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? DockerTagPrefix
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
