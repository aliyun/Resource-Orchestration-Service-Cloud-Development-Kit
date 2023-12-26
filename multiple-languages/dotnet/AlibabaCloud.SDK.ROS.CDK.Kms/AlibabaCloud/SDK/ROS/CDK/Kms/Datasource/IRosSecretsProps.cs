using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms.Datasource
{
    /// <summary>Properties for defining a `RosSecrets`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSecretsProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.RosSecretsProps")]
    public interface IRosSecretsProps
    {

        /// <summary>Properties for defining a `RosSecrets`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSecretsProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.RosSecretsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.IRosSecretsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
