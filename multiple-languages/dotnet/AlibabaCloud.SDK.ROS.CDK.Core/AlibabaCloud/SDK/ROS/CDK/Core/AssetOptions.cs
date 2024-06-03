using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Asset hash options.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.AssetOptions")]
    public class AssetOptions : AlibabaCloud.SDK.ROS.CDK.Core.IAssetOptions
    {
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
