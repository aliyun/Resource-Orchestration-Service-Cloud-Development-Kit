using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss
{
    /// <summary>Properties for defining a `RosBucketAccessMonitor`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketAccessMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketAccessMonitorProps")]
    public interface IRosBucketAccessMonitorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: bucket: The name of the bucket.
        /// </remarks>
        [JsiiProperty(name: "bucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Bucket
        {
            get;
        }

        /// <summary>Properties for defining a `RosBucketAccessMonitor`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketaccessmonitor
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketAccessMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.RosBucketAccessMonitorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.IRosBucketAccessMonitorProps
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
        }
    }
}
