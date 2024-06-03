using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>The type of asset hash.</summary>
    /// <remarks>
    /// NOTE: the hash is used in order to identify a specific revision of the asset, and
    /// used for optimizing and caching deployment activities related to this asset such as
    /// packaging, uploading to OSS bucket, etc.
    /// </remarks>
    [JsiiEnum(nativeType: typeof(AssetHashType), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetHashType")]
    public enum AssetHashType
    {
        /// <summary>Based on the content of the source path.</summary>
        /// <remarks>
        /// When bundling, use <c>SOURCE</c> when the content of the bundling output is not
        /// stable across repeated bundling operations.
        /// </remarks>
        [JsiiEnumMember(name: "SOURCE")]
        SOURCE,
        /// <summary>Based on the content of the bundling output.</summary>
        /// <remarks>
        /// Use <c>OUTPUT</c> when the source of the asset is a top level folder containing
        /// code and/or dependencies that are not directly linked to the asset.
        /// </remarks>
        [JsiiEnumMember(name: "OUTPUT")]
        OUTPUT,
        /// <summary>Use a custom hash.</summary>
        [JsiiEnumMember(name: "CUSTOM")]
        CUSTOM
    }
}
