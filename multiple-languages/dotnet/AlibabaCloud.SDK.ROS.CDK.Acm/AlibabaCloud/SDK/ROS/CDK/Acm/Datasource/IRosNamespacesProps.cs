using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm.Datasource
{
    /// <summary>Properties for defining a `RosNamespaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.RosNamespacesProps")]
    public interface IRosNamespacesProps
    {

        /// <summary>Properties for defining a `RosNamespaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.RosNamespacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.IRosNamespacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
