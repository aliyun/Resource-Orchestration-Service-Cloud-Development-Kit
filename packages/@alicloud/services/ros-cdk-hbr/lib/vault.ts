import * as ros from '@alicloud/ros-cdk-core';
import { RosVault } from './hbr.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVault as VaultProperty };

/**
 * Properties for defining a `Vault`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
export interface VaultProps {

    /**
     * Property vaultName: The name of the backup vault. The name must be 1 to 64 characters in length.
     */
    readonly vaultName: string | ros.IResolvable;

    /**
     * Property vaultType: The type of the backup vault. Valid values:
     * - **STANDARD**: standard backup vault.
     * - **OTS_BACKUP**: backup vault for Tablestore.
     */
    readonly vaultType: string | ros.IResolvable;

    /**
     * Property description: The description of the backup vault. The description must be 0 to 255 characters in length.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property encryptType: The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS_BACKUP. 
     * Valid values:- **HBR_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
     * - **KMS**: The source data is encrypted by using Key Management Service (KMS).
     */
    readonly encryptType?: string | ros.IResolvable;

    /**
     * Property kmsKeyId: The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.
     */
    readonly kmsKeyId?: string | ros.IResolvable;

    /**
     * Property redundancyType: The data redundancy type of the backup vault. Valid values:
     * - **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
     * - **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    readonly redundancyType?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of The resource attribute field representing the resource tag..
     */
    readonly tags?: RosVault.TagsProperty[];

    /**
     * Property vaultStorageClass: The storage type of the backup vault. The value is only **STANDARD**, which indicates STANDARD storage.
     */
    readonly vaultStorageClass?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::HBR::Vault`, which is used to create a backup vault.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVault`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-vault
 */
export class Vault extends ros.Resource {

    /**
     * Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
     */
    public readonly attrBackupPlanStatistics: ros.IResolvable;

    /**
     * Attribute BytesDone: The amount of data that is backed up. Unit: bytes.
     */
    public readonly attrBytesDone: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the backup vault was created. This value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Dedup: Indicates whether the deduplication feature is enabled.
     */
    public readonly attrDedup: ros.IResolvable;

    /**
     * Attribute Description: The description of the backup vault.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
     */
    public readonly attrIndexAvailable: ros.IResolvable;

    /**
     * Attribute IndexLevel: The index level.
- **OFF**: No indexes are created.
- **META**: Metadata indexes are created.
- **ALL**: Full-text indexes are created.
     */
    public readonly attrIndexLevel: ros.IResolvable;

    /**
     * Attribute IndexUpdateTime: The time when the index was updated.
     */
    public readonly attrIndexUpdateTime: ros.IResolvable;

    /**
     * Attribute LatestReplicationTime: The time when the last remote backup was synchronized. This value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrLatestReplicationTime: ros.IResolvable;

    /**
     * Attribute PaymentType: PaymentType.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute RedundancyType: The data redundancy type of the backup vault. Valid values:
- **LRS**: Locally redundant storage (LRS) is enabled for the backup vault. HBR stores the copies of each object on multiple devices of different facilities in the same zone. This way, HBR ensures data durability and availability even if hardware failures occur.
- **ZRS**: Zone-redundant storage (ZRS) is enabled for the backup vault. HBR uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.
     */
    public readonly attrRedundancyType: ros.IResolvable;

    /**
     * Attribute Replication: Indicates whether the backup vault is a remote backup vault. Valid values:
- **true**: The backup vault is a remote backup vault.
- **false**: The backup vault is an on-premises backup vault.
     */
    public readonly attrReplication: ros.IResolvable;

    /**
     * Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
     */
    public readonly attrReplicationProgress: ros.IResolvable;

    /**
     * Attribute ReplicationSourceRegionId: The ID of the region where the remote backup vault resides.
     */
    public readonly attrReplicationSourceRegionId: ros.IResolvable;

    /**
     * Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
     */
    public readonly attrReplicationSourceVaultId: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Retention: The retention period of the backup vault. Unit: days.
     */
    public readonly attrRetention: ros.IResolvable;

    /**
     * Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
     */
    public readonly attrSearchEnabled: ros.IResolvable;

    /**
     * Attribute SourceTypes: The information about the data source.
     */
    public readonly attrSourceTypes: ros.IResolvable;

    /**
     * Attribute StorageSize: The usage of the backup vault. Unit: bytes.
     */
    public readonly attrStorageSize: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the backup vault.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute TrialInfo: The free trial information.
     */
    public readonly attrTrialInfo: ros.IResolvable;

    /**
     * Attribute UpdatedTime: The time when the backup vault was updated. This value is a UNIX timestamp. Unit: seconds.
     */
    public readonly attrUpdatedTime: ros.IResolvable;

    /**
     * Attribute VaultId: The ID of the backup vault.
     */
    public readonly attrVaultId: ros.IResolvable;

    /**
     * Attribute VaultName: The name of the backup vault.
     */
    public readonly attrVaultName: ros.IResolvable;

    /**
     * Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is available only for remote backup vaults. Valid values:
- **UNKNOWN_ERROR*: An unknown error occurs.
- **SOURCE_VAULT_ALREADY_HAS_REPLICATION**: A mirror vault is configured for the source vault.
     */
    public readonly attrVaultStatusMessage: ros.IResolvable;

    /**
     * Attribute VaultStorageClass: The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.
     */
    public readonly attrVaultStorageClass: ros.IResolvable;

    /**
     * Attribute VaultType: The type of the backup vault. Valid value: **STANDARD**, which indicates a standard backup vault.
     */
    public readonly attrVaultType: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VaultProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVault = new RosVault(this, id,  {
            vaultType: props.vaultType,
            description: props.description,
            encryptType: props.encryptType,
            resourceGroupId: props.resourceGroupId,
            kmsKeyId: props.kmsKeyId,
            vaultName: props.vaultName,
            redundancyType: props.redundancyType,
            vaultStorageClass: props.vaultStorageClass,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVault;
        this.attrBackupPlanStatistics = rosVault.attrBackupPlanStatistics;
        this.attrBytesDone = rosVault.attrBytesDone;
        this.attrCreateTime = rosVault.attrCreateTime;
        this.attrDedup = rosVault.attrDedup;
        this.attrDescription = rosVault.attrDescription;
        this.attrIndexAvailable = rosVault.attrIndexAvailable;
        this.attrIndexLevel = rosVault.attrIndexLevel;
        this.attrIndexUpdateTime = rosVault.attrIndexUpdateTime;
        this.attrLatestReplicationTime = rosVault.attrLatestReplicationTime;
        this.attrPaymentType = rosVault.attrPaymentType;
        this.attrRedundancyType = rosVault.attrRedundancyType;
        this.attrReplication = rosVault.attrReplication;
        this.attrReplicationProgress = rosVault.attrReplicationProgress;
        this.attrReplicationSourceRegionId = rosVault.attrReplicationSourceRegionId;
        this.attrReplicationSourceVaultId = rosVault.attrReplicationSourceVaultId;
        this.attrResourceGroupId = rosVault.attrResourceGroupId;
        this.attrRetention = rosVault.attrRetention;
        this.attrSearchEnabled = rosVault.attrSearchEnabled;
        this.attrSourceTypes = rosVault.attrSourceTypes;
        this.attrStorageSize = rosVault.attrStorageSize;
        this.attrTags = rosVault.attrTags;
        this.attrTrialInfo = rosVault.attrTrialInfo;
        this.attrUpdatedTime = rosVault.attrUpdatedTime;
        this.attrVaultId = rosVault.attrVaultId;
        this.attrVaultName = rosVault.attrVaultName;
        this.attrVaultStatusMessage = rosVault.attrVaultStatusMessage;
        this.attrVaultStorageClass = rosVault.attrVaultStorageClass;
        this.attrVaultType = rosVault.attrVaultType;
    }
}
