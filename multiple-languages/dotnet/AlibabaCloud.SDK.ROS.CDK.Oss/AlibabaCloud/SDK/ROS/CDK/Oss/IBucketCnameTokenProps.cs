using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `BucketCnameToken`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketCnameTokenProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketCnameTokenProps")]
    public interface IBucketCnameTokenProps
    {
        /// <summary>Property bucket: The name of the bucket.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property domain: The custom domain.</summary>
        [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Domain
        {
            get;
        }

        /// <summary>Properties for defining a `BucketCnameToken`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketcnametoken
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketCnameTokenProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketCnameTokenProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketCnameTokenProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property bucket: The name of the bucket.</summary>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property domain: The custom domain.</summary>
            [JsiiProperty(name: "domain", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Domain
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
