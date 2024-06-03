using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>The location of the published file asset.</summary>
    /// <remarks>
    /// This is where the asset
    /// can be consumed at runtime.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFileAssetLocation), fullyQualifiedName: "@alicloud/ros-cdk-core.FileAssetLocation")]
    public interface IFileAssetLocation
    {
        /// <summary>The name of the OSS bucket.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        string BucketName
        {
            get;
        }

        /// <summary>The HTTP URL of this asset on OSS.</summary>
        /// <remarks>
        /// This value suitable for inclusion in a ROS template, and
        /// may be an encoded token.
        ///
        /// Example value: <c>https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}</c>
        /// </remarks>
        [JsiiProperty(name: "httpUrl", typeJson: "{\"primitive\":\"string\"}")]
        string HttpUrl
        {
            get;
        }

        /// <summary>The path of OSS object.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
        string ObjectKey
        {
            get;
        }

        /// <summary>The region of the OSS bucket.</summary>
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Region
        {
            get
            {
                return null;
            }
        }

        /// <summary>The location of the published file asset.</summary>
        /// <remarks>
        /// This is where the asset
        /// can be consumed at runtime.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFileAssetLocation), fullyQualifiedName: "@alicloud/ros-cdk-core.FileAssetLocation")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The name of the OSS bucket.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
            public string BucketName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The HTTP URL of this asset on OSS.</summary>
            /// <remarks>
            /// This value suitable for inclusion in a ROS template, and
            /// may be an encoded token.
            ///
            /// Example value: <c>https://${bucketName}.oss-${region}.aliyuncs.com/${objectKey}</c>
            /// </remarks>
            [JsiiProperty(name: "httpUrl", typeJson: "{\"primitive\":\"string\"}")]
            public string HttpUrl
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The path of OSS object.</summary>
            [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
            public string ObjectKey
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The region of the OSS bucket.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
