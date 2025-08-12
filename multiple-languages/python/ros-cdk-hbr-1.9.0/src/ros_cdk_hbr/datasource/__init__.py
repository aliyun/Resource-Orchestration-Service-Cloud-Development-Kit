import abc
import builtins
import datetime
import enum
import typing

import jsii
import publication
import typing_extensions

from typeguard import check_type

from .._jsii import *

import ros_cdk_core as _ros_cdk_core_7adfd82f


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.datasource.IVault")
class IVault(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Vault``.'''

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BytesDone: The amount of data that is backed up.

        Unit: bytes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dedup: Indicates whether the deduplication feature is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexAvailable: Indicates whether indexes are available.

        Indexes are available when they are not being updated.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexLevel: The index level.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexUpdateTime: The time when the index was updated.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestReplicationTime: The time when the last remote backup was synchronized.

        The value is a UNIX timestamp. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RedundancyType: The data redundancy type of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replication: Indicates whether the backup vault is a remote backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.

        This parameter is valid only for remote backup vaults.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Retention: The retention period of the backup vault.

        Unit: days.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchEnabled: Indicates whether the backup search feature is enabled.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceTypes: The data source types of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The usage of the backup vault.

        Unit: bytes.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrialInfo: The free trial information.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedTime: The time when the backup vault was updated.

        The value is a UNIX timestamp. Unit: seconds.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: The name of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.

        This parameter is valid only for remote backup vaults.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStorageClass: Backup repository storage type.

        The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultType: The type of the backup vault.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultProps":
        ...


class _IVaultProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Vault``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.datasource.IVault"

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanStatistics"))

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BytesDone: The amount of data that is backed up.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBytesDone"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dedup: Indicates whether the deduplication feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedup"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexAvailable: Indicates whether indexes are available.

        Indexes are available when they are not being updated.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexAvailable"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexLevel: The index level.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexUpdateTime: The time when the index was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestReplicationTime: The time when the last remote backup was synchronized.

        The value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestReplicationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RedundancyType: The data redundancy type of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRedundancyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replication: Indicates whether the backup vault is a remote backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplication"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.

        This parameter is valid only for remote backup vaults.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Retention: The retention period of the backup vault.

        Unit: days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetention"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchEnabled: Indicates whether the backup search feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceTypes: The data source types of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The usage of the backup vault.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrialInfo: The free trial information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrialInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedTime: The time when the backup vault was updated.

        The value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: The name of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.

        This parameter is valid only for remote backup vaults.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStorageClass: Backup repository storage type.

        The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultType: The type of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultProps":
        return typing.cast("VaultProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVault).__jsii_proxy_class__ = lambda : _IVaultProxy


@jsii.interface(jsii_type="@alicloud/ros-cdk-hbr.datasource.IVaults")
class IVaults(_ros_cdk_core_7adfd82f.IResource, typing_extensions.Protocol):
    '''Represents a ``Vaults``.'''

    @builtins.property
    @jsii.member(jsii_name="attrVaultIds")
    def attr_vault_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultIds: The list of vault IDs.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="attrVaults")
    def attr_vaults(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vaults: The list of vaults.'''
        ...

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultsProps":
        ...


class _IVaultsProxy(
    jsii.proxy_for(_ros_cdk_core_7adfd82f.IResource), # type: ignore[misc]
):
    '''Represents a ``Vaults``.'''

    __jsii_type__: typing.ClassVar[str] = "@alicloud/ros-cdk-hbr.datasource.IVaults"

    @builtins.property
    @jsii.member(jsii_name="attrVaultIds")
    def attr_vault_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultIds: The list of vault IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVaults")
    def attr_vaults(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vaults: The list of vaults.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaults"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultsProps":
        return typing.cast("VaultsProps", jsii.get(self, "props"))

# Adding a "__jsii_proxy_class__(): typing.Type" function to the interface
typing.cast(typing.Any, IVaults).__jsii_proxy_class__ = lambda : _IVaultsProxy


class RosVault(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.datasource.RosVault",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::HBR::Vault``, which is used to query the information about a backup vault.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Vault`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7a414030372a214d99c7ecd07775bc8adbdfa559458ab8b798b5d44d12bae379)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__c89af8bb6a4d256b5b25cc7e69496c57a5b58427083e7663f053a73c3ba62fe1)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BackupPlanStatistics: The statistics of backup plans that use the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBackupPlanStatistics"))

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: BytesDone: The amount of data that is backed up. Unit: bytes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrBytesDone"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: CreateTime: The creation time of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Dedup: Indicates whether the deduplication feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDedup"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Description: The description of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndexAvailable: Indicates whether indexes are available. Indexes are available when they are not being updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexAvailable"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndexLevel: The index level.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: IndexUpdateTime: The time when the index was updated.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrIndexUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: LatestReplicationTime: The time when the last remote backup was synchronized. The value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrLatestReplicationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: PaymentType: The payment type of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: RedundancyType: The data redundancy type of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRedundancyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Replication: Indicates whether the backup vault is a remote backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplication"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationSourceRegionId: The ID of the region in which the source vault resides. This parameter is valid only for remote backup vaults.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrReplicationSourceVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: ResourceGroupId: The ID of the resource group.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Retention: The retention period of the backup vault. Unit: days.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrRetention"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SearchEnabled: Indicates whether the backup search feature is enabled.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSearchEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: SourceTypes: The data source types of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrSourceTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: StorageSize: The usage of the backup vault. Unit: bytes.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Tags: The tags of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: TrialInfo: The free trial information.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrTrialInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: UpdatedTime: The time when the backup vault was updated. The value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrUpdatedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultId: The ID of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultName: The name of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state. This parameter is valid only for remote backup vaults.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultStorageClass: Backup repository storage type. The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultType: The type of the backup vault.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultType"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__7f964802059472eff974921f8b0f22bc79a24bb786685795232a25a25f174ca0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of the backup vault.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__3d5762f9e7ac2177b94fea97eaa44e9e9d1dabbf9900d2bf38f561caa7e85cd2)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__90c5b5427ac144fa40ad7fd62368bc16c92ff88507cc7fc86cb77835b08730ed)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.datasource.RosVaultProps",
    jsii_struct_bases=[],
    name_mapping={"vault_id": "vaultId", "refresh_options": "refreshOptions"},
)
class RosVaultProps:
    def __init__(
        self,
        *,
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault

        :param vault_id: 
        :param refresh_options: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__e451d220f68889b1d0bc4b005396994689ac1477bed9d0b101fd9ecda02f9c03)
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vault_id": vault_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''
        :Property: vaultId: The ID of the backup vault.
        '''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


class RosVaults(
    _ros_cdk_core_7adfd82f.RosResource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.datasource.RosVaults",
):
    '''This class is a base encapsulation around the ROS resource type ``DATASOURCE::HBR::Vaults``, which is used to query the basic information about backup vaults.

    :Note:

    This class does not contain additional functions, so it is recommended to use the ``Vaults`` class instead of this class for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["RosVaultsProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: builtins.bool,
    ) -> None:
        '''
        :param scope: - scope in which this resource is defined.
        :param id: - scoped id of the resource.
        :param props: - resource properties.
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__36fd3d8f5a1cb8ef2cf1f73b7bcf903a8040c80c9c4f07bf984be7bfb6d7b2a9)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @jsii.member(jsii_name="renderProperties")
    def _render_properties(
        self,
        props: typing.Mapping[builtins.str, typing.Any],
    ) -> typing.Mapping[builtins.str, typing.Any]:
        '''
        :param props: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__74d1502b5b837412dfe3115a8aff4d9c165636f0c6daa1b25bd2d3aeb4588bab)
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.invoke(self, "renderProperties", [props]))

    @jsii.python.classproperty
    @jsii.member(jsii_name="ROS_RESOURCE_TYPE_NAME")
    def ROS_RESOURCE_TYPE_NAME(cls) -> builtins.str:
        '''The resource type name for this resource class.'''
        return typing.cast(builtins.str, jsii.sget(cls, "ROS_RESOURCE_TYPE_NAME"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultIds")
    def attr_vault_ids(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: VaultIds: The list of vault IDs.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaultIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVaults")
    def attr_vaults(self) -> _ros_cdk_core_7adfd82f.IResolvable:
        '''
        :Attribute: Vaults: The list of vaults.
        '''
        return typing.cast(_ros_cdk_core_7adfd82f.IResolvable, jsii.get(self, "attrVaults"))

    @builtins.property
    @jsii.member(jsii_name="rosProperties")
    def _ros_properties(self) -> typing.Mapping[builtins.str, typing.Any]:
        return typing.cast(typing.Mapping[builtins.str, typing.Any], jsii.get(self, "rosProperties"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @enable_resource_property_constraint.setter
    def enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__ed313cc6219ac7beb1fb18959826bf18496775806bdb4bb9c3c93165dfb5a103)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="refreshOptions")
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "refreshOptions"))

    @refresh_options.setter
    def refresh_options(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__85b637a2d8089a40718c24da196ea2b27cef7900aaf0931a26ce44fbabf30de0)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "refreshOptions", value)

    @builtins.property
    @jsii.member(jsii_name="vaultId")
    def vault_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultId: VaultId.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vaultId"))

    @vault_id.setter
    def vault_id(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d09633ca823dbcda2d5e9702bdda6f2091ca246d9a743c7e712e17b87974b807)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultId", value)

    @builtins.property
    @jsii.member(jsii_name="vaultType")
    def vault_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vaultType: Vault type. Value

        - **STANDARD**, which indicates a common backup vault.
        - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], jsii.get(self, "vaultType"))

    @vault_type.setter
    def vault_type(
        self,
        value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
    ) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__420e826dfbac833b7333aa2a95b33643cd0bbac7a688f39f344c9a96eecb6823)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "vaultType", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.datasource.RosVaultsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "vault_id": "vaultId",
        "vault_type": "vaultType",
    },
)
class RosVaultsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``RosVaults``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults

        :param refresh_options: 
        :param vault_id: 
        :param vault_type: 
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__d713cd7d2e7d3553124bc02a9bbccb2e21512c91d7da8472f00cdb5e424aafab)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument vault_type", value=vault_type, expected_type=type_hints["vault_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if vault_id is not None:
            self._values["vault_id"] = vault_id
        if vault_type is not None:
            self._values["vault_type"] = vault_type

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
        Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property: vaultId: VaultId.
        '''
        result = self._values.get("vault_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''
        :Property:

        vaultType: Vault type. Value

        - **STANDARD**, which indicates a common backup vault.
        - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        result = self._values.get("vault_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "RosVaultsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVault)
class Vault(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.datasource.Vault",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::HBR::Vault``, which is used to query the information about a backup vault.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVault``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Union["VaultProps", typing.Dict[builtins.str, typing.Any]],
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f7bed1b8eed29b0cc355374dd331bf9bffac9960fff92c12768d6233feccaaf8)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrBackupPlanStatistics")
    def attr_backup_plan_statistics(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BackupPlanStatistics: The statistics of backup plans that use the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBackupPlanStatistics"))

    @builtins.property
    @jsii.member(jsii_name="attrBytesDone")
    def attr_bytes_done(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute BytesDone: The amount of data that is backed up.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrBytesDone"))

    @builtins.property
    @jsii.member(jsii_name="attrCreateTime")
    def attr_create_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute CreateTime: The creation time of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrCreateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrDedup")
    def attr_dedup(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Dedup: Indicates whether the deduplication feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDedup"))

    @builtins.property
    @jsii.member(jsii_name="attrDescription")
    def attr_description(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Description: The description of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrDescription"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexAvailable")
    def attr_index_available(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexAvailable: Indicates whether indexes are available.

        Indexes are available when they are not being updated.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexAvailable"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexLevel")
    def attr_index_level(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexLevel: The index level.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexLevel"))

    @builtins.property
    @jsii.member(jsii_name="attrIndexUpdateTime")
    def attr_index_update_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute IndexUpdateTime: The time when the index was updated.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrIndexUpdateTime"))

    @builtins.property
    @jsii.member(jsii_name="attrLatestReplicationTime")
    def attr_latest_replication_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute LatestReplicationTime: The time when the last remote backup was synchronized.

        The value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrLatestReplicationTime"))

    @builtins.property
    @jsii.member(jsii_name="attrPaymentType")
    def attr_payment_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute PaymentType: The payment type of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrPaymentType"))

    @builtins.property
    @jsii.member(jsii_name="attrRedundancyType")
    def attr_redundancy_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute RedundancyType: The data redundancy type of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRedundancyType"))

    @builtins.property
    @jsii.member(jsii_name="attrReplication")
    def attr_replication(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Replication: Indicates whether the backup vault is a remote backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplication"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationProgress")
    def attr_replication_progress(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationProgress: The progress of data synchronization from the backup vault to the mirror vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationProgress"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceRegionId")
    def attr_replication_source_region_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceRegionId: The ID of the region in which the source vault resides.

        This parameter is valid only for remote backup vaults.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceRegionId"))

    @builtins.property
    @jsii.member(jsii_name="attrReplicationSourceVaultId")
    def attr_replication_source_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ReplicationSourceVaultId: The ID of the source vault that corresponds to the remote backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrReplicationSourceVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrResourceGroupId")
    def attr_resource_group_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute ResourceGroupId: The ID of the resource group.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrResourceGroupId"))

    @builtins.property
    @jsii.member(jsii_name="attrRetention")
    def attr_retention(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Retention: The retention period of the backup vault.

        Unit: days.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrRetention"))

    @builtins.property
    @jsii.member(jsii_name="attrSearchEnabled")
    def attr_search_enabled(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SearchEnabled: Indicates whether the backup search feature is enabled.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSearchEnabled"))

    @builtins.property
    @jsii.member(jsii_name="attrSourceTypes")
    def attr_source_types(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute SourceTypes: The data source types of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrSourceTypes"))

    @builtins.property
    @jsii.member(jsii_name="attrStorageSize")
    def attr_storage_size(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute StorageSize: The usage of the backup vault.

        Unit: bytes.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrStorageSize"))

    @builtins.property
    @jsii.member(jsii_name="attrTags")
    def attr_tags(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Tags: The tags of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTags"))

    @builtins.property
    @jsii.member(jsii_name="attrTrialInfo")
    def attr_trial_info(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute TrialInfo: The free trial information.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrTrialInfo"))

    @builtins.property
    @jsii.member(jsii_name="attrUpdatedTime")
    def attr_updated_time(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute UpdatedTime: The time when the backup vault was updated.

        The value is a UNIX timestamp. Unit: seconds.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrUpdatedTime"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultId")
    def attr_vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultId: The ID of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultId"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultName")
    def attr_vault_name(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultName: The name of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultName"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStatusMessage")
    def attr_vault_status_message(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStatusMessage: The status message that is returned when the backup vault is in the ERROR state.

        This parameter is valid only for remote backup vaults.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStatusMessage"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultStorageClass")
    def attr_vault_storage_class(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultStorageClass: Backup repository storage type.

        The value is only **STANDARD**, which indicates STANDARD storage.
        '''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultStorageClass"))

    @builtins.property
    @jsii.member(jsii_name="attrVaultType")
    def attr_vault_type(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultType: The type of the backup vault.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultType"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultProps":
        return typing.cast("VaultProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__133ef332cd8169b7aff2cedbab552497b62b628101b3fc85fd6ac9edb1910a9e)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b54678a5cfdc2cb4176279dd946ca45b7ea903f83bb428c07af9f10e0a048558)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__a67c9adf0779e36222fe135716704ee5c103cda7e127e2bc1b7ccd81289f3605)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.datasource.VaultProps",
    jsii_struct_bases=[],
    name_mapping={"vault_id": "vaultId", "refresh_options": "refreshOptions"},
)
class VaultProps:
    def __init__(
        self,
        *,
        vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Vault``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vault

        :param vault_id: Property vaultId: The ID of the backup vault.
        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__22c9019bb19655125e1b824040c08efe8086f112ac763b389f9efc5f27d637c1)
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
        self._values: typing.Dict[builtins.str, typing.Any] = {
            "vault_id": vault_id,
        }
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Property vaultId: The ID of the backup vault.'''
        result = self._values.get("vault_id")
        assert result is not None, "Required property 'vault_id' is missing"
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], result)

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VaultProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


@jsii.implements(IVaults)
class Vaults(
    _ros_cdk_core_7adfd82f.Resource,
    metaclass=jsii.JSIIMeta,
    jsii_type="@alicloud/ros-cdk-hbr.datasource.Vaults",
):
    '''This class encapsulates and extends the ROS resource type ``DATASOURCE::HBR::Vaults``, which is used to query the basic information about backup vaults.

    :Note:

    This class may have some new functions to facilitate development, so it is recommended to use this class instead of ``RosVaults``for a more convenient development experience.
    See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults
    '''

    def __init__(
        self,
        scope: _ros_cdk_core_7adfd82f.Construct,
        id: builtins.str,
        props: typing.Optional[typing.Union["VaultsProps", typing.Dict[builtins.str, typing.Any]]] = None,
        enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
    ) -> None:
        '''Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.

        :param scope: -
        :param id: -
        :param props: -
        :param enable_resource_property_constraint: -
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__b4a5b0d9ebb21c59802115a8130a4d124184ff0747cf8de60866c6409904583c)
            check_type(argname="argument scope", value=scope, expected_type=type_hints["scope"])
            check_type(argname="argument id", value=id, expected_type=type_hints["id"])
            check_type(argname="argument props", value=props, expected_type=type_hints["props"])
            check_type(argname="argument enable_resource_property_constraint", value=enable_resource_property_constraint, expected_type=type_hints["enable_resource_property_constraint"])
        jsii.create(self.__class__, self, [scope, id, props, enable_resource_property_constraint])

    @builtins.property
    @jsii.member(jsii_name="attrVaultIds")
    def attr_vault_ids(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute VaultIds: The list of vault IDs.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaultIds"))

    @builtins.property
    @jsii.member(jsii_name="attrVaults")
    def attr_vaults(
        self,
    ) -> typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]:
        '''Attribute Vaults: The list of vaults.'''
        return typing.cast(typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable], jsii.get(self, "attrVaults"))

    @builtins.property
    @jsii.member(jsii_name="props")
    def props(self) -> "VaultsProps":
        return typing.cast("VaultsProps", jsii.get(self, "props"))

    @builtins.property
    @jsii.member(jsii_name="enableResourcePropertyConstraint")
    def _enable_resource_property_constraint(self) -> builtins.bool:
        return typing.cast(builtins.bool, jsii.get(self, "enableResourcePropertyConstraint"))

    @_enable_resource_property_constraint.setter
    def _enable_resource_property_constraint(self, value: builtins.bool) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__00ad60f775e620f56d3d78e07770aeb3e33e24c330a7053553ff7cd7492d7e70)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "enableResourcePropertyConstraint", value)

    @builtins.property
    @jsii.member(jsii_name="id")
    def _id(self) -> builtins.str:
        return typing.cast(builtins.str, jsii.get(self, "id"))

    @_id.setter
    def _id(self, value: builtins.str) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__fc8c6ca3cfdb0bacb6ec07db4552db390232664f411448fbc2ae6f02a95615fd)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "id", value)

    @builtins.property
    @jsii.member(jsii_name="scope")
    def _scope(self) -> _ros_cdk_core_7adfd82f.Construct:
        return typing.cast(_ros_cdk_core_7adfd82f.Construct, jsii.get(self, "scope"))

    @_scope.setter
    def _scope(self, value: _ros_cdk_core_7adfd82f.Construct) -> None:
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__81f5a7e50a39eade7a79213d7ebdb55d5cbcdace9923a816d31afe6223f5318a)
            check_type(argname="argument value", value=value, expected_type=type_hints["value"])
        jsii.set(self, "scope", value)


@jsii.data_type(
    jsii_type="@alicloud/ros-cdk-hbr.datasource.VaultsProps",
    jsii_struct_bases=[],
    name_mapping={
        "refresh_options": "refreshOptions",
        "vault_id": "vaultId",
        "vault_type": "vaultType",
    },
)
class VaultsProps:
    def __init__(
        self,
        *,
        refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
        vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    ) -> None:
        '''Properties for defining a ``Vaults``.

        See https://www.alibabacloud.com/help/ros/developer-reference/datasource-hbr-vaults

        :param refresh_options: Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values: - Never: Never refresh the datasource resource when the stack is updated. - Always: Always refresh the datasource resource when the stack is updated. Default is Never.
        :param vault_id: Property vaultId: VaultId.
        :param vault_type: Property vaultType: Vault type. Value - **STANDARD**, which indicates a common backup vault. - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        if __debug__:
            type_hints = typing.get_type_hints(_typecheckingstub__f72cccc6308e682825f0211b1b7869b05210124bbf2de7087eb5887118dae5c4)
            check_type(argname="argument refresh_options", value=refresh_options, expected_type=type_hints["refresh_options"])
            check_type(argname="argument vault_id", value=vault_id, expected_type=type_hints["vault_id"])
            check_type(argname="argument vault_type", value=vault_type, expected_type=type_hints["vault_type"])
        self._values: typing.Dict[builtins.str, typing.Any] = {}
        if refresh_options is not None:
            self._values["refresh_options"] = refresh_options
        if vault_id is not None:
            self._values["vault_id"] = vault_id
        if vault_type is not None:
            self._values["vault_type"] = vault_type

    @builtins.property
    def refresh_options(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.

        Valid values:

        - Never: Never refresh the datasource resource when the stack is updated.
        - Always: Always refresh the datasource resource when the stack is updated.
          Default is Never.
        '''
        result = self._values.get("refresh_options")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_id(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vaultId: VaultId.'''
        result = self._values.get("vault_id")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    @builtins.property
    def vault_type(
        self,
    ) -> typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]]:
        '''Property vaultType: Vault type.

        Value

        - **STANDARD**, which indicates a common backup vault.
        - **OTS_BACKUP**, indicating OTS backup vault.
        '''
        result = self._values.get("vault_type")
        return typing.cast(typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]], result)

    def __eq__(self, rhs: typing.Any) -> builtins.bool:
        return isinstance(rhs, self.__class__) and rhs._values == self._values

    def __ne__(self, rhs: typing.Any) -> builtins.bool:
        return not (rhs == self)

    def __repr__(self) -> str:
        return "VaultsProps(%s)" % ", ".join(
            k + "=" + repr(v) for k, v in self._values.items()
        )


__all__ = [
    "IVault",
    "IVaults",
    "RosVault",
    "RosVaultProps",
    "RosVaults",
    "RosVaultsProps",
    "Vault",
    "VaultProps",
    "Vaults",
    "VaultsProps",
]

publication.publish()

def _typecheckingstub__7a414030372a214d99c7ecd07775bc8adbdfa559458ab8b798b5d44d12bae379(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__c89af8bb6a4d256b5b25cc7e69496c57a5b58427083e7663f053a73c3ba62fe1(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__7f964802059472eff974921f8b0f22bc79a24bb786685795232a25a25f174ca0(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__3d5762f9e7ac2177b94fea97eaa44e9e9d1dabbf9900d2bf38f561caa7e85cd2(
    value: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__90c5b5427ac144fa40ad7fd62368bc16c92ff88507cc7fc86cb77835b08730ed(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__e451d220f68889b1d0bc4b005396994689ac1477bed9d0b101fd9ecda02f9c03(
    *,
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__36fd3d8f5a1cb8ef2cf1f73b7bcf903a8040c80c9c4f07bf984be7bfb6d7b2a9(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[RosVaultsProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__74d1502b5b837412dfe3115a8aff4d9c165636f0c6daa1b25bd2d3aeb4588bab(
    props: typing.Mapping[builtins.str, typing.Any],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__ed313cc6219ac7beb1fb18959826bf18496775806bdb4bb9c3c93165dfb5a103(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__85b637a2d8089a40718c24da196ea2b27cef7900aaf0931a26ce44fbabf30de0(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d09633ca823dbcda2d5e9702bdda6f2091ca246d9a743c7e712e17b87974b807(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__420e826dfbac833b7333aa2a95b33643cd0bbac7a688f39f344c9a96eecb6823(
    value: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]],
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__d713cd7d2e7d3553124bc02a9bbccb2e21512c91d7da8472f00cdb5e424aafab(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f7bed1b8eed29b0cc355374dd331bf9bffac9960fff92c12768d6233feccaaf8(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Union[VaultProps, typing.Dict[builtins.str, typing.Any]],
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__133ef332cd8169b7aff2cedbab552497b62b628101b3fc85fd6ac9edb1910a9e(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b54678a5cfdc2cb4176279dd946ca45b7ea903f83bb428c07af9f10e0a048558(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__a67c9adf0779e36222fe135716704ee5c103cda7e127e2bc1b7ccd81289f3605(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__22c9019bb19655125e1b824040c08efe8086f112ac763b389f9efc5f27d637c1(
    *,
    vault_id: typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable],
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__b4a5b0d9ebb21c59802115a8130a4d124184ff0747cf8de60866c6409904583c(
    scope: _ros_cdk_core_7adfd82f.Construct,
    id: builtins.str,
    props: typing.Optional[typing.Union[VaultsProps, typing.Dict[builtins.str, typing.Any]]] = None,
    enable_resource_property_constraint: typing.Optional[builtins.bool] = None,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__00ad60f775e620f56d3d78e07770aeb3e33e24c330a7053553ff7cd7492d7e70(
    value: builtins.bool,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__fc8c6ca3cfdb0bacb6ec07db4552db390232664f411448fbc2ae6f02a95615fd(
    value: builtins.str,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__81f5a7e50a39eade7a79213d7ebdb55d5cbcdace9923a816d31afe6223f5318a(
    value: _ros_cdk_core_7adfd82f.Construct,
) -> None:
    """Type checking stubs"""
    pass

def _typecheckingstub__f72cccc6308e682825f0211b1b7869b05210124bbf2de7087eb5887118dae5c4(
    *,
    refresh_options: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_id: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
    vault_type: typing.Optional[typing.Union[builtins.str, _ros_cdk_core_7adfd82f.IResolvable]] = None,
) -> None:
    """Type checking stubs"""
    pass
