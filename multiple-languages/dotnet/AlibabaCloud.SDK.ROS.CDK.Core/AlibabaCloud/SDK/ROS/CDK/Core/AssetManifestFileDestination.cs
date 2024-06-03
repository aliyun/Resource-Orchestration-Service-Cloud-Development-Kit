using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>The destination for a file asset, when it is given to the AssetManifestBuilder.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.AssetManifestFileDestination")]
    public class AssetManifestFileDestination : AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestFileDestination
    {
        /// <summary>Bucket name where the file asset should be written.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        public string BucketName
        {
            get;
            set;
        }

        /// <summary>Prefix to prepend to the asset hash.</summary>
        /// <remarks>
        /// <strong>Default</strong>: ''
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bucketPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? BucketPrefix
        {
            get;
            set;
        }
    }
}
