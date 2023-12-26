using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oss.Datasource
{
    /// <summary>Properties for defining a `RosBuckets`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosBucketsProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.RosBucketsProps")]
    public interface IRosBucketsProps
    {

        /// <summary>Properties for defining a `RosBuckets`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosBucketsProps), fullyQualifiedName: "@alicloud/ros-cdk-oss.datasource.RosBucketsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oss.Datasource.IRosBucketsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
