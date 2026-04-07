using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosBucketWorm`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketWormProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketWormProps")]
    public interface IRosBucketWormProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucket: The name of the bucket.
        /// </remarks>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: retentionPeriodInDays: The specified number of days to retain the Object.
        /// </remarks>
        [JsiiProperty(name: "retentionPeriodInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RetentionPeriodInDays
        {
            get;
        }

        /// <summary>Properties for defining a `RosBucketWorm`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketWormProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketWormProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketWormProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: bucket: The name of the bucket.
            /// </remarks>
            [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Bucket
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: retentionPeriodInDays: The specified number of days to retain the Object.
            /// </remarks>
            [JsiiProperty(name: "retentionPeriodInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RetentionPeriodInDays
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
