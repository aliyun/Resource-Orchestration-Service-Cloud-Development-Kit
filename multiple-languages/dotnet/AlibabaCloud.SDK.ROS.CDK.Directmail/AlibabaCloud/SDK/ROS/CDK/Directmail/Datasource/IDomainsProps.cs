using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource
{
    /// <summary>Properties for defining a `Domains`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.DomainsProps")]
    public interface IDomainsProps
    {

        /// <summary>Properties for defining a `Domains`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-directmail-domains
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDomainsProps), fullyQualifiedName: "@alicloud/ros-cdk-directmail.datasource.DomainsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Directmail.Datasource.IDomainsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
