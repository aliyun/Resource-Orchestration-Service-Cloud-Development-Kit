using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    /// <summary>The location of the published file asset.</summary>
    /// <remarks>
    /// This is where the asset
    /// can be consumed at runtime.
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.FileAssetLocation")]
    public class FileAssetLocation : AlibabaCloud.SDK.ROS.CDK.Core.IFileAssetLocation
    {
        /// <summary>The name of the OSS bucket.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        public string BucketName
        {
            get;
            set;
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
            get;
            set;
        }

        /// <summary>The path of OSS object.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
        public string ObjectKey
        {
            get;
            set;
        }

        /// <summary>The region of the OSS bucket.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Region
        {
            get;
            set;
        }
    }
}
