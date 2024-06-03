using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    #pragma warning disable CS8618

    /// <summary>Where in OSS bucket a file asset needs to be published.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-assembly-schema.FileDestination")]
    public class FileDestination : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination
    {
        /// <summary>The name of the bucket.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        public string BucketName
        {
            get;
            set;
        }

        /// <summary>The destination object key.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
        public string ObjectKey
        {
            get;
            set;
        }

        /// <summary>The region where this asset will need to be published.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - Current region
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Region
        {
            get;
            set;
        }
    }
}
