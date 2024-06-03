using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The destination for a file asset, when it is given to the AssetManifestBuilder.</summary>
    [JsiiInterface(nativeType: typeof(IAssetManifestFileDestination), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetManifestFileDestination")]
    public interface IAssetManifestFileDestination
    {
        /// <summary>Bucket name where the file asset should be written.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        string BucketName
        {
            get;
        }

        /// <summary>Prefix to prepend to the asset hash.</summary>
        /// <remarks>
        /// <strong>Default</strong>: ''
        /// </remarks>
        [JsiiProperty(name: "bucketPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? BucketPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>The destination for a file asset, when it is given to the AssetManifestBuilder.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssetManifestFileDestination), fullyQualifiedName: "@alicloud/ros-cdk-core.AssetManifestFileDestination")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IAssetManifestFileDestination
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Bucket name where the file asset should be written.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
            public string BucketName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Prefix to prepend to the asset hash.</summary>
            /// <remarks>
            /// <strong>Default</strong>: ''
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bucketPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? BucketPrefix
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
