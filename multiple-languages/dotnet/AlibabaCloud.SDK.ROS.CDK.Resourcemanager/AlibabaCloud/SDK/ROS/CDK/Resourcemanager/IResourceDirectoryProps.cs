using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Resourcemanager
{
    /// <summary>Properties for defining a `ResourceDirectory`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IResourceDirectoryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps")]
    public interface IResourceDirectoryProps
    {

        /// <summary>Properties for defining a `ResourceDirectory`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcedirectory
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IResourceDirectoryProps), fullyQualifiedName: "@alicloud/ros-cdk-resourcemanager.ResourceDirectoryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Resourcemanager.IResourceDirectoryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
