using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram.Datasource
{
    /// <summary>Properties for defining a `AccountAlias`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccountAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.AccountAliasProps")]
    public interface IAccountAliasProps
    {

        /// <summary>Properties for defining a `AccountAlias`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ram-accountalias
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccountAliasProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.datasource.AccountAliasProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.Datasource.IAccountAliasProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
