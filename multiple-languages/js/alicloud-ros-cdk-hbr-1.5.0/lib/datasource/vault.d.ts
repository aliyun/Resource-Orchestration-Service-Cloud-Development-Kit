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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::HBR::Vault`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVault`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
 */
export declare class Vault extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VaultProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    readonly attrBackupPlanStatistics: ros.IResolvable;
    /**
     * Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    readonly attrBytesDone: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the backup vault.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    readonly attrDedup: ros.IResolvable;
    /**
     * Attribute Description: The description of the backup vault.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    readonly attrIndexAvailable: ros.IResolvable;
    /**
     * Attribute IndexLevel: The index level.
     */
    readonly attrIndexLevel: ros.IResolvable;
    /**
     * Attribute IndexUpdateTime: The time when the index was updated.
     */
    readonly attrIndexUpdateTime: ros.IResolvable;
    /**
     * Attribute LatestReplicationTime: The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrLatestReplicationTime: ros.IResolvable;
    /**
     * Attribute PaymentType: The payment type of the backup vault.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault.
     */
    readonly attrRedundancyType: ros.IResolvable;
    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault.
     */
    readonly attrReplication: ros.IResolvable;
    /**
     * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    readonly attrReplicationProgress: ros.IResolvable;
    /**
     * Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
     */
    readonly attrReplicationSourceRegionId: ros.IResolvable;
    /**
     * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    readonly attrReplicationSourceVaultId: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    readonly attrRetention: ros.IResolvable;
    /**
     * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    readonly attrSearchEnabled: ros.IResolvable;
    /**
     * Attribute SourceTypes: The data source types of the backup vault.
     */
    readonly attrSourceTypes: ros.IResolvable;
    /**
     * Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    readonly attrStorageSize: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the backup vault.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute TrialInfo: The free trial information.
     */
    readonly attrTrialInfo: ros.IResolvable;
    /**
     * Attribute UpdatedTime: The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.
     */
    readonly attrUpdatedTime: ros.IResolvable;
    /**
     * Attribute VaultId: The ID of the backup vault.
     */
    readonly attrVaultId: ros.IResolvable;
    /**
     * Attribute VaultName: The name of the backup vault.
     */
    readonly attrVaultName: ros.IResolvable;
    /**
     * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.
     */
    readonly attrVaultStatusMessage: ros.IResolvable;
    /**
     * Attribute VaultStorageClass: Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    readonly attrVaultStorageClass: ros.IResolvable;
    /**
     * Attribute VaultType: The type of the backup vault.
     */
    readonly attrVaultType: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VaultProps, enableResourcePropertyConstraint?: boolean);
}
