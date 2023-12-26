using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `Vault`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.VaultProps")]
    public interface IVaultProps
    {
        /// <summary>Property vaultName: The name of the backup vault.</summary>
        /// <remarks>
        /// The name must be 1 to 64 characters in length.
        /// </remarks>
        [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultName
        {
            get;
        }

        /// <summary>Property vaultType: The type of the backup vault.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>STANDARD</strong>: standard backup vault.</description>
        /// <description><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "vaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultType
        {
            get;
        }

        /// <summary>Property description: The description of the backup vault.</summary>
        /// <remarks>
        /// The description must be 0 to 255 characters in length.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptType: The method that is used to encrypt the source data.</summary>
        /// <remarks>
        /// This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
        /// Valid values:- <strong>HBR_PRIVATE</strong>: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
        ///
        /// <list type="bullet">
        /// <description><strong>KMS</strong>: The source data is encrypted by using Key Management Service (KMS).</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.</summary>
        /// <remarks>
        /// This parameter is required only if you set the EncryptType parameter to KMS.
        /// </remarks>
        [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KmsKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property redundancyType: The data redundancy type of the backup vault.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</description>
        /// <description><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RedundancyType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of The resource attribute field representing the resource tag..</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosVault.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Hbr.RosVault.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vaultStorageClass: The storage type of the backup vault.</summary>
        /// <remarks>
        /// The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
        /// </remarks>
        [JsiiProperty(name: "vaultStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VaultStorageClass
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Vault`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.VaultProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IVaultProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vaultName: The name of the backup vault.</summary>
            /// <remarks>
            /// The name must be 1 to 64 characters in length.
            /// </remarks>
            [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultType: The type of the backup vault.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>STANDARD</strong>: standard backup vault.</description>
            /// <description><strong>OTS_BACKUP</strong>: backup vault for Tablestore.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "vaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the backup vault.</summary>
            /// <remarks>
            /// The description must be 0 to 255 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptType: The method that is used to encrypt the source data.</summary>
            /// <remarks>
            /// This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP.
            /// Valid values:- <strong>HBR_PRIVATE</strong>: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
            ///
            /// <list type="bullet">
            /// <description><strong>KMS</strong>: The source data is encrypted by using Key Management Service (KMS).</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key.</summary>
            /// <remarks>
            /// This parameter is required only if you set the EncryptType parameter to KMS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property redundancyType: The data redundancy type of the backup vault.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>LRS</strong>: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.</description>
            /// <description><strong>ZRS</strong>: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RedundancyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of The resource attribute field representing the resource tag..</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-hbr.RosVault.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.RosVault.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.RosVault.ITagsProperty[]?>();
            }

            /// <summary>Property vaultStorageClass: The storage type of the backup vault.</summary>
            /// <remarks>
            /// The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vaultStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VaultStorageClass
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
