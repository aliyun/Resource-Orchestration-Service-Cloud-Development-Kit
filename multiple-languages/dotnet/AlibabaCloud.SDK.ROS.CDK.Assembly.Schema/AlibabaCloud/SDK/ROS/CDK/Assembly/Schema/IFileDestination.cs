using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Where in OSS bucket a file asset needs to be published.</summary>
    [JsiiInterface(nativeType: typeof(IFileDestination), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileDestination")]
    public interface IFileDestination : AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAliCloudDestination
    {
        /// <summary>The name of the bucket.</summary>
        [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
        string BucketName
        {
            get;
        }

        /// <summary>The destination object key.</summary>
        [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
        string ObjectKey
        {
            get;
        }

        /// <summary>Where in OSS bucket a file asset needs to be published.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFileDestination), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.FileDestination")]
        new internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IFileDestination
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>The name of the bucket.</summary>
            [JsiiProperty(name: "bucketName", typeJson: "{\"primitive\":\"string\"}")]
            public string BucketName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The destination object key.</summary>
            [JsiiProperty(name: "objectKey", typeJson: "{\"primitive\":\"string\"}")]
            public string ObjectKey
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The region where this asset will need to be published.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - Current region
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "region", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Region
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
