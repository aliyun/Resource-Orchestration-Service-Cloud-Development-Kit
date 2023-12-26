using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm.Datasource
{
    /// <summary>Properties for defining a `Namespaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.NamespacesProps")]
    public interface INamespacesProps
    {

        /// <summary>Properties for defining a `Namespaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-acm-namespaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-acm.datasource.NamespacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.Datasource.INamespacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
