using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource
{
    /// <summary>Properties for defining a `RosVaults`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVaultsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.RosVaultsProps")]
    public interface IRosVaultsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: vaultId: VaultId.
        /// </remarks>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VaultId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultType: Vault type. Value
        /// - **STANDARD**, which indicates a common backup vault.
        /// - **OTS_BACKUP**, indicating OTS backup vault.
        /// </remarks>
        [JsiiProperty(name: "vaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VaultType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVaults`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVaultsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.RosVaultsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IRosVaultsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: vaultId: VaultId.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VaultId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vaultType: Vault type. Value
            /// - **STANDARD**, which indicates a common backup vault.
            /// - **OTS_BACKUP**, indicating OTS backup vault.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VaultType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
