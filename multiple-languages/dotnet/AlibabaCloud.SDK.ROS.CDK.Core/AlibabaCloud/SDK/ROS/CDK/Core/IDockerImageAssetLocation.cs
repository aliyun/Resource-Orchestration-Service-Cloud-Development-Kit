using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The location of the published docker image.</summary>
    /// <remarks>
    /// This is where the image can be
    /// consumed at runtime.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDockerImageAssetLocation), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerImageAssetLocation")]
    public interface IDockerImageAssetLocation
    {
        /// <summary>The URI of the image in Aliyun ACR (including a tag).</summary>
        [JsiiProperty(name: "imageUri", typeJson: "{\"primitive\":\"string\"}")]
        string ImageUri
        {
            get;
        }

        /// <summary>The name of the ACR repository.</summary>
        [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
        string RepositoryName
        {
            get;
        }

        /// <summary>The tag of the image in Aliyun ACR.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - the hash of the asset, or the `dockerTagPrefix` concatenated with the asset hash if a `dockerTagPrefix` is specified in the stack synthesizer
        /// </remarks>
        [JsiiProperty(name: "imageTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ImageTag
        {
            get
            {
                return null;
            }
        }

        /// <summary>The location of the published docker image.</summary>
        /// <remarks>
        /// This is where the image can be
        /// consumed at runtime.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDockerImageAssetLocation), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerImageAssetLocation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IDockerImageAssetLocation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The URI of the image in Aliyun ACR (including a tag).</summary>
            [JsiiProperty(name: "imageUri", typeJson: "{\"primitive\":\"string\"}")]
            public string ImageUri
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The name of the ACR repository.</summary>
            [JsiiProperty(name: "repositoryName", typeJson: "{\"primitive\":\"string\"}")]
            public string RepositoryName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The tag of the image in Aliyun ACR.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - the hash of the asset, or the `dockerTagPrefix` concatenated with the asset hash if a `dockerTagPrefix` is specified in the stack synthesizer
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "imageTag", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ImageTag
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
