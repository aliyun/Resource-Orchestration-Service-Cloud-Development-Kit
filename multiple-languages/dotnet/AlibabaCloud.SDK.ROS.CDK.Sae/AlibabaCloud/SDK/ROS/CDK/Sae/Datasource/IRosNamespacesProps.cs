using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sae.Datasource
{
    /// <summary>Properties for defining a `RosNamespaces`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.RosNamespacesProps")]
    public interface IRosNamespacesProps
    {

        /// <summary>Properties for defining a `RosNamespaces`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNamespacesProps), fullyQualifiedName: "@alicloud/ros-cdk-sae.datasource.RosNamespacesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sae.Datasource.IRosNamespacesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
