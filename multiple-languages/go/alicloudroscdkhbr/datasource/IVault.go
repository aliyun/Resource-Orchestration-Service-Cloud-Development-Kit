package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkhbr/datasource/internal"
)

// Represents a `Vault`.
type IVault interface {
	alicloudroscdkcore.IResource
	// Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.
	AttrBackupPlanStatistics() interface{}
	// Attribute BytesDone: The amount of data that is backed up.
	//
	// Unit: bytes.
	AttrBytesDone() interface{}
	// Attribute CreateTime: The creation time of the backup vault.
	AttrCreateTime() interface{}
	// Attribute Dedup: Indicates whether the deduplication feature is enabled.
	AttrDedup() interface{}
	// Attribute Description: The description of the backup vault.
	AttrDescription() interface{}
	// Attribute IndexAvailable: Indicates whether indexes are available.
	//
	// Indexes are available when they are not being updated.
	AttrIndexAvailable() interface{}
	// Attribute IndexLevel: The index level.
	AttrIndexLevel() interface{}
	// Attribute IndexUpdateTime: The time when the index was updated.
	AttrIndexUpdateTime() interface{}
	// Attribute LatestReplicationTime: The time when the last remote backup was synchronized.
	//
	// The value is a UNIX timestamp. Unit: seconds.
	AttrLatestReplicationTime() interface{}
	// Attribute PaymentType: The payment type of the backup vault.
	AttrPaymentType() interface{}
	// Attribute RedundancyType: The data redundancy type of the backup vault.
	AttrRedundancyType() interface{}
	// Attribute Replication: Indicates whether the backup vault is a remote backup vault.
	AttrReplication() interface{}
	// Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
	AttrReplicationProgress() interface{}
	// Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.
	//
	// This parameter is valid only for remote backup vaults.
	AttrReplicationSourceRegionId() interface{}
	// Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
	AttrReplicationSourceVaultId() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Retention: The retention period of the backup vault.
	//
	// Unit: days.
	AttrRetention() interface{}
	// Attribute SearchEnabled: Indicates whether the backup search feature is enabled.
	AttrSearchEnabled() interface{}
	// Attribute SourceTypes: The data source types of the backup vault.
	AttrSourceTypes() interface{}
	// Attribute StorageSize: The usage of the backup vault.
	//
	// Unit: bytes.
	AttrStorageSize() interface{}
	// Attribute Tags: The tags of the backup vault.
	AttrTags() interface{}
	// Attribute TrialInfo: The free trial information.
	AttrTrialInfo() interface{}
	// Attribute UpdatedTime: The time when the backup vault was updated.
	//
	// The value is a UNIX timestamp. Unit: seconds.
	AttrUpdatedTime() interface{}
	// Attribute VaultId: The ID of the backup vault.
	AttrVaultId() interface{}
	// Attribute VaultName: The name of the backup vault.
	AttrVaultName() interface{}
	// Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.
	//
	// This parameter is valid only for remote backup vaults.
	AttrVaultStatusMessage() interface{}
	// Attribute VaultStorageClass: Backup repository storage type.
	//
	// The value is only **STANDARD**, which indicates STANDARD storage.
	AttrVaultStorageClass() interface{}
	// Attribute VaultType: The type of the backup vault.
	AttrVaultType() interface{}
	Props() *VaultProps
}

// The jsii proxy for IVault
type jsiiProxy_IVault struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVault) AttrBackupPlanStatistics() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupPlanStatistics",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrBytesDone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBytesDone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrDedup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrIndexAvailable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIndexAvailable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrIndexLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIndexLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrIndexUpdateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIndexUpdateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrLatestReplicationTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestReplicationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrRedundancyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRedundancyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrReplication() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplication",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrReplicationProgress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicationProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrReplicationSourceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicationSourceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrReplicationSourceVaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicationSourceVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrRetention() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRetention",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrSearchEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSearchEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrSourceTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSourceTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrStorageSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrTrialInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrialInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrUpdatedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrVaultId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrVaultName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrVaultStatusMessage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultStatusMessage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrVaultStorageClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultStorageClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) AttrVaultType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVaultType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVault) Props() *VaultProps {
	var returns *VaultProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

