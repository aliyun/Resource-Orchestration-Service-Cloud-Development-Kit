using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource
{
    /// <summary>Properties for defining a `Vaults`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVaultsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.VaultsProps")]
    public interface IVaultsProps
    {
        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

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

        /// <summary>Properties for defining a `Vaults`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVaultsProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.VaultsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
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
