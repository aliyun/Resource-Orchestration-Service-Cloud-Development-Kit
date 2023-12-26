using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `RosResourceDirectory`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosResourceDirectoryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceDirectoryProps")]
    public interface IRosResourceDirectoryProps
    {

        /// <summary>Properties for defining a `RosResourceDirectory`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosResourceDirectoryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.RosResourceDirectoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IRosResourceDirectoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
