using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource
{
    /// <summary>Properties for defining a `RosDomains`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.RosDomainsProps")]
    public interface IRosDomainsProps
    {

        /// <summary>Properties for defining a `RosDomains`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.RosDomainsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IRosDomainsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
