using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms.Datasource
{
    /// <summary>Properties for defining a `Secrets`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecretsProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.SecretsProps")]
    public interface ISecretsProps
    {

        /// <summary>Properties for defining a `Secrets`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-kms-secrets
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecretsProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.datasource.SecretsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.Datasource.ISecretsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }
        }
    }
}
