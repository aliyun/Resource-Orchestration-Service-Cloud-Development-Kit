using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource
{
    /// <summary>Represents a `Vault`.</summary>
    [JsiiInterface(nativeType: typeof(IVault), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.IVault")]
    public interface IVault : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.</summary>
        [JsiiProperty(name: "attrBackupPlanStatistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBackupPlanStatistics
        {
            get;
        }

        /// <summary>Attribute BytesDone: The amount of data that is backed up.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "attrBytesDone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBytesDone
        {
            get;
        }

        /// <summary>Attribute CreateTime: The creation time of the backup vault.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Dedup: Indicates whether the deduplication feature is enabled.</summary>
        [JsiiProperty(name: "attrDedup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDedup
        {
            get;
        }

        /// <summary>Attribute Description: The description of the backup vault.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute IndexAvailable: Indicates whether indexes are available.</summary>
        /// <remarks>
        /// Indexes are available when they are not being updated.
        /// </remarks>
        [JsiiProperty(name: "attrIndexAvailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIndexAvailable
        {
            get;
        }

        /// <summary>Attribute IndexLevel: The index level.</summary>
        [JsiiProperty(name: "attrIndexLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIndexLevel
        {
            get;
        }

        /// <summary>Attribute IndexUpdateTime: The time when the index was updated.</summary>
        [JsiiProperty(name: "attrIndexUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIndexUpdateTime
        {
            get;
        }

        /// <summary>Attribute LatestReplicationTime: The time when the last remote backup was synchronized.</summary>
        /// <remarks>
        /// The value is a UNIX timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrLatestReplicationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLatestReplicationTime
        {
            get;
        }

        /// <summary>Attribute PaymentType: The payment type of the backup vault.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute RedundancyType: The data redundancy type of the backup vault.</summary>
        [JsiiProperty(name: "attrRedundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRedundancyType
        {
            get;
        }

        /// <summary>Attribute Replication: Indicates whether the backup vault is a remote backup vault.</summary>
        [JsiiProperty(name: "attrReplication", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplication
        {
            get;
        }

        /// <summary>Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.</summary>
        [JsiiProperty(name: "attrReplicationProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicationProgress
        {
            get;
        }

        /// <summary>Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.</summary>
        /// <remarks>
        /// This parameter is valid only for remote backup vaults.
        /// </remarks>
        [JsiiProperty(name: "attrReplicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicationSourceRegionId
        {
            get;
        }

        /// <summary>Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.</summary>
        [JsiiProperty(name: "attrReplicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrReplicationSourceVaultId
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute Retention: The retention period of the backup vault.</summary>
        /// <remarks>
        /// Unit: days.
        /// </remarks>
        [JsiiProperty(name: "attrRetention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrRetention
        {
            get;
        }

        /// <summary>Attribute SearchEnabled: Indicates whether the backup search feature is enabled.</summary>
        [JsiiProperty(name: "attrSearchEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSearchEnabled
        {
            get;
        }

        /// <summary>Attribute SourceTypes: The data source types of the backup vault.</summary>
        [JsiiProperty(name: "attrSourceTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceTypes
        {
            get;
        }

        /// <summary>Attribute StorageSize: The usage of the backup vault.</summary>
        /// <remarks>
        /// Unit: bytes.
        /// </remarks>
        [JsiiProperty(name: "attrStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrStorageSize
        {
            get;
        }

        /// <summary>Attribute Tags: The tags of the backup vault.</summary>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TrialInfo: The free trial information.</summary>
        [JsiiProperty(name: "attrTrialInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrialInfo
        {
            get;
        }

        /// <summary>Attribute UpdatedTime: The time when the backup vault was updated.</summary>
        /// <remarks>
        /// The value is a UNIX timestamp. Unit: seconds.
        /// </remarks>
        [JsiiProperty(name: "attrUpdatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedTime
        {
            get;
        }

        /// <summary>Attribute VaultId: The ID of the backup vault.</summary>
        [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultId
        {
            get;
        }

        /// <summary>Attribute VaultName: The name of the backup vault.</summary>
        [JsiiProperty(name: "attrVaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultName
        {
            get;
        }

        /// <summary>Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.</summary>
        /// <remarks>
        /// This parameter is valid only for remote backup vaults.
        /// </remarks>
        [JsiiProperty(name: "attrVaultStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultStatusMessage
        {
            get;
        }

        /// <summary>Attribute VaultStorageClass: Backup repository storage type.</summary>
        /// <remarks>
        /// The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
        /// </remarks>
        [JsiiProperty(name: "attrVaultStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultStorageClass
        {
            get;
        }

        /// <summary>Attribute VaultType: The type of the backup vault.</summary>
        [JsiiProperty(name: "attrVaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVaultType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.datasource.VaultProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultProps Props
        {
            get;
        }

        /// <summary>Represents a `Vault`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IVault), fullyQualifiedName: "@alicloud/ros-cdk-hbr.datasource.IVault")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVault
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.</summary>
            [JsiiProperty(name: "attrBackupPlanStatistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBackupPlanStatistics
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute BytesDone: The amount of data that is backed up.</summary>
            /// <remarks>
            /// Unit: bytes.
            /// </remarks>
            [JsiiProperty(name: "attrBytesDone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBytesDone
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: The creation time of the backup vault.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Dedup: Indicates whether the deduplication feature is enabled.</summary>
            [JsiiProperty(name: "attrDedup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDedup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the backup vault.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IndexAvailable: Indicates whether indexes are available.</summary>
            /// <remarks>
            /// Indexes are available when they are not being updated.
            /// </remarks>
            [JsiiProperty(name: "attrIndexAvailable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIndexAvailable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IndexLevel: The index level.</summary>
            [JsiiProperty(name: "attrIndexLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIndexLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute IndexUpdateTime: The time when the index was updated.</summary>
            [JsiiProperty(name: "attrIndexUpdateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrIndexUpdateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LatestReplicationTime: The time when the last remote backup was synchronized.</summary>
            /// <remarks>
            /// The value is a UNIX timestamp. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrLatestReplicationTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLatestReplicationTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The payment type of the backup vault.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute RedundancyType: The data redundancy type of the backup vault.</summary>
            [JsiiProperty(name: "attrRedundancyType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRedundancyType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Replication: Indicates whether the backup vault is a remote backup vault.</summary>
            [JsiiProperty(name: "attrReplication", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplication
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.</summary>
            [JsiiProperty(name: "attrReplicationProgress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicationProgress
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.</summary>
            /// <remarks>
            /// This parameter is valid only for remote backup vaults.
            /// </remarks>
            [JsiiProperty(name: "attrReplicationSourceRegionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicationSourceRegionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.</summary>
            [JsiiProperty(name: "attrReplicationSourceVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrReplicationSourceVaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Retention: The retention period of the backup vault.</summary>
            /// <remarks>
            /// Unit: days.
            /// </remarks>
            [JsiiProperty(name: "attrRetention", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrRetention
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SearchEnabled: Indicates whether the backup search feature is enabled.</summary>
            [JsiiProperty(name: "attrSearchEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSearchEnabled
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceTypes: The data source types of the backup vault.</summary>
            [JsiiProperty(name: "attrSourceTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute StorageSize: The usage of the backup vault.</summary>
            /// <remarks>
            /// Unit: bytes.
            /// </remarks>
            [JsiiProperty(name: "attrStorageSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrStorageSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tags of the backup vault.</summary>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrialInfo: The free trial information.</summary>
            [JsiiProperty(name: "attrTrialInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrialInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedTime: The time when the backup vault was updated.</summary>
            /// <remarks>
            /// The value is a UNIX timestamp. Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "attrUpdatedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VaultId: The ID of the backup vault.</summary>
            [JsiiProperty(name: "attrVaultId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VaultName: The name of the backup vault.</summary>
            [JsiiProperty(name: "attrVaultName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.</summary>
            /// <remarks>
            /// This parameter is valid only for remote backup vaults.
            /// </remarks>
            [JsiiProperty(name: "attrVaultStatusMessage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultStatusMessage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VaultStorageClass: Backup repository storage type.</summary>
            /// <remarks>
            /// The value is only <strong>STANDARD</strong>, which indicates STANDARD storage.
            /// </remarks>
            [JsiiProperty(name: "attrVaultStorageClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultStorageClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VaultType: The type of the backup vault.</summary>
            [JsiiProperty(name: "attrVaultType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVaultType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-hbr.datasource.VaultProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Hbr.Datasource.IVaultProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
