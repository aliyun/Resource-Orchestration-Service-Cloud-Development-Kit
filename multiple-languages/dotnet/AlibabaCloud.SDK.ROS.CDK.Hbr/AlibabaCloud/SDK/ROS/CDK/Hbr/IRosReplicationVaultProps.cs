using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr
{
    /// <summary>Properties for defining a `RosReplicationVault`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosReplicationVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosReplicationVaultProps")]
    public interface IRosReplicationVaultProps
    {
        /// <remarks>
        /// <strong>Property</strong>: replicationSourceRegionId: The region ID of the source vault for replication.
        /// </remarks>
        [JsiiProperty(name: "replicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicationSourceRegionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: replicationSourceVaultId: The ID of the source vault for replication.
        /// </remarks>
        [JsiiProperty(name: "replicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicationSourceVaultId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vaultName: The name of the vault.
        /// </remarks>
        [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VaultName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the vault.
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

        /// <remarks>
        /// <strong>Property</strong>: encryptType: The method that is used to encrypt the source data. This parameter is valid only
        /// if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
        /// *   HBR_PRIVATE: The source data is encrypted by using the built-in encryption
        /// method of Hybrid Backup Recovery (HBR).
        /// *   KMS: The source data is encrypted by using Key Management Service (KMS).
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

        /// <remarks>
        /// <strong>Property</strong>: kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This
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

        /// <remarks>
        /// <strong>Property</strong>: redundancyType: The data redundancy type of the backup vault. Valid values:
        /// *   LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies
        /// of each object on multiple devices of different facilities in the same zone. This
        /// way, Cloud Backup ensures data durability and availability even if hardware
        /// failures occur.
        /// *   ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone
        /// mechanism to distribute data across three zones within the same region. If a zone
        /// fails, the data that is stored in the other two zones is still accessible.
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

        /// <remarks>
        /// <strong>Property</strong>: vaultStorageClass: The storage type of the backup vault. Valid value: STANDARD, which indicates
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

        /// <summary>Properties for defining a `RosReplicationVault`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosReplicationVaultProps), fullyQualifiedName: "@alicloud/ros-cdk-hbr.RosReplicationVaultProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.IRosReplicationVaultProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: replicationSourceRegionId: The region ID of the source vault for replication.
            /// </remarks>
            [JsiiProperty(name: "replicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicationSourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: replicationSourceVaultId: The ID of the source vault for replication.
            /// </remarks>
            [JsiiProperty(name: "replicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicationSourceVaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vaultName: The name of the vault.
            /// </remarks>
            [JsiiProperty(name: "vaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VaultName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the vault.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptType: The method that is used to encrypt the source data. This parameter is valid only
            /// if you set the VaultType parameter to STANDARD or OTS_BACKUP. Valid values:
            /// *   HBR_PRIVATE: The source data is encrypted by using the built-in encryption
            /// method of Hybrid Backup Recovery (HBR).
            /// *   KMS: The source data is encrypted by using Key Management Service (KMS).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This
            /// parameter is required only if you set the EncryptType parameter to KMS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "kmsKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KmsKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: redundancyType: The data redundancy type of the backup vault. Valid values:
            /// *   LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies
            /// of each object on multiple devices of different facilities in the same zone. This
            /// way, Cloud Backup ensures data durability and availability even if hardware
            /// failures occur.
            /// *   ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone
            /// mechanism to distribute data across three zones within the same region. If a zone
            /// fails, the data that is stored in the other two zones is still accessible.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "redundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RedundancyType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vaultStorageClass: The storage type of the backup vault. Valid value: STANDARD, which indicates
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
