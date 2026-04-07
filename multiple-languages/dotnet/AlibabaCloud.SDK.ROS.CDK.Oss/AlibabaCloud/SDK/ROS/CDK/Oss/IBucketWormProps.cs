using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `BucketWorm`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketWormProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketWormProps")]
    public interface IBucketWormProps
    {
        /// <summary>Property bucket: The name of the bucket.</summary>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Property retentionPeriodInDays: The specified number of days to retain the Object.</summary>
        [JsiiProperty(name: "retentionPeriodInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetentionPeriodInDays
        {
            get;
        }

        /// <summary>Properties for defining a `BucketWorm`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketWormProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.BucketWormProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IBucketWormProps
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

            /// <summary>Property retentionPeriodInDays: The specified number of days to retain the Object.</summary>
            [JsiiProperty(name: "retentionPeriodInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetentionPeriodInDays
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
