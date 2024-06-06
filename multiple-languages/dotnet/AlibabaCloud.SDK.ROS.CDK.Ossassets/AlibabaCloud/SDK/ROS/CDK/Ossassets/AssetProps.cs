using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ossassets
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-ossassets.AssetProps")]
    public class AssetProps : AlibabaCloud.SDK.ROS.CDK.Ossassets.IAssetProps
    {
        /// <summary>The disk location of the asset.</summary>
        /// <remarks>
        /// The path should refer to one of the following:
        ///
        /// <list type="bullet">
        /// <description>A regular file or a .zip file, in which case the file will be uploaded as-is to OSS bucket.</description>
        /// <description>A directory, in which case it will be archived into a .zip file and uploaded to OSS bucket.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "path", typeJson: "{\"primitive\":\"string\"}")]
        public string Path
        {
            get;
            set;
        }

        /// <summary>Whether or not the asset needs to exist beyond deployment time;</summary>
        /// <remarks>
        /// i.e.
        /// are copied over to a different location and not needed afterwards.
        /// Setting this property to true has an impact on the lifecycle of the asset,
        /// because we will assume that it is safe to delete after the ROS
        /// deployment succeeds.
        ///
        /// For example, FC Function assets are copied over to Function during
        /// deployment. Therefore, it is not necessary to store the asset in OSS bucket,
        /// so we consider those deployTime assets.
        ///
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deployTime", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? DeployTime
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>A strategy for how to handle symlinks.</summary>
        /// <remarks>
        /// <strong>Default</strong>: SymlinkFollowMode.NEVER
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "followSymlinks", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.SymlinkFollowMode\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode? FollowSymlinks
        {
            get;
            set;
        }

        /// <summary>The ignore behavior to use for `exclude` patterns.</summary>
        /// <remarks>
        /// <strong>Default</strong>: IgnoreMode.GLOB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ignoreMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IgnoreMode\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode? IgnoreMode
        {
            get;
            set;
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
            get;
            set;
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
            get;
            set;
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
            get;
            set;
        }
    }
}
