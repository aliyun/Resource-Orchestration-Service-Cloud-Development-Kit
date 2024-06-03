using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Initialization properties for `AssetStaging`.</summary>
    [JsiiInterface(nativeType: typeof(IAssetStagingProps), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetStagingProps")]
    public interface IAssetStagingProps : AlibabaCloud.SDK.ROS.CDK.Core.IFingerprintOptions, AlibabaCloud.SDK.ROS.CDK.Core.IAssetOptions
    {
        /// <summary>The source file or directory to copy from.</summary>
        [JsiiProperty(name: "sourcePath", typeJson: "{\"primitive\":\"string\"}")]
        string SourcePath
        {
            get;
        }

        /// <summary>Initialization properties for `AssetStaging`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssetStagingProps), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetStagingProps")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IAssetStagingProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The source file or directory to copy from.</summary>
            [JsiiProperty(name: "sourcePath", typeJson: "{\"primitive\":\"string\"}")]
            public string SourcePath
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Extra information to encode into the fingerprint (e.g. build instructions and other inputs).</summary>
            /// <remarks>
            /// <strong>Default</strong>: - hash is only based on source content
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extraHash", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ExtraHash
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>File paths matching the patterns will be excluded.</summary>
            /// <remarks>
            /// See <c>ignoreMode</c> to set the matching behavior.
            /// Has no effect on Assets bundled using the <c>bundling</c> property.
            ///
            /// <strong>Default</strong>: - nothing is excluded
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "exclude", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? Exclude
            {
                get => GetInstanceProperty<string[]?>();
            }

            /// <summary>A strategy for how to handle symlinks.</summary>
            /// <remarks>
            /// <strong>Default</strong>: SymlinkFollowMode.NEVER
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "follow", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.SymlinkFollowMode\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode? Follow
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode?>();
            }

            /// <summary>The ignore behavior to use for `exclude` patterns.</summary>
            /// <remarks>
            /// <strong>Default</strong>: IgnoreMode.GLOB
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ignoreMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IgnoreMode\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode? IgnoreMode
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode?>();
            }

            /// <summary>Specify a custom hash for this asset.</summary>
            /// <remarks>
            /// If <c>assetHashType</c> is set it must
            /// be set to <c>AssetHashType.CUSTOM</c>. For consistency, this custom hash will
            /// be SHA256 hashed and encoded as hex. The resulting hash will be the asset
            /// hash.
            ///
            /// NOTE: the hash is used in order to identify a specific revision of the asset, and
            /// used for optimizing and caching deployment activities related to this asset such as
            /// packaging, uploading to OSS bucket, etc. If you chose to customize the hash, you will
            /// need to make sure it is updated every time the asset changes, or otherwise it is
            /// possible that some deployments will not be invalidated.
            ///
            /// <strong>Default</strong>: - based on `assetHashType`
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "assetHash", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AssetHash
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Specifies the type of hash to calculate for this asset.</summary>
            /// <remarks>
            /// If <c>assetHash</c> is configured, this option must be <c>undefined</c> or
            /// <c>AssetHashType.CUSTOM</c>.
            ///
            /// <strong>Default</strong>: - the default is `AssetHashType.SOURCE`, but if `assetHash` is
            /// explicitly specified this value defaults to `AssetHashType.CUSTOM`.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "assetHashType", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.AssetHashType\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.AssetHashType? AssetHashType
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.AssetHashType?>();
            }

            /// <summary>Bundle the asset by executing a command in a Docker container or a custom bundling provider.</summary>
            /// <remarks>
            /// The asset path will be mounted at <c>/asset-input</c>. The Docker
            /// container is responsible for putting content at <c>/asset-output</c>.
            /// The content at <c>/asset-output</c> will be zipped and used as the
            /// final asset.
            ///
            /// <strong>Default</strong>: - uploaded as-is to OSS bucket if the asset is a regular file or a .zip file,
            /// archived into a .zip file and uploaded to OSS bucket otherwise.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bundling", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.BundlingOptions\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IBundlingOptions? Bundling
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IBundlingOptions?>();
            }
        }
    }
}
