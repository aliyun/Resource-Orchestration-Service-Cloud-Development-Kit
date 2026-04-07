using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosBucketPublicAccessBlock`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketPublicAccessBlockProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketPublicAccessBlockProps")]
    public interface IRosBucketPublicAccessBlockProps
    {
        /// <remarks>
        /// <strong>Property</strong>: blockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
        /// </remarks>
        [JsiiProperty(name: "blockPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object BlockPublicAccess
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: bucket: The name of the bucket.
        /// </remarks>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Properties for defining a `RosBucketPublicAccessBlock`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketpublicaccessblock
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketPublicAccessBlockProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketPublicAccessBlockProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketPublicAccessBlockProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: blockPublicAccess: Whether AlibabaCloud OSS should block public bucket policies and ACL for this bucket.
            /// </remarks>
            [JsiiProperty(name: "blockPublicAccess", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object BlockPublicAccess
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: bucket: The name of the bucket.
            /// </remarks>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
