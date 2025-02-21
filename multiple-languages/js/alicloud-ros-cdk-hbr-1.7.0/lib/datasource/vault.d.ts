import * as ros from '@alicloud/ros-cdk-core';
import { RosVault } from './hbr.generated';
export { RosVault as VaultProperty };
/**
 * Properties for defining a `Vault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
 */
export interface VaultProps {
    /**
     * Property vaultId: The ID of the backup vault.
     */
    readonly vaultId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Vault`.
 */
export interface IVault extends ros.IResource {
    readonly props: VaultProps;
    /**
     * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    readonly attrBackupPlanStatistics: ros.IResolvable | string;
    /**
     * Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    readonly attrBytesDone: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the backup vault.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    readonly attrDedup: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the backup vault.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    readonly attrIndexAvailable: ros.IResolvable | string;
    /**
     * Attribute IndexLevel: The index level.
     */
    readonly attrIndexLevel: ros.IResolvable | string;
    /**
     * Attribute IndexUpdateTime: The time when the index was updated.
     */
    readonly attrIndexUpdateTime: ros.IResolvable | string;
    /**
     * Attribute LatestReplicationTime: The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrLatestReplicationTime: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the backup vault.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault.
     */
    readonly attrRedundancyType: ros.IResolvable | string;
    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
     */
    readonly attrReplication: ros.IResolvable | string;
    /**
     * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    readonly attrReplicationProgress: ros.IResolvable | string;
    /**
     * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
     */
    readonly attrReplicationSourceRegionId: ros.IResolvable | string;
    /**
     * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    readonly attrReplicationSourceVaultId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    readonly attrRetention: ros.IResolvable | string;
    /**
     * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    readonly attrSearchEnabled: ros.IResolvable | string;
    /**
     * Attribute SourceTypes: The data source types of the backup vault.
     */
    readonly attrSourceTypes: ros.IResolvable | string;
    /**
     * Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    readonly attrStorageSize: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the backup vault.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TrialInfo: The free trial information.
     */
    readonly attrTrialInfo: ros.IResolvable | string;
    /**
     * Attribute UpdatedTime: The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrUpdatedTime: ros.IResolvable | string;
    /**
     * Attribute VaultId: The ID of the backup vault.
     */
    readonly attrVaultId: ros.IResolvable | string;
    /**
     * Attribute VaultName: The name of the backup vault.
     */
    readonly attrVaultName: ros.IResolvable | string;
    /**
     * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.
     */
    readonly attrVaultStatusMessage: ros.IResolvable | string;
    /**
     * Attribute VaultStorageClass: Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    readonly attrVaultStorageClass: ros.IResolvable | string;
    /**
     * Attribute VaultType: The type of the backup vault.
     */
    readonly attrVaultType: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::HBR::Vault`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVault`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
 */
export declare class Vault extends ros.Resource implements IVault {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VaultProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    readonly attrBackupPlanStatistics: ros.IResolvable | string;
    /**
     * Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    readonly attrBytesDone: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The creation time of the backup vault.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    readonly attrDedup: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the backup vault.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    readonly attrIndexAvailable: ros.IResolvable | string;
    /**
     * Attribute IndexLevel: The index level.
     */
    readonly attrIndexLevel: ros.IResolvable | string;
    /**
     * Attribute IndexUpdateTime: The time when the index was updated.
     */
    readonly attrIndexUpdateTime: ros.IResolvable | string;
    /**
     * Attribute LatestReplicationTime: The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrLatestReplicationTime: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The payment type of the backup vault.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault.
     */
    readonly attrRedundancyType: ros.IResolvable | string;
    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
     */
    readonly attrReplication: ros.IResolvable | string;
    /**
     * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    readonly attrReplicationProgress: ros.IResolvable | string;
    /**
     * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
     */
    readonly attrReplicationSourceRegionId: ros.IResolvable | string;
    /**
     * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    readonly attrReplicationSourceVaultId: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    readonly attrRetention: ros.IResolvable | string;
    /**
     * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    readonly attrSearchEnabled: ros.IResolvable | string;
    /**
     * Attribute SourceTypes: The data source types of the backup vault.
     */
    readonly attrSourceTypes: ros.IResolvable | string;
    /**
     * Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    readonly attrStorageSize: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the backup vault.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute TrialInfo: The free trial information.
     */
    readonly attrTrialInfo: ros.IResolvable | string;
    /**
     * Attribute UpdatedTime: The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrUpdatedTime: ros.IResolvable | string;
    /**
     * Attribute VaultId: The ID of the backup vault.
     */
    readonly attrVaultId: ros.IResolvable | string;
    /**
     * Attribute VaultName: The name of the backup vault.
     */
    readonly attrVaultName: ros.IResolvable | string;
    /**
     * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.
     */
    readonly attrVaultStatusMessage: ros.IResolvable | string;
    /**
     * Attribute VaultStorageClass: Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    readonly attrVaultStorageClass: ros.IResolvable | string;
    /**
     * Attribute VaultType: The type of the backup vault.
     */
    readonly attrVaultType: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VaultProps, enableResourcePropertyConstraint?: boolean);
}
