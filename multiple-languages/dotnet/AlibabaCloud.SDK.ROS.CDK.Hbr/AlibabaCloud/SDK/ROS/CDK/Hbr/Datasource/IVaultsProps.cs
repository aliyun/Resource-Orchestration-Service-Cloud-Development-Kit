using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::HBR::Vaults`.</summary>
    [JsiiInterface(nativeType: typeof(IVaultsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.VaultsProps")]
    public interface IVaultsProps
    {
        /// <summary>Property vaultId: VaultId.</summary>
        [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VaultId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vaultType: Vault type.</summary>
        /// <remarks>
        /// Value
        ///
        /// <list type="bullet">
        /// <description><strong>STANDARD</strong>, which indicates a common backup vault.</description>
        /// <description><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</description>
        /// </list>
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

        /// <summary>Properties for defining a `DATASOURCE::HBR::Vaults`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVaultsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.VaultsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vaultId: VaultId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VaultId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vaultType: Vault type.</summary>
            /// <remarks>
            /// Value
            ///
            /// <list type="bullet">
            /// <description><strong>STANDARD</strong>, which indicates a common backup vault.</description>
            /// <description><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</description>
            /// </list>
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
