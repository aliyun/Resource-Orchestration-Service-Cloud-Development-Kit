using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `BucketPublicAccessBlock`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketPublicAccessBlockProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketPublicAccessBlockProps")]
    public interface IBucketPublicAccessBlockProps
    {
        /// <summary>Property blockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.</summary>
        [JsiiProperty(name: "blockPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BlockPublicAccess
        {
            get;
        }

        /// <summary>Property bucket: The name of the bucket.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Properties for defining a `BucketPublicAccessBlock`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketPublicAccessBlockProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketPublicAccessBlockProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketPublicAccessBlockProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property blockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.</summary>
            [JsiiProperty(name: "blockPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BlockPublicAccess
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bucket: The name of the bucket.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
