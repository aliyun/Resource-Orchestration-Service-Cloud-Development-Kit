using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss.Datasource
{
    /// <summary>Properties for defining a `Buckets`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IBucketsProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.BucketsProps")]
    public interface IBucketsProps
    {

        /// <summary>Properties for defining a `Buckets`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IBucketsProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.BucketsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IBucketsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
