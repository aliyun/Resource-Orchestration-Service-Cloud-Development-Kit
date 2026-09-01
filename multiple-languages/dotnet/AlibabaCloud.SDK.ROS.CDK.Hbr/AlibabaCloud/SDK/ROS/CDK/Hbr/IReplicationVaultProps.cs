using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `ReplicationVault`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IReplicationVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.ReplicationVaultProps")]
    public interface IReplicationVaultProps
    {
        /// <summary>Property replicationSourceRegionId: The region ID of the source vault for replication.</summary>
        [JsiiProperty(name: "replicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicationSourceRegionId
        {
            get;
        }

        /// <summary>Property replicationSourceVaultId: The ID of the source vault for replication.</summary>
        [JsiiProperty(name: "replicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicationSourceVaultId
        {
            get;
        }

        /// <summary>Property vaultName: The name of the vault.</summary>
        [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultName
        {
            get;
        }

        /// <summary>Property description: The description of the vault.</summary>
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
        /// This parameter is valid only
        /// if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
        ///
        /// <list type="bullet">
        /// <description>HBR_PRIVATE: The source data is encrypted by using the built-in encryption
        /// method of Hybrid Backup Recovery (HBR).</description>
        /// <description>KMS: The source data is encrypted by using Key Management Service (KMS).</description>
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
        /// This
        /// parameter is required only if you set the EncryptType parameter to KMS.
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
        /// <description>LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies
        /// of each object on multiple devices of different facilities in the same zone. This
        /// way, Cloud Backup ensures data durability and availability even if hardware
        /// failures occur.</description>
        /// <description>ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone
        /// mechanism to distribute data across three zones within the same region. If a zone
        /// fails, the data that is stored in the other two zones is still accessible.</description>
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

        /// <summary>Property vaultStorageClass: The storage type of the backup vault.</summary>
        /// <remarks>
        /// Valid value: STANDARD, which indicates
        /// standard storage.
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

        /// <summary>Properties for defining a `ReplicationVault`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IReplicationVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.ReplicationVaultProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IReplicationVaultProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property replicationSourceRegionId: The region ID of the source vault for replication.</summary>
            [JsiiProperty(name: "replicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicationSourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicationSourceVaultId: The ID of the source vault for replication.</summary>
            [JsiiProperty(name: "replicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicationSourceVaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vaultName: The name of the vault.</summary>
            [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the vault.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptType: The method that is used to encrypt the source data.</summary>
            /// <remarks>
            /// This parameter is valid only
            /// if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
            ///
            /// <list type="bullet">
            /// <description>HBR_PRIVATE: The source data is encrypted by using the built-in encryption
            /// method of Hybrid Backup Recovery (HBR).</description>
            /// <description>KMS: The source data is encrypted by using Key Management Service (KMS).</description>
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
            /// This
            /// parameter is required only if you set the EncryptType parameter to KMS.
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
            /// <description>LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies
            /// of each object on multiple devices of different facilities in the same zone. This
            /// way, Cloud Backup ensures data durability and availability even if hardware
            /// failures occur.</description>
            /// <description>ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone
            /// mechanism to distribute data across three zones within the same region. If a zone
            /// fails, the data that is stored in the other two zones is still accessible.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RedundancyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vaultStorageClass: The storage type of the backup vault.</summary>
            /// <remarks>
            /// Valid value: STANDARD, which indicates
            /// standard storage.
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
